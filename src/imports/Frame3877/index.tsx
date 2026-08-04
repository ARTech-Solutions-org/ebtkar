import React, { useState } from "react";
import svgPaths from "./svg-5s7x7gktrv";
import { useNavigate } from "react-router";
import { NavigationBar } from "../../app/components/NavigationBar";
import img2 from "./1f1838753026a14476451ebbbab6a4c2dd0d2f1c.png";
import { useContent } from "../../cms/ContentContext";
import img16 from "./641e85a35f46900ba4baeb461dbeed89b07371eb.png";
import imgComponent6 from "./9ff6889bad14307e72b8f2c3a9fcc0c2c6b2cc98.png";
import imgChatGptImageJul192026At123740Pm1 from "./d9c64ff36042893422132192fcd418021f213dc2.png";
import imgChatGptImageApr12026At113940Am1 from "./cb3fdae483b9785efe849ad36c9a64ac36ddb65e.png";

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
                <path clipRule="evenodd" d={svgPaths.p1191e780} fill="url(#paint0_linear_0_224)" fillRule="evenodd" id="Vector" />
                <path d={svgPaths.p37de6300} fill="url(#paint1_linear_0_224)" id="Vector_2" />
                <path d={svgPaths.p1ee50c00} fill="white" id="Vector_3" />
                <path d={svgPaths.p35d15700} fill="url(#paint2_linear_0_224)" id="Vector_4" />
                <path d={svgPaths.pa998900} fill="white" id="Vector_5" />
                <path d={svgPaths.p1e886100} fill="url(#paint3_linear_0_224)" id="Vector_6" />
                <path d={svgPaths.p2b6c6cf0} fill="white" id="Vector_7" />
                <path d={svgPaths.p148cbb00} fill="url(#paint4_linear_0_224)" id="Vector_8" />
                <path d={svgPaths.p1da39e80} fill="white" id="Vector_9" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_224" x1="25.9072" x2="55.5492" y1="61.4936" y2="28.5487">
                  <stop stopColor="#92278F" />
                  <stop offset="0.5" stopColor="#3777BC" />
                  <stop offset="1" stopColor="#00C0F3" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_224" x1="45.3728" x2="83.848" y1="15.8015" y2="27.9999">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_224" x1="18.8632" x2="26.3558" y1="38.4981" y2="-1.13239">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_224" x1="39.0032" x2="4.99172" y1="76.74" y2="55.0202">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.51" stopColor="#5C2D91" />
                  <stop offset="1" stopColor="#00AEEF" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_224" x1="67.9794" x2="58.8531" y1="45.8459" y2="85.134">
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
    <div className="absolute h-[724px] left-[calc(16.67%+117px)] opacity-25 top-[128px] w-[726.015px]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="724" preserveAspectRatio="none" viewBox="0 0 726.015 724" width="726.015">
        <g clipPath="url(#clip0_0_270)" id="Isolation_Mode">
          <path clipRule="evenodd" d={svgPaths.p1a216a00} fill="url(#paint0_linear_0_270)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p4697300} fill="url(#paint1_linear_0_270)" id="Vector_2" />
          <path d={svgPaths.p16470000} fill="white" id="Vector_3" />
          <path d={svgPaths.pc358c00} fill="url(#paint2_linear_0_270)" id="Vector_4" />
          <path d={svgPaths.p1068ec00} fill="white" id="Vector_5" />
          <path d={svgPaths.p290aec80} fill="url(#paint3_linear_0_270)" id="Vector_6" />
          <path d={svgPaths.p3e202900} fill="white" id="Vector_7" />
          <path d={svgPaths.p3bfa2400} fill="url(#paint4_linear_0_270)" id="Vector_8" />
          <path d={svgPaths.p2feb4600} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_270" x1="219.46" x2="470.82" y1="521.412" y2="242.28">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_270" x1="384.371" x2="710.381" y1="133.982" y2="237.255">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_270" x1="159.793" x2="223.373" y1="326.436" y2="-9.57541">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_270" x1="330.427" x2="42.1184" y1="650.688" y2="466.745">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_270" x1="575.902" x2="498.46" y1="388.747" y2="721.846">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <clipPath id="clip0_0_270">
            <rect fill="white" height="724" width="726.015" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(16.67%+117px)] top-[128px]">
      <IsolationMode />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-[-8px] top-0" data-name="bg">
      <div className="absolute bg-gradient-to-b from-[#0e3141] h-[917px] left-[-8px] to-[#409bc5] to-[98.558%] top-0 via-[#409bc5] via-[85.577%] w-[1456px]" />
      <Group9 />
      <div className="-translate-x-1/2 absolute h-[632px] left-[calc(50%-1.5px)] top-[249px] w-[975px]" data-name="1 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none animate-hero-image">
          <img alt="" className="absolute h-[114.35%] left-[-0.05%] max-w-none top-0 w-[100.1%]" src={img16} />
        </div>
      </div>
    </div>
  );
}

function Stats1() {
  return (
    <div className="absolute contents left-[159.15px] top-[734.09px]" data-name="Stats">
      <div className="absolute border-[1.197px] border-solid border-white h-[7.784px] left-[159.15px] opacity-81 rounded-[17.364px] top-[734.09px] w-[160.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0.91)] h-[7.784px] left-[159.15px] opacity-81 rounded-[17.364px] top-[734.09px] w-[144.297px]" />
    </div>
  );
}

function Stats() {
  const { content } = useContent();
  const h = content.home;
  return (
    <div className="absolute contents left-[137px] top-[682px]" data-name="stats">
      <div className="absolute bg-[rgba(255,255,255,0.07)] h-[114.36px] left-[137px] rounded-[8.981px] top-[682px] w-[210.159px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[159.75px] not-italic text-[12.139px] text-[rgba(255,255,255,0.8)] top-[757.44px] tracking-[-0.607px] whitespace-nowrap">{h.heroBadge1Label}</p>
      <Stats1 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[159.75px] not-italic opacity-96 text-[18.209px] text-white top-[707.15px] tracking-[-0.9104px] whitespace-nowrap">{h.heroBadge1Number}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0" data-name="Header">
      <Bg />
      <Stats />
    </div>
  );
}

function Stats3() {
  const { content } = useContent();
  const h = content.home;
  return (
    <div className="[word-break:break-word] absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(83.33%-43.79px)] not-italic text-white top-[568.48px] whitespace-nowrap" data-name="Stats">
      <p className="absolute left-[calc(83.33%-43.79px)] opacity-77 text-[48.557px] top-[568.48px] tracking-[-2.4278px]">{h.heroBadge2Number}</p>
      <p className="absolute left-[calc(91.67%-72.75px)] opacity-71 text-[18.209px] top-[593.52px] tracking-[-0.9104px]">سنوات</p>
    </div>
  );
}

