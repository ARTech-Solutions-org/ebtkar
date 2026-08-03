import { useState } from "react";
import { useNavigate } from "react-router";

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
  const [open, setOpen] = useState(false);

  const go = (route: string) => {
    setOpen(false);
    navigate(route);
  };

  return (
    // Only rendered on small/medium viewports
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50" dir="rtl">
      {/* Top bar */}
      <div
        style={{
          background: "linear-gradient(to bottom, #0e3141, #409bc5)",
        }}
        className="flex items-center justify-between px-4 py-3"
      >
        {/* Site name / logo text */}
        <span
          className="text-white text-sm font-bold leading-tight"
          style={{ fontFamily: "'29LT Bukra Variable', sans-serif" }}
        >
          جمعية الابتكار
          <br />
          والاستدامة المجتمعية
        </span>

        {/* Hamburger / Close button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="text-white focus:outline-none"
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
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            background: "linear-gradient(to bottom, #1a4a63, #2d7fa8)",
          }}
          className="flex flex-col"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.route + item.label}
              onClick={() => go(item.route)}
              className="text-white text-right px-6 py-4 text-base border-b border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors"
              style={{ fontFamily: "'29LT Bukra Variable', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
