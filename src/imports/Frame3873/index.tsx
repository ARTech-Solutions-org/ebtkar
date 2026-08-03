import { NavigationBar } from "../../app/components/NavigationBar";
import svgPage from "./frame3873.svg";

/**
 * صفحة الأثر — Frame 3873
 * تعرض تصميم الـ Figma كـ SVG مدمج بنفس أبعاد 1440px
 * مع NavigationBar في نفس موضعه من باقي الصفحات.
 */
export default function Frame3873() {
  return (
    <div
      className="relative overflow-clip"
      style={{ width: "1440px", minHeight: "100vh" }}
    >
      {/* صورة الصفحة الكاملة من Figma */}
      <img
        src={svgPage}
        alt="الأثر"
        style={{ width: "1440px", display: "block" }}
        draggable={false}
      />

      {/* NavigationBar — نفس الموضع المستخدم في كل الصفحات */}
      <div
        className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]"
        data-name="NAV Bar"
      >
        <NavigationBar />
      </div>
    </div>
  );
}