function Stats2() {
  const { content } = useContent();
  const h = content.home;
  return (
    <div className="absolute contents left-[calc(75%+36px)] top-[548px]" data-name="stats">
      <div className="absolute bg-[rgba(255,255,255,0.07)] h-[132.013px] left-[calc(75%+36px)] rounded-[11.38px] top-[548px] w-[238.231px]" />
      <Stats3 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(83.33%-55.17px)] not-italic opacity-76 text-[15.174px] text-[rgba(255,255,255,0.8)] top-[626.9px] tracking-[-0.7587px] whitespace-nowrap">{h.heroBadge2Label}</p>
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
          <path clipRule="evenodd" d={svgPaths.p15afe1f8} fill="url(#paint0_linear_0_234)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p28cdd900} fill="url(#paint1_linear_0_234)" id="Vector_2" />
          <path d={svgPaths.p3f39c700} fill="white" id="Vector_3" />
          <path d={svgPaths.p2ef4e380} fill="url(#paint2_linear_0_234)" id="Vector_4" />
          <path d={svgPaths.pa073800} fill="white" id="Vector_5" />
          <path d={svgPaths.pfe29f00} fill="url(#paint3_linear_0_234)" id="Vector_6" />
          <path d={svgPaths.p34308700} fill="white" id="Vector_7" />
          <path d={svgPaths.p366c0700} fill="url(#paint4_linear_0_234)" id="Vector_8" />
          <path d={svgPaths.p3a474100} fill="white" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_234" x1="18.7206" x2="40.14" y1="44.4355" y2="20.6294">
            <stop stopColor="#92278F" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_234" x1="32.7865" x2="60.5888" y1="11.4182" y2="20.2328">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_234" x1="13.6306" x2="19.0448" y1="27.8186" y2="-0.81849">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_234" x1="28.1838" x2="3.60702" y1="55.4526" y2="39.7578">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.51" stopColor="#5C2D91" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_234" x1="49.1221" x2="42.5274" y1="33.1283" y2="61.518">
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

function Layer1() {
  return (
    <div className="col-1 h-[56.19px] ml-0 mt-0 relative row-1 w-[211px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.1902" preserveAspectRatio="none" viewBox="0 0 211 56.1902" width="211">
        <g clipPath="url(#clip0_0_280)" id="Layer_1">
          <path d={svgPaths.p2fdca8c0} fill="url(#paint0_linear_0_280)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b1f71} fill="url(#paint1_linear_0_280)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p8b166c0} fill="url(#paint2_linear_0_280)" id="Vector_3" />
          <path d={svgPaths.p1acde200} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p18cbb000} fill="url(#paint3_linear_0_280)" id="Vector_5" />
          <path d={svgPaths.pe1cbf00} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pa113aa0} fill="url(#paint4_linear_0_280)" id="Vector_7" />
          <path d={svgPaths.p2c10ce50} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.pf293100} fill="#00C0F3" id="Vector_9" />
          <g id="Group">
            <path d={svgPaths.p3dab5880} fill="#241953" id="Vector_10" />
            <path d={svgPaths.p195e4e00} fill="#241953" id="Vector_11" />
            <path d={svgPaths.p84cdc00} fill="#241953" id="Vector_12" />
            <path d={svgPaths.pe553a00} fill="#241953" id="Vector_13" />
            <path d={svgPaths.p3f9e0e80} fill="#241953" id="Vector_14" />
            <path d={svgPaths.p752d500} fill="#241953" id="Vector_15" />
            <path d={svgPaths.p3438d800} fill="#241953" id="Vector_16" />
            <path d={svgPaths.p8497400} fill="#241953" id="Vector_17" />
            <path d={svgPaths.p3ce17480} fill="#241953" id="Vector_18" />
            <path d={svgPaths.p21bf1a00} fill="#241953" id="Vector_19" />
            <path d={svgPaths.p2cf43c80} fill="#241953" id="Vector_20" />
            <path d={svgPaths.p38114300} fill="#241953" id="Vector_21" />
            <path d={svgPaths.p2bded500} fill="#241953" id="Vector_22" />
            <path d={svgPaths.p206d6480} fill="#241953" id="Vector_23" />
            <path d={svgPaths.p119e2a00} fill="#241953" id="Vector_24" />
            <path d={svgPaths.p13de3080} fill="#241953" id="Vector_25" />
            <path d={svgPaths.p129b6400} fill="#241953" id="Vector_26" />
            <path d={svgPaths.p19eaa780} fill="#241953" id="Vector_27" />
            <path d={svgPaths.p5907230} fill="#241953" id="Vector_28" />
            <path d={svgPaths.p2f2b9f80} fill="#241953" id="Vector_29" />
            <path d={svgPaths.paf01080} fill="#241953" id="Vector_30" />
            <path d={svgPaths.p3b59ea00} fill="#241953" id="Vector_31" />
            <path d={svgPaths.p17fc3000} fill="#241953" id="Vector_32" />
            <path d={svgPaths.p273d400} fill="#241953" id="Vector_33" />
            <path d={svgPaths.p13b8ac80} fill="#241953" id="Vector_34" />
            <path d={svgPaths.p9235200} fill="#241953" id="Vector_35" />
            <path d={svgPaths.p22be2d80} fill="#241953" id="Vector_36" />
            <path d={svgPaths.p19da8280} fill="#241953" id="Vector_37" />
            <path d={svgPaths.p23618d00} fill="#241953" id="Vector_38" />
            <path d={svgPaths.p3301fa00} fill="#241953" id="Vector_39" />
            <path d={svgPaths.p380e5180} fill="#241953" id="Vector_40" />
            <path d={svgPaths.p31b71200} fill="#241953" id="Vector_41" />
            <path d={svgPaths.p31fbdc80} fill="#241953" id="Vector_42" />
            <path d={svgPaths.p685ea00} fill="#241953" id="Vector_43" />
            <path d={svgPaths.p1fb2b900} fill="#241953" id="Vector_44" />
            <path d={svgPaths.p30037400} fill="#241953" id="Vector_45" />
            <path d={svgPaths.p6dd5480} fill="#241953" id="Vector_46" />
            <path d={svgPaths.p348c4200} fill="#241953" id="Vector_47" />
            <path d={svgPaths.p14136500} fill="#241953" id="Vector_48" />
            <path d={svgPaths.pb456f80} fill="#241953" id="Vector_49" />
            <path d={svgPaths.p2e4c4000} fill="#241953" id="Vector_50" />
            <path d={svgPaths.p21244a00} fill="#241953" id="Vector_51" />
            <path d={svgPaths.p10b82200} fill="#241953" id="Vector_52" />
            <path d={svgPaths.p267d9b00} fill="#241953" id="Vector_53" />
            <path d={svgPaths.p1d094280} fill="#241953" id="Vector_54" />
            <path d={svgPaths.p8543000} fill="#241953" id="Vector_55" />
            <path d={svgPaths.p2dbe3400} fill="#241953" id="Vector_56" />
            <path d={svgPaths.p2ddb8940} fill="#241953" id="Vector_57" />
            <path d={svgPaths.p1d028c00} fill="#241953" id="Vector_58" />
            <path d={svgPaths.p1b5d4400} fill="#241953" id="Vector_59" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_280" x1="199.227" x2="193.275" y1="30.17" y2="56.0491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_280" x1="171.27" x2="190.755" y1="40.466" y2="18.5977">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_280" x1="182.491" x2="208.012" y1="9.86188" y2="18.0334">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_280" x1="154.829" x2="178.383" y1="25.7934" y2="-0.193982">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_280" x1="179.971" x2="157.499" y1="50.5005" y2="36.0074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_280">
            <rect fill="white" height="56.1902" width="211" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Layer1 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="col-1 h-[56.19px] ml-0 mt-0 relative row-1 w-[211px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.1902" preserveAspectRatio="none" viewBox="0 0 211 56.1902" width="211">
        <g clipPath="url(#clip0_0_280)" id="Layer_1">
          <path d={svgPaths.p2fdca8c0} fill="url(#paint0_linear_0_280)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b1f71} fill="url(#paint1_linear_0_280)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p8b166c0} fill="url(#paint2_linear_0_280)" id="Vector_3" />
          <path d={svgPaths.p1acde200} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p18cbb000} fill="url(#paint3_linear_0_280)" id="Vector_5" />
          <path d={svgPaths.pe1cbf00} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pa113aa0} fill="url(#paint4_linear_0_280)" id="Vector_7" />
          <path d={svgPaths.p2c10ce50} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.pf293100} fill="#00C0F3" id="Vector_9" />
          <g id="Group">
            <path d={svgPaths.p3dab5880} fill="#241953" id="Vector_10" />
            <path d={svgPaths.p195e4e00} fill="#241953" id="Vector_11" />
            <path d={svgPaths.p84cdc00} fill="#241953" id="Vector_12" />
            <path d={svgPaths.pe553a00} fill="#241953" id="Vector_13" />
            <path d={svgPaths.p3f9e0e80} fill="#241953" id="Vector_14" />
            <path d={svgPaths.p752d500} fill="#241953" id="Vector_15" />
            <path d={svgPaths.p3438d800} fill="#241953" id="Vector_16" />
            <path d={svgPaths.p8497400} fill="#241953" id="Vector_17" />
            <path d={svgPaths.p3ce17480} fill="#241953" id="Vector_18" />
            <path d={svgPaths.p21bf1a00} fill="#241953" id="Vector_19" />
            <path d={svgPaths.p2cf43c80} fill="#241953" id="Vector_20" />
            <path d={svgPaths.p38114300} fill="#241953" id="Vector_21" />
            <path d={svgPaths.p2bded500} fill="#241953" id="Vector_22" />
            <path d={svgPaths.p206d6480} fill="#241953" id="Vector_23" />
            <path d={svgPaths.p119e2a00} fill="#241953" id="Vector_24" />
            <path d={svgPaths.p13de3080} fill="#241953" id="Vector_25" />
            <path d={svgPaths.p129b6400} fill="#241953" id="Vector_26" />
            <path d={svgPaths.p19eaa780} fill="#241953" id="Vector_27" />
            <path d={svgPaths.p5907230} fill="#241953" id="Vector_28" />
            <path d={svgPaths.p2f2b9f80} fill="#241953" id="Vector_29" />
            <path d={svgPaths.paf01080} fill="#241953" id="Vector_30" />
            <path d={svgPaths.p3b59ea00} fill="#241953" id="Vector_31" />
            <path d={svgPaths.p17fc3000} fill="#241953" id="Vector_32" />
            <path d={svgPaths.p273d400} fill="#241953" id="Vector_33" />
            <path d={svgPaths.p13b8ac80} fill="#241953" id="Vector_34" />
            <path d={svgPaths.p9235200} fill="#241953" id="Vector_35" />
            <path d={svgPaths.p22be2d80} fill="#241953" id="Vector_36" />
            <path d={svgPaths.p19da8280} fill="#241953" id="Vector_37" />
            <path d={svgPaths.p23618d00} fill="#241953" id="Vector_38" />
            <path d={svgPaths.p3301fa00} fill="#241953" id="Vector_39" />
            <path d={svgPaths.p380e5180} fill="#241953" id="Vector_40" />
            <path d={svgPaths.p31b71200} fill="#241953" id="Vector_41" />
            <path d={svgPaths.p31fbdc80} fill="#241953" id="Vector_42" />
            <path d={svgPaths.p685ea00} fill="#241953" id="Vector_43" />
            <path d={svgPaths.p1fb2b900} fill="#241953" id="Vector_44" />
            <path d={svgPaths.p30037400} fill="#241953" id="Vector_45" />
            <path d={svgPaths.p6dd5480} fill="#241953" id="Vector_46" />
            <path d={svgPaths.p348c4200} fill="#241953" id="Vector_47" />
            <path d={svgPaths.p14136500} fill="#241953" id="Vector_48" />
            <path d={svgPaths.pb456f80} fill="#241953" id="Vector_49" />
            <path d={svgPaths.p2e4c4000} fill="#241953" id="Vector_50" />
            <path d={svgPaths.p21244a00} fill="#241953" id="Vector_51" />
            <path d={svgPaths.p10b82200} fill="#241953" id="Vector_52" />
            <path d={svgPaths.p267d9b00} fill="#241953" id="Vector_53" />
            <path d={svgPaths.p1d094280} fill="#241953" id="Vector_54" />
            <path d={svgPaths.p8543000} fill="#241953" id="Vector_55" />
            <path d={svgPaths.p2dbe3400} fill="#241953" id="Vector_56" />
            <path d={svgPaths.p2ddb8940} fill="#241953" id="Vector_57" />
            <path d={svgPaths.p1d028c00} fill="#241953" id="Vector_58" />
            <path d={svgPaths.p1b5d4400} fill="#241953" id="Vector_59" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_280" x1="199.227" x2="193.275" y1="30.17" y2="56.0491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_280" x1="171.27" x2="190.755" y1="40.466" y2="18.5977">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_280" x1="182.491" x2="208.012" y1="9.86188" y2="18.0334">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_280" x1="154.829" x2="178.383" y1="25.7934" y2="-0.193982">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_280" x1="179.971" x2="157.499" y1="50.5005" y2="36.0074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_280">
            <rect fill="white" height="56.1902" width="211" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Layer2 />
    </div>
  );
}

