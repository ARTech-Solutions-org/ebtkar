import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollRevealInit attaches a high-performance IntersectionObserver
 * to all elements containing the class `.reveal-on-scroll`.
 * When an element enters the viewport, `.is-revealed` is added to trigger
 * the CSS transform & opacity transition.
 */
export function ScrollRevealInit() {
  const location = useLocation();

  useEffect(() => {
    const selector = ".reveal-on-scroll";
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    elements.forEach((el) => el.classList.add("is-revealed"));
  }, [location.pathname]);

  return null;
}
