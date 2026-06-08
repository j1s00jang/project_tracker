import { useState } from "react";
import svgPaths from "./svg-x1k975ddpo";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[30px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Dashboard</p>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[39px]" data-name="Sub-heading">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[14px] w-full">
        <p className="leading-[20px]">Overview of projects, tasks, and team activity</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[57px] left-[32px] right-[32px] top-[32px]" data-name="Header">
      <Heading />
      <SubHeading />
    </div>
  );
}

function Svg() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p312ffb00} id="Vector" stroke="var(--stroke-0, #0072FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-[rgba(0,114,255,0.1)] grid grid-cols-[_40px] grid-rows-[_40px] left-[20px] rounded-[14px] size-[40px] top-[20px]" data-name="Icon">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[12px] right-[20px] top-[64px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[30px] w-full">
        <p className="leading-[36px]">5</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[116px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Active Projects</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[140px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[11px] w-full">
        <p className="leading-[16.5px]">0 pending</p>
      </div>
    </div>
  );
}

function ActiveCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[178px] left-[32px] rounded-[18px] top-[113px] w-[265px]" data-name="Active Card 1" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 8px 24px rgba(49,112,173,0.12)" : "none" }}>
      <Icon />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2f5eb900} id="Vector" stroke="var(--stroke-0, #26957A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25397b80} id="Vector_2" stroke="var(--stroke-0, #26957A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_3" stroke="var(--stroke-0, #26957A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-[rgba(64,232,191,0.2)] grid grid-cols-[_40px] grid-rows-[_40px] left-[20px] rounded-[14px] size-[40px] top-[20px]" data-name="Icon">
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[12px] right-[20px] top-[64px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[30px] tracking-[-0.5px] w-full">
        <p className="leading-[normal]">12</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[116px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Active Members</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[140px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[11px] w-full">
        <p className="leading-[16.5px]">0 offboarding</p>
      </div>
    </div>
  );
}

function ActiveCard1() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[178px] left-[calc(25%+21px)] rounded-[18px] top-[113px] w-[265px]" data-name="Active Card 2" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 8px 24px rgba(49,112,173,0.12)" : "none" }}>
      <Icon1 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1628)" id="SVG">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #0072FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #0072FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[rgba(0,114,255,0.1)] grid grid-cols-[_40px] grid-rows-[_40px] left-[20px] rounded-[14px] size-[40px] top-[20px]" data-name="Icon">
      <Svg2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[12px] right-[20px] top-[64px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[30px] tracking-[-0.5px] w-full">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[116px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Completed Projects</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[140px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[11px] w-full">
        <p className="leading-[16.5px]">0 marked completed</p>
      </div>
    </div>
  );
}

function CompletedCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[178px] left-[calc(50%+10px)] rounded-[18px] top-[113px] w-[265px]" data-name="Completed Card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 8px 24px rgba(49,112,173,0.12)" : "none" }}>
      <Icon2 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #C92A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #C92A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #C92A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute bg-[rgba(223,34,37,0.1)] grid grid-cols-[_40px] grid-rows-[_40px] left-[20px] rounded-[14px] size-[40px] top-[20px]" data-name="Icon">
      <Svg3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[12px] right-[20px] top-[64px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[30px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[116px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Over-Allocated</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[140px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c92a2a] text-[11px] w-full">
        <p className="leading-[16.5px]">Needs attention</p>
      </div>
    </div>
  );
}

function WarningCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute bg-[#ffeff0] border border-[rgba(223,34,37,0.3)] border-solid h-[178px] left-[calc(75%-1px)] rounded-[18px] top-[113px] w-[265px]" data-name="Warning Card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 8px 24px rgba(201,42,42,0.1)" : "none" }}>
      <Icon3 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.pfbe91c0} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pfbe91c0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.pfbe91c0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p81336c0} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p81336c0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p81336c0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d="M2 6.66667H5.33333" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2 6.66667H5.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M2 6.66667H5.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_5">
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p381f2200} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p381f2200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p381f2200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">Upcoming Deadlines</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Heading1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container13 />
          <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[14px] whitespace-nowrap" data-name="Dashboard All link">
            <p className="leading-[20px]">All →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Northstar Brand Refresh</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">PM: Alex Morgan · May 2, 2026</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[167px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(223,34,37,0.1)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c92a2a] text-[0px] whitespace-nowrap">
          <p className="font-bold leading-[16px] text-[12px]">4d</p>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[rgba(251,252,255,0.6)] relative rounded-[14px] shrink-0 w-full" data-name="Item">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-[13px] relative size-full">
          <Container15 />
          <Overlay />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Atlas Website Redesign</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">PM: Julie Kim · May 12, 2026</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[163px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,166,0,0.2)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffa600] text-[0px] whitespace-nowrap">
          <p className="font-bold leading-[16px] text-[12px]">14d</p>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[rgba(251,252,255,0.6)] relative rounded-[14px] shrink-0 w-full" data-name="Item">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[17.01px] py-[13px] relative size-full">
          <Container18 />
          <Overlay1 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">BluePeak Design System</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">PM: Priya Shah · Jun 8, 2026</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[170px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] whitespace-nowrap">
          <p className="font-bold leading-[16px] text-[12px]">41d</p>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[rgba(251,252,255,0.6)] relative rounded-[14px] shrink-0 w-full" data-name="Item">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[17.01px] py-[13px] relative size-full">
          <Container21 />
          <Background />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function UpcomingDeadlines() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Upcoming Deadlines">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col items-start pb-[29px] pt-[21px] px-[21px] relative size-full">
        <Margin />
        <List />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p32887f80} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p32887f80} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p32887f80} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p3694d280} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3694d280} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p3694d280} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p2c08a8a0} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p2c08a8a0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p2c08a8a0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p2408dcc0} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p2408dcc0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p2408dcc0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">Unfilled Roles</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] h-[20px] min-w-[20px] relative rounded-[33554388px] shrink-0 w-[21.87px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-normal justify-end leading-[0] left-[10.83px] not-italic text-[#26957a] text-[11px] text-center top-[19px] whitespace-nowrap">
        <p className="leading-[16.5px]">0</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start min-w-[24px] pl-[4px] relative shrink-0" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container26 />
      <Heading2 />
      <Margin2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container25 />
          <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[14px] whitespace-nowrap" data-name="Dashboard Projects link">
            <p className="leading-[20px]">Projects →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #26957A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #26957A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All roles are filled</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-center justify-self-center relative row-1 self-center shrink-0" data-name="Container">
      <Overlay3 />
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[214px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_150px] py-[32px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function UnfilledRoles() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Unfilled Roles">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Margin1 />
        <Container27 />
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3155f180} id="Vector" stroke="var(--stroke-0, #C92A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pea6a680} id="Vector_2" stroke="var(--stroke-0, #C92A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">Over Capacity</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(223,34,37,0.1)] content-stretch flex h-[20px] items-center justify-center min-w-[20px] pb-[2.25px] pt-[0.75px] px-[6px] relative rounded-[33554400px] shrink-0 w-[59px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-normal justify-center leading-[0] min-w-px not-italic relative text-[#c92a2a] text-[0px] text-center whitespace-nowrap">
        <p className="font-bold leading-[16.5px] text-[11px]">2 people</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start min-w-[24px] pl-[4px] relative shrink-0" data-name="Margin">
      <Overlay4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container32 />
      <Heading3 />
      <Margin3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[14px] whitespace-nowrap" data-name="Dashboard Calendar link">
        <p className="leading-[20px]">Calendar →</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="bg-[#009557] content-stretch flex flex-col items-center justify-center relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Profile Icon">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">M</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] w-full">
        <p className="font-bold leading-[20px] text-[14px]">Michelle Chen</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[11px] w-full">
        <p className="leading-[16.5px]">Team Lead</p>
      </div>
    </div>
  );
}

