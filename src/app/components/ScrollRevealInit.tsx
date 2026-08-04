import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollRevealInit — automatic scroll-reveal for Figma-exported pages.
 *
 * Strategy:
 * 1. Scroll-reveal (auto-detect):
 *    Uses IntersectionObserver on two sets of elements:
 *    a) Explicit: any element with `.reveal-on-scroll` class.
 *    b) Auto: any `[data-name]` element that is large enough to be a section
 *       AND is below the initial viewport — so hero images/headers are never
 *       initially hidden. Inline transition styles are applied in JS so we
 *       never need to touch the Frame TSX files.
 *
 * 2. Image lazy-loading + fade-in (below-fold only):
 *    Adds `loading="lazy"` and a brief fade-in ONLY to images whose top edge
 *    is below the initial viewport at render time. Above-fold / hero images
 *    are left completely untouched.
 */
export function ScrollRevealInit() {
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const vh = window.innerHeight;

      // ── 1a. Explicit .reveal-on-scroll elements ────────────────────────────
      const explicitEls = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
      );

      // ── 1b. Auto-detected section elements ────────────────────────────────
      const autoEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-name]")
      ).filter((el) => {
        // Skip layout wrappers (display:contents — no box, transforms ignored)
        const cls = el.className ?? "";
        if (typeof cls === "string" && cls.includes("contents")) return false;

        // Skip the shared Footer — it has its own styling
        if (el.dataset.name === "Footer") return false;

        const rect = el.getBoundingClientRect();

        // Must be a meaningful section: at least 120 px tall and 40% viewport wide
        if (rect.height < 120 || rect.width < vh * 0.4) return false;

        // Only animate elements whose TOP is below 85 % of the viewport —
        // so above-fold hero sections are never initially hidden.
        if (rect.top < vh * 0.85) return false;

        return true;
      });

      const allEls: HTMLElement[] = [
        ...explicitEls,
        // Exclude auto-els that are already in the explicit set
        ...autoEls.filter((el) => !el.classList.contains("reveal-on-scroll")),
      ];

      if (allEls.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;

            if (el.classList.contains("reveal-on-scroll")) {
              el.classList.add("is-revealed");
            } else {
              // Auto-detected: animate via inline styles
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }
            observer?.unobserve(el);
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
      );

      allEls.forEach((el, i) => {
        if (el.classList.contains("reveal-on-scroll")) {
          // CSS-driven: use the class pair defined in theme.css
          const rect = el.getBoundingClientRect();
          if (rect.top < vh * 0.95) {
            // Already in viewport — reveal with tiny stagger
            setTimeout(() => el.classList.add("is-revealed"), 60 + i * 20);
          } else {
            observer!.observe(el);
          }
        } else {
          // JS-driven: apply inline initial hidden state first
          el.style.opacity = "0";
          el.style.transform = "translateY(24px)";
          el.style.transition =
            "opacity 0.55s cubic-bezier(0.215,0.61,0.355,1), transform 0.55s cubic-bezier(0.215,0.61,0.355,1)";
          el.style.willChange = "opacity, transform";
          observer!.observe(el);
        }
      });

      // ── 2. Image lazy-loading + fade-in (below-fold only) ─────────────────
      Array.from(document.querySelectorAll<HTMLImageElement>("img")).forEach(
        (img) => {
          const rect = img.getBoundingClientRect();
          const isBelowFold = rect.top >= vh;

          if (!isBelowFold) return; // Never touch above-fold images

          if (!img.getAttribute("loading")) {
            img.setAttribute("loading", "lazy");
          }

          // Fade in: only if not already loaded
          if (img.complete && img.naturalWidth > 0) return;

          img.style.opacity = "0";
          img.style.transition = "opacity 0.4s ease";

          const reveal = () => {
            img.style.opacity = "1";
          };
          img.addEventListener("load", reveal, { once: true });
          img.addEventListener("error", reveal, { once: true }); // show on error too
        }
      );
    }, 60);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
}
