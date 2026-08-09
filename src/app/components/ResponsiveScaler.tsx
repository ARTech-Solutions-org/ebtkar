import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;

/**
 * Returns a zoom scale so the 1440px-wide canvas always fills the viewport:
 *   - Smaller viewports  → zoom < 1  (scales down, no horizontal overflow)
 *   - Exact 1440px       → zoom = 1  (design at native size)
 *   - Larger viewports   → zoom > 1  (scales up, fills wide screens, eliminates
 *                                      white gaps beside colored sections)
 *
 * BUG 2 FIX: The previous version used Math.min(1, …) which capped at 1.0.
 * At viewports wider than 1440px (e.g. 1920px) the 1440px canvas was centered
 * and the white outer wrapper background showed beside every colored section.
 * Removing the cap lets the canvas fill any viewport width.
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
 * Every browser on iOS (Safari, Chrome, Firefox, ...) is required by Apple to
 * run on WebKit under the hood, and WebKit's CSS `zoom` support is unreliable:
 * it can scale the layout box without scaling text/rendering the same way,
 * which desyncs our absolutely-positioned Figma sections from their text and
 * produces a garbled, overlapping page. Detect iOS once and route those
 * devices to a `transform: scale()`-based fallback instead (see below).
 */
function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  // iPadOS 13+ sends a desktop-Safari-style UA, but reports multi-touch support
  // (real Macs don't), so this catches iPads that would otherwise slip through.
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

export function ResponsiveScaler({
  children,
  designHeight,
}: {
  children: React.ReactNode;
  /**
   * The page's real, unscaled content height in design pixels (i.e. the
   * `h-[Npx]` value on that page's root element). Required so the iOS
   * `TransformScaler` fallback can size its wrapper deterministically —
   * see that component's doc comment for why this replaced DOM measurement.
   */
  designHeight: number;
}) {
  const scale = useZoomScale();
  const [ios] = useState(isIOS);

  if (ios) {
    return (
      <TransformScaler scale={scale} designHeight={designHeight}>
        {children}
      </TransformScaler>
    );
  }

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <div
        style={{
          width: DESIGN_WIDTH,
          marginLeft: "auto",
          marginRight: "auto",
          // CSS zoom scales both visually AND in layout space (unlike transform: scale),
          // so scroll height, tap targets, and document flow all scale correctly.
          zoom: scale,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * iOS fallback: `transform: scale()` renders reliably on WebKit (unlike
 * `zoom`), but unlike `zoom` it does NOT affect layout — the scaled element
 * still occupies its full, unscaled size in the document flow. Left alone
 * that would leave a huge blank gap below the (visually shrunk) page.
 *
 * We fix this by giving the outer wrapper an explicit height of
 * `designHeight * scale`, where `designHeight` is the page's real,
 * known-in-advance content height (every Figma-exported page root has a
 * fixed `h-[Npx]` class — see the route definitions in `App.tsx`).
 *
 * A previous version of this component *measured* the rendered height at
 * runtime (via `offsetHeight` + `ResizeObserver`/`MutationObserver`) instead
 * of taking it as a prop. That was unreliable in practice: the measurement
 * could run before scroll-reveal animations, route-transition motion, web
 * fonts, or lazy images finished settling, producing a wrapper taller than
 * the actual visible content and leaving blank scrollable space below the
 * footer on iOS Safari/Chrome. Since every page's content height is fixed
 * (Figma exports use absolute positioning, so CMS text edits reflow inside
 * fixed-size boxes rather than changing the page height), a static, known
 * value is both simpler and correct — no measurement, no races.
 */
function TransformScaler({
  children,
  scale,
  designHeight,
}: {
  children: React.ReactNode;
  scale: number;
  designHeight: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        // `overflow: hidden` on BOTH axes (not just X) is load-bearing here.
        // Every page relies on `overflow-clip` on its own root div to hide
        // decorative/off-canvas elements Figma positions below the visible
        // design boundary. `overflow-clip` only has iOS Safari support from
        // iOS 16 onward — on anything older it's silently ignored, so that
        // leftover content isn't clipped and leaks through, extending the
        // page's real scrollable height well past our computed `height`
        // below and leaving blank space under the footer. Setting
        // `overflow: hidden` here enforces our computed height as a hard
        // boundary regardless of whether the inner `overflow-clip` worked.
        overflow: "hidden",
        height: designHeight * scale,
      }}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
