import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";

/**
 * NAV ITEMS — ordered left-to-right as they appear in the flex row.
 * `route` is the hash-router pathname that makes this item "active".
 */
const NAV_ITEMS = [
  {
    route: "/contact",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">تواصل</p>
        <p className="leading-[20px]" dir="auto">معـــــنا</p>
      </>
    ),
    className: "shrink-0 text-right",
  },
  {
    route: "/policies",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">اللــــــــــوائح</p>
        <p className="leading-[20px]" dir="auto">و السياسات</p>
      </>
    ),
    className: "shrink-0 text-center",
  },
  {
    route: "/governance",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">الحــــــوكمة</p>
        <p className="leading-[20px]" dir="auto">والشفافية</p>
      </>
    ),
    className: "shrink-0 text-center",
  },
  {
    route: "/partners",
    node: <p className="leading-[20px]" dir="auto">الشركاء</p>,
    className: "shrink-0 text-center",
  },
  {
    route: "/impact",
    node: <p className="leading-[20px]" dir="auto">الأثر</p>,
    className: "shrink-0 text-right",
  },
  {
    route: "/knowledge",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">مـــــركـــز</p>
        <p className="leading-[20px]" dir="auto">المعرفة</p>
      </>
    ),
    className: "shrink-0 text-center",
  },
  {
    route: "/initiatives",
    node: <p className="leading-[20px]" dir="auto">المبادرات</p>,
    className: "shrink-0 text-center",
  },
  {
    route: "/programs",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">البـــــــــرامج</p>
        <p className="leading-[20px]" dir="auto">والأكاديمية</p>
      </>
    ),
    className: "shrink-0 text-center",
  },
  {
    route: "/empowerment",
    node: (
      <>
        <p className="leading-[20px] mb-0" dir="auto">مجـــالات</p>
        <p className="leading-[20px]" dir="auto">التمكين</p>
      </>
    ),
    className: "shrink-0 text-center",
  },
  {
    route: "/about",
    node: <p className="leading-[20px]" dir="auto">عن الجمعية</p>,
    className: "shrink-0 text-right",
  },
  {
    route: "/",
    node: <p className="leading-[20px]" dir="auto">الـرئيسية</p>,
    className: "shrink-0 text-right",
  },
];

export function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Refs for each nav item element so we can measure their rendered positions
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Indicator: left offset and width, both in the 1440px design coordinate space
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const updateIndicator = useCallback(() => {
    const activeIdx = NAV_ITEMS.findIndex((item) => item.route === location.pathname);
    if (activeIdx === -1) {
      setIndicator(null);
      return;
    }
    const el = itemRefs.current[activeIdx];
    if (!el) return;

    // offsetLeft / offsetWidth work in the element's own coordinate space,
    // which is the pre-zoom 1440px design space — exactly what we need.
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [location.pathname]);

  // Recalculate on route change
  useEffect(() => {
    // Small RAF delay so the DOM has finished painting before we measure
    const id = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(id);
  }, [updateIndicator]);

  // Recalculate on window resize (zoom changes item widths in layout space)
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    // Hidden on viewports narrower than 1024px — MobileNav overlay takes over.
    // Tailwind "lg:" = min-width: 1024px.
    <div
      ref={containerRef}
      className="[word-break:break-word] relative content-stretch font-['29LT_Bukra_Variable:Medium',sans-serif] gap-[26px] items-center left-0 not-italic text-[15.5px] text-white top-0 whitespace-nowrap hidden lg:flex select-none"
    >
      {NAV_ITEMS.map((item, i) => {
        const isActive = location.pathname === item.route;
        return (
          <motion.div
            key={item.route}
            ref={(el) => { itemRefs.current[i] = el; }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            className={`relative h-[42px] flex flex-col justify-center transition-opacity duration-200 ${
              isActive ? "opacity-100 font-semibold" : "opacity-90 hover:opacity-100"
            } ${item.className}`}
            style={{ cursor: item.route.startsWith("/__") ? "default" : "pointer" }}
            onClick={() => {
              if (!item.route.startsWith("/__")) navigate(item.route);
            }}
          >
            {item.node}
          </motion.div>
        );
      })}

      {/* Dynamic active indicator — a white line below the active tab label with spring animation */}
      {indicator && (
        <motion.div
          layout
          aria-hidden="true"
          initial={false}
          animate={{
            left: indicator.left,
            width: indicator.width,
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
          }}
          style={{
            position: "absolute",
            bottom: "-4px",
            height: 2.5,
            backgroundColor: "white",
            borderRadius: 2,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
