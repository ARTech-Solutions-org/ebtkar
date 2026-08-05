import svgPaths from "./svg-9evvqkgg9u";
import { useNavigate } from "react-router";
import { NavigationBar } from "../../app/components/NavigationBar";
import imgLayer11 from "./922ea633b05e4bd1260330b71876671f04ddc610.png";
import { useContent } from "../../cms/ContentContext";

function Footer({ className }: { className?: string }) {
  const { content } = useContent();
  const phone = content.global?.footer?.phone || "+966 0000 000 0000";
  return (
    <div className={className || "h-[268px] relative w-[1459px]"} data-name="Footer">
      <div className="absolute contents inset-0">
        <div className="absolute contents inset-0">
          <div className="absolute bg-gradient-to-r from-[#164256] inset-[17.16%_0_0_0] to-[#0199c2]" />
          <div className="absolute flex inset-[0_10.42%_75.37%_85.06%] items-center justify-center z-50 cursor-pointer pointer-events-auto back-to-top transition-transform duration-300 hover:scale-110" style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" }); document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}>
            <img src="/Group 1.svg" alt="للأعلى" className="w-[66px] h-[66px] block pointer-events-none select-none" />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] inset-[51.12%_23.65%_41.04%_66.07%] leading-[22.254px] not-italic text-[20px] text-right text-white whitespace-pre-wrap" dir="auto">
          {phone}
          <br aria-hidden />
          <br aria-hidden />
          <br aria-hidden />
        </p>
        <p className="[word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] inset-[51.12%_17%_41.04%_60.93%] leading-[22.254px] not-italic text-[20px] text-right text-white" dir="auto">
          رقم التواصل:
        </p>
        <div className="absolute content-stretch flex gap-[9px] inset-[35.82%_14.74%_56.72%_78.34%] items-center">
          <div className="h-[20px] overflow-clip relative shrink-0 w-[21px]" data-name="Social Icons">
            <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="16.5716" preserveAspectRatio="none" viewBox="0 0 19.25 16.5716" width="19.25">
                <path d={svgPaths.p3688600} fill="white" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="h-[18px] overflow-clip relative shrink-0 w-[18px]" data-name="Social Icons">
            <svg className="absolute block inset-0 size-full" fill="none" height="18" viewBox="0 0 18 18" width="18">
              <path d="M8.75 4.51C11.21 4.51 13.24 6.54 13.24 9C13.24 11.46 11.21 13.49 8.75 13.49C6.25 13.49 4.26 11.5 4.26 9C4.26 6.54 6.25 4.51 8.75 4.51ZM8.75 11.93C10.35 11.93 11.64 10.64 11.64 9C11.64 7.4 10.35 6.11 8.75 6.11C7.11 6.11 5.82 7.4 5.82 9C5.82 10.64 7.15 11.93 8.75 11.93ZM14.45 4.35C14.45 3.77 13.98 3.3 13.4 3.3C12.81 3.3 12.34 3.77 12.34 4.35C12.34 4.94 12.81 5.41 13.4 5.41C13.98 5.41 14.45 4.94 14.45 4.35ZM17.42 5.41C17.5 6.85 17.5 11.19 17.42 12.63C17.34 14.04 17.03 15.25 16.02 16.3C15 17.32 13.75 17.63 12.34 17.71C10.9 17.79 6.56 17.79 5.12 17.71C3.71 17.63 2.5 17.32 1.45 16.3C0.43 15.25 0.12 14.04 0.04 12.63C-0.04 11.19 -0.04 6.85 0.04 5.41C0.12 4 0.43 2.75 1.45 1.73C2.5 0.72 3.71 0.41 5.12 0.33C6.56 0.25 10.9 0.25 12.34 0.33C13.75 0.41 15 0.72 16.02 1.73C17.03 2.75 17.34 4 17.42 5.41ZM15.55 14.16C16.02 13.02 15.9 10.29 15.9 9C15.9 7.75 16.02 5.02 15.55 3.84C15.23 3.1 14.65 2.48 13.91 2.2C12.73 1.73 10 1.85 8.75 1.85C7.46 1.85 4.73 1.73 3.59 2.2C2.81 2.52 2.23 3.1 1.91 3.84C1.45 5.02 1.56 7.75 1.56 9C1.56 10.29 1.45 13.02 1.91 14.16C2.23 14.94 2.81 15.52 3.59 15.84C4.73 16.3 7.46 16.19 8.75 16.19C10 16.19 12.73 16.3 13.91 15.84C14.65 15.52 15.27 14.94 15.55 14.16Z" fill="white" />
            </svg>
          </div>
          <div className="h-[17px] overflow-clip relative shrink-0 w-[18px]" data-name="Social Icons">
            <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 18 17" width="18">
              <path d={svgPaths.p1a01700} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Social Icons">
            <div className="absolute inset-[4%_5.61%_0_19.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="18.24" preserveAspectRatio="none" viewBox="0 0 12.7022 18.24" width="12.7022">
                <path d={svgPaths.p239adc80} fill="#FF004F" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[4%_10.41%_4%_11.04%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.48" preserveAspectRatio="none" viewBox="0 0 13.3539 17.48" width="13.3539">
                <path d={svgPaths.p1ab8da00} fill="white" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_10.41%_9.14%_6.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.2639" preserveAspectRatio="none" viewBox="0 0 14.1685 17.2639" width="14.1685">
                <path d={svgPaths.p11be44a0} fill="#00F2EA" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[50.75%_14.8%_41.79%_83.82%] flex items-center justify-center pointer-events-none">
          <svg className="w-[18px] h-[18px]" fill="white" viewBox="0 0 20 20">
            <path d="M6.41 0.98L7.97 4.73C8.24 5.35 8.09 6.09 7.54 6.52L5.62 8.12C6.91 10.86 9.14 13.09 11.88 14.38L13.48 12.46C13.91 11.91 14.65 11.76 15.27 12.03L19.02 13.59C19.77 13.87 20.12 14.69 19.92 15.43L18.98 18.87C18.79 19.53 18.2 20 17.5 20C7.81 20 0 12.19 0 2.5C0 1.8 0.47 1.21 1.13 1.02L4.57 0.08C5.31 -0.12 6.13 0.23 6.41 0.98Z" />
          </svg>
        </div>
        <div className="absolute inset-[41.1%_65.32%_27.04%_14.67%] overflow-clip" data-name="Layer_1">
          <div className="absolute inset-[22.81%_34.52%_21.58%_0]" data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height="47.4786" preserveAspectRatio="none" viewBox="0 0 191.197 47.4786" width="191.197">
              <g id="Group">
                <path d={svgPaths.p19c8f300} fill="white" id="Vector" />
                <path d={svgPaths.p205e8180} fill="white" id="Vector_2" />
                <path d={svgPaths.p1f96e500} fill="white" id="Vector_3" />
                <path d={svgPaths.p31768740} fill="white" id="Vector_4" />
                <path d={svgPaths.p257c9300} fill="white" id="Vector_5" />
                <path d={svgPaths.p219c2c00} fill="white" id="Vector_6" />
                <path d={svgPaths.p39a18f00} fill="white" id="Vector_7" />
                <path d={svgPaths.p12d29f00} fill="white" id="Vector_8" />
                <path d={svgPaths.p4b63600} fill="white" id="Vector_9" />
                <path d={svgPaths.p1416d180} fill="white" id="Vector_10" />
                <path d={svgPaths.p1a58da00} fill="white" id="Vector_11" />
                <path d={svgPaths.p12f0f900} fill="white" id="Vector_12" />
                <path d={svgPaths.p34a38400} fill="white" id="Vector_13" />
                <path d={svgPaths.p12640e00} fill="white" id="Vector_14" />
                <path d={svgPaths.p311ee00} fill="white" id="Vector_15" />
                <path d={svgPaths.p3c439500} fill="white" id="Vector_16" />
                <path d={svgPaths.p1698bb40} fill="white" id="Vector_17" />
                <path d={svgPaths.p18978400} fill="white" id="Vector_18" />
                <path d={svgPaths.p191acc00} fill="white" id="Vector_19" />
                <path d={svgPaths.p106d7e00} fill="white" id="Vector_20" />
                <path d={svgPaths.p14e50000} fill="white" id="Vector_21" />
                <path d={svgPaths.pa984c80} fill="white" id="Vector_22" />
                <path d={svgPaths.p2e793b00} fill="white" id="Vector_23" />
                <path d={svgPaths.p1e2aff00} fill="white" id="Vector_24" />
                <path d={svgPaths.p10c92080} fill="white" id="Vector_25" />
                <path d={svgPaths.p7ff0000} fill="white" id="Vector_26" />
                <path d={svgPaths.p2f14e300} fill="white" id="Vector_27" />
                <path d={svgPaths.p5a44f80} fill="white" id="Vector_28" />
                <path d={svgPaths.p22c8d900} fill="white" id="Vector_29" />
                <path d={svgPaths.p20909800} fill="white" id="Vector_30" />
                <path d={svgPaths.p3c87d700} fill="white" id="Vector_31" />
                <path d={svgPaths.pff43cc0} fill="white" id="Vector_32" />
                <path d={svgPaths.p26b02df0} fill="white" id="Vector_33" />
                <path d={svgPaths.pfe06300} fill="white" id="Vector_34" />
                <path d={svgPaths.pbcf4900} fill="white" id="Vector_35" />
                <path d={svgPaths.p31325500} fill="white" id="Vector_36" />
                <path d={svgPaths.p2848a2f0} fill="white" id="Vector_37" />
                <path d={svgPaths.p3a30d980} fill="white" id="Vector_38" />
                <path d={svgPaths.p1c2a1900} fill="white" id="Vector_39" />
                <path d={svgPaths.p148ac500} fill="white" id="Vector_40" />
                <path d={svgPaths.p39c24500} fill="white" id="Vector_41" />
                <path d={svgPaths.p24728780} fill="white" id="Vector_42" />
                <path d={svgPaths.p594f000} fill="white" id="Vector_43" />
                <path d={svgPaths.p1b9d5100} fill="white" id="Vector_44" />
                <path d={svgPaths.p2f029900} fill="white" id="Vector_45" />
                <path d={svgPaths.p31daaf30} fill="white" id="Vector_46" />
                <path d={svgPaths.p1526fe00} fill="white" id="Vector_47" />
                <path d={svgPaths.pe5dd400} fill="white" id="Vector_48" />
                <path d={svgPaths.p38c7d1c0} fill="white" id="Vector_49" />
                <path d={svgPaths.pc6c7600} fill="white" id="Vector_50" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[0_0.12%_0_70.53%]" data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height="85.3862" preserveAspectRatio="none" viewBox="0 0 85.6964 85.3862" width="85.6964">
              <g id="Group">
                <path clipRule="evenodd" d={svgPaths.p1191e780} fill="url(#paint0_linear_0_371)" fillRule="evenodd" id="Vector" />
                <path d={svgPaths.p37de6300} fill="url(#paint1_linear_0_371)" id="Vector_2" />
                <path d={svgPaths.p1ee50c00} fill="white" id="Vector_3" />
                <path d={svgPaths.p35d15700} fill="url(#paint2_linear_0_371)" id="Vector_4" />
                <path d={svgPaths.pa998900} fill="white" id="Vector_5" />
                <path d={svgPaths.p1e886100} fill="url(#paint3_linear_0_371)" id="Vector_6" />
                <path d={svgPaths.p2b6c6cf0} fill="white" id="Vector_7" />
                <path d={svgPaths.p148cbb00} fill="url(#paint4_linear_0_371)" id="Vector_8" />
                <path d={svgPaths.p1da39e80} fill="white" id="Vector_9" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_371" x1="25.9072" x2="55.5492" y1="61.4936" y2="28.5487">
                  <stop stopColor="#92278F" />
                  <stop offset="0.5" stopColor="#3777BC" />
                  <stop offset="1" stopColor="#00C0F3" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_371" x1="45.3728" x2="83.848" y1="15.8015" y2="27.9999">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_371" x1="18.8632" x2="26.3558" y1="38.4981" y2="-1.13239">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_371" x1="39.0032" x2="4.99172" y1="76.74" y2="55.0202">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_371" x1="67.9794" x2="58.8531" y1="45.8459" y2="85.134">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IsolationMode() {
  return (
    <div className="absolute h-[484.718px] left-[calc(50%+87.47px)] opacity-25 top-[151px] w-[486.067px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="484.718" preserveAspectRatio="none" viewBox="0 0 486.067 484.718" width="486.067">
        <g clipPath="url(#clip0_0_409)" id="Isolation_Mode">
          <path clipRule="evenodd" d={svgPaths.peb53500} fill="url(#paint0_linear_0_409)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p23356400} fill="url(#paint1_linear_0_409)" id="Vector_2" />
          <path d={svgPaths.pc1ee300} fill="white" id="Vector_3" />
          <path d={svgPaths.p2a8fec80} fill="url(#paint2_linear_0_409)" id="Vector_4" />
          <path d={svgPaths.p1fa3700} fill="white" id="Vector_5" />
          <path d={svgPaths.p2a0ab200} fill="url(#paint3_linear_0_409)" id="Vector_6" />
          <path d={svgPaths.p3439d200} fill="white" id="Vector_7" />
          <path d={svgPaths.p1b3fe00} fill="url(#paint4_linear_0_409)" id="Vector_8" />
          <path d={svgPaths.p2fd00f80} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_409" x1="146.929" x2="315.214" y1="349.085" y2="162.207">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_409" x1="257.336" x2="475.6" y1="89.7012" y2="158.842">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_409" x1="106.981" x2="149.548" y1="218.549" y2="-6.41074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_409" x1="221.221" x2="28.1982" y1="435.636" y2="312.485">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_409" x1="385.567" x2="333.719" y1="260.266" y2="483.276">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <clipPath id="clip0_0_409">
            <rect fill="white" height="484.718" width="486.067" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%+87.47px)] top-[151px]">
      <IsolationMode />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-[-8px] top-0" data-name="bg">
      <div className="absolute bg-gradient-to-b from-[#0e3141] h-[707px] left-[-8px] to-[#409bc5] to-[98.558%] top-0 via-[#409bc5] via-[85.577%] w-[1456px]" />
      <Group2 />
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

function Group() {
  return (
    <div className="absolute inset-[22.81%_34.52%_21.58%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="34.3083" preserveAspectRatio="none" viewBox="0 0 138.159 34.3083" width="138.159">
        <g id="Group">
          <path d={svgPaths.p28ab5380} fill="white" id="Vector" />
          <path d={svgPaths.p399ef800} fill="white" id="Vector_2" />
          <path d={svgPaths.p3e299600} fill="white" id="Vector_3" />
          <path d={svgPaths.p2f856780} fill="white" id="Vector_4" />
          <path d={svgPaths.p36878300} fill="white" id="Vector_5" />
          <path d={svgPaths.p212b4800} fill="white" id="Vector_6" />
          <path d={svgPaths.p2feb6e80} fill="white" id="Vector_7" />
          <path d={svgPaths.p37b68580} fill="white" id="Vector_8" />
          <path d={svgPaths.p1478be00} fill="white" id="Vector_9" />
          <path d={svgPaths.p3b6ffd00} fill="white" id="Vector_10" />
          <path d={svgPaths.p1d1c3280} fill="white" id="Vector_11" />
          <path d={svgPaths.p28893300} fill="white" id="Vector_12" />
          <path d={svgPaths.p10724200} fill="white" id="Vector_13" />
          <path d={svgPaths.p14f42d80} fill="white" id="Vector_14" />
          <path d={svgPaths.p14cf2400} fill="white" id="Vector_15" />
          <path d={svgPaths.p1e1e5c80} fill="white" id="Vector_16" />
          <path d={svgPaths.p320d7300} fill="white" id="Vector_17" />
          <path d={svgPaths.p324166f0} fill="white" id="Vector_18" />
          <path d={svgPaths.p12126d80} fill="white" id="Vector_19" />
          <path d={svgPaths.p318c91a0} fill="white" id="Vector_20" />
          <path d={svgPaths.p13ee580} fill="white" id="Vector_21" />
          <path d={svgPaths.p2c8f5680} fill="white" id="Vector_22" />
          <path d={svgPaths.p2394ec00} fill="white" id="Vector_23" />
          <path d={svgPaths.p1ab85a40} fill="white" id="Vector_24" />
          <path d={svgPaths.p213f2700} fill="white" id="Vector_25" />
          <path d={svgPaths.p38b4da00} fill="white" id="Vector_26" />
          <path d={svgPaths.p2dcf3e80} fill="white" id="Vector_27" />
          <path d={svgPaths.p67a2a80} fill="white" id="Vector_28" />
          <path d={svgPaths.p74b1a40} fill="white" id="Vector_29" />
          <path d={svgPaths.p32b3e600} fill="white" id="Vector_30" />
          <path d={svgPaths.p1c343a00} fill="white" id="Vector_31" />
          <path d={svgPaths.p1e4c5300} fill="white" id="Vector_32" />
          <path d={svgPaths.p287f76f0} fill="white" id="Vector_33" />
          <path d={svgPaths.pb084f00} fill="white" id="Vector_34" />
          <path d={svgPaths.p54c2300} fill="white" id="Vector_35" />
          <path d={svgPaths.p18aa1440} fill="white" id="Vector_36" />
          <path d={svgPaths.p3948ee00} fill="white" id="Vector_37" />
          <path d={svgPaths.p176d4f80} fill="white" id="Vector_38" />
          <path d={svgPaths.p290db700} fill="white" id="Vector_39" />
          <path d={svgPaths.p3954b200} fill="white" id="Vector_40" />
          <path d={svgPaths.p360e8200} fill="white" id="Vector_41" />
          <path d={svgPaths.p24d79b80} fill="white" id="Vector_42" />
          <path d={svgPaths.p3cf80f00} fill="white" id="Vector_43" />
          <path d={svgPaths.p1f802000} fill="white" id="Vector_44" />
          <path d={svgPaths.p20e89800} fill="white" id="Vector_45" />
          <path d={svgPaths.p1dd97280} fill="white" id="Vector_46" />
          <path d={svgPaths.p10df1700} fill="white" id="Vector_47" />
          <path d={svgPaths.p128d4b00} fill="white" id="Vector_48" />
          <path d={svgPaths.p220f5b00} fill="white" id="Vector_49" />
          <path d={svgPaths.p19a82e80} fill="white" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0.12%_0_70.53%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="61.7004" preserveAspectRatio="none" viewBox="0 0 61.9245 61.7004" width="61.9245">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p15afe1f8} fill="url(#paint0_linear_0_381)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p28cdd900} fill="url(#paint1_linear_0_381)" id="Vector_2" />
          <path d={svgPaths.p3f39c700} fill="white" id="Vector_3" />
          <path d={svgPaths.p2ef4e380} fill="url(#paint2_linear_0_381)" id="Vector_4" />
          <path d={svgPaths.pa073800} fill="white" id="Vector_5" />
          <path d={svgPaths.pfe29f00} fill="url(#paint3_linear_0_381)" id="Vector_6" />
          <path d={svgPaths.p34308700} fill="white" id="Vector_7" />
          <path d={svgPaths.p366c0700} fill="url(#paint4_linear_0_381)" id="Vector_8" />
          <path d={svgPaths.p3a474100} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_381" x1="18.7206" x2="40.14" y1="44.4355" y2="20.6294">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_381" x1="32.7865" x2="60.5888" y1="11.4182" y2="20.2328">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_381" x1="13.6306" x2="19.0448" y1="27.8186" y2="-0.81849">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_381" x1="28.1838" x2="3.60702" y1="55.4526" y2="39.7578">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_381" x1="49.1221" x2="42.5274" y1="33.1283" y2="61.518">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Layer() {
  const navigate = useNavigate();
  return (
    <div className="absolute h-[61.7px] left-[100px] overflow-clip top-[41.65px] w-[211px]" data-name="Layer_1" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
      <Group />
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['29LT_Bukra_Variable:Medium',sans-serif] gap-[33px] items-center left-0 not-italic text-[13.39px] text-white top-0 whitespace-nowrap">
      <div className="leading-[0] relative shrink-0 text-right">
        <p className="leading-[19.129px] mb-0" dir="auto">
          تواصل
        </p>
        <p className="leading-[19.129px]" dir="auto">
          معـــــنا
        </p>
      </div>
      <div className="leading-[0] relative shrink-0 text-center">
        <p className="leading-[19.129px] mb-0" dir="auto">
          اللــــــــــوائح
        </p>
        <p className="leading-[19.129px]" dir="auto">
          و السياسات
        </p>
      </div>
      <div className="leading-[0] relative shrink-0 text-center">
        <p className="leading-[19.129px] mb-0" dir="auto">
          الحــــــوكمة
        </p>
        <p className="leading-[19.129px]" dir="auto">
          والشفافية
        </p>
      </div>
      <p className="leading-[19.129px] relative shrink-0 text-center" dir="auto">
        الشركاء
      </p>
      <p className="leading-[19.129px] relative shrink-0 text-right" dir="auto">
        الأثر
      </p>
      <div className="leading-[0] relative shrink-0 text-center">
        <p className="leading-[19.129px] mb-0" dir="auto">
          مـــــركـــز
        </p>
        <p className="leading-[19.129px]" dir="auto">
          المعرفة
        </p>
      </div>
      <p className="leading-[19.129px] relative shrink-0 text-center" dir="auto">
        المبادرات
      </p>
      <div className="leading-[0] relative shrink-0 text-center">
        <p className="leading-[19.129px] mb-0" dir="auto">
          البـــــــــرامج
        </p>
        <p className="leading-[19.129px]" dir="auto">
          والأكاديمية
        </p>
      </div>
      <div className="leading-[0] relative shrink-0 text-center">
        <p className="leading-[19.129px] mb-0" dir="auto">
          مجـــالات
        </p>
        <p className="leading-[19.129px]" dir="auto">
          التمكين
        </p>
      </div>
      <p className="leading-[19.129px] relative shrink-0 text-right" dir="auto">
        عن الجمعية
      </p>
      <p className="leading-[19.129px] relative shrink-0 text-right" dir="auto">
        الـرئيسية
      </p>
    </div>
  );
}

function IsolationMode1() {
  return (
    <div className="absolute h-[229.8px] left-[calc(66.67%-11.78px)] top-[764px] w-[176.225px] reveal-on-scroll" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_327)" id="Isolation_Mode">
          <path d={svgPaths.p31da9500} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3c907e00} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_327)" id="Isolation_Mode_2">
            <path d={svgPaths.p15e8c800} fill="black" id="Vector_3" />
            <path d={svgPaths.p22ee1400} fill="black" id="Vector_4" />
            <path d={svgPaths.p3da1c600} fill="black" id="Vector_5" />
            <path d={svgPaths.p2e0f0e00} fill="black" id="Vector_6" />
            <path d={svgPaths.pe361700} fill="black" id="Vector_7" />
            <path d={svgPaths.p14567f00} fill="black" id="Vector_8" />
            <path d={svgPaths.p4353e00} fill="black" id="Vector_9" />
            <path d={svgPaths.pd859880} fill="black" id="Vector_10" />
            <path d={svgPaths.p3e75f1f0} fill="black" id="Vector_11" />
            <path d={svgPaths.p7b44d00} fill="black" id="Vector_12" />
            <path d={svgPaths.p2b5f0400} fill="black" id="Vector_13" />
            <path d={svgPaths.p2a7ab780} fill="black" id="Vector_14" />
            <path d={svgPaths.p1ff24e80} fill="black" id="Vector_15" />
            <path d={svgPaths.p36066680} fill="black" id="Vector_16" />
            <path d={svgPaths.p146a3100} fill="black" id="Vector_17" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_327">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_327">
            <rect fill="white" height="103" transform="translate(42.7812 48)" width="92" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(66.67%-11.78px)] top-[764px]">
      <IsolationMode1 />
    </div>
  );
}