function NameRole() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name/Role">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c92a2a] text-[0px] text-right whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">170%</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[11px] text-right whitespace-nowrap">
        <p className="leading-[16.5px]">peak 13.6h/day</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Data">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ProfileIcon />
        <NameRole />
        <Data />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Status Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#c92a2a] inset-[0_15%_0_0]" data-name="Background" />
      </div>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Project Name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-0 not-italic text-[#0033d9] text-[11px] top-[7.5px] whitespace-nowrap">
          <p className="leading-[16.5px]">Northstar Brand Refresh</p>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Item">
      <div aria-hidden className="absolute border border-[rgba(223,34,37,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[13px] relative size-full">
        <Container33 />
        <StatusBar />
        <ProjectName />
      </div>
    </div>
  );
}

function ProfileIcon1() {
  return (
    <div className="bg-[#3170ad] content-stretch flex flex-col items-center justify-center relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Profile Icon">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">J</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] w-full">
        <p className="font-bold leading-[20px] text-[14px]">Jason Liu</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[11px] w-full">
        <p className="leading-[16.5px]">Developer</p>
      </div>
    </div>
  );
}

function NameRole1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name/Role">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c92a2a] text-[0px] text-right whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">155%</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[11px] text-right whitespace-nowrap">
        <p className="leading-[16.5px]">peak 12.4h/day</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Data">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ProfileIcon1 />
        <NameRole1 />
        <Data1 />
      </div>
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Status Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#c92a2a] inset-[0_22.5%_0_0]" data-name="Background" />
      </div>
    </div>
  );
}

function ProjectName1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Project Name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-0 not-italic text-[#0033d9] text-[11px] top-[7.5px] whitespace-nowrap">
          <p className="leading-[16.5px]">Invoice Tool, SMPL Test</p>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Item">
      <div aria-hidden className="absolute border border-[rgba(223,34,37,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[13px] relative size-full">
        <Container38 />
        <StatusBar1 />
        <ProjectName1 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

function OverCapacity() {
  return (
    <div className="bg-[#ffeff0] col-3 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Over Capacity">
      <div aria-hidden className="absolute border border-[rgba(223,34,37,0.3)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Title />
        <List1 />
      </div>
    </div>
  );
}

function UpdatesCardsSection() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_296px] h-[296px] left-[32px] right-[32px] top-[315px]" data-name="Updates Cards Section">
      <UpcomingDeadlines />
      <UnfilledRoles />
      <OverCapacity />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[#f5fbff] h-[944px] left-[256px] top-[81px] w-[1184px]" data-name="Main">
      <Header />
      <ActiveCard />
      <ActiveCard1 />
      <CompletedCard />
      <WarningCard />
      <UpdatesCardsSection />
    </div>
  );
}

