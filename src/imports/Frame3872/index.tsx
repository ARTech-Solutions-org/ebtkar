import svgPaths from "./svg-pazhbispa7";
import imgLayer11 from "./922ea633b05e4bd1260330b71876671f04ddc610.png";
import { useNavigate } from "react-router";
import { NavigationBar } from "../../app/components/NavigationBar";
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
            <svg className="absolute block inset-0 size-full" fill="none" height="85.3864" preserveAspectRatio="none" viewBox="0 0 85.6964 85.3864" width="85.6964">
              <g id="Group">
                <path clipRule="evenodd" d={svgPaths.p1191e780} fill="url(#paint0_linear_0_161)" fillRule="evenodd" id="Vector" />
                <path d={svgPaths.p37de6300} fill="url(#paint1_linear_0_161)" id="Vector_2" />
                <path d={svgPaths.p1ee50c00} fill="white" id="Vector_3" />
                <path d={svgPaths.p35d15700} fill="url(#paint2_linear_0_161)" id="Vector_4" />
                <path d={svgPaths.pa998900} fill="white" id="Vector_5" />
                <path d={svgPaths.p1e886100} fill="url(#paint3_linear_0_161)" id="Vector_6" />
                <path d={svgPaths.p2b6c6cf0} fill="white" id="Vector_7" />
                <path d={svgPaths.p148cbb00} fill="url(#paint4_linear_0_161)" id="Vector_8" />
                <path d={svgPaths.p1da39e80} fill="white" id="Vector_9" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_161" x1="25.9072" x2="55.5492" y1="61.4936" y2="28.5487">
                  <stop stopColor="#92278F" />
                  <stop offset="0.5" stopColor="#3777BC" />
                  <stop offset="1" stopColor="#00C0F3" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_161" x1="45.3728" x2="83.848" y1="15.8015" y2="27.9999">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_161" x1="18.8632" x2="26.3558" y1="38.4981" y2="-1.13239">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_161" x1="39.0032" x2="4.99172" y1="76.74" y2="55.0202">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_161" x1="67.9794" x2="58.8531" y1="45.8459" y2="85.134">
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
        <g clipPath="url(#clip0_0_237)" id="Isolation_Mode">
          <path clipRule="evenodd" d={svgPaths.peb53500} fill="url(#paint0_linear_0_237)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p30c6e400} fill="url(#paint1_linear_0_237)" id="Vector_2" />
          <path d={svgPaths.p277ccc00} fill="white" id="Vector_3" />
          <path d={svgPaths.p2a8fec80} fill="url(#paint2_linear_0_237)" id="Vector_4" />
          <path d={svgPaths.p21358600} fill="white" id="Vector_5" />
          <path d={svgPaths.p2a0ab200} fill="url(#paint3_linear_0_237)" id="Vector_6" />
          <path d={svgPaths.p3439d200} fill="white" id="Vector_7" />
          <path d={svgPaths.p964f000} fill="url(#paint4_linear_0_237)" id="Vector_8" />
          <path d={svgPaths.p37d03e70} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_237" x1="146.929" x2="315.214" y1="349.085" y2="162.207">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_237" x1="257.336" x2="475.6" y1="89.7012" y2="158.842">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_237" x1="106.981" x2="149.548" y1="218.549" y2="-6.41074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_237" x1="221.221" x2="28.1982" y1="435.636" y2="312.485">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_237" x1="385.566" x2="333.719" y1="260.266" y2="483.276">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <clipPath id="clip0_0_237">
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
          <path clipRule="evenodd" d={svgPaths.p2a0a4b00} fill="url(#paint0_linear_0_252)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p336c1180} fill="url(#paint1_linear_0_252)" id="Vector_2" />
          <path d={svgPaths.p3f39c700} fill="white" id="Vector_3" />
          <path d={svgPaths.pb431580} fill="url(#paint2_linear_0_252)" id="Vector_4" />
          <path d={svgPaths.pa073800} fill="white" id="Vector_5" />
          <path d={svgPaths.p2528470} fill="url(#paint3_linear_0_252)" id="Vector_6" />
          <path d={svgPaths.p34308700} fill="white" id="Vector_7" />
          <path d={svgPaths.p10607800} fill="url(#paint4_linear_0_252)" id="Vector_8" />
          <path d={svgPaths.p3a474100} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_252" x1="18.7211" x2="40.1405" y1="44.4355" y2="20.6294">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_252" x1="32.786" x2="60.5883" y1="11.4182" y2="20.2328">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_252" x1="13.6311" x2="19.0452" y1="27.8186" y2="-0.818491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_252" x1="28.1841" x2="3.60729" y1="55.4526" y2="39.7578">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_252" x1="49.1217" x2="42.527" y1="33.1283" y2="61.518">
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
    <div className="absolute h-[61.7px] left-[100px] overflow-clip top-[41.65px] w-[211px] cursor-pointer" data-name="Layer_1" onClick={() => navigate("/")}>
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
          ال معرفة
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

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        التحول الرقمي.
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        التحول المؤسسي.
      </p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        الاستدامة المجتمعية.
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        البحث والتطوير والابتكار.
      </p>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[27.62px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[124.752px]" dir="auto">
        الابتكار
        <br aria-hidden />
        المؤسسي.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center leading-[0] left-[calc(8.33%+119px)] top-[1777px]">
      <Group12 />
      <Group11 />
      <Group10 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[8px] mt-[27px] not-italic relative row-1 text-[30px] text-center text-white w-[164px]" dir="auto">
        تنظيم المؤتمرات والملتقيات.
      </p>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        الدراسات والاستشارات.
      </p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        المبادرات المجتمعية.
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[16.93px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[146.139px]" dir="auto">
        بنـــــاء القدرات.
      </p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#009dc4] col-1 h-[146px] ml-0 mt-0 relative rounded-[30px] row-1 w-[180px]" />
      <p className="[word-break:break-word] col-1 font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] ml-[27.62px] mt-[43px] not-italic relative row-1 text-[30px] text-center text-white w-[124.752px]" dir="auto">
        الذكاء الاصطناعي.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center leading-[0] left-[calc(8.33%+119px)] top-[1939px]">
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(8.33%+105px)] top-[991px]">
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(8.33%+105px)] rounded-[30px] top-[991px] w-[323px]" />
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(33.33%+79px)] rounded-[30px] top-[991px] w-[322px]" />
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(58.33%+52px)] rounded-[30px] top-[991px] w-[323px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(66.67%+93.5px)] not-italic text-[30px] text-center text-white top-[1038px] w-[239px]" dir="auto">
        المشاركة في تنفيذ برامج ومبادرات وطنية ذات أثر مستدام.
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(41.67%+120.5px)] not-italic text-[30px] text-center text-white top-[1038px] w-[211px]" dir="auto">
        بناء شراكات استراتيجية مع مختلف القطاعات.
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+266.5px)] not-italic text-[30px] text-center text-white top-[1038px] w-[211px]" dir="auto">
        تبادل الخبرات والمعرفة وأفضل الممارسات.
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(8.33%+105px)] top-[1185px]">
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(8.33%+105px)] rounded-[30px] top-[1185px] w-[323px]" />
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(33.33%+79px)] rounded-[30px] top-[1185px] w-[322px]" />
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(58.33%+52px)] rounded-[30px] top-[1185px] w-[323px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(66.67%+93.5px)] not-italic text-[30px] text-center text-white top-[1229px] w-[239px]" dir="auto">
        المساهمة في تطوير حلول مبتكرة للتحديات المجتمعية.
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(41.67%+120.5px)] not-italic text-[30px] text-center text-white top-[1229px] w-[211px]" dir="auto">
        تعزيز المسؤولية الاجتماعية والاستدامة المؤسسية.
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+266.5px)] not-italic text-[30px] text-center text-white top-[1229px] w-[211px]" dir="auto">
        الاستفادة من البرامج التدريبية وورش العمل والمؤتمرات.
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(16.67%+152px)] top-[1379px]">
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(16.67%+152px)] rounded-[30px] top-[1379px] w-[322px]" />
      <div className="absolute bg-[#009dc4] h-[178px] left-[calc(50%+5px)] rounded-[30px] top-[1379px] w-[323px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(50%+161.5px)] not-italic text-[30px] text-center text-white top-[1423px] w-[233px]" dir="auto">
        توسيع شبكة العلاقات والتعاون مع الجهات المحلية والدولية.
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(25%+193.5px)] not-italic text-[30px] text-center text-white top-[1423px] w-[269px]" dir="auto">
        الإسهام في تحقيق مستهدفات رؤية المملكة العربية السعودية 2030
      </p>
    </div>
  );
}

