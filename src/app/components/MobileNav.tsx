import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";

interface NavEntry {
  label: string;
  route: string;
}

const NAV_ITEMS: NavEntry[] = [
  { label: "الـرئيسية", route: "/" },
  { label: "عن الجمعية", route: "/about" },
  { label: "مجالات التمكين", route: "/empowerment" },
  { label: "البرامج والأكاديمية", route: "/programs" },
  { label: "المبادرات", route: "/initiatives" },
  { label: "مركز المعرفة", route: "/knowledge" },
  { label: "الشركاء", route: "/partners" },
  { label: "الأثر", route: "/impact" },
  { label: "الحوكمة والشفافية", route: "/governance" },
  { label: "اللوائح والسياسات", route: "/policies" },
  { label: "تواصل معنا", route: "/contact" },
];

/**
 * Visible only on viewports < 1024px (Tailwind "lg" breakpoint).
 * Renders as a fixed header bar with a hamburger toggle.
 * Outside the ResponsiveScaler so it is always full-size on the screen.
 */
export function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const go = (route: string) => {
    setOpen(false);
    navigate(route);
  };

  return (
    // Only rendered on small/medium viewports
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 shadow-md" dir="rtl">
      {/* Top bar */}
      <div
        style={{
          background: "linear-gradient(to bottom, #0e3141, #409bc5)",
        }}
        className="flex items-center justify-between px-4 py-3 select-none"
      >
        {/* Site name / logo text */}
        <span
          className="text-white text-sm font-bold leading-tight cursor-pointer"
          style={{ fontFamily: "'29LT Bukra Variable', sans-serif" }}
          onClick={() => go("/")}
        >
          جمعية الابتكار
          <br />
          والاستدامة المجتمعية
        </span>

        {/* Hamburger / Close button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="text-white focus:outline-none p-1 rounded-md cursor-pointer"
          style={{ lineHeight: 1 }}
        >
          {open ? (
            /* × close icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* ☰ hamburger icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.215, 0.61, 0.355, 1] }}
            style={{
              background: "linear-gradient(to bottom, #1a4a63, #2d7fa8)",
            }}
            className="flex flex-col overflow-hidden shadow-2xl"
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = location.pathname === item.route;
              return (
                <motion.button
                  key={item.route + item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.025, duration: 0.2 }}
                  onClick={() => go(item.route)}
                  className={`text-white text-right px-6 py-3.5 text-base border-b border-white/10 transition-colors flex items-center justify-between ${
                    isActive ? "bg-white/20 font-bold" : "hover:bg-white/10 active:bg-white/20"
                  }`}
                  style={{ fontFamily: "'29LT Bukra Variable', sans-serif" }}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-300" />}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
