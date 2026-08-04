import svgPaths from "./svg-g81nfklomr";
import { useNavigate } from "react-router";
import { NavigationBar } from "../../app/components/NavigationBar";
import imgLayer11 from "./922ea633b05e4bd1260330b71876671f04ddc610.png";
import imgChatGptImageJul282026At114858Am3 from "./bd66a5ff4dbf9b7ddbe12ddc7cc2a32c5b9d4547.png";
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
                <path clipRule="evenodd" d={svgPaths.p1191e780} fill="url(#paint0_linear_0_341)" fillRule="evenodd" id="Vector" />
                <path d={svgPaths.p37de6300} fill="url(#paint1_linear_0_341)" id="Vector_2" />
                <path d={svgPaths.p1ee50c00} fill="white" id="Vector_3" />
                <path d={svgPaths.p35d15700} fill="url(#paint2_linear_0_341)" id="Vector_4" />
                <path d={svgPaths.pa998900} fill="white" id="Vector_5" />
                <path d={svgPaths.p1e886100} fill="url(#paint3_linear_0_341)" id="Vector_6" />
                <path d={svgPaths.p2b6c6cf0} fill="white" id="Vector_7" />
                <path d={svgPaths.p148cbb00} fill="url(#paint4_linear_0_341)" id="Vector_8" />
                <path d={svgPaths.p1da39e80} fill="white" id="Vector_9" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_341" x1="25.9072" x2="55.5492" y1="61.4936" y2="28.5487">
                  <stop stopColor="#92278F" />
                  <stop offset="0.5" stopColor="#3777BC" />
                  <stop offset="1" stopColor="#00C0F3" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_341" x1="45.3728" x2="83.848" y1="15.8015" y2="27.9999">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_341" x1="18.8632" x2="26.3558" y1="38.4981" y2="-1.13239">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_341" x1="39.0032" x2="4.99172" y1="76.74" y2="55.0202">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_341" x1="67.9794" x2="58.8531" y1="45.8459" y2="85.134">
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
        <g clipPath="url(#clip0_0_246)" id="Isolation_Mode">
          <path clipRule="evenodd" d={svgPaths.peb53500} fill="url(#paint0_linear_0_246)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p23356400} fill="url(#paint1_linear_0_246)" id="Vector_2" />
          <path d={svgPaths.pc1ee300} fill="white" id="Vector_3" />
          <path d={svgPaths.p2a8fec80} fill="url(#paint2_linear_0_246)" id="Vector_4" />
          <path d={svgPaths.p1fa3700} fill="white" id="Vector_5" />
          <path d={svgPaths.p2a0ab200} fill="url(#paint3_linear_0_246)" id="Vector_6" />
          <path d={svgPaths.p3439d200} fill="white" id="Vector_7" />
          <path d={svgPaths.p3d60f00} fill="url(#paint4_linear_0_246)" id="Vector_8" />
          <path d={svgPaths.p38c2d00} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_246" x1="146.929" x2="315.214" y1="349.085" y2="162.207">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_246" x1="257.336" x2="475.6" y1="89.7012" y2="158.842">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_246" x1="106.981" x2="149.548" y1="218.549" y2="-6.41074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_246" x1="221.221" x2="28.1982" y1="435.636" y2="312.485">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_246" x1="385.567" x2="333.719" y1="260.266" y2="483.276">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <clipPath id="clip0_0_246">
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
          <path d={svgPaths.p382dde40} fill="white" id="Vector_2" />
          <path d={svgPaths.p13379df0} fill="white" id="Vector_3" />
          <path d={svgPaths.p2f856780} fill="white" id="Vector_4" />
          <path d={svgPaths.p36878300} fill="white" id="Vector_5" />
          <path d={svgPaths.p212b4800} fill="white" id="Vector_6" />
          <path d={svgPaths.p2feb6e80} fill="white" id="Vector_7" />
          <path d={svgPaths.p37b68580} fill="white" id="Vector_8" />
          <path d={svgPaths.p1478be00} fill="white" id="Vector_9" />
          <path d={svgPaths.p3b6ffd00} fill="white" id="Vector_10" />
          <path d={svgPaths.p3e827900} fill="white" id="Vector_11" />
          <path d={svgPaths.p15f6b400} fill="white" id="Vector_12" />
          <path d={svgPaths.p256a8d00} fill="white" id="Vector_13" />
          <path d={svgPaths.pda4e000} fill="white" id="Vector_14" />
          <path d={svgPaths.p325e8700} fill="white" id="Vector_15" />
          <path d={svgPaths.p31b9da00} fill="white" id="Vector_16" />
          <path d={svgPaths.p14cbab80} fill="white" id="Vector_17" />
          <path d={svgPaths.p2337bf80} fill="white" id="Vector_18" />
          <path d={svgPaths.pb86bac0} fill="white" id="Vector_19" />
          <path d={svgPaths.p4d99980} fill="white" id="Vector_20" />
          <path d={svgPaths.pef38f80} fill="white" id="Vector_21" />
          <path d={svgPaths.p2c8f5680} fill="white" id="Vector_22" />
          <path d={svgPaths.p2394ec00} fill="white" id="Vector_23" />
          <path d={svgPaths.p1ab85a40} fill="white" id="Vector_24" />
          <path d={svgPaths.p213f2700} fill="white" id="Vector_25" />
          <path d={svgPaths.p38b4da00} fill="white" id="Vector_26" />
          <path d={svgPaths.p2dcf3e80} fill="white" id="Vector_27" />
          <path d={svgPaths.p1954c200} fill="white" id="Vector_28" />
          <path d={svgPaths.p74b1a40} fill="white" id="Vector_29" />
          <path d={svgPaths.p920d300} fill="white" id="Vector_30" />
          <path d={svgPaths.p3605b180} fill="white" id="Vector_31" />
          <path d={svgPaths.p1fb65870} fill="white" id="Vector_32" />
          <path d={svgPaths.p13edd200} fill="white" id="Vector_33" />
          <path d={svgPaths.pb084f00} fill="white" id="Vector_34" />
          <path d={svgPaths.p374d1480} fill="white" id="Vector_35" />
          <path d={svgPaths.p2c4b3732} fill="white" id="Vector_36" />
          <path d={svgPaths.p3948ee00} fill="white" id="Vector_37" />
          <path d={svgPaths.p2a4fe700} fill="white" id="Vector_38" />
          <path d={svgPaths.p3e027400} fill="white" id="Vector_39" />
          <path d={svgPaths.p288e4b00} fill="white" id="Vector_40" />
          <path d={svgPaths.p234a0f00} fill="white" id="Vector_41" />
          <path d={svgPaths.p2bf0ecf0} fill="white" id="Vector_42" />
          <path d={svgPaths.p3cf80f00} fill="white" id="Vector_43" />
          <path d={svgPaths.p1f802000} fill="white" id="Vector_44" />
          <path d={svgPaths.p3d25f80} fill="white" id="Vector_45" />
          <path d={svgPaths.p29ba4500} fill="white" id="Vector_46" />
          <path d={svgPaths.p9fad650} fill="white" id="Vector_47" />
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
      <svg className="absolute block inset-0 size-full" fill="none" height="61.7004" preserveAspectRatio="none" viewBox="0 0 61.924 61.7004" width="61.924">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a0a4b00} fill="url(#paint0_linear_0_331)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p336c1180} fill="url(#paint1_linear_0_331)" id="Vector_2" />
          <path d={svgPaths.p3f39c700} fill="white" id="Vector_3" />
          <path d={svgPaths.pb431580} fill="url(#paint2_linear_0_331)" id="Vector_4" />
          <path d={svgPaths.pa073800} fill="white" id="Vector_5" />
          <path d={svgPaths.p2528470} fill="url(#paint3_linear_0_331)" id="Vector_6" />
          <path d={svgPaths.p34308700} fill="white" id="Vector_7" />
          <path d={svgPaths.p10607800} fill="url(#paint4_linear_0_331)" id="Vector_8" />
          <path d={svgPaths.p3a474100} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_331" x1="18.7211" x2="40.1405" y1="44.4355" y2="20.6294">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_331" x1="32.786" x2="60.5883" y1="11.4182" y2="20.2328">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_331" x1="13.6311" x2="19.0452" y1="27.8186" y2="-0.818491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_331" x1="28.1841" x2="3.60729" y1="55.4526" y2="39.7578">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_331" x1="49.1217" x2="42.527" y1="33.1283" y2="61.518">
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

function Frame1() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Hacen_Casablanca_Light:Regular',sans-serif] gap-[70px] items-start leading-[0] left-[calc(8.33%+150px)] not-italic text-[#6e6e6e] text-[0px] text-right top-[4089px] w-[900px] reveal-on-scroll">
      <p className="relative shrink-0 w-full" dir="auto">
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[#009dc4] text-[45px]">{k.faq1Q}</span>
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[55px]">
          <br aria-hidden />
        </span>
        <span className="leading-[41px] text-[30px]">{k.faq1A}</span>
      </p>
      <p className="relative shrink-0 w-full" dir="auto">
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[#009dc4] text-[45px]">{k.faq2Q}</span>
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[55px]">
          <br aria-hidden />
        </span>
        <span className="leading-[41px] text-[30px]">{k.faq2A}</span>
      </p>
      <p className="relative shrink-0 w-full" dir="auto">
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[#009dc4] text-[45px]">{k.faq3Q}</span>
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[55px]">
          <br aria-hidden />
        </span>
        <span className="leading-[41px] text-[30px]">{k.faq3A}</span>
      </p>
      <p className="relative shrink-0 w-full" dir="auto">
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[#009dc4] text-[45px]">{k.faq4Q}</span>
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[55px]">
          <br aria-hidden />
        </span>
        <span className="leading-[41px] text-[30px]">{k.faq4A}</span>
      </p>
      <p className="relative shrink-0 w-full" dir="auto">
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[#009dc4] text-[45px]">{k.faq5Q}</span>
        <span className="font-['Hacen_Casablanca:Regular',sans-serif] leading-[41px] text-[55px]">
          <br aria-hidden />
        </span>
        <span className="leading-[41px] text-[30px]">{k.faq5A}</span>
      </p>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute h-[302px] left-[calc(58.33%-16px)] top-[3787px] w-[330px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="302" preserveAspectRatio="none" viewBox="0 0 330 302" width="330">
        <g clipPath="url(#clip0_0_270)" id="Layer_1">
          <path d={svgPaths.p15207300} fill="white" id="Vector" />
          <path d={svgPaths.p4036b00} fill="white" id="Vector_2" />
          <path d={svgPaths.p134a52f0} fill="white" id="Vector_3" />
          <path d={svgPaths.p11ff9bf0} fill="white" id="Vector_4" />
          <path d={svgPaths.p2684e780} fill="white" id="Vector_5" />
          <path d={svgPaths.p10fc9d80} fill="white" id="Vector_6" />
          <path d={svgPaths.p19e2a80} fill="white" id="Vector_7" />
          <path d={svgPaths.p11c90d80} fill="white" id="Vector_8" />
          <g id="Group">
            <path d={svgPaths.pd206200} fill="white" id="Vector_9" />
            <path d={svgPaths.p2cd601f0} fill="white" id="Vector_10" />
            <path d={svgPaths.p12ea0700} fill="white" id="Vector_11" />
            <path d={svgPaths.p1606d780} fill="white" id="Vector_12" />
            <path d={svgPaths.p5091400} fill="white" id="Vector_13" />
            <path d={svgPaths.p23d4f080} fill="white" id="Vector_14" />
            <path d={svgPaths.p50929f0} fill="white" id="Vector_15" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p138bb000} fill="white" id="Vector_16" />
            <path d={svgPaths.p18c4e880} fill="white" id="Vector_17" />
            <path d={svgPaths.p1ed64740} fill="white" id="Vector_18" />
            <path d={svgPaths.p9757400} fill="white" id="Vector_19" />
            <path d={svgPaths.p2c1ef00} fill="white" id="Vector_20" />
            <path d={svgPaths.p16fa5e40} fill="white" id="Vector_21" />
            <path d={svgPaths.p1dce8300} fill="white" id="Vector_22" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_270">
            <rect fill="white" height="302" width="330" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(8.33%+85px)] top-[3783px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[1240px] left-[calc(8.33%+85px)] rounded-[30px] top-[3783px] w-[1030px] reveal-on-scroll" />
      <Frame1 />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-[30px] top-[3783px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[120.99%] left-0 max-w-none top-[-0.14%] w-full" src={imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(45.83%+80px)] not-italic text-[55px] text-right text-white top-[3857px] whitespace-nowrap">
        <p className="leading-[54px] mb-0" dir="auto">
          الأسئــلة
        </p>
        <p className="leading-[54px]" dir="auto">
          الشــائعة
        </p>
      </div>
      <Layer1 />
    </div>
  );
}

function IsolationMode1() {
  return (
    <div className="absolute h-[212.927px] left-[calc(66.67%-19px)] top-[782.54px] w-[262px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="212.927" preserveAspectRatio="none" viewBox="0 0 262 212.927" width="262">
        <g id="Isolation_Mode">
          <path d={svgPaths.p2866f440} fill="white" id="Vector" />
          <path d={svgPaths.p7e83c80} fill="white" id="Vector_2" />
          <path d={svgPaths.p28060cf0} fill="white" id="Vector_3" />
          <path d={svgPaths.p2cf19a00} fill="white" id="Vector_4" />
          <path d={svgPaths.p1b938f80} fill="white" id="Vector_5" />
          <path d={svgPaths.p2be53180} fill="white" id="Vector_6" />
          <path d={svgPaths.p33d00600} fill="white" id="Vector_7" />
          <path d={svgPaths.p249305f2} fill="white" id="Vector_8" />
          <path d={svgPaths.p20762380} fill="white" id="Vector_9" />
          <path d={svgPaths.pb57a200} fill="white" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[761px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[762px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[761px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section1Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[859px] w-[406px]" dir="auto">
        {k.section1Title}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[1056px] w-[927px]" dir="auto">
        {k.section1Body}
      </p>
      <IsolationMode1 />
    </div>
  );
}

function IsolationMode2() {
  return (
    <div className="absolute inset-[23.88%_18.33%_72.35%_67.08%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="201" preserveAspectRatio="none" viewBox="0 0 210 201" width="210">
        <g clipPath="url(#clip0_0_298)" id="Isolation_Mode">
          <path d={svgPaths.p32920600} fill="white" id="Vector" />
          <path d={svgPaths.pad07580} fill="white" id="Vector_2" />
          <path d={svgPaths.p10c27280} fill="white" id="Vector_3" />
          <path d={svgPaths.p813e830} fill="white" id="Vector_4" />
          <path d={svgPaths.p20e200} fill="white" id="Vector_5" />
          <path d={svgPaths.p60516f0} fill="white" id="Vector_6" />
          <path d={svgPaths.p36353000} fill="white" id="Vector_7" />
          <path d={svgPaths.p1f3d3800} fill="white" id="Vector_8" />
          <path d={svgPaths.p3b759a00} fill="white" id="Vector_9" />
          <path d={svgPaths.p29d02e00} fill="white" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_0_298">
            <rect fill="white" height="201" width="210" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group5() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[1246px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[1247px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[1246px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section2Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[1344px] w-[406px]" dir="auto">
        {k.section2Title}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[1541px] w-[927px]" dir="auto">
        {k.section2Body}
      </p>
      <IsolationMode2 />
    </div>
  );
}

function IsolationMode3() {
  return (
    <div className="absolute h-[198px] left-[calc(66.67%-6px)] top-[1756px] w-[231px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="198" preserveAspectRatio="none" viewBox="0 0 231 198" width="231">
        <g clipPath="url(#clip0_0_158)" id="Isolation_Mode">
          <path d={svgPaths.p3ced0200} fill="white" id="Vector" />
          <path d={svgPaths.p10662680} fill="white" id="Vector_2" />
          <path d={svgPaths.p2e35c080} fill="white" id="Vector_3" />
          <path d={svgPaths.p8054cf0} fill="white" id="Vector_4" />
          <path d={svgPaths.p7597200} fill="white" id="Vector_5" />
          <path d={svgPaths.p2b1fc880} fill="white" id="Vector_6" />
          <path d={svgPaths.p3e31da80} fill="white" id="Vector_7" />
          <path d={svgPaths.p3bc82800} fill="white" id="Vector_8" />
          <path d={svgPaths.p22e81100} fill="white" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_0_158">
            <rect fill="white" height="198" width="231" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group6() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[1730px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[1731px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[1730px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section3Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[1828px] w-[406px]" dir="auto">
        {k.section3Title}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[2047px] w-[927px]" dir="auto">
        {k.section3Body}
      </p>
      <IsolationMode3 />
    </div>
  );
}

function IsolationMode4() {
  return (
    <div className="absolute h-[203px] left-[calc(66.67%+6px)] top-[2235px] w-[210px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="203" preserveAspectRatio="none" viewBox="0 0 210 203" width="210">
        <g clipPath="url(#clip0_0_234)" id="Isolation_Mode">
          <path d={svgPaths.p6e46080} fill="white" id="Vector" />
          <path d={svgPaths.p3c134700} fill="white" id="Vector_2" />
          <path d={svgPaths.pf274380} fill="white" id="Vector_3" />
          <path d={svgPaths.p29576e80} fill="white" id="Vector_4" />
          <path d={svgPaths.p2785a370} fill="white" id="Vector_5" />
          <path d={svgPaths.p149a3b00} fill="white" id="Vector_6" />
          <path d={svgPaths.p1c909b00} fill="white" id="Vector_7" />
          <path d={svgPaths.p28219bf0} fill="white" id="Vector_8" />
          <path d={svgPaths.p18e885f0} fill="white" id="Vector_9" />
          <path d={svgPaths.p27be7900} fill="white" id="Vector_10" />
          <path d={svgPaths.p3bd12b00} fill="white" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_0_234">
            <rect fill="white" height="203" width="210" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[2214px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[2215px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[2214px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section4Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[2312px] w-[406px]" dir="auto">
        {k.section4Title}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[2531px] w-[927px]" dir="auto">
        {k.section4Body}
      </p>
      <IsolationMode4 />
    </div>
  );
}

function IsolationMode5() {
  return (
    <div className="absolute h-[175px] left-[calc(66.67%-6px)] top-[2732px] w-[223px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="175" preserveAspectRatio="none" viewBox="0 0 223 175" width="223">
        <g clipPath="url(#clip0_0_256)" id="Isolation_Mode">
          <path d={svgPaths.p4b1b880} fill="white" id="Vector" />
          <path d={svgPaths.p3def7c80} fill="white" id="Vector_2" />
          <path d={svgPaths.p1223f400} fill="white" id="Vector_3" />
          <path d={svgPaths.p3b3a5380} fill="white" id="Vector_4" />
          <path d={svgPaths.p3cd83800} fill="white" id="Vector_5" />
          <path d={svgPaths.p394d4500} fill="white" id="Vector_6" />
          <path d={svgPaths.p36465d00} fill="white" id="Vector_7" />
          <path d={svgPaths.p1e82bdf0} fill="white" id="Vector_8" />
          <path d={svgPaths.p8513340} fill="white" id="Vector_9" />
          <path d={svgPaths.pd271600} fill="white" id="Vector_10" />
          <path d={svgPaths.pad8aa00} fill="white" id="Vector_11" />
          <path d={svgPaths.p248bd300} fill="white" id="Vector_12" />
          <path d={svgPaths.pdc57d00} fill="white" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_0_256">
            <rect fill="white" height="175" width="223" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group8() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[2699px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[2700px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[2699px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section5Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[2797px] w-[406px]" dir="auto">
        {k.section5Title}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[3003px] w-[927px]" dir="auto">
        {k.section5Body}
      </p>
      <IsolationMode5 />
    </div>
  );
}

function IsolationMode6() {
  return (
    <div className="absolute h-[189px] left-[calc(66.67%+8px)] top-[3213px] w-[222px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="189" preserveAspectRatio="none" viewBox="0 0 222 189" width="222">
        <g clipPath="url(#clip0_0_315)" id="Isolation_Mode">
          <path d={svgPaths.p4aa9000} fill="white" id="Vector" />
          <path d={svgPaths.p1c4171c0} fill="white" id="Vector_2" />
          <path d={svgPaths.p3b2cea80} fill="white" id="Vector_3" />
          <path d={svgPaths.pa45bd00} fill="white" id="Vector_4" />
          <path d={svgPaths.pd195620} fill="white" id="Vector_5" />
          <path d={svgPaths.p2f12af80} fill="white" id="Vector_6" />
          <path d={svgPaths.p3a12c500} fill="white" id="Vector_7" />
          <path d={svgPaths.p3bc5c600} fill="white" id="Vector_8" />
          <path d={svgPaths.p15054e00} fill="white" id="Vector_9" />
          <path d={svgPaths.p3feb1180} fill="white" id="Vector_10" />
          <path d={svgPaths.p1043b640} fill="white" id="Vector_11" />
          <path d={svgPaths.p15067800} fill="white" id="Vector_12" />
          <path d={svgPaths.p12afa500} fill="white" id="Vector_13" />
          <path d={svgPaths.p84ece00} fill="white" id="Vector_14" />
          <path d={svgPaths.pf490600} fill="white" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_0_315">
            <rect fill="white" height="189" width="222" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group9() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="absolute contents left-[calc(8.33%+87px)] top-[3183px]">
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[444px] left-[calc(8.33%+87px)] rounded-[30px] top-[3184px] w-[1028px] reveal-on-scroll" />
      <div className="absolute h-[256px] left-[calc(8.33%+87px)] rounded-tl-[30px] rounded-tr-[30px] top-[3183px] w-[1028px]" data-name="ChatGPT Image Jul 28, 2026 at 11_48_58 AM 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[30px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[147.71%] left-0 max-w-none top-[-23.92%] w-[122.08%]" src={k.section6Image || imgChatGptImageJul282026At114858Am3} />
        </div>
      </div>
      <IsolationMode6 />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-[calc(50%+211px)] not-italic text-[55px] text-right text-white top-[3281px] w-[406px]" dir="auto">
        {k.section6Title}
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[0] left-[calc(8.33%+1065px)] not-italic text-[#6e6e6e] text-[28px] text-right top-[3487px] w-[927px] whitespace-pre-wrap">
        <p className="leading-[30px] mb-[8.521232604980469px]" dir="auto">
          {k.section6Body}
        </p>
        <p className="leading-[30px]" dir="auto">{` `}</p>
      </div>
    </div>
  );
}

function LandingPage() {
  const { content } = useContent();
  const k = content.knowledge;
  return (
    <div className="relative bg-white h-[5330px] mx-auto overflow-clip w-[1440px]" data-name="Landing Page">
      <div className="absolute bg-[#eee] h-[1548px] left-0 top-[3703px] w-[1440px]" />
      <Header />
      <Layer />
      <p className="-translate-x-full [word-break:break-word] absolute bottom-[93.73%] font-['Hacen_Casablanca:Regular',sans-serif] leading-[58px] left-[calc(33.33%+230px)] not-italic text-[55px] text-right text-white top-[5.18%] w-[404px]" dir="auto">
        {k.heroTitle}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[710px] not-italic text-[28px] text-right text-white top-[345px] w-[555px]" dir="auto">
        {k.heroSubtitle}
      </p>
      <Footer className="absolute bottom-0 h-[268px] left-0 w-[1440px]" />
      <div className="absolute border border-solid border-white h-[411px] left-[100px] rounded-[30px] top-[205px] w-[780px]" />
      <div className="absolute h-[583px] left-[calc(50%+10px)] top-[124px] w-[608px] animate-hero-image" data-name="Layer 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.72%] left-[-0.06%] max-w-none top-0 w-[100.11%]" src={k.heroImage || imgLayer11} />
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]" data-name="NAV Bar">
        <NavigationBar />
      </div>
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

export default function Frame2() {
  return (
    <LandingPage />
  );
}