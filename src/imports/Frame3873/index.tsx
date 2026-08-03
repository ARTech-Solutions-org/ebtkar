import { useNavigate } from "react-router";
import { NavigationBar } from "../../app/components/NavigationBar";
import imgLayer11 from "../Frame3869/922ea633b05e4bd1260330b71876671f04ddc610.png";
import imgSectionDefault from "../Frame3868/7d68074e2307ed8b90cde325e952812cb3c46f95.png";
import { useContent } from "../../cms/ContentContext";

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "h-[268px] relative w-[1459px]"} data-name="Footer">
      <div className="absolute contents inset-0">
        <div className="absolute contents inset-0">
          <div className="absolute bg-gradient-to-r from-[#164256] inset-[17.16%_0_0_0] to-[#0199c2]" />
          <div
            className="absolute flex inset-[0_10.42%_75.37%_85.06%] items-center justify-center z-50 cursor-pointer pointer-events-auto"
            style={{ containerType: "size", cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
          >
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full">
                <svg className="absolute block inset-0 size-full" fill="none" height="66" preserveAspectRatio="none" viewBox="0 0 66 66" width="66">
                  <g id="Group 1">
                    <circle cx="33" cy="33" fill="white" id="Ellipse 2" r="32.5" stroke="#1A4668" />
                    <g id="arrow_upward">
                      <mask height="30" id="mask0_0_impact" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="18" y="18">
                        <rect fill="#D9D9D9" height="28.921" id="Bounding box" stroke="#1A4668" strokeWidth="0.507692" transform="matrix(1 0 0 -1 18.2773 47.2155)" width="28.921" x="0.253846" y="-0.253846" />
                      </mask>
                      <g mask="url(#mask0_0_impact)">
                        <path d="M33 24.375L21.75 35.625L24.125 38L33 29.125L41.875 38L44.25 35.625L33 24.375Z" fill="#1A4668" id="arrow_upward_2" stroke="#1A4668" strokeWidth="0.0126923" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] inset-[51.12%_23.65%_41.04%_66.07%] leading-[22.254px] not-italic text-[20px] text-right text-white whitespace-pre-wrap" dir="auto">
          +966 00 000 0000
        </p>
        <p className="[word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] inset-[51.12%_17%_41.04%_60.93%] leading-[22.254px] not-italic text-[20px] text-right text-white" dir="auto">
          رقم التواصل:
        </p>
        <div className="absolute content-stretch flex gap-[9px] inset-[35.82%_14.74%_56.72%_78.34%] items-center">
          <div className="h-[20px] overflow-clip relative shrink-0 w-[21px]" data-name="Social Icons">
            <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="16.5716" preserveAspectRatio="none" viewBox="0 0 19.25 16.5716" width="19.25">
                <path d="M19.25 1.852a7.893 7.893 0 0 1-2.268.622 3.96 3.96 0 0 0 1.737-2.185 7.907 7.907 0 0 1-2.508.959A3.947 3.947 0 0 0 9.43 4.843a11.196 11.196 0 0 1-8.13-4.12 3.947 3.947 0 0 0 1.22 5.267 3.916 3.916 0 0 1-1.787-.493v.05a3.947 3.947 0 0 0 3.164 3.868 3.96 3.96 0 0 1-1.782.068 3.948 3.948 0 0 0 3.684 2.74A7.918 7.918 0 0 1 0 13.868a11.157 11.157 0 0 0 6.042 1.771c7.25 0 11.214-6.007 11.214-11.214 0-.171 0-.342-.012-.512A8.016 8.016 0 0 0 19.25 1.852z" fill="white" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Social Icon">
            <p className="[word-break:break-word] font-['Font_Awesome_6_Brands:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-[-8px] top-0" data-name="bg">
      <div className="absolute bg-gradient-to-b from-[#0e3141] h-[707px] left-[-8px] to-[#409bc5] to-[98.558%] top-0 via-[#409bc5] via-[85.577%] w-[1456px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[-8px] top-0" data-name="Header">
      <Bg />
    </div>
  );
}

function Layer() {
  const navigate = useNavigate();
  return (
    <div className="absolute h-[61.7px] left-[100px] overflow-clip top-[41.65px] w-[211px] cursor-pointer" data-name="Layer_1" onClick={() => navigate("/")}>
      <span className="text-white font-bold text-xl leading-tight" style={{ fontFamily: "'29LT Bukra Variable', sans-serif" }}>
        جمعية الابتكار
        <br />
        والاستدامة المجتمعية
      </span>
    </div>
  );
}

function LandingPage() {
  const { content } = useContent();
  const imp = content.impact;
  const sectionImg = imp.sectionImage || imgSectionDefault;

  return (
    <div className="relative bg-white h-[1598px] mx-auto overflow-clip w-[1440px]" data-name="Landing Page">
      <Header />
      <Layer />
      {/* Hero Title */}
      <p className="-translate-x-full [word-break:break-word] absolute bottom-[75.85%] font-['Hacen_Casablanca:Regular',sans-serif] leading-[58px] left-[calc(20.83%+305px)] not-italic text-[55px] text-right text-white top-[20.31%] w-[430px]" dir="auto">
        {imp.heroTitle}
      </p>
      {/* Hero Subtitle */}
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+485px)] not-italic text-[28px] text-right text-white top-[375px] w-[372px]" dir="auto">
        {imp.heroSubtitle}
      </p>
      {/* White Hero Box */}
      <div className="absolute border border-solid border-white h-[411px] left-[100px] rounded-[30px] top-[205px] w-[921px]" />
      {/* Hero Image */}
      <div className="absolute h-[583px] left-[calc(50%+10px)] top-[124px] w-[608px]" data-name="Layer 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.72%] left-[-0.06%] max-w-none top-0 w-[100.11%]" src={imgLayer11} />
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]" data-name="NAV Bar">
        <NavigationBar />
      </div>

      {/* Main Section Content */}
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(75%+154.96px)] not-italic text-[#009dc4] text-[55px] text-right top-[790px] w-[418.961px]" dir="auto">
        {imp.sectionTitle}
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[321px] leading-[0] left-[calc(58.33%+395px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[940px] w-[391px]">
        <p className="leading-[30px] mb-[12px]" dir="auto">
          {imp.sectionBodyLine1}
        </p>
        <p className="leading-[30px]" dir="auto">
          {imp.sectionBodyLine2}
        </p>
      </div>
      <div className="absolute h-[349px] left-[calc(8.33%+85px)] rounded-[30px] top-[790px] w-[621px]" data-name="Impact Image">
        <img alt="الأثر" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={sectionImg} />
      </div>

      <Footer className="absolute bottom-0 h-[268px] left-0 w-[1440px]" />
    </div>
  );
}

export default function Frame3873() {
  return <LandingPage />;
}