function Layer3() {
  return (
    <div className="col-1 h-[56.19px] ml-0 mt-0 relative row-1 w-[211px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.1902" preserveAspectRatio="none" viewBox="0 0 211 56.1902" width="211">
        <g clipPath="url(#clip0_0_280)" id="Layer_1">
          <path d={svgPaths.p2fdca8c0} fill="url(#paint0_linear_0_280)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b1f71} fill="url(#paint1_linear_0_280)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p8b166c0} fill="url(#paint2_linear_0_280)" id="Vector_3" />
          <path d={svgPaths.p1acde200} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p18cbb000} fill="url(#paint3_linear_0_280)" id="Vector_5" />
          <path d={svgPaths.pe1cbf00} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pa113aa0} fill="url(#paint4_linear_0_280)" id="Vector_7" />
          <path d={svgPaths.p2c10ce50} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.pf293100} fill="#00C0F3" id="Vector_9" />
          <g id="Group">
            <path d={svgPaths.p3dab5880} fill="#241953" id="Vector_10" />
            <path d={svgPaths.p195e4e00} fill="#241953" id="Vector_11" />
            <path d={svgPaths.p84cdc00} fill="#241953" id="Vector_12" />
            <path d={svgPaths.pe553a00} fill="#241953" id="Vector_13" />
            <path d={svgPaths.p3f9e0e80} fill="#241953" id="Vector_14" />
            <path d={svgPaths.p752d500} fill="#241953" id="Vector_15" />
            <path d={svgPaths.p3438d800} fill="#241953" id="Vector_16" />
            <path d={svgPaths.p8497400} fill="#241953" id="Vector_17" />
            <path d={svgPaths.p3ce17480} fill="#241953" id="Vector_18" />
            <path d={svgPaths.p21bf1a00} fill="#241953" id="Vector_19" />
            <path d={svgPaths.p2cf43c80} fill="#241953" id="Vector_20" />
            <path d={svgPaths.p38114300} fill="#241953" id="Vector_21" />
            <path d={svgPaths.p2bded500} fill="#241953" id="Vector_22" />
            <path d={svgPaths.p206d6480} fill="#241953" id="Vector_23" />
            <path d={svgPaths.p119e2a00} fill="#241953" id="Vector_24" />
            <path d={svgPaths.p13de3080} fill="#241953" id="Vector_25" />
            <path d={svgPaths.p129b6400} fill="#241953" id="Vector_26" />
            <path d={svgPaths.p19eaa780} fill="#241953" id="Vector_27" />
            <path d={svgPaths.p5907230} fill="#241953" id="Vector_28" />
            <path d={svgPaths.p2f2b9f80} fill="#241953" id="Vector_29" />
            <path d={svgPaths.paf01080} fill="#241953" id="Vector_30" />
            <path d={svgPaths.p3b59ea00} fill="#241953" id="Vector_31" />
            <path d={svgPaths.p17fc3000} fill="#241953" id="Vector_32" />
            <path d={svgPaths.p273d400} fill="#241953" id="Vector_33" />
            <path d={svgPaths.p13b8ac80} fill="#241953" id="Vector_34" />
            <path d={svgPaths.p9235200} fill="#241953" id="Vector_35" />
            <path d={svgPaths.p22be2d80} fill="#241953" id="Vector_36" />
            <path d={svgPaths.p19da8280} fill="#241953" id="Vector_37" />
            <path d={svgPaths.p23618d00} fill="#241953" id="Vector_38" />
            <path d={svgPaths.p3301fa00} fill="#241953" id="Vector_39" />
            <path d={svgPaths.p380e5180} fill="#241953" id="Vector_40" />
            <path d={svgPaths.p31b71200} fill="#241953" id="Vector_41" />
            <path d={svgPaths.p31fbdc80} fill="#241953" id="Vector_42" />
            <path d={svgPaths.p685ea00} fill="#241953" id="Vector_43" />
            <path d={svgPaths.p1fb2b900} fill="#241953" id="Vector_44" />
            <path d={svgPaths.p30037400} fill="#241953" id="Vector_45" />
            <path d={svgPaths.p6dd5480} fill="#241953" id="Vector_46" />
            <path d={svgPaths.p348c4200} fill="#241953" id="Vector_47" />
            <path d={svgPaths.p14136500} fill="#241953" id="Vector_48" />
            <path d={svgPaths.pb456f80} fill="#241953" id="Vector_49" />
            <path d={svgPaths.p2e4c4000} fill="#241953" id="Vector_50" />
            <path d={svgPaths.p21244a00} fill="#241953" id="Vector_51" />
            <path d={svgPaths.p10b82200} fill="#241953" id="Vector_52" />
            <path d={svgPaths.p267d9b00} fill="#241953" id="Vector_53" />
            <path d={svgPaths.p1d094280} fill="#241953" id="Vector_54" />
            <path d={svgPaths.p8543000} fill="#241953" id="Vector_55" />
            <path d={svgPaths.p2dbe3400} fill="#241953" id="Vector_56" />
            <path d={svgPaths.p2ddb8940} fill="#241953" id="Vector_57" />
            <path d={svgPaths.p1d028c00} fill="#241953" id="Vector_58" />
            <path d={svgPaths.p1b5d4400} fill="#241953" id="Vector_59" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_280" x1="199.227" x2="193.275" y1="30.17" y2="56.0491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_280" x1="171.27" x2="190.755" y1="40.466" y2="18.5977">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_280" x1="182.491" x2="208.012" y1="9.86188" y2="18.0334">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_280" x1="154.829" x2="178.383" y1="25.7934" y2="-0.193982">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_280" x1="179.971" x2="157.499" y1="50.5005" y2="36.0074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_280">
            <rect fill="white" height="56.1902" width="211" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Layer3 />
    </div>
  );
}