function DarkMode() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[123px] mt-0 place-items-start relative row-1" data-name="Dark mode">
      <div className="col-1 ml-[27.6px] mt-[15px] relative row-1 size-[16px]" data-name="Vector">
        <div className="absolute inset-[-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4998 17.4999">
            <path d={svgPaths.p2f9130f0} id="Vector" stroke="url(#paint0_linear_1_1641)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1641" x1="2.68916" x2="18.6914" y1="4.30557" y2="5.24537">
                <stop stopColor="#438DFD" />
                <stop offset="0.596188" stopColor="#5A75FF" />
                <stop offset="1" stopColor="#7300FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-[14.6px] mt-[35px] not-italic relative row-1 text-[#737373] text-[8px] whitespace-nowrap">
        <p className="leading-[normal]">Dark Mode</p>
      </div>
      <div className="col-1 flex h-[56px] items-center justify-center ml-[71px] mt-0 relative row-1 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" x1="0.5" x2="55.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[56px] items-center justify-center ml-0 mt-0 relative row-1 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 2" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" x1="0.5" x2="55.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[52px] mt-0 place-items-start relative row-1" data-name="Notifications">
      <div className="col-1 flex h-[56px] items-center justify-center ml-[71px] mt-0 relative row-1 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" x1="0.5" x2="55.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[56px] items-center justify-center ml-0 mt-0 relative row-1 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 2" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" x1="0.5" x2="55.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-[11.6px] mt-[35px] not-italic relative row-1 text-[#737373] text-[8px] whitespace-nowrap">
        <p className="leading-[normal]">Notifications</p>
      </div>
      <div className="col-1 h-[18.375px] ml-[26.9px] mt-[13.31px] relative row-1 w-[16.289px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2887 18.375">
          <path d={svgPaths.p89fbcc0} fill="url(#paint0_linear_1_1588)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1588" x1="1.97439" x2="18.2773" y1="4.08333" y2="4.93209">
              <stop stopColor="#438DFD" />
              <stop offset="0.596188" stopColor="#5A75FF" />
              <stop offset="1" stopColor="#7300FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Pm() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="PM">
      <div className="col-1 flex h-[56px] items-center justify-center ml-[52px] mt-0 relative row-1 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" x1="0.5" x2="55.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-0 mt-[35px] not-italic relative row-1 text-[#737373] text-[8px] whitespace-nowrap">
        <p className="leading-[normal]">PM View</p>
      </div>
      <div className="col-1 ml-[13.88px] mt-[19.88px] relative row-1 size-[6.25px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
          <path clipRule="evenodd" d={svgPaths.p2a2d8600} fill="url(#paint0_linear_1_1681)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1681" x1="0.757576" x2="7.00844" y1="1.38889" y2="1.756">
              <stop stopColor="#438DFD" />
              <stop offset="0.596188" stopColor="#5A75FF" />
              <stop offset="1" stopColor="#7300FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="col-1 h-[14.583px] ml-[8.04px] mt-[15.71px] relative row-1 w-[17.917px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 14.5833">
          <path clipRule="evenodd" d={svgPaths.p1ad9a100} fill="url(#paint0_linear_1_1507)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1507" x1="2.17172" x2="20.0595" y1="3.24074" y2="4.53141">
              <stop stopColor="#438DFD" />
              <stop offset="0.596188" stopColor="#5A75FF" />
              <stop offset="1" stopColor="#7300FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icons">
      <DarkMode />
      <Notifications />
      <Pm />
    </div>
  );
}

function Profile() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <circle cx="19" cy="19" fill="url(#paint0_linear_1_1559)" id="Ellipse 1" r="19" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1559" x1="4.60606" x2="29.2859" y1="8.44444" y2="43.4986">
              <stop stopColor="#438DFD" />
              <stop offset="0.337901" stopColor="#5A75FF" />
              <stop offset="1" stopColor="#7300FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-[15px] mt-[9px] not-italic relative row-1 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[20px]">J</p>
      </div>
    </div>
  );
}

function IconsProfile() {
  return (
    <div className="absolute content-stretch flex gap-[17px] inset-[12.5%_1.81%_12.5%_67.5%] items-center justify-end leading-[0]" data-name="icons + profile">
      <Icons />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#6e6f71] text-[0px] text-right whitespace-nowrap">
        <p className="leading-[20px] mb-0 text-[#17171a] text-[13px]">Jisoo Jang</p>
        <p className="leading-[normal] text-[#737373] text-[8px]">jisoo.jang@jisoodesign.ca</p>
      </div>
      <Profile />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute contents inset-[26.25%_62.11%_26.25%_2.62%]" data-name="Search Bar">
      <div className="absolute bg-[#f3f4f6] border border-[#d9d9d9] border-solid inset-[26.25%_62.11%_26.25%_2.62%] rounded-[5px]" />
      <div className="[word-break:break-word] absolute flex flex-col font-normal inset-[40%_80.08%_40%_5.99%] justify-center leading-[0] not-italic text-[#b4b4b4] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Search Projects, Resources...</p>
      </div>
      <div className="absolute inset-[42.5%_94.68%_42.5%_4.3%]" data-name="Vector">
        <div className="absolute inset-[0_2.28%_2.28%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7266 11.7266">
            <path d={svgPaths.p310d9f00} fill="var(--fill-0, #B4B4B4)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0033d9] text-[13px] w-full">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function TabTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab title">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
          <p className="leading-[16.5px]">Project Management</p>
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p3159e300} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3159e300} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p3159e300} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M5.33333 6.66667V9.33333" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 6.66667V9.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 6.66667V9.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d="M8 6.66667V8" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 6.66667V8" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 6.66667V8" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d="M10.6667 6.66667V10.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 6.66667V10.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M10.6667 6.66667V10.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p118e9580} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p118e9580} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p118e9580} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p36cdaf00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p36cdaf00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p36cdaf00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p21ad0600} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p21ad0600} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p21ad0600} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Templates</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M8.66667 3.33333H14" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8.66667 3.33333H14" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8.66667 3.33333H14" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M8.66667 8H14" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8.66667 8H14" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8.66667 8H14" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d="M8.66667 12.6667H14" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8.66667 12.6667H14" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8.66667 12.6667H14" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p245c7a00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p245c7a00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p245c7a00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.pbb5d900} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pbb5d900} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.pbb5d900} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Projects Tracker</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1556)" id="SVG">
          <g id="Vector">
            <path d={svgPaths.p3227a460} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3227a460} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p3227a460} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1556">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Tasks Tracker</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p19d57600} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p19d57600} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p19d57600} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M6 5.33333H10.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M6 5.33333H10.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M6 5.33333H10.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d="M5.33333 8H9.33333" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 8H9.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 8H9.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d="M7.33333 10.6667H10.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M7.33333 10.6667H10.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M7.33333 10.6667H10.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Timeline Chart</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.pcbc4a80} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pcbc4a80} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.pcbc4a80} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p32566c00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p32566c00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p32566c00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p25e54000} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p25e54000} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p25e54000} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p2a9e6140} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p2a9e6140} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p2a9e6140} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Project Mobilization</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Projects">
        <Svg9 />
        <Container44 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Templates">
        <Svg10 />
        <Container45 />
      </div>
      <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Projects Tracker">
        <Svg11 />
        <Container46 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Tasks Tracker">
        <Svg12 />
        <Container47 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Timeline Chart">
        <Svg13 />
        <Container48 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Mobilization">
        <Svg14 />
        <Container49 />
      </div>
    </div>
  );
}

function TabTitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab title">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
          <p className="leading-[16.5px]">Resource Management</p>
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p32887f80} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p32887f80} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p32887f80} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1a837050} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1a837050} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1a837050} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p1f197700} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1f197700} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1f197700} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p3694d280} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3694d280} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p3694d280} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Project Members</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 1.33333V4" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M10.6667 1.33333V4" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p3ee34580} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3ee34580} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p3ee34580} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d="M2 6.66667H14" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2 6.66667H14" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M2 6.66667H14" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_5">
            <path d="M5.33333 9.33333H5.34" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 9.33333H5.34" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 9.33333H5.34" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_6">
            <path d="M8 9.33333H8.00667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 9.33333H8.00667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 9.33333H8.00667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_7">
            <path d="M10.6667 9.33333H10.6733" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 9.33333H10.6733" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M10.6667 9.33333H10.6733" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_8">
            <path d="M5.33333 12H5.34" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 12H5.34" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M5.33333 12H5.34" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_9">
            <path d="M8 12H8.00667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 12H8.00667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 12H8.00667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_10">
            <path d="M10.6667 12H10.6733" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 12H10.6733" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M10.6667 12H10.6733" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Members Calendar</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Members">
        <Svg15 />
        <Container50 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Members Calendar">
        <Svg16 />
        <Container51 />
      </div>
    </div>
  );
}

