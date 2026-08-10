import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;

/**
 * Returns a zoom scale so the 1440px-wide canvas always fills the viewport:
 *   - Smaller viewports  → zoom < 1  (scales down, no horizontal overflow)
 *   - Exact 1440px       → zoom = 1  (design at native size)
 *   - Larger viewports   → zoom > 1  (scales up, fills wide screens, eliminates
 *                                      white gaps beside colored sections)
 */
function useZoomScale() {
  const [scale, setScale] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth / DESIGN_WIDTH : 1
  );

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

/**
 * Resets any accidental horizontal scroll that iOS Safari may introduce
 * after a pinch-to-zoom gesture. Even with CSS zoom (which fixes layout width),
 * a partial gesture can leave window.scrollX > 0.
 *
 * We listen on "scroll" at the capture phase so we catch it before any
 * component's own scroll handler, then snap back to x=0 if it drifted.
 */
function useBlockHorizontalScroll() {
  useEffect(() => {
    const handler = () => {
      if (window.scrollX !== 0) {
        window.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
      }
    };
    window.addEventListener("scroll", handler, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", handler, { capture: true });
  }, []);
}

export function ResponsiveScaler({
  children,
  designHeight: _designHeight,
}: {
  children: React.ReactNode;
  /**
   * Previously required by the iOS TransformScaler fallback to compute
   * the wrapper height deterministically. Now unused — CSS zoom (used on
   * all devices, including iOS) affects layout, so the document height is
   * naturally correct without an explicit height override.
   *
   * Kept in the prop signature to avoid breaking the callsites in App.tsx.
   */
  designHeight: number;
}) {
  const scale = useZoomScale();
  useBlockHorizontalScroll();

  return (
    // CSS `zoom` scales both the visual rendering AND the layout box, so:
    //   1. The inner 1440px div's *layout* width becomes 1440 * scale ≈ viewport width.
    //      iOS Safari therefore sees no horizontal overflow → no horizontal scroll
    //      region → pinch-to-zoom no longer reveals a white blank area to the right.
    //   2. Tap targets, scroll heights, and document flow are all naturally correct
    //      (unlike `transform: scale` which only scales visually, not in layout space).
    //
    // Previous approach (iOS): `transform: scale` was used because an old WebKit bug
    // could desync absolutely-positioned children from their text when CSS zoom was
    // applied. That bug is fixed in modern iOS (15+). Switching to a unified CSS zoom
    // path eliminates the horizontal-scroll-after-pinch bug on iOS completely.
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <div
        style={{
          width: DESIGN_WIDTH,
          marginLeft: "auto",
          marginRight: "auto",
          zoom: scale,
        }}
      >
        {children}
      </div>
    </div>
  );
}