function Group3() {
  const { content } = useContent();
  const p = content.partners;
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents left-1/2 not-italic text-center top-[867px]">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-1/2 text-[#009dc4] text-[55px] top-[867px] w-[406px]" dir="auto">
        {p.benefitsTitle}
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+600px)] text-[#6e6e6e] text-[28px] top-[933px] w-[928px]" dir="auto">
        {p.benefitsBody}
      </p>
    </div>
  );
}

function Group7() {
  const { content } = useContent();
  const p = content.partners;
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents left-1/2 not-italic text-center top-[1653px]">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[54px] left-1/2 text-[#009dc4] text-[55px] top-[1653px] w-[406px]" dir="auto">
        {p.areasTitle}
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(8.33%+600px)] text-[#6e6e6e] text-[28px] top-[1719px] w-[928px]" dir="auto">
        {p.areasBody}
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[calc(25%+73px)] top-[2101px]">
      <div className="absolute bg-[#009dc4] h-[146px] left-[calc(25%+73px)] rounded-[30px] top-[2101px] w-[180px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(25%+163px)] not-italic text-[30px] text-center text-white top-[2144px] w-[146.139px]" dir="auto">
        رعاية المبادرات والفعاليات.
      </p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[calc(41.67%+27px)] top-[2101px]">
      <div className="absolute bg-[#009dc4] h-[146px] left-[calc(41.67%+27px)] rounded-[30px] top-[2101px] w-[180px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(41.67%+117px)] not-italic text-[30px] text-center text-white top-[2144px] w-[146.139px]" dir="auto">
        نقل المعرفة وتبادل الخبرات.
      </p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[calc(58.33%-19px)] top-[2101px]">
      <div className="absolute bg-[#009dc4] h-[146px] left-[calc(58.33%-19px)] rounded-[30px] top-[2101px] w-[180px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[30px] left-[calc(58.33%+71px)] not-italic text-[30px] text-center text-white top-[2144px] w-[124.752px]" dir="auto">
        البرامج التدريبية.
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[calc(25%+73px)] top-[2101px]">
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function LandingPage() {
  const { content } = useContent();
  const p = content.partners;
  return (
    <div className="relative bg-white h-[2602px] mx-auto overflow-clip w-[1440px]" data-name="Landing Page">
      <Header />
      <Layer />
      <p className="-translate-x-full [word-break:break-word] absolute bottom-[87.93%] font-['Hacen_Casablanca:Regular',sans-serif] leading-[58px] left-[calc(33.33%+230px)] not-italic text-[55px] text-right text-white top-[9.84%] w-[404px] animate-hero-reveal" dir="auto">
        {p.heroTitle}
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[0] left-[710px] not-italic text-[28px] text-right text-white top-[325px] w-[555px]">
        <p className="leading-[30px] mb-[8.521232604980469px]" dir="auto">
          {p.sectionBodyLine1}
        </p>
        <p className="leading-[30px]" dir="auto">
          {p.sectionBodyLine2}
        </p>
      </div>
      <Footer className="-translate-x-1/2 absolute bottom-0 h-[268px] left-[calc(50%-0.5px)] w-[1459px]" />
      <div className="absolute border border-solid border-white h-[411px] left-[100px] rounded-[30px] top-[205px] w-[780px]" />
      <div className="absolute h-[583px] left-[calc(50%+10px)] top-[124px] w-[608px] animate-hero-image" data-name="Layer 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.72%] left-[-0.06%] max-w-none top-0 w-[100.11%]" src={p.heroImage || imgLayer11} />
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]" data-name="NAV Bar">
        <NavigationBar />
      </div>
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[758px] left-[calc(8.33%+85px)] rounded-[30px] top-[823px] w-[1030px] reveal-on-scroll card-hover-fx" />
      <div className="absolute bg-white border-3 border-[#009dc4] border-solid h-[673px] left-[calc(8.33%+85px)] rounded-[30px] top-[1609px] w-[1030px] reveal-on-scroll card-hover-fx" />
      <Frame1 />
      <Frame2 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group3 />
      <Group7 />
      <Group18 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <LandingPage />
    </div>
  );
}