function Layer4() {
  return (
    <div className="col-1 h-[56.19px] ml-0 mt-0 relative row-1 w-[211px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.1902" preserveAspectRatio="none" viewBox="0 0 211 56.1902" width="211">
        <g clipPath="url(#clip0_0_280)" id="Layer_1">
          <path d={svgPaths.p2fdca8c0} fill="url(#paint0_linear_0_280)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b1f71} fill="url(#paint1_linear_0_280)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p8b166c0} fill="url(#paint2_linear_0_280)" id="Vector_3" />
          <path d={svgPaths.p1acde200} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p18cbb000} fill="url(#paint3_linear_0_280)" id="Vector_5" />
          <path d={svgPaths.pe1cbf00} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pa113aa0} fill="url(#paint4_linear_0_280)" id="Vector_7" />
          <path d={svgPaths.p2c10ce50} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.pf293100} fill="#00C0F3" id="Vector_9" />
          <g id="Group">
            <path d={svgPaths.p3dab5880} fill="#241953" id="Vector_10" />
            <path d={svgPaths.p195e4e00} fill="#241953" id="Vector_11" />
            <path d={svgPaths.p84cdc00} fill="#241953" id="Vector_12" />
            <path d={svgPaths.pe553a00} fill="#241953" id="Vector_13" />
            <path d={svgPaths.p3f9e0e80} fill="#241953" id="Vector_14" />
            <path d={svgPaths.p752d500} fill="#241953" id="Vector_15" />
            <path d={svgPaths.p3438d800} fill="#241953" id="Vector_16" />
            <path d={svgPaths.p8497400} fill="#241953" id="Vector_17" />
            <path d={svgPaths.p3ce17480} fill="#241953" id="Vector_18" />
            <path d={svgPaths.p21bf1a00} fill="#241953" id="Vector_19" />
            <path d={svgPaths.p2cf43c80} fill="#241953" id="Vector_20" />
            <path d={svgPaths.p38114300} fill="#241953" id="Vector_21" />
            <path d={svgPaths.p2bded500} fill="#241953" id="Vector_22" />
            <path d={svgPaths.p206d6480} fill="#241953" id="Vector_23" />
            <path d={svgPaths.p119e2a00} fill="#241953" id="Vector_24" />
            <path d={svgPaths.p13de3080} fill="#241953" id="Vector_25" />
            <path d={svgPaths.p129b6400} fill="#241953" id="Vector_26" />
            <path d={svgPaths.p19eaa780} fill="#241953" id="Vector_27" />
            <path d={svgPaths.p5907230} fill="#241953" id="Vector_28" />
            <path d={svgPaths.p2f2b9f80} fill="#241953" id="Vector_29" />
            <path d={svgPaths.paf01080} fill="#241953" id="Vector_30" />
            <path d={svgPaths.p3b59ea00} fill="#241953" id="Vector_31" />
            <path d={svgPaths.p17fc3000} fill="#241953" id="Vector_32" />
            <path d={svgPaths.p273d400} fill="#241953" id="Vector_33" />
            <path d={svgPaths.p13b8ac80} fill="#241953" id="Vector_34" />
            <path d={svgPaths.p9235200} fill="#241953" id="Vector_35" />
            <path d={svgPaths.p22be2d80} fill="#241953" id="Vector_36" />
            <path d={svgPaths.p19da8280} fill="#241953" id="Vector_37" />
            <path d={svgPaths.p23618d00} fill="#241953" id="Vector_38" />
            <path d={svgPaths.p3301fa00} fill="#241953" id="Vector_39" />
            <path d={svgPaths.p380e5180} fill="#241953" id="Vector_40" />
            <path d={svgPaths.p31b71200} fill="#241953" id="Vector_41" />
            <path d={svgPaths.p31fbdc80} fill="#241953" id="Vector_42" />
            <path d={svgPaths.p685ea00} fill="#241953" id="Vector_43" />
            <path d={svgPaths.p1fb2b900} fill="#241953" id="Vector_44" />
            <path d={svgPaths.p30037400} fill="#241953" id="Vector_45" />
            <path d={svgPaths.p6dd5480} fill="#241953" id="Vector_46" />
            <path d={svgPaths.p348c4200} fill="#241953" id="Vector_47" />
            <path d={svgPaths.p14136500} fill="#241953" id="Vector_48" />
            <path d={svgPaths.pb456f80} fill="#241953" id="Vector_49" />
            <path d={svgPaths.p2e4c4000} fill="#241953" id="Vector_50" />
            <path d={svgPaths.p21244a00} fill="#241953" id="Vector_51" />
            <path d={svgPaths.p10b82200} fill="#241953" id="Vector_52" />
            <path d={svgPaths.p267d9b00} fill="#241953" id="Vector_53" />
            <path d={svgPaths.p1d094280} fill="#241953" id="Vector_54" />
            <path d={svgPaths.p8543000} fill="#241953" id="Vector_55" />
            <path d={svgPaths.p2dbe3400} fill="#241953" id="Vector_56" />
            <path d={svgPaths.p2ddb8940} fill="#241953" id="Vector_57" />
            <path d={svgPaths.p1d028c00} fill="#241953" id="Vector_58" />
            <path d={svgPaths.p1b5d4400} fill="#241953" id="Vector_59" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_280" x1="199.227" x2="193.275" y1="30.17" y2="56.0491">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_280" x1="171.27" x2="190.755" y1="40.466" y2="18.5977">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_280" x1="182.491" x2="208.012" y1="9.86188" y2="18.0334">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_280" x1="154.829" x2="178.383" y1="25.7934" y2="-0.193982">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_280" x1="179.971" x2="157.499" y1="50.5005" y2="36.0074">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_280">
            <rect fill="white" height="56.1902" width="211" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Layer4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[35px] items-center leading-[0] left-[calc(50%+0.5px)] top-[881px]">
      <Group11 />
      <Group10 />
      <Group12 />
      <Group8 />
    </div>
  );
}

function No() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 152 174" width="152">
        <g id="LINE">
          <path d={svgPaths.p887e080} fill="#241953" id="path3128" />
          <path d={svgPaths.p9b5bb10} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode2() {
  return (
    <div className="absolute bottom-[35.06%] left-1/4 right-1/4 top-[14.94%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="87" preserveAspectRatio="none" viewBox="0 0 76 87" width="76">
        <g clipPath="url(#clip0_0_202)" id="Isolation_Mode">
          <path d={svgPaths.p3275f180} fill="#009DC4" id="Vector" />
          <path d={svgPaths.pc208800} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.pee8a180} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p3352d580} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p2bdaef00} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p76edf00} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p24120f00} fill="#009DC4" id="Vector_7" />
          <path d={svgPaths.p37223500} fill="#009DC4" id="Vector_8" />
          <path d={svgPaths.p12505b80} fill="#009DC4" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_0_202">
            <rect fill="white" height="87" width="76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode1() {
  return (
    <div className="absolute h-[174px] left-[calc(33.33%+52px)] overflow-clip top-[2337px] w-[152px]" data-name="Isolation_Mode">
      <No />
      <IsolationMode2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[calc(33.33%+33px)] top-[2337px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(33.33%+128px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2621px] w-[190px]" dir="auto">
        نمكّن الجهات من بناء بيئات ابتكارية مستدامة من خلال تطوير الإستراتيجيات، والحوكمة، وإدارة الابتكار، وتعزيز الثقافة الابتكارية، وقياس النضج، وتصميم الخدمات، والحلول.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(41.67%+8.5px)] not-italic text-[#009dc4] text-[40px] text-center top-[2533px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          الابتـــكار
        </p>
        <p className="leading-[36px]" dir="auto">
          المؤسسي
        </p>
      </div>
      <IsolationMode1 />
    </div>
  );
}

