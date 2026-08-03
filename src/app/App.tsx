import { HashRouter, Routes, Route } from "react-router";
import Frame3877 from "../imports/Frame3877";
import Frame3876 from "../imports/Frame3876";
import Frame3875 from "../imports/Frame3875";
import Frame3867 from "../imports/Frame3867";
import Frame3874 from "../imports/Frame3874";
import Frame3871 from "../imports/Frame3871";
import Frame3870 from "../imports/Frame3870";
import Frame3869 from "../imports/Frame3869";
import Frame3868 from "../imports/Frame3868";
import AdminPanel from "../cms/AdminPanel";
import { ContentProvider } from "../cms/ContentContext";
import { ResponsiveScaler } from "./components/ResponsiveScaler";
import { MobileNav } from "./components/MobileNav";

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
      <ResponsiveScaler>{children}</ResponsiveScaler>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ScaledPage><Frame3877 /></ScaledPage>} />
      <Route path="/about" element={<ScaledPage><Frame3876 /></ScaledPage>} />
      <Route path="/programs" element={<ScaledPage><Frame3875 /></ScaledPage>} />
      <Route path="/initiatives" element={<ScaledPage><Frame3867 /></ScaledPage>} />
      <Route path="/knowledge" element={<ScaledPage><Frame3874 /></ScaledPage>} />
      <Route path="/empowerment" element={<ScaledPage><Frame3871 /></ScaledPage>} />
      <Route path="/contact" element={<ScaledPage><Frame3870 /></ScaledPage>} />
      <Route path="/policies" element={<ScaledPage><Frame3869 /></ScaledPage>} />
      <Route path="/governance" element={<ScaledPage><Frame3868 /></ScaledPage>} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ContentProvider>
  );
}