function TabTitle2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab title">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
          <p className="leading-[16.5px]">Help</p>
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M8 2V10" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 2V10" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 2V10" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p26e09a00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p26e09a00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p26e09a00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p23ad1400} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p23ad1400} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p23ad1400} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Data Upload</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p1e124b00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1e124b00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1e124b00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p28db2b80} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p28db2b80} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p28db2b80} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">App Settings</p>
      </div>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Data Upload">
        <Svg17 />
        <Container52 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Configuration">
        <Svg18 />
        <Container53 />
      </div>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[40px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[34px]" data-name="External - ProjectPulse Icon">
        <div className="absolute bottom-[24.39%] left-[24.39%] right-1/4 top-1/4">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2073 17.2073">
            <path d={svgPaths.p195c4b00} fill="url(#paint0_linear_1_1481)" id="Rectangle 53" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1481" x1="8.60366" x2="8.60366" y1="0" y2="17.2073">
                <stop stopColor="#4282E2" />
                <stop offset="0.5" stopColor="#3558CD" />
                <stop offset="1" stopColor="#292DB8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_54.27%_54.27%_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1683_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49" data-figma-bg-blur-radius="6.21951">
              <path d={svgPaths.p21e79800} fill="url(#paint0_linear_1_1683)" />
              <path d={svgPaths.p21e79800} fill="url(#paint1_radial_1_1683)" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1683_clip_path" transform="translate(6.21951 6.21951)">
                <path d={svgPaths.p21e79800} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1683" x1="2.23765" x2="26.5216" y1="-0.555313" y2="32.8001">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1683" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_54.27%_54.27%_0]" data-name="Rectangle 49 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1546_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1546)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1546)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1546_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1546" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1546" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_0_54.27%_54.27%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1501_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 50" data-figma-bg-blur-radius="6.21951">
              <path d={svgPaths.p21e79800} fill="url(#paint0_linear_1_1501)" />
              <path d={svgPaths.p21e79800} fill="url(#paint1_radial_1_1501)" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1501_clip_path" transform="translate(6.21951 6.21951)">
                <path d={svgPaths.p21e79800} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1501" x1="2.23765" x2="3.61508" y1="-0.555314" y2="41.8172">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1501" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_0_54.27%_54.27%]" data-name="Rectangle 50 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1546_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1546)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1546)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1546_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1546" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1546" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[54.27%_54.27%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1592_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 52" data-figma-bg-blur-radius="6.21951">
              <path d={svgPaths.p21e79800} fill="url(#paint0_linear_1_1592)" />
              <path d={svgPaths.p21e79800} fill="url(#paint1_radial_1_1592)" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1592_clip_path" transform="translate(6.21951 6.21951)">
                <path d={svgPaths.p21e79800} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1592" x1="2.23765" x2="22.3052" y1="-0.555314" y2="25.1514">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1592" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[54.27%_54.27%_0_0]" data-name="Rectangle 52 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.5488">
            <foreignObject height="27.9878" width="27.9878" x="-6.21951" y="-6.21951">
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1546_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1546)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1546)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1546_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1546" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1546" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[48.78%_0_0_54.88%]" data-name="Icons/Icon:34">
          <div className="absolute inset-[0_62.22%_75.61%_23.89%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.13076 4.24747">
              <foreignObject height="16.6865" width="14.5698" x="-6.21951" y="-6.21951">
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1479_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 13" data-figma-bg-blur-radius="6.21951">
                <path d={svgPaths.p3e8e8900} fill="url(#paint0_linear_1_1479)" />
                <path d={svgPaths.p3e8e8900} fill="url(#paint1_radial_1_1479)" />
                <path d={svgPaths.p3e8e8900} stroke="url(#paint2_linear_1_1479)" strokeWidth="0.103659" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1479_clip_path" transform="translate(6.21951 6.21951)">
                  <path d={svgPaths.p3e8e8900} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1479" x1="0.306641" x2="2.77312" y1="-0.151695" y2="0.570731">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1479" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1479" x1="1.06538" x2="1.06538" y1="0" y2="4.24747">
                  <stop stopColor="#4282E2" />
                  <stop offset="0.5" stopColor="#3558CD" />
                  <stop offset="1" stopColor="#292DB8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[0_23.89%_75.61%_62.22%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.13076 4.24747">
              <g id="Rectangle 14">
                <path d={svgPaths.p2acab100} fill="url(#paint0_linear_1_1586)" />
                <path d={svgPaths.p2acab100} fill="url(#paint1_radial_1_1586)" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1586" x1="0.306641" x2="2.77312" y1="-0.151695" y2="0.570731">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1586" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute aspect-[74/73.75609588623047] left-0 right-[-1.35%] top-[calc(50%+1.19px)]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.4975">
              <foreignObject height="27.9366" width="27.9878" x="-6.21951" y="-6.21951">
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1475_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 12" data-figma-bg-blur-radius="6.21951">
                <path d={svgPaths.p3cc88a00} fill="url(#paint0_linear_1_1475)" />
                <path d={svgPaths.p3cc88a00} fill="url(#paint1_radial_1_1475)" />
                <path d={svgPaths.p3cc88a00} stroke="url(#paint2_linear_1_1475)" strokeWidth="0.425" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1475_clip_path" transform="translate(6.21951 6.21951)">
                  <path d={svgPaths.p3cc88a00} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1475" x1="2.23765" x2="16.7875" y1="-0.553483" y2="7.96976">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.45534 9.48661 19.9397 2.32371 14.9902)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1475" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1475" x1="7.77439" x2="7.77439" y1="0" y2="15.4975">
                  <stop stopColor="#4282E2" />
                  <stop offset="0.5" stopColor="#3558CD" />
                  <stop offset="1" stopColor="#292DB8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[12.2%_0_0_0]" data-name="Rectangle 12 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3415 15.2909">
              <foreignObject height="27.7299" width="27.7805" x="-6.21951" y="-6.21951">
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1526_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 12 (Stroke)" data-figma-bg-blur-radius="6.21951">
                <path clipRule="evenodd" d={svgPaths.p2446fb00} fill="url(#paint0_linear_1_1526)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2446fb00} fill="url(#paint1_radial_1_1526)" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1526_clip_path" transform="translate(6.21951 6.21951)">
                  <path clipRule="evenodd" d={svgPaths.p2446fb00} fillRule="evenodd" />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1526" x1="2.20781" x2="16.5637" y1="-0.546104" y2="7.86349">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(7.58582 -9.32927 9.36012 19.6738 2.29273 14.7903)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1526" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[38.54%_29.71%_26.72%_29.44%]" data-name="31">
            <div className="absolute inset-[-3.43%_-3.31%_-3.43%_-3.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.698 6.46575">
                <path d={svgPaths.p2efa7400} fill="url(#paint0_linear_1_1473)" id="31" stroke="url(#paint1_linear_1_1473)" strokeWidth="0.207317" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1473" x1="3.35748" x2="3.35748" y1="0.207317" y2="6.25844">
                    <stop stopColor="#4282E2" />
                    <stop offset="0.5" stopColor="#3558CD" />
                    <stop offset="1" stopColor="#292DB8" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1473" x1="3.35748" x2="3.35748" y1="0.207317" y2="6.25844">
                    <stop stopColor="#4282E2" />
                    <stop offset="0.5" stopColor="#3558CD" />
                    <stop offset="1" stopColor="#292DB8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[16px]">ProjectTracker</p>
      </div>
    </div>
  );
}