function No1() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 152 174" width="152">
        <g id="LINE">
          <path d={svgPaths.p887e080} fill="#241953" id="path3128" />
          <path d={svgPaths.p9b5bb10} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode4() {
  return (
    <div className="absolute inset-[21.26%_27.63%_38.51%_27.63%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="70" preserveAspectRatio="none" viewBox="0 0 68 70" width="68">
        <g clipPath="url(#clip0_0_189)" id="Isolation_Mode">
          <path d={svgPaths.p24ce2200} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p1f383800} fill="#009DC4" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_189">
            <rect fill="white" height="70" width="68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode3() {
  return (
    <div className="absolute h-[174px] left-[calc(66.67%+18px)] overflow-clip top-[2337px] w-[152px]" data-name="Isolation_Mode">
      <No1 />
      <IsolationMode4 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[calc(66.67%-1px)] top-[2337px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(66.67%+94px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2621px] w-[190px]" dir="auto">
        تطوّر الأكاديمية مهارات المستقبل لدى الأطفال والطلاب والمعلمين والجامعات، من خلال برامج STEAM، والروبوتات، والبرمجة، والذكاء الاصطناعي، والتفكير التصميمي، والابتكار وريادة الأعمال.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(79.17%-86px)] not-italic text-[#009dc4] text-[40px] text-center top-[2533px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          أكاديمية
        </p>
        <p className="leading-[36px]" dir="auto">
          الابتكار
        </p>
      </div>
      <IsolationMode3 />
    </div>
  );
}

function No2() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode6() {
  return (
    <div className="absolute inset-[16.09%_31.13%_36.21%_30.46%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="83" preserveAspectRatio="none" viewBox="0 0 58 83" width="58">
        <g clipPath="url(#clip0_0_252)" id="Isolation_Mode">
          <path d={svgPaths.p633780} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p59baa00} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p80f9700} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p24c40000} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p1c9a1400} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p29f9f7f0} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p25ec9e00} fill="#009DC4" id="Vector_7" />
          <path d={svgPaths.p23e7f770} fill="#009DC4" id="Vector_8" />
          <path d={svgPaths.p382ac1b0} fill="#009DC4" id="Vector_9" />
          <path d={svgPaths.p4754600} fill="#009DC4" id="Vector_10" />
          <path d={svgPaths.p1c08200} fill="#009DC4" id="Vector_11" />
          <path d={svgPaths.p2b922000} fill="#009DC4" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_0_252">
            <rect fill="white" height="83" width="58" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode5() {
  return (
    <div className="absolute h-[174px] left-[calc(50%+36px)] overflow-clip top-[1836px] w-[151px]" data-name="Isolation_Mode">
      <No2 />
      <IsolationMode6 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[calc(50%+16px)] top-[1836px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(50%+111px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2120px] w-[190px]" dir="auto">
        نطلق مبادرات ومشروعات مجتمعية مبتكرة تعالج التحديات الوطنية، وتعزز جودة الحياة، وتحقق أثراً مستداماً بالشراكة مع مختلف القطاعات.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(58.33%-9px)] not-italic text-[#009dc4] text-[40px] text-center top-[2032px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          الابتـــكار
        </p>
        <p className="leading-[36px]" dir="auto">
          المجتمعي
        </p>
      </div>
      <IsolationMode5 />
    </div>
  );
}

function No3() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode8() {
  return (
    <div className="absolute inset-[23.56%_26.49%_37.36%_31.79%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="68" preserveAspectRatio="none" viewBox="0 0 63 68" width="63">
        <g clipPath="url(#clip0_0_397)" id="Isolation_Mode">
          <path d={svgPaths.p6d4de80} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3345f080} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p2496fa00} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p700eb00} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p23b18800} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p2bbdd700} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p11091e80} fill="#009DC4" id="Vector_7" />
          <path d={svgPaths.p3f912c00} fill="#009DC4" id="Vector_8" />
          <path d={svgPaths.p30418280} fill="#009DC4" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_0_397">
            <rect fill="white" height="68" width="63" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode7() {
  return (
    <div className="absolute h-[174px] left-[calc(50%+36px)] overflow-clip top-[2337px] w-[151px]" data-name="Isolation_Mode">
      <No3 />
      <IsolationMode8 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[calc(50%+16px)] top-[2337px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(50%+111px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2621px] w-[190px]" dir="auto">
        نوفر دراسات متخصصة واستشارات استراتيجية، وتقييماً للمبادرات والبرامج، بما يدعم اتخاذ القرار وتحقيق الأثر المؤسسي والمجتمعي.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(58.33%-8.5px)] not-italic text-[#009dc4] text-[40px] text-center top-[2533px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          الدراسات
        </p>
        <p className="leading-[36px]" dir="auto">
          والاستشارات
        </p>
      </div>
      <IsolationMode7 />
    </div>
  );
}

function No4() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode10() {
  return (
    <div className="absolute inset-[22.41%_25.17%_44.25%_25.17%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="58" preserveAspectRatio="none" viewBox="0 0 75 58" width="75">
        <g clipPath="url(#clip0_0_244)" id="Isolation_Mode">
          <path d={svgPaths.p38e5b000} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p26500c80} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p2dd48800} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p39245b40} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p1907a980} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p194d6c00} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.pbf7f980} fill="#009DC4" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_0_244">
            <rect fill="white" height="58" width="75" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode9() {
  return (
    <div className="absolute h-[174px] left-[calc(33.33%+53px)] overflow-clip top-[1836px] w-[151px]" data-name="Isolation_Mode">
      <No4 />
      <IsolationMode10 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[calc(33.33%+33px)] top-[1836px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(33.33%+128px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2120px] w-[190px]" dir="auto">
        نعزز استدامة المبادرات والمنظمات من خلال تطوير نماذج الاستدامة، وقياس الأثر، وربط المبادرات بأهداف التنمية المستدامة.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(41.67%+8px)] not-italic text-[#009dc4] text-[40px] text-center top-[2032px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          الاستدامة
        </p>
        <p className="leading-[36px]" dir="auto">
          المجتمعية
        </p>
      </div>
      <IsolationMode9 />
    </div>
  );
}

function No5() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode12() {
  return (
    <div className="absolute inset-[28.16%_20.53%_36.21%_21.19%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="62" preserveAspectRatio="none" viewBox="0 0 88 62" width="88">
        <g clipPath="url(#clip0_0_212)" id="Isolation_Mode">
          <path d={svgPaths.p204b700} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3d02be00} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p3a42bb80} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p6b28d00} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p15376d80} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p1a917400} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p3d3bf980} fill="#009DC4" id="Vector_7" />
          <path d={svgPaths.p2cafa900} fill="#009DC4" id="Vector_8" />
          <path d={svgPaths.p9b0c900} fill="#009DC4" id="Vector_9" />
          <path d={svgPaths.p2916c80} fill="#009DC4" id="Vector_10" />
          <path d={svgPaths.p164a0900} fill="#009DC4" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_0_212">
            <rect fill="white" height="62" width="88" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode11() {
  return (
    <div className="absolute h-[174px] left-[calc(66.67%+19px)] overflow-clip top-[1836px] w-[151px]" data-name="Isolation_Mode">
      <No5 />
      <IsolationMode12 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[calc(66.67%-1px)] top-[1836px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(66.67%+94px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2120px] w-[190px]" dir="auto">
        نبني شراكات استراتيجية، وننظم المؤتمرات والملتقيات، ونعزز تبادل الخبرات ونشر المعرفة لدعم منظومة الابتكار والاستدامة.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(79.17%-86px)] not-italic text-[#009dc4] text-[40px] text-center top-[2032px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          الشراكات
        </p>
        <p className="leading-[36px]" dir="auto">
          ونقل المعرفة
        </p>
      </div>
      <IsolationMode11 />
    </div>
  );
}

function No6() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode14() {
  return (
    <div className="absolute inset-[19.54%_29.36%_39.08%_29.36%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="72" preserveAspectRatio="none" viewBox="0 0 62.3415 72" width="62.3415">
        <g clipPath="url(#clip0_0_194)" id="Isolation_Mode">
          <path d={svgPaths.p3371c500} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p3ea55600} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p365aba00} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p15b6fd00} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p30ff9580} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p33a41700} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p1d6c6980} fill="#009DC4" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_0_194">
            <rect fill="white" height="72" width="62.3415" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[19.54%_29.36%_39.08%_29.36%]">
      <IsolationMode14 />
    </div>
  );
}

