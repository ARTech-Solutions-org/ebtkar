import { useEffect } from "react";

/**
 * Registers a single IntersectionObserver that watches every element carrying
 * a `reveal-*` CSS class.  When an element enters the viewport the hook adds
 * the `in-view` class, which triggers the CSS transition defined in theme.css.
 *
 * The observer is disconnected when the component that called the hook unmounts.
 * Because App calls this hook once (at the router level), the observer lives for
 * the entire session, which means page-changes that render new reveal elements
 * are handled by a MutationObserver that watches for newly-added children.
 */
export function useSiteAnimations() {
  useEffect(() => {
    const REVEAL_SELECTOR =
      ".reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale";

    // IntersectionObserver options: fire when 10% of the element is visible,
    // with a 40px bottom margin so elements reveal slightly before they scroll
    // fully into view.
    const ioOptions: IntersectionObserverInit = {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate once, then stop watching
        }
      });
    }, ioOptions);

    /** Observe any reveal element that hasn't fired yet. */
    function observeAll() {
      document.querySelectorAll<Element>(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    }

    // Initial sweep
    observeAll();

    // Watch for new elements injected by React (e.g. after route changes or
    // lazy-loaded panels).
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []); // run once on mount
}
