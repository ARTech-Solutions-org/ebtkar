import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { ContentProvider } from "../cms/ContentContext";
import { ResponsiveScaler } from "./components/ResponsiveScaler";
import { MobileNav } from "./components/MobileNav";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollRevealInit } from "./components/ScrollRevealInit";

// Lazy-load every public page so the Suspense loading spinner fires on every
// route navigation and the initial load of each chunk, giving users a smooth
// loading state rather than a sudden pop-in of content.
const Frame3877 = React.lazy(() => import("../imports/Frame3877"));
const Frame3876 = React.lazy(() => import("../imports/Frame3876"));
const Frame3875 = React.lazy(() => import("../imports/Frame3875"));
const Frame3867 = React.lazy(() => import("../imports/Frame3867"));
const Frame3874 = React.lazy(() => import("../imports/Frame3874"));
const Frame3873 = React.lazy(() => import("../imports/Frame3873"));
const Frame3872 = React.lazy(() => import("../imports/Frame3872"));
const Frame3871 = React.lazy(() => import("../imports/Frame3871"));
const Frame3870 = React.lazy(() => import("../imports/Frame3870"));
const Frame3869 = React.lazy(() => import("../imports/Frame3869"));
const Frame3868 = React.lazy(() => import("../imports/Frame3868"));
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
      {/*
        ScrollRevealInit is placed here — inside ScaledPage, which itself renders
        inside the Suspense boundary — so the IntersectionObserver scan runs only
        after the lazy page chunk has been resolved and committed to the DOM.
        Placing it in <App> (outside Suspense) caused it to scan before the lazy
        component mounted, leaving every .reveal-on-scroll element permanently hidden.
      */}
      <ScrollRevealInit />
    </>
  );
}

function AppRoutes() {
  const adminPath = (import.meta.env.VITE_ADMIN_PATH as string) || "/secret-admin-portal-2025";

  return (
    <Suspense fallback={<div className="page-loading-spinner"><div className="page-loading-spinner__ring" /></div>}>
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
        <AppRoutes />
      </HashRouter>
    </ContentProvider>
  );
}