function IsolationMode13() {
  return (
    <div className="absolute h-[174px] left-[calc(16.67%+70px)] overflow-clip top-[1836px] w-[151px]" data-name="Isolation_Mode">
      <No6 />
      <Group34 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[calc(16.67%+50px)] top-[1836px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(16.67%+145px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2120px] w-[190px]" dir="auto">
        نقدّم برامج احترافية وتنفيذية، وورش عمل، ومعسكرات، وهاكاثونات، لتطوير القيادات والكفاءات الوطنية في مجالات الابتكار والاستدامة.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(20.83%+85px)] not-italic text-[#009dc4] text-[40px] text-center top-[2032px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          بناء
        </p>
        <p className="leading-[36px]" dir="auto">
          القدرات
        </p>
      </div>
      <IsolationMode13 />
    </div>
  );
}

function No7() {
  return (
    <div className="absolute contents inset-0" data-name="NO-4">
      <svg className="absolute block inset-0 size-full" fill="none" height="174" preserveAspectRatio="none" viewBox="0 0 151 174" width="151">
        <g id="LINE">
          <path d={svgPaths.p61d7100} fill="#241953" id="path3128" />
          <path d={svgPaths.p3af94d90} fill="#241953" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode16() {
  return (
    <div className="absolute inset-[16.09%_27.15%_42.53%_26.49%]" data-name="Isolation_Mode">
      <svg className="absolute block inset-0 size-full" fill="none" height="72" preserveAspectRatio="none" viewBox="0 0 70 72" width="70">
        <g clipPath="url(#clip0_0_179)" id="Isolation_Mode">
          <path d={svgPaths.paf54600} fill="#009DC4" id="Vector" />
          <path d={svgPaths.p159d5e20} fill="#009DC4" id="Vector_2" />
          <path d={svgPaths.p3fc24d00} fill="#009DC4" id="Vector_3" />
          <path d={svgPaths.p28cc0800} fill="#009DC4" id="Vector_4" />
          <path d={svgPaths.p3d54b780} fill="#009DC4" id="Vector_5" />
          <path d={svgPaths.p6f4ed00} fill="#009DC4" id="Vector_6" />
          <path d={svgPaths.p3552e800} fill="#009DC4" id="Vector_7" />
          <path d={svgPaths.p21bf6c00} fill="#009DC4" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_0_179">
            <rect fill="white" height="72" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode15() {
  return (
    <div className="absolute h-[174px] left-[calc(16.67%+70px)] overflow-clip top-[2337px] w-[151px]" data-name="Isolation_Mode">
      <No7 />
      <IsolationMode16 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[calc(16.67%+50px)] top-[2337px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(16.67%+145px)] not-italic text-[#6e6e6e] text-[25px] text-center top-[2621px] w-[190px]" dir="auto">
        تعمل الجمعية على إطلاق وتنفيذ مبادرات وطنية نوعية تسهم في معالجة التحديات المجتمعية، وتعزيز ثقافة الابتكار، ودعم الاستدامة، وبناء شراكات تحقق أثرًا مستدامًا على مستوى المملكة.
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-[calc(20.83%+85.5px)] not-italic text-[#009dc4] text-[40px] text-center top-[2533px] whitespace-nowrap">
        <p className="leading-[36px] mb-0" dir="auto">
          المبادرات
        </p>
        <p className="leading-[36px]" dir="auto">
          الوطنية
        </p>
      </div>
      <IsolationMode15 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(83.33%-57px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(83.33%-11.6px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ٢٠٤
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(83.33%-13.5px)] text-[16.793px] top-[4134.92px]" dir="auto">
        عدد المستفيدين
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[calc(83.33%-57px)] top-[4082.22px]">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(33.33%+62px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(33.33%+122.33px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ٢٠٤
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(33.33%+120px)] text-[16.793px] top-[4134.92px]" dir="auto">
        عدد الجهات المُمكّنة
      </p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[calc(33.33%+62px)] top-[4082.22px]">
      <Group3 />
    </div>
  );
}

function Group27() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(66.67%+57px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(66.67%+87.63px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ١٩
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(66.67%+87px)] text-[16.793px] top-[4134.92px]" dir="auto">
        عدد البرامج
      </p>
    </div>
  );
}

function Group31() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(16.67%+115px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(16.67%+176.2px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ١٩
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(16.67%+175.5px)] text-[16.793px] top-[4134.92px]" dir="auto">
        نسبة رضا المستفيدين
      </p>
    </div>
  );
}

function Group28() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(58.33%+28px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(58.33%+69.5px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ١٣٢
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(58.33%+70.19px)] text-[16.793px] top-[4134.92px]" dir="auto">
        عدد المبادرات
      </p>
    </div>
  );
}

function Group32() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(8.33%+85.43px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(8.33%+126.93px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ١٣٢
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(8.33%+127.2px)] text-[16.793px] top-[4134.92px]" dir="auto">
        قصص النجاح
      </p>
    </div>
  );
}

function Group29() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(50%+4px)] not-italic text-center text-white top-[4082.22px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[56.687px] left-[calc(50%+42.46px)] text-[52.326px] top-[4082.22px] tracking-[-2.6163px]" dir="auto">
        ٨
      </p>
      <p className="-translate-x-1/2 absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[15.698px] left-[calc(50%+43px)] text-[16.793px] top-[4134.92px]" dir="auto">
        عدد الشراكات
      </p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[calc(8.33%+85.43px)] top-[4082.22px]">
      <Group18 />
      <Group30 />
      <Group27 />
      <Group31 />
      <Group28 />
      <Group32 />
      <Group29 />
      <div className="absolute h-[39px] left-[calc(75%+30px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(58.33%-5px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(33.33%+29px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(66.67%+24px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(41.67%+91px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(16.67%+82px)] top-[4100px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 1 39" width="1">
            <path d="M0.5 39V0" id="Vector 10" stroke="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[155px] left-[calc(16.67%+70px)] top-[4459px] w-[821px]" />;
}

function ElMapMarker() {
  return (
    <div className="absolute left-[211px] size-[50px] top-[127px]" data-name="el:map-marker">
      <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
        <g id="el:map-marker">
          <path d={svgPaths.p38fb5cc0} fill="#DD5471" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[365px] left-[calc(8.33%+85px)] rounded-[30px] top-[5250px] w-[608px]" data-name="Component 6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="" className="absolute h-[291.84%] left-[-29.25%] max-w-none top-[-55.08%] w-[136.25%]" src={imgComponent6} />
      </div>
      <div className="absolute inset-[-55.08%_7%_-136.76%_-15.25%]" />
      <ElMapMarker />
    </div>
  );
}

import { saveContactSubmission } from "../../cms/firebaseService";

function QuickContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveContactSubmission({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: "تواصل سريع من الرئيسية",
      createdAt: new Date().toLocaleString("ar-SA"),
    });
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "" });
      setSubmitted(false);
    }, 4000);
  };

  const inputStyle = "absolute left-[calc(58.33%-5px)] w-[400px] h-[65px] px-[20px] py-[12px] bg-white border border-[#e0e0e0] font-['Hacen_Casablanca:Regular',sans-serif] text-[18px] text-[#241e56] focus:outline-none focus:border-[#009dc4] text-right placeholder:text-[#828282]";

  return (
    <form onSubmit={handleSubmit} className="contents">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[normal] left-[calc(66.67%+272px)] not-italic text-[#009dc4] text-[55px] text-right top-[5224px] whitespace-nowrap" dir="auto">
        تواصل سريع
      </p>
      <input
        type="text"
        className={`${inputStyle} top-[5310px]`}
        placeholder="الاسم"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        dir="auto"
      />
      <input
        type="tel"
        className={`${inputStyle} top-[5390px]`}
        placeholder="رقم الهاتف"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        dir="auto"
      />
      <input
        type="email"
        className={`${inputStyle} top-[5466px]`}
        placeholder="الايميل"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        dir="auto"
      />
      <button
        type="submit"
        className="absolute bg-[#52489c] hover:bg-[#3f367c] transition-colors content-stretch flex h-[64px] items-center justify-center left-[calc(58.33%-5px)] px-[24px] py-[12px] top-[5551px] w-[400px] cursor-pointer border-none"
      >
        <p className="font-['Hacen_Casablanca:Regular',sans-serif] text-[22px] text-white uppercase whitespace-nowrap" dir="auto">
          {submitted ? "✓ تم الإرسال" : "ارسال"}
        </p>
      </button>
    </form>
  );
}

function Group37() {
  return <QuickContactForm />;
}

function Frame2() {
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

function Layer5() {
  return (
    <div className="col-1 h-[79.5px] ml-0 mt-0 relative row-1 w-[83.475px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="79.5" preserveAspectRatio="none" viewBox="0 0 83.4754 79.5" width="83.4754">
        <g clipPath="url(#clip0_0_107)" id="Layer_1">
          <path d={svgPaths.p3b37c880} fill="url(#paint0_linear_0_107)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p351d4600} fill="url(#paint1_linear_0_107)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2929a180} fill="url(#paint2_linear_0_107)" id="Vector_3" />
          <path d={svgPaths.pfd8d600} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p29549300} fill="url(#paint3_linear_0_107)" id="Vector_5" />
          <path d={svgPaths.p3f7f5400} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pe75cb00} fill="url(#paint4_linear_0_107)" id="Vector_7" />
          <path d={svgPaths.p9263f00} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.p3f1a6c00} fill="#00C0F3" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_107" x1="66.8183" x2="58.3974" y1="42.6856" y2="79.3003">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_107" x1="27.2637" x2="54.8314" y1="57.2529" y2="26.3129">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_107" x1="43.14" x2="79.2485" y1="13.953" y2="25.5144">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_107" x1="4.00313" x2="37.3278" y1="36.4935" y2="-0.274309">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_107" x1="39.5749" x2="7.77951" y1="71.4498" y2="50.9445">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_107">
            <rect fill="white" height="79.5" width="83.4754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Layer5 />
    </div>
  );
}

