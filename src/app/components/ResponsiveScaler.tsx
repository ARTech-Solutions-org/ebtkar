import { useEffect, useState, useRef, useLayoutEffect } from "react";

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

export function ResponsiveScaler({ children }: { children: React.ReactNode }) {
  const scale = useZoomScale();
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const isIOS = typeof navigator !== "undefined" && 
    (/iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  useLayoutEffect(() => {
    if (!innerRef.current || !isIOS) return;
    const updateHeight = () => {
      if (innerRef.current) setContentHeight(innerRef.current.scrollHeight);
    };
    
    // Setup observer to track any DOM changes in the children that affect height
    const ro = new ResizeObserver(updateHeight);
    ro.observe(innerRef.current);
    
    // Initial measure
    updateHeight();
    
    return () => ro.disconnect();
  }, [isIOS]);

  if (isIOS) {
    return (
      <div style={{ width: "100%", overflowX: "hidden", position: "relative", height: contentHeight ? contentHeight * scale : "100vh" }}>
        <div
          ref={innerRef}
          style={{
            width: DESIGN_WIDTH,
            position: "absolute",
            left: "50%",
            top: 0,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {children}
        </div>
      </div>
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
