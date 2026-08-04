import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router";
import Frame3877 from "../imports/Frame3877";
import Frame3876 from "../imports/Frame3876";
import Frame3875 from "../imports/Frame3875";
import Frame3867 from "../imports/Frame3867";
import Frame3874 from "../imports/Frame3874";
import Frame3873 from "../imports/Frame3873";
import Frame3872 from "../imports/Frame3872";
import Frame3871 from "../imports/Frame3871";
import Frame3870 from "../imports/Frame3870";
import Frame3869 from "../imports/Frame3869";
import Frame3868 from "../imports/Frame3868";
import { ContentProvider } from "../cms/ContentContext";
import { ResponsiveScaler } from "./components/ResponsiveScaler";
import { MobileNav } from "./components/MobileNav";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollRevealInit } from "./components/ScrollRevealInit";

// Lazy load AdminPanel so regular visitors NEVER download Admin code or routes
const AdminPanel = React.lazy(() => import("../cms/AdminPanel"));

/**
 * Wraps a page in the responsive scaler so the 1440px-wide design
 * fits any viewport without horizontal overflow.
 *
 * On mobile viewports (< 1024px) a fixed MobileNav header is shown.
 * The MobileNav is ~52px tall, so we push the scaled content down by
 * that amount so it doesn't hide underneath the fixed bar.
 */
function ScaledPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Mobile nav is rendered outside the scaler so it stays full-size */}
      <MobileNav />
      {/* Spacer that only appears on mobile to prevent content hiding under the fixed nav bar */}
      <div className="lg:hidden h-[52px]" />
      <ResponsiveScaler>
        <PageTransition>
          {children}
        </PageTransition>
      </ResponsiveScaler>
    </>
  );
}

function AppRoutes() {
  const adminPath = (import.meta.env.VITE_ADMIN_PATH as string) || "/secret-admin-portal-2025";

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500 font-sans">جاري التحميل...</div>}>
      <Routes>
        <Route path="/" element={<ScaledPage><Frame3877 /></ScaledPage>} />
        <Route path="/about" element={<ScaledPage><Frame3876 /></ScaledPage>} />
        <Route path="/programs" element={<ScaledPage><Frame3875 /></ScaledPage>} />
        <Route path="/initiatives" element={<ScaledPage><Frame3867 /></ScaledPage>} />
        <Route path="/knowledge" element={<ScaledPage><Frame3874 /></ScaledPage>} />
        <Route path="/partners" element={<ScaledPage><Frame3872 /></ScaledPage>} />
        <Route path="/impact" element={<ScaledPage><Frame3873 /></ScaledPage>} />
        <Route path="/empowerment" element={<ScaledPage><Frame3871 /></ScaledPage>} />
        <Route path="/contact" element={<ScaledPage><Frame3870 /></ScaledPage>} />
        <Route path="/policies" element={<ScaledPage><Frame3869 /></ScaledPage>} />
        <Route path="/governance" element={<ScaledPage><Frame3868 /></ScaledPage>} />
        <Route path={adminPath} element={<AdminPanel />} />
        {/* If someone tries /admin, render home page */}
        <Route path="/admin" element={<ScaledPage><Frame3877 /></ScaledPage>} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <ScrollToTop />
        <ScrollRevealInit />
        <AppRoutes />
      </HashRouter>
    </ContentProvider>
  );
}
