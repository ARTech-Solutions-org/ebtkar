import { useEffect, useLayoutEffect, useRef, useState } from "react";

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

export function ResponsiveScaler({ children }: { children: React.ReactNode }) {
  const scale = useZoomScale();
  const [ios] = useState(isIOS);

  if (ios) {
    return <TransformScaler scale={scale}>{children}</TransformScaler>;
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
 * We fix this by measuring the real, unscaled content height ourselves and
 * setting it explicitly (scaled) on the outer wrapper, so the page's scroll
 * height matches what's actually visible. The height is re-measured whenever
 * the content's size changes (images loading, scroll-reveal animations,
 * route changes swapping the page content, etc.).
 */
function TransformScaler({
  children,
  scale,
}: {
  children: React.ReactNode;
  scale: number;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const measure = () => setContentHeight(el.scrollHeight);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    // Content height also changes as lazy images load or reveal animations
    // add/adjust elements, which ResizeObserver alone won't always catch.
    const mutationObserver = new MutationObserver(measure);
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        height: contentHeight ? contentHeight * scale : undefined,
      }}
    >
      <div
        ref={innerRef}
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