function Box() {
  return (
    <div className="absolute bg-white h-[154.597px] left-[calc(8.33%+85px)] rounded-[23.814px] top-[4461px] w-[190.457px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[27.783px] relative rounded-[inherit] size-full">
        <Group13 />
      </div>
      <div aria-hidden className="absolute border-[#dadada] border-[1.588px] border-dashed inset-0 pointer-events-none rounded-[23.814px]" />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(8.33%+85px)] top-[4461px]">
      <Box />
    </div>
  );
}

function Layer6() {
  return (
    <div className="col-1 h-[79.5px] ml-0 mt-0 relative row-1 w-[83.475px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="79.5" preserveAspectRatio="none" viewBox="0 0 83.4754 79.5" width="83.4754">
        <g clipPath="url(#clip0_0_107)" id="Layer_1">
          <path d={svgPaths.p3b37c880} fill="url(#paint0_linear_0_107)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p351d4600} fill="url(#paint1_linear_0_107)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2929a180} fill="url(#paint2_linear_0_107)" id="Vector_3" />
          <path d={svgPaths.pfd8d600} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p29549300} fill="url(#paint3_linear_0_107)" id="Vector_5" />
          <path d={svgPaths.p3f7f5400} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pe75cb00} fill="url(#paint4_linear_0_107)" id="Vector_7" />
          <path d={svgPaths.p9263f00} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.p3f1a6c00} fill="#00C0F3" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_107" x1="66.8183" x2="58.3974" y1="42.6856" y2="79.3003">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_107" x1="27.2637" x2="54.8314" y1="57.2529" y2="26.3129">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_107" x1="43.14" x2="79.2485" y1="13.953" y2="25.5144">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_107" x1="4.00313" x2="37.3278" y1="36.4935" y2="-0.274309">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_107" x1="39.5749" x2="7.77951" y1="71.4498" y2="50.9445">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_107">
            <rect fill="white" height="79.5" width="83.4754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Layer6 />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute bg-white h-[154.597px] left-[calc(25%+55.38px)] rounded-[23.814px] top-[4461px] w-[190.457px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[27.783px] relative rounded-[inherit] size-full">
        <Group14 />
      </div>
      <div aria-hidden className="absolute border-[#dadada] border-[1.588px] border-dashed inset-0 pointer-events-none rounded-[23.814px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(25%+55.38px)] top-[4461px]">
      <Box1 />
    </div>
  );
}

function Layer7() {
  return (
    <div className="col-1 h-[79.5px] ml-0 mt-0 relative row-1 w-[83.475px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="79.5" preserveAspectRatio="none" viewBox="0 0 83.4754 79.5" width="83.4754">
        <g clipPath="url(#clip0_0_107)" id="Layer_1">
          <path d={svgPaths.p3b37c880} fill="url(#paint0_linear_0_107)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p351d4600} fill="url(#paint1_linear_0_107)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2929a180} fill="url(#paint2_linear_0_107)" id="Vector_3" />
          <path d={svgPaths.pfd8d600} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p29549300} fill="url(#paint3_linear_0_107)" id="Vector_5" />
          <path d={svgPaths.p3f7f5400} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pe75cb00} fill="url(#paint4_linear_0_107)" id="Vector_7" />
          <path d={svgPaths.p9263f00} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.p3f1a6c00} fill="#00C0F3" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_107" x1="66.8183" x2="58.3974" y1="42.6856" y2="79.3003">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_107" x1="27.2637" x2="54.8314" y1="57.2529" y2="26.3129">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_107" x1="43.14" x2="79.2485" y1="13.953" y2="25.5144">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_107" x1="4.00313" x2="37.3278" y1="36.4935" y2="-0.274309">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_107" x1="39.5749" x2="7.77951" y1="71.4498" y2="50.9445">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_107">
            <rect fill="white" height="79.5" width="83.4754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Layer7 />
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute bg-white h-[154.597px] left-[calc(41.67%+25.76px)] rounded-[23.814px] top-[4461px] w-[189.66px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[27.783px] relative rounded-[inherit] size-full">
        <Group15 />
      </div>
      <div aria-hidden className="absolute border-[#dadada] border-[1.588px] border-dashed inset-0 pointer-events-none rounded-[23.814px]" />
    </div>
  );
}

function Layer8() {
  return (
    <div className="col-1 h-[79.5px] ml-0 mt-0 relative row-1 w-[83.475px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="79.5" preserveAspectRatio="none" viewBox="0 0 83.4754 79.5" width="83.4754">
        <g clipPath="url(#clip0_0_107)" id="Layer_1">
          <path d={svgPaths.p3b37c880} fill="url(#paint0_linear_0_107)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p351d4600} fill="url(#paint1_linear_0_107)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2929a180} fill="url(#paint2_linear_0_107)" id="Vector_3" />
          <path d={svgPaths.pfd8d600} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p29549300} fill="url(#paint3_linear_0_107)" id="Vector_5" />
          <path d={svgPaths.p3f7f5400} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pe75cb00} fill="url(#paint4_linear_0_107)" id="Vector_7" />
          <path d={svgPaths.p9263f00} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.p3f1a6c00} fill="#00C0F3" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_107" x1="66.8183" x2="58.3974" y1="42.6856" y2="79.3003">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_107" x1="27.2637" x2="54.8314" y1="57.2529" y2="26.3129">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_107" x1="43.14" x2="79.2485" y1="13.953" y2="25.5144">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_107" x1="4.00313" x2="37.3278" y1="36.4935" y2="-0.274309">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_107" x1="39.5749" x2="7.77951" y1="71.4498" y2="50.9445">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_107">
            <rect fill="white" height="79.5" width="83.4754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Layer8 />
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute bg-white h-[154.597px] left-[calc(58.33%-4.66px)] rounded-[23.814px] top-[4461px] w-[189.66px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[27.783px] relative rounded-[inherit] size-full">
        <Group16 />
      </div>
      <div aria-hidden className="absolute border-[#dadada] border-[1.588px] border-dashed inset-0 pointer-events-none rounded-[23.814px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(58.33%-4.66px)] top-[4461px]">
      <Box3 />
    </div>
  );
}