function Desc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Desc">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`good design inc. `}</p>
      </div>
    </div>
  );
}

function AppNameContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="App Name Container">
      <Name />
      <Desc />
    </div>
  );
}

function LogoNameContainer() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-0 p-[20px] top-0 w-[255px]" data-name="Logo & Name Container">
      <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
      <LogoContainer />
      <AppNameContainer />
    </div>
  );
}

export default function V201Dashboard() {
  return (
    <div className="relative size-full" data-name="v2 - 01 dashboard">
      <Main />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1024px] left-1/2 top-1/2 w-[1440px]" data-name="Completed Nav Bars">
        <div className="absolute h-[80px] left-[255px] top-0 w-[1185px]" data-name="Top Nav Bar">
          <div className="absolute bg-white inset-0" data-name="top nav bar">
            <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
          </div>
          <IconsProfile />
          <SearchBar />
        </div>
        <div className="absolute bg-white h-[944px] left-0 top-[80px] w-[255px]" data-name="Left Nav">
          <div className="content-stretch flex flex-col gap-[23px] items-start overflow-auto pb-[16px] pt-[12px] px-[12px] relative rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" style={{ backgroundImage: "linear-gradient(110.649deg, rgba(67, 141, 253, 0.15) 12.682%, rgba(90, 117, 255, 0.15) 69.195%, rgba(115, 0, 255, 0.15) 107.47%)" }} data-name="Dashboard Tab">
              <Svg8 />
              <Container43 />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Project Management Section">
              <TabTitle />
              <Tabs />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Resource Management Section">
              <TabTitle1 />
              <Tabs1 />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Help Section">
              <TabTitle2 />
              <Tabs2 />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
        </div>
        <LogoNameContainer />
      </div>
    </div>
  );
}