function Group6() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(66.67%-16.54px)] top-[764px]">
      <Group3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[218.296px] leading-[23.606px] left-[calc(66.67%+76.33px)] not-italic text-[#636363] text-[19.845px] text-center top-[1098.99px] w-[149.235px]" dir="auto">
        {e.card4Body}
      </p>
      <div className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-tight left-[calc(66.67%+76.33px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1037.86px] w-[149.235px]">
        {e.card4Title}
      </div>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[334.192px] left-[calc(66.67%-16.54px)] rounded-[15.876px] top-[1009.29px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode2() {
  return (
    <div className="absolute h-[229.8px] left-[calc(66.67%-11.78px)] top-[1370.47px] w-[176.225px] reveal-on-scroll" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_292)" id="Isolation_Mode">
          <path d={svgPaths.p3331b600} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p18f3d230} fill="#009DC4" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_292">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(66.67%-11.78px)] top-[1370.47px]">
      <IsolationMode2 />
    </div>
  );
}

function Group9() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(66.67%-16.54px)] top-[1370.47px]">
      <Group4 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[23.606px] left-[calc(66.67%+76.33px)] not-italic text-[#636363] text-[19.845px] text-center top-[1705.45px] w-[149.235px]" dir="auto">
        {e.card8Body}
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(66.67%+76.33px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1644.33px] w-[149.235px]">
        {e.card8Title}
      </div>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[307.996px] left-[calc(66.67%-16.54px)] rounded-[15.876px] top-[1615.75px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode3() {
  return (
    <div className="absolute h-[229.8px] left-[calc(50%+17.07px)] top-[764px] w-[176.225px] reveal-on-scroll reveal-delay-100" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_295)" id="Isolation_Mode">
          <path d={svgPaths.p9a70a80} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p2a46f000} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_295)" id="Isolation_Mode_2">
            <path d={svgPaths.p2b607700} fill="black" id="Vector_3" />
            <path d={svgPaths.p2d8d5300} fill="black" id="Vector_4" />
            <path d={svgPaths.p67d74c0} fill="black" id="Vector_5" />
            <path d={svgPaths.p274e4200} fill="black" id="Vector_6" />
            <path d={svgPaths.p887f700} fill="black" id="Vector_7" />
            <path d={svgPaths.p322c6480} fill="black" id="Vector_8" />
            <path d={svgPaths.p2f455080} fill="black" id="Vector_9" />
            <path d={svgPaths.p3368520} fill="black" id="Vector_10" />
            <path d={svgPaths.p37ef1580} fill="black" id="Vector_11" />
            <path d={svgPaths.p3bcccc00} fill="black" id="Vector_12" />
            <path d={svgPaths.pe5b6e00} fill="black" id="Vector_13" />
            <path d={svgPaths.p2c1d3a80} fill="black" id="Vector_14" />
            <path d={svgPaths.p251e1e70} fill="black" id="Vector_15" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_295">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_295">
            <rect fill="white" height="76" transform="translate(39.9331 70)" width="96" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(50%+17.07px)] top-[764px]">
      <IsolationMode3 />
    </div>
  );
}

function Group5() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(50%+12.3px)] top-[764px]">
      <Group7 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[218.296px] leading-[23.606px] left-[calc(50%+105.18px)] not-italic text-[#636363] text-[19.845px] text-center top-[1098.99px] w-[149.235px]" dir="auto">
        {e.card3Body}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] h-[251.636px] leading-[23.606px] left-[calc(50%+105.18px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1037.86px] w-[149.235px]" dir="auto">
        {e.card3Title}
      </p>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[334.192px] left-[calc(50%+12.3px)] rounded-[15.876px] top-[1009.29px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode4() {
  return (
    <div className="absolute h-[229.8px] left-[calc(50%+17.07px)] top-[1370.47px] w-[176.225px] reveal-on-scroll reveal-delay-100" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_406)" id="Isolation_Mode">
          <path d={svgPaths.p3ef11b00} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3c5be7c0} fill="#009DC4" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_406">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[calc(50%+17.07px)] top-[1370.47px]">
      <IsolationMode4 />
    </div>
  );
}

function Group10() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(50%+12.3px)] top-[1370.47px]">
      <Group8 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[23.606px] left-[calc(50%+105.18px)] not-italic text-[#636363] text-[19.845px] text-center top-[1705.45px] w-[149.235px]" dir="auto">
        {e.card7Body}
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(50%+105.18px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1644.33px] w-[149.235px]">
        {e.card7Title}
      </div>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[307.996px] left-[calc(50%+12.3px)] rounded-[15.876px] top-[1615.75px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode5() {
  return (
    <div className="absolute h-[229.8px] left-[calc(50%+17.07px)] top-[1950.74px] w-[176.225px] reveal-on-scroll" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_347)" id="Isolation_Mode">
          <path d={svgPaths.pf58c1c0} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p668d480} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_347)" id="Isolation_Mode_2">
            <path d={svgPaths.p14cbd600} fill="black" id="Vector_3" />
            <path d={svgPaths.p3b1e49c0} fill="black" id="Vector_4" />
            <path d={svgPaths.p319c4200} fill="black" id="Vector_5" />
            <path d={svgPaths.p132e6980} fill="black" id="Vector_6" />
            <path d={svgPaths.p2eaf72c0} fill="black" id="Vector_7" />
            <path d={svgPaths.p379a93f0} fill="black" id="Vector_8" />
            <path d={svgPaths.p1bb02c80} fill="black" id="Vector_9" />
            <path d={svgPaths.p2ac65100} fill="black" id="Vector_10" />
            <path d={svgPaths.p3c468d80} fill="black" id="Vector_11" />
            <path d={svgPaths.p127eab00} fill="black" id="Vector_12" />
            <path d={svgPaths.p2ebddd00} fill="black" id="Vector_13" />
            <path d={svgPaths.p31cbe000} fill="black" id="Vector_14" />
            <path d={svgPaths.p28d81780} fill="black" id="Vector_15" />
            <path d={svgPaths.p2cb8ba00} fill="black" id="Vector_16" />
            <path d={svgPaths.p39be7e00} fill="black" id="Vector_17" />
            <path d={svgPaths.pba0e700} fill="black" id="Vector_18" />
            <path d={svgPaths.p267f9e40} fill="black" id="Vector_19" />
            <path d={svgPaths.p2045b330} fill="black" id="Vector_20" />
            <path d={svgPaths.p33e6fc00} fill="black" id="Vector_21" />
            <path d={svgPaths.p25d40b00} fill="black" id="Vector_22" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_347">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_347">
            <rect fill="white" height="107" transform="translate(35.9331 50.2625)" width="103" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[calc(50%+17.07px)] top-[1950.74px]">
      <IsolationMode5 />
    </div>
  );
}

function Group13() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(50%+12.3px)] top-[1950.74px]">
      <Group11 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[23.606px] left-[calc(50%+105.18px)] not-italic text-[#636363] text-[19.845px] text-center top-[2265.88px] w-[149.235px]" dir="auto">
        {e.card10Body}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[23.606px] left-[calc(50%+105.18px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[2233.33px] w-[149.235px]" dir="auto">
        {e.card10Title}
      </p>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[271.481px] left-[calc(50%+12.3px)] rounded-[15.876px] top-[2196.02px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode6() {
  return (
    <div className="absolute h-[229.8px] left-[calc(33.33%+45.91px)] top-[764px] w-[176.225px] reveal-on-scroll reveal-delay-200" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_391)" id="Isolation_Mode">
          <path d={svgPaths.p18a97300} fill="#009DC4" id="Vector" />
          <path d={svgPaths.pc851f80} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_391)" id="Isolation_Mode_2">
            <path d={svgPaths.p1b3a3c00} fill="black" id="Vector_3" />
            <path d={svgPaths.pb71af80} fill="black" id="Vector_4" />
            <path d={svgPaths.p345ab480} fill="black" id="Vector_5" />
            <path d={svgPaths.pf23b3f0} fill="black" id="Vector_6" />
            <path d={svgPaths.p5437d00} fill="black" id="Vector_7" />
            <path d={svgPaths.p80f94f0} fill="black" id="Vector_8" />
            <path d={svgPaths.p2d34980} fill="black" id="Vector_9" />
            <path d={svgPaths.p3c3ec800} fill="black" id="Vector_10" />
            <path d={svgPaths.p21034f00} fill="black" id="Vector_11" />
            <path d={svgPaths.p1809b2f0} fill="black" id="Vector_12" />
            <path d={svgPaths.p165b2400} fill="black" id="Vector_13" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_391">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_391">
            <rect fill="white" height="86.56" transform="translate(41.0852 65)" width="93.74" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[calc(33.33%+45.91px)] top-[764px]">
      <IsolationMode6 />
    </div>
  );
}

function Group12() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(33.33%+41.15px)] top-[764px]">
      <Group14 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[218.296px] leading-[23.606px] left-[calc(33.33%+134.03px)] not-italic text-[#636363] text-[19.845px] text-center top-[1098.99px] w-[149.235px]" dir="auto">
        {e.card2Body}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[23.606px] left-[calc(33.33%+134.03px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1046.59px] w-[149.235px]" dir="auto">
        {e.card2Title}
      </p>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[334.192px] left-[calc(33.33%+41.15px)] rounded-[15.876px] top-[1009.29px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode7() {
  return (
    <div className="absolute h-[229.8px] left-[calc(33.33%+45.91px)] top-[1370.47px] w-[176.225px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_282)" id="Isolation_Mode">
          <path d={svgPaths.p9dd7500} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p234bf00} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_282)" id="Layer_1">
            <path d={svgPaths.p3de27df0} fill="black" id="Vector_3" />
            <path d={svgPaths.pb685200} fill="black" id="Vector_4" />
            <path d={svgPaths.p13808f00} fill="black" id="Vector_5" />
            <path d={svgPaths.pe842100} fill="black" id="Vector_6" />
            <path d={svgPaths.p6fa0080} fill="black" id="Vector_7" />
            <path d={svgPaths.p2a546400} fill="black" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_282">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_282">
            <rect fill="white" height="83" transform="translate(46.0852 65.5334)" width="84" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[calc(33.33%+45.91px)] top-[1370.47px]">
      <IsolationMode7 />
    </div>
  );
}

function Group15() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(33.33%+41.15px)] top-[1370.47px]">
      <Group16 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[23.606px] left-[calc(33.33%+134.03px)] not-italic text-[#636363] text-[19.845px] text-center top-[1705.45px] w-[149.235px]" dir="auto">
        {e.card6Body}
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(33.33%+134.03px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1653.06px] w-[149.235px]">
        {e.card6Title}
      </div>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[307.996px] left-[calc(33.33%+41.15px)] rounded-[15.876px] top-[1615.75px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode8() {
  return (
    <div className="absolute h-[229.8px] left-[calc(33.33%+45.91px)] top-[1950.74px] w-[176.225px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_240)" id="Isolation_Mode">
          <path d={svgPaths.p23ed0500} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3b49d00} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_240)" id="Isolation_Mode_2">
            <path d={svgPaths.p362fe280} fill="black" id="Vector_3" />
            <path d={svgPaths.p279bc100} fill="black" id="Vector_4" />
            <path d={svgPaths.p1997ac80} fill="black" id="Vector_5" />
            <path d={svgPaths.p32eb2000} fill="black" id="Vector_6" />
            <path d={svgPaths.p23d22f00} fill="black" id="Vector_7" />
            <path d={svgPaths.p26abe580} fill="black" id="Vector_8" />
            <path d={svgPaths.p9d7db00} fill="black" id="Vector_9" />
            <path d={svgPaths.pbedf080} fill="black" id="Vector_10" />
            <path d={svgPaths.pc997980} fill="black" id="Vector_11" />
            <path d={svgPaths.p2734ba40} fill="black" id="Vector_12" />
            <path d={svgPaths.p8c6a600} fill="black" id="Vector_13" />
            <path d={svgPaths.p2979480} fill="black" id="Vector_14" />
            <path d={svgPaths.pc7a8500} fill="black" id="Vector_15" />
            <path d={svgPaths.pca547c0} fill="black" id="Vector_16" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_240">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_240">
            <rect fill="white" height="85" transform="translate(41.0852 55.2625)" width="95" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[calc(33.33%+45.91px)] top-[1950.74px]">
      <IsolationMode8 />
    </div>
  );
}

function Group17() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(33.33%+41.15px)] top-[1950.74px]">
      <Group18 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[23.606px] left-[calc(33.33%+134.03px)] not-italic text-[#636363] text-[19.845px] text-center top-[2265.88px] w-[149.235px]" dir="auto">
        {e.card9Body}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[23.606px] left-[calc(33.33%+134.03px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[2233.33px] w-[149.235px]" dir="auto">
        {e.card9Title}
      </p>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[271.481px] left-[calc(33.33%+41.15px)] rounded-[15.876px] top-[2196.02px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode9() {
  return (
    <div className="absolute h-[229.8px] left-[calc(16.67%+74.76px)] top-[764px] w-[176.225px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_258)" id="Isolation_Mode">
          <path d={svgPaths.p3b3dfa00} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p228d9e00} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_258)" id="Isolation_Mode_2">
            <path d={svgPaths.p3d27a900} fill="black" id="Vector_3" />
            <path d={svgPaths.p31310e00} fill="black" id="Vector_4" />
            <path d={svgPaths.p37c18a00} fill="black" id="Vector_5" />
            <path d={svgPaths.p253eee80} fill="black" id="Vector_6" />
            <path d={svgPaths.p36344cf0} fill="black" id="Vector_7" />
            <path d={svgPaths.p847f3f0} fill="black" id="Vector_8" />
            <path d={svgPaths.p331f9c00} fill="black" id="Vector_9" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_258">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_258">
            <rect fill="white" height="87.24" transform="translate(42.2371 65)" width="92.11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[calc(16.67%+74.76px)] top-[764px]">
      <IsolationMode9 />
    </div>
  );
}

function Group19() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(16.67%+70px)] top-[764px]">
      <Group20 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[218.296px] leading-[23.606px] left-[calc(16.67%+162.88px)] not-italic text-[#636363] text-[19.845px] text-center top-[1098.99px] w-[149.235px]" dir="auto">
        {e.card1Body}
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(16.67%+162.88px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1037.86px] w-[149.235px]">
        {e.card1Title}
      </div>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[334.192px] left-[calc(16.67%+70px)] rounded-[15.876px] top-[1009.29px] w-[186.544px]" />
    </div>
  );
}

function IsolationMode10() {
  return (
    <div className="absolute h-[229.8px] left-[calc(16.67%+74.76px)] top-[1370.47px] w-[176.225px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.8" preserveAspectRatio="none" viewBox="0 0 176.225 229.8" width="176.225">
        <g clipPath="url(#clip0_0_173)" id="Isolation_Mode">
          <path d={svgPaths.p164f69a0} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3274e400} fill="#009DC4" id="Vector_2" />
          <g clipPath="url(#clip1_0_173)" id="Layer_1">
            <path d={svgPaths.p316e6980} fill="black" id="Vector_3" />
            <path d={svgPaths.p2cecb300} fill="black" id="Vector_4" />
            <path d={svgPaths.p11c6b040} fill="black" id="Vector_5" />
            <path d={svgPaths.pf1bef00} fill="black" id="Vector_6" />
            <path d={svgPaths.p1c458100} fill="black" id="Vector_7" />
            <path d={svgPaths.p37752600} fill="black" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_173">
            <rect fill="white" height="229.8" width="176.225" />
          </clipPath>
          <clipPath id="clip1_0_173">
            <rect fill="white" height="87" transform="translate(38.2371 44.5334)" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[calc(16.67%+74.76px)] top-[1370.47px]">
      <IsolationMode10 />
    </div>
  );
}

function Group21() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="absolute contents left-[calc(16.67%+70px)] top-[1370.47px]">
      <Group22 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[218.296px] leading-[23.606px] left-[calc(16.67%+162.88px)] not-italic text-[#636363] text-[19.845px] text-center top-[1705.45px] w-[149.235px]" dir="auto">
        {e.card5Body}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[23.606px] left-[calc(16.67%+162.88px)] not-italic text-[#009dc4] text-[23.814px] text-center top-[1644.33px] w-[149.235px]" dir="auto">
        {e.card5Title}
      </p>
      <div className="absolute border-[#009dc4] border-[1.588px] border-solid h-[307.996px] left-[calc(16.67%+70px)] rounded-[15.876px] top-[1615.75px] w-[186.544px]" />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute h-[92px] left-[calc(66.67%+25px)] top-[1425px] w-[105px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="92" preserveAspectRatio="none" viewBox="0 0 105 92" width="105">
        <g clipPath="url(#clip0_0_159)" id="Layer_1">
          <path d={svgPaths.p1887c100} fill="black" id="Vector" />
          <path d={svgPaths.p113a7900} fill="black" id="Vector_2" />
          <path d={svgPaths.p205ea400} fill="black" id="Vector_3" />
          <path d={svgPaths.p1e221d00} fill="black" id="Vector_4" />
          <path d={svgPaths.p27dec780} fill="black" id="Vector_5" />
          <path d={svgPaths.p3606f780} fill="black" id="Vector_6" />
          <path d={svgPaths.p11216500} fill="black" id="Vector_7" />
          <path d={svgPaths.p3c645d00} fill="black" id="Vector_8" />
          <path d={svgPaths.p1e262740} fill="black" id="Vector_9" />
          <path d={svgPaths.p2bc69e80} fill="black" id="Vector_10" />
          <path d={svgPaths.p26938900} fill="black" id="Vector_11" />
          <path d={svgPaths.p2a44b700} fill="black" id="Vector_12" />
          <path d={svgPaths.p18a09080} fill="black" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_0_159">
            <rect fill="white" height="92" width="105" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute h-[100px] left-[calc(50%+57px)] top-[1422px] w-[104px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 104 100" width="104">
        <g clipPath="url(#clip0_0_269)" id="Layer_1">
          <path d={svgPaths.p2c6efba0} fill="black" id="Vector" />
          <path d={svgPaths.p1a545400} fill="black" id="Vector_2" />
          <path d={svgPaths.p30d75800} fill="black" id="Vector_3" />
          <path d={svgPaths.p17e5a300} fill="black" id="Vector_4" />
          <path d={svgPaths.p363c7980} fill="black" id="Vector_5" />
          <path d={svgPaths.p31d95000} fill="black" id="Vector_6" />
          <path d={svgPaths.p115b5500} fill="black" id="Vector_7" />
          <path d={svgPaths.p16cc7800} fill="black" id="Vector_8" />
          <path d={svgPaths.p39239bf0} fill="black" id="Vector_9" />
          <path d={svgPaths.p33f0f5c0} fill="black" id="Vector_10" />
          <path d={svgPaths.p4404200} fill="black" id="Vector_11" />
          <path d={svgPaths.p3b9af380} fill="black" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_0_269">
            <rect fill="white" height="100" width="104" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LandingPage() {
  const { content } = useContent();
  const e = content.empowerment;
  return (
    <div className="relative bg-white h-[2786px] mx-auto overflow-clip w-[1440px]" data-name="Landing Page">
      <Header />
      <Layer />
      <p className="-translate-x-full [word-break:break-word] absolute bottom-[87.11%] font-['Hacen_Casablanca:Regular',sans-serif] leading-[58px] left-[calc(25%+245px)] not-italic text-[55px] text-right text-white top-[10.8%] w-[404px] animate-hero-reveal" dir="auto">
        {e.heroTitle}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+485px)] not-italic text-[28px] text-right text-white top-[370px] w-[372px]" dir="auto">
        {e.heroSubtitle}
      </p>
      <Footer className="absolute bottom-0 h-[268px] left-0 w-[1440px]" />
      <div className="absolute border border-solid border-white h-[411px] left-[100px] rounded-[30px] top-[205px] w-[780px]" />
      <div className="absolute h-[583px] left-[calc(50%+10px)] top-[124px] w-[608px] animate-hero-image" data-name="Layer 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.72%] left-[-0.06%] max-w-none top-0 w-[100.11%]" src={imgLayer11} />
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]" data-name="NAV Bar">
        <NavigationBar />
      </div>
      <Group6 />
      <Group9 />
      <Group5 />
      <Group10 />
      <Group13 />
      <Group12 />
      <Group15 />
      <Group17 />
      <Group19 />
      <Group21 />
      <Layer1 />
      <Layer2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <LandingPage />
  );
}