function Layer9() {
  return (
    <div className="col-1 h-[79.5px] ml-0 mt-0 relative row-1 w-[83.475px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="79.5" preserveAspectRatio="none" viewBox="0 0 83.4754 79.5" width="83.4754">
        <g clipPath="url(#clip0_0_107)" id="Layer_1">
          <path d={svgPaths.p3b37c880} fill="url(#paint0_linear_0_107)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p351d4600} fill="url(#paint1_linear_0_107)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2929a180} fill="url(#paint2_linear_0_107)" id="Vector_3" />
          <path d={svgPaths.pfd8d600} fill="#00C0F3" id="Vector_4" />
          <path d={svgPaths.p29549300} fill="url(#paint3_linear_0_107)" id="Vector_5" />
          <path d={svgPaths.p3f7f5400} fill="#00C0F3" id="Vector_6" />
          <path d={svgPaths.pe75cb00} fill="url(#paint4_linear_0_107)" id="Vector_7" />
          <path d={svgPaths.p9263f00} fill="#00C0F3" id="Vector_8" />
          <path d={svgPaths.p3f1a6c00} fill="#00C0F3" id="Vector_9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_107" x1="66.8183" x2="58.3974" y1="42.6856" y2="79.3003">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_107" x1="27.2637" x2="54.8314" y1="57.2529" y2="26.3129">
            <stop stopColor="#182775" />
            <stop offset="0.5" stopColor="#3777BC" />
            <stop offset="1" stopColor="#00C0F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_107" x1="43.14" x2="79.2485" y1="13.953" y2="25.5144">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_107" x1="4.00313" x2="37.3278" y1="36.4935" y2="-0.274309">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_107" x1="39.5749" x2="7.77951" y1="71.4498" y2="50.9445">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.04" stopColor="#E0F5FD" stopOpacity="0.12" />
            <stop offset="0.13" stopColor="#9CDFF8" stopOpacity="0.38" />
            <stop offset="0.22" stopColor="#64CEF5" stopOpacity="0.6" />
            <stop offset="0.3" stopColor="#39C0F2" stopOpacity="0.78" />
            <stop offset="0.37" stopColor="#19B6F0" stopOpacity="0.9" />
            <stop offset="0.44" stopColor="#06B0EF" stopOpacity="0.97" />
            <stop offset="0.48" stopColor="#00AEEF" />
            <stop offset="0.88" stopColor="#1B1464" />
          </linearGradient>
          <clipPath id="clip0_0_107">
            <rect fill="white" height="79.5" width="83.4754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Layer9 />
    </div>
  );
}

function Box4() {
  return (
    <div className="absolute bg-white h-[154.597px] left-[calc(75%-35.08px)] rounded-[23.814px] top-[4461px] w-[190.457px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[27.783px] relative rounded-[inherit] size-full">
        <Group17 />
      </div>
      <div aria-hidden className="absolute border-[#dadada] border-[1.588px] border-dashed inset-0 pointer-events-none rounded-[23.814px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(75%-35.08px)] top-[4461px]">
      <Box4 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[calc(75%-35.08px)] top-[4461px]">
      <Group4 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[calc(8.33%+85px)] top-[4461px]">
      <Group6 />
      <Group7 />
      <Box2 />
      <Group5 />
      <Group35 />
    </div>
  );
}

function LandingPage() {
  const { content } = useContent();
  const h = content.home;
  const heroTitle = (!h.heroTitle || h.heroTitle === "الـرئيسية...") ? "نمــــكّن الابتكار" : h.heroTitle;
  const heroSubtitle = (!h.heroSubtitle || h.heroSubtitle === "جمعية الابتكار والاستدامة المجتمعية") ? "ونصنع أثـراً مستداماً" : h.heroSubtitle;
  return (
    <div className="relative bg-white h-[5954px] mx-auto overflow-clip w-[1440px]" data-name="Landing Page">
      <div className="absolute h-[400px] left-[calc(8.33%+85px)] rounded-[30px] top-[4747px] w-[715px] reveal-scale img-zoom-hover" data-name="١ 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[115.25%] left-[-20.17%] max-w-none top-0 w-[140.48%]" src={img2} />
        </div>
      </div>
      <div className="absolute bg-[#f9f9f9] h-[437px] left-0 top-[3004px] w-[1440px]" />
      <div className="absolute bg-[#d7f2ff] h-[488px] left-0 top-[847px] w-[1440px]" />
      <Header />
      <Stats2 />
      <Layer />
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[86.51%] font-['Hacen_Casablanca:Regular',sans-serif] leading-[0] left-1/2 not-italic text-[#241e56] text-[65px] text-center top-[11.54%] w-[766px] animate-hero-reveal">
        <p className="leading-[58px] mb-0" dir="auto">
          {heroTitle}
        </p>
        <p className="leading-[58px]" dir="auto">
          {heroSubtitle}
        </p>
      </div>
      <div className="absolute bg-white border-3 border-[#409bc5] border-solid h-[171px] left-[100px] rounded-[15px] top-[823px] w-[1239px] reveal-on-scroll card-hover-fx" />
      <Frame1 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(50%+0.48px)] not-italic text-[#009dc4] text-[55px] text-center top-[1048px] w-[418.961px] reveal-on-scroll" dir="auto">
        نبــــذة عن الجمعية
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#009dc4] text-[55px] text-center top-[1389px] w-[897px] reveal-on-scroll" dir="auto">
        لماذا جمعية الابتكار والاستدامة المجتمعية؟
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[176px] leading-[0] left-[calc(8.33%+600px)] not-italic text-[#6e6e6e] text-[28px] text-center top-[1124px] w-[1030px] reveal-on-scroll reveal-delay-150">
        <p className="leading-[30px] mb-[8.521232604980469px]" dir="auto">
          {h.section1Body}
        </p>
        <p className="leading-[30px]" dir="auto">
          {h.section1Body2}
        </p>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[0] left-[calc(8.33%+600px)] not-italic text-[#6e6e6e] text-[28px] text-center top-[1465px] w-[1030px] whitespace-pre-wrap reveal-on-scroll reveal-delay-150">
        <p className="leading-[25px] mb-[8.521232604980469px]" dir="auto">{`يشهد العالم تحولًا متسارعًا يجعل الابتكار والاستدامة من أهم عوامل التنافس والتنمية. وفي ظل هذا التحول، تبرز الحاجة إلى جهة وطنية متخصصة تسهم في بناء القدرات، وتطوير الحلول، وربط مختلف القطاعات، وتحويل الأفكار إلى أثر مستدام. `}</p>
        <p className="leading-[25px]" dir="auto">
          جاء تأسيس الجمعية لتكون منصة وطنية تجمع بين الابتكار والاستدامة المجتمعية، وتدعم الأفراد والجهات في تطوير المبادرات، وتعزيز المعرفة، وبناء الشراكات، والمساهمة في معالجة التحديات المجتمعية من خلال حلول مبتكرة ومستدامة.
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(70.83%+209.96px)] not-italic text-[#009dc4] text-[55px] text-right top-[3069px] w-[418.961px] reveal-on-scroll" dir="auto">
        أبرز البـــــرامج
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(79.17%+92px)] not-italic text-[#009dc4] text-[55px] text-right top-[4757px] whitespace-nowrap reveal-on-scroll" dir="auto">
        دعوة للتعاون
      </p>
      <Group20 />
      <Group23 />
      <Group19 />
      <Group24 />
      <Group21 />
      <Group25 />
      <Group22 />
      <Group26 />
      <div className="absolute border-3 border-[#009dc4] border-solid h-[1233px] left-[calc(8.33%+85px)] rounded-[30px] top-[1712px] w-[1030px] reveal-on-scroll" />
      <div className="absolute bg-[#009dc4] h-[98px] left-[calc(25%+98px)] top-[1678px] w-[524px] reveal-on-scroll" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(50%+0.48px)] not-italic text-[55px] text-center text-white top-[1706px] w-[418.961px] reveal-on-scroll" dir="auto">
        مجالات التمكين
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(16.67%+480px)] not-italic text-[#6e6e6e] text-[28px] text-center top-[3557px] w-[820px] reveal-on-scroll reveal-delay-100" dir="auto">
        {h.impactIntro}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(50%+0.48px)] not-italic text-[#009dc4] text-[55px] text-center top-[3500px] w-[418.961px] reveal-on-scroll" dir="auto">
        الأثـــــر
      </p>
      <div className="absolute bg-[#009dc4] h-[178px] left-0 top-[4034px] w-[1440px] reveal-on-scroll" />
      <Group33 />
      <div className="absolute bg-[#ebeef3] h-[474px] left-[-66px] rounded-[6px] top-[4212px] w-[1571px] reveal-on-scroll" />
      <Frame />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] h-[305px] leading-[34px] left-[calc(58.33%+390px)] not-italic text-[#6e6e6e] text-[30px] text-right top-[3136px] w-[395px] reveal-on-scroll reveal-delay-150" dir="auto">
        {h.programsBody}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[34px] left-[calc(66.67%+272px)] not-italic text-[#6e6e6e] text-[30px] text-right top-[4841px] w-[292px] reveal-on-scroll reveal-delay-150" dir="auto">
        {h.ctaBody}
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[34px] left-[calc(75%+152px)] not-italic text-[#009dc4] text-[30px] text-right top-[4800px] whitespace-nowrap reveal-on-scroll" dir="auto">
        {h.ctaTitle}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca_Light:Regular',sans-serif] leading-[25px] left-[calc(8.33%+600px)] not-italic text-[#6e6e6e] text-[28px] text-center top-[4355px] w-[1020px] reveal-on-scroll reveal-delay-100" dir="auto">
        {h.partnersBody}
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Hacen_Casablanca:Regular',sans-serif] leading-[43px] left-[calc(50%+0.48px)] not-italic text-[#009dc4] text-[55px] text-center top-[4294px] w-[418.961px] reveal-on-scroll" dir="auto">
        الشـــركاء
      </p>
      <Component />
      <Group37 />
      <div className="absolute h-[424px] left-0 top-[3610px] w-[1440px] reveal-on-scroll reveal-scale" data-name="١ 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.99%] left-0 max-w-none top-[-15.85%] w-full" src={img2} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[424px] left-1/2 top-[3610px] w-[1714px] reveal-on-scroll reveal-scale" data-name="ChatGPT Image Jul 19, 2026 at 12_37_40 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.93%] left-0 max-w-none top-[-31.4%] w-full" src={imgChatGptImageJul192026At123740Pm1} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[320px] left-[calc(33.33%+29.5px)] rounded-[30px] top-[3065px] w-[609px] reveal-on-scroll reveal-scale banner-hover-fx" data-name="ChatGPT Image Apr 1, 2026 at 11_39_40 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[218.69%] left-[-64.07%] max-w-none top-[-85.57%] w-[229.67%]" src={imgChatGptImageApr12026At113940Am1} />
        </div>
      </div>
      <Footer className="absolute bottom-0 h-[268px] left-0 w-[1440px] reveal-on-scroll" />
      <div className="absolute h-[39px] left-[calc(25%+49px)] top-[53px] w-[931px]" data-name="NAV Bar">
        <NavigationBar />
      </div>
      <Group36 />
    </div>
  );
}

export default function Frame3() {
  return (
    <LandingPage />
  );
}