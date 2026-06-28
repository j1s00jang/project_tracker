import svgPaths from "./svg-8skaw4fnui";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal] text-[30px]">Projects</p>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub-heading">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Browse and manage your design projects</p>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-0 top-0 w-[333px]" data-name="Header Container">
      <Heading />
      <SubHeading />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="+ SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="+ SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function NewProjectBtn() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[988px] px-[16px] py-[10px] rounded-[10px] top-[14px]" data-name="New Project btn">
      <div className="absolute bg-[#3170ad] inset-0 rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">New Project</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[59px] left-[32px] right-[32px] top-[32px]" data-name="Header">
      <HeaderContainer />
      <NewProjectBtn />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21px] items-start left-[36px] overflow-clip pb-[2px] pt-px right-[26px] top-[6px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Search projects...</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="flex-[1_0_0] h-[17px] min-w-px relative" data-name="Container" />;
}

function Margin() {
  return <div className="h-[10px] relative shrink-0 w-[14px]" data-name="Margin" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex items-center left-[36px] right-[12px] top-[8.5px]" data-name="Container">
      <Container2 />
      <Margin />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[36px] left-0 overflow-clip right-[13px] rounded-[10px] top-0" data-name="Input">
      <Container />
      <Container1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[320px]" data-name="Search bar">
      <Input />
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Active() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[320px] px-[13px] py-px rounded-[10px] top-0" data-name="Active">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Active</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function AllPMs() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8.01px] h-[36px] items-center left-[412px] px-[13px] py-px rounded-[10px] top-0" data-name="All PMs">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All PMs</p>
      </div>
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function AllTypes() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[514.01px] px-[13px] py-px rounded-[10px] top-0" data-name="All Types">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All Types</p>
      </div>
      <Svg4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function AllClients() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[625.01px] px-[13px] py-px rounded-[10px] top-0" data-name="All Clients">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All Clients</p>
      </div>
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function AllContract() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[742.01px] px-[13px] py-px rounded-[10px] top-0" data-name="All Contract">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All Contract Types</p>
      </div>
      <Svg6 />
    </div>
  );
}

function ShowClosedButton() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[36px] items-center justify-center left-[909.01px] px-[13px] py-px rounded-[10px] top-0" data-name="Show Closed Button">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Show Closed</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Grid() {
  return (
    <div className="bg-[rgba(0,114,255,0.1)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[_32px] grid-rows-[_32px] relative size-full">
        <Svg7 />
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2 3.33333H2.00667" id="Vector" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 8H2.00667" id="Vector_2" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 12.6667H2.00667" id="Vector_3" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 3.33333H14" id="Vector_4" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H14" id="Vector_5" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12.6667H14" id="Vector_6" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[_32px] grid-rows-[_32px] relative size-full">
        <Svg8 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex items-start p-[3px] relative rounded-[10px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Grid />
      <List />
    </div>
  );
}

function ShowGridListToggle() {
  return (
    <div className="absolute left-[1050px] min-w-[70px] top-0 w-[70px]" data-name="Show grid/list toggle">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[489.719px] relative size-full">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function FilterSearchBar() {
  return (
    <div className="absolute h-[36px] left-[32px] right-[32px] top-[113px]" data-name="Filter + Search bar">
      <SearchBar />
      <Active />
      <AllPMs />
      <AllTypes />
      <AllClients />
      <AllContract />
      <ShowClosedButton />
      <ShowGridListToggle />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Internal Portal Redesign</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f195ff] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Background" />
      <Heading3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">UX/UI Design</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Heading">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">PROJECT</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container6 />
      <Overlay />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">CONTRACT</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,166,0,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffa600] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Inactive</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center relative shrink-0" data-name="Container">
      <Container8 />
      <Overlay1 />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0" data-name="Status">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <Heading2 />
          <Status />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Priya Shah</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg9 />
      <Container10 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">June 14, 2026 → July 1, 2026</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg10 />
      <Container12 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Internal</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View</p>
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
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d405500} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container14 />
        <Svg11 />
      </div>
    </div>
  );
}

function View() {
  return (
    <div className="relative shrink-0 w-full" data-name="View">
      <div aria-hidden className="absolute border-[#d5e1ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Overlay2 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[18px] row-2 self-start shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <Heading1 />
        <Info />
        <View />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] mb-0 text-[14px]">Bloom Skincare</p>
        <p className="font-bold leading-[20px] text-[14px]">Packaging Refresh</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#00906d] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Background" />
      <Heading6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Packaging</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Heading">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">PROJECT</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <Overlay3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">CONTRACT</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <Overlay4 />
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0" data-name="Status">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <Heading5 />
          <Status1 />
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg12 />
      <Container22 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">June 12, 2026 → June 25, 2026</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg13 />
      <Container24 />
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container21 />
        <Container23 />
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(0,114,255,0.1)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0072ff] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Direct Contract</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View</p>
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
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d405500} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container26 />
        <Svg14 />
      </div>
    </div>
  );
}

function View1() {
  return (
    <div className="relative shrink-0 w-full" data-name="View">
      <div aria-hidden className="absolute border-[#d5e1ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Overlay5 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[18px] row-2 self-start shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <Heading4 />
        <Info1 />
        <View1 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Bluepeak Design System</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ff5546] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Background" />
      <Heading9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Product Design</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Heading">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">PROJECT</p>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container30 />
      <Overlay6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">CONTRACT</p>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center relative shrink-0" data-name="Container">
      <Container32 />
      <Overlay7 />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0" data-name="Status">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <Heading8 />
          <Status2 />
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Priya Shah</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg15 />
      <Container34 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">June 8, 2026 → June 23, 2026</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg16 />
      <Container36 />
    </div>
  );
}

function Info2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(0,114,255,0.1)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0072ff] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Direct Contract</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View</p>
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
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d405500} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container38 />
        <Svg17 />
      </div>
    </div>
  );
}

function View2() {
  return (
    <div className="relative shrink-0 w-full" data-name="View">
      <div aria-hidden className="absolute border-[#d5e1ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Overlay8 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <Heading7 />
        <Info2 />
        <View2 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Atlas Website Redesign</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ffa600] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Background" />
      <Heading12 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Web Design</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Heading">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">PROJECT</p>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container42 />
      <Overlay9 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">CONTRACT</p>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center relative shrink-0" data-name="Container">
      <Container44 />
      <Overlay10 />
    </div>
  );
}

function Status3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0" data-name="Status">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <Heading11 />
          <Status3 />
        </div>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Julie Kim</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg18 />
      <Container46 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">May 12, 2026 → June 1, 2026</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg19 />
      <Container48 />
    </div>
  );
}

function Info3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container45 />
        <Container47 />
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(0,114,255,0.1)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0072ff] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Direct Contract</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d405500} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container50 />
        <Svg20 />
      </div>
    </div>
  );
}

function View3() {
  return (
    <div className="relative shrink-0 w-full" data-name="View">
      <div aria-hidden className="absolute border-[#d5e1ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Overlay11 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <Heading10 />
        <Info3 />
        <View3 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
        <p className="font-bold leading-[20px] text-[14px]">Northstar Brand Refresh</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#956a1b] relative rounded-[33554400px] shrink-0 size-[8px]" data-name="Background" />
      <Heading15 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Branding</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Heading">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">PROJECT</p>
      </div>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container54 />
      <Overlay12 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">CONTRACT</p>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="bg-[rgba(64,232,191,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#26957a] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="font-bold leading-[15px] text-[10px]">Active</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center relative shrink-0" data-name="Container">
      <Container56 />
      <Overlay13 />
    </div>
  );
}

function Status4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0" data-name="Status">
      <Container53 />
      <Container55 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <Heading14 />
          <Status4 />
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3170ad] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Alex Morgan</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg21 />
      <Container58 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">May 2, 2026 → May 25, 2026</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg22 />
      <Container60 />
    </div>
  );
}

function Info4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container57 />
        <Container59 />
      </div>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="bg-[rgba(0,114,255,0.1)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0072ff] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Direct Contract</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d405500} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container62 />
        <Svg23 />
      </div>
    </div>
  );
}

function View4() {
  return (
    <div className="relative shrink-0 w-full" data-name="View">
      <div aria-hidden className="absolute border-[#d5e1ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Overlay14 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[18px] row-1 self-start shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[#d5e1ff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <Heading13 />
        <Info4 />
        <View4 />
      </div>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[___207px_235px_235px] h-[709px] left-[32px] right-[32px] top-[167px]" data-name="Cards Section">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[#f5fbff] inset-[81px_0_-1px_256px]" data-name="Main">
      <Header />
      <FilterSearchBar />
      <CardsSection />
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

function SearchBar1() {
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

function Svg24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.pff0fc00} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pff0fc00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.pff0fc00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1d76d410} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d76d410} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p1d76d410} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p2f091200} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p2f091200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p2f091200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p39897300} stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p39897300} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d={svgPaths.p39897300} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
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

function Svg25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3159e300} id="Vector" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 6.66667V9.33333" id="Vector_2" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6.66667V8" id="Vector_3" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 6.66667V10.6667" id="Vector_4" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0033d9] text-[13px] w-full">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function Svg26() {
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

function Container65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Templates</p>
      </div>
    </div>
  );
}

function Svg27() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Deliverable Tracker</p>
      </div>
    </div>
  );
}

function Svg28() {
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

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Activity Tracker</p>
      </div>
    </div>
  );
}

function Svg29() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Timeline Chart</p>
      </div>
    </div>
  );
}

function Svg30() {
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

function Container69() {
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
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" style={{ backgroundImage: "linear-gradient(110.649deg, rgba(67, 141, 253, 0.15) 12.682%, rgba(90, 117, 255, 0.15) 69.195%, rgba(115, 0, 255, 0.15) 107.47%)" }} data-name="Projects">
        <Svg25 />
        <Container64 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Templates">
        <Svg26 />
        <Container65 />
      </div>
      <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Projects Tracker">
        <Svg27 />
        <Container66 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Tasks Tracker">
        <Svg28 />
        <Container67 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Timeline Chart">
        <Svg29 />
        <Container68 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Mobilization">
        <Svg30 />
        <Container69 />
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

function Svg31() {
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

function Container70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Resources</p>
      </div>
    </div>
  );
}

function Svg32() {
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

function Container71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Resource Calendar</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Members">
        <Svg31 />
        <Container70 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Members Calendar">
        <Svg32 />
        <Container71 />
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

function Svg33() {
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

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Data Upload</p>
      </div>
    </div>
  );
}

function Svg34() {
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

function Container73() {
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
        <Svg33 />
        <Container72 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Configuration">
        <Svg34 />
        <Container73 />
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
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1471_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1471)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1471)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1471_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1471" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1471" r="1">
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
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1471_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1471)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1471)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1471_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1471" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1471" r="1">
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
              <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1471_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Rectangle 49 (Stroke)" data-figma-bg-blur-radius="6.21951">
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint0_linear_1_1471)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23880d80} fill="url(#paint1_radial_1_1471)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="bgblur_0_1_1471_clip_path" transform="translate(6.21951 6.21951)">
                <path clipRule="evenodd" d={svgPaths.p23880d80} fillRule="evenodd" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1471" x1="2.23765" x2="16.812" y1="-0.555314" y2="7.95414">
                <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                <stop offset="0.526042" stopColor="#88A4FF" />
                <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1471" r="1">
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
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1469_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 13" data-figma-bg-blur-radius="6.21951">
                <path d={svgPaths.p3e8e8900} fill="url(#paint0_linear_1_1469)" />
                <path d={svgPaths.p3e8e8900} fill="url(#paint1_radial_1_1469)" />
                <path d={svgPaths.p3e8e8900} stroke="url(#paint2_linear_1_1469)" strokeWidth="0.103659" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1469_clip_path" transform="translate(6.21951 6.21951)">
                  <path d={svgPaths.p3e8e8900} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1469" x1="0.306641" x2="2.77312" y1="-0.151695" y2="0.570731">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1469" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1469" x1="1.06538" x2="1.06538" y1="0" y2="4.24747">
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
                <path d={svgPaths.p2acab100} fill="url(#paint0_linear_1_1467)" />
                <path d={svgPaths.p2acab100} fill="url(#paint1_radial_1_1467)" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1467" x1="0.306641" x2="2.77312" y1="-0.151695" y2="0.570731">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1467" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute aspect-[74/73.75609588623047] left-0 right-[-1.35%] top-[calc(50%+1.19px)]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5488 15.4975">
              <foreignObject height="27.9366" width="27.9878" x="-6.21951" y="-6.21951">
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1465_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 12" data-figma-bg-blur-radius="6.21951">
                <path d={svgPaths.p3cc88a00} fill="url(#paint0_linear_1_1465)" />
                <path d={svgPaths.p3cc88a00} fill="url(#paint1_radial_1_1465)" />
                <path d={svgPaths.p3cc88a00} stroke="url(#paint2_linear_1_1465)" strokeWidth="0.425" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1465_clip_path" transform="translate(6.21951 6.21951)">
                  <path d={svgPaths.p3cc88a00} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1465" x1="2.23765" x2="16.7875" y1="-0.553483" y2="7.96976">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(7.68833 -9.45534 9.48661 19.9397 2.32371 14.9902)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1465" r="1">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1465" x1="7.77439" x2="7.77439" y1="0" y2="15.4975">
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
                <div style={{ backdropFilter: "blur(3.11px)", clipPath: "url(#bgblur_0_1_1463_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g id="Rectangle 12 (Stroke)" data-figma-bg-blur-radius="6.21951">
                <path clipRule="evenodd" d={svgPaths.p2446fb00} fill="url(#paint0_linear_1_1463)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2446fb00} fill="url(#paint1_radial_1_1463)" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="bgblur_0_1_1463_clip_path" transform="translate(6.21951 6.21951)">
                  <path clipRule="evenodd" d={svgPaths.p2446fb00} fillRule="evenodd" />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1463" x1="2.20781" x2="16.5637" y1="-0.546104" y2="7.86349">
                  <stop offset="0.188941" stopColor="#E7F0FF" stopOpacity="0.523483" />
                  <stop offset="0.526042" stopColor="#88A4FF" />
                  <stop offset="1" stopColor="#B4D2FF" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(7.58582 -9.32927 9.36012 19.6738 2.29273 14.7903)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1463" r="1">
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

export default function V202Projects() {
  return (
    <div className="bg-white relative size-full" data-name="v2 - 02 projects">
      <Main />
      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-name="Completed Nav Bars">
        <div className="absolute h-[80px] left-[255px] top-0 w-[1185px]" data-name="Top Nav Bar">
          <div className="absolute bg-white inset-0" data-name="top nav bar">
            <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
          </div>
          <IconsProfile />
          <SearchBar1 />
        </div>
        <div className="absolute bg-white h-[944px] left-0 top-[80px] w-[255px]" data-name="Left Nav">
          <div className="content-stretch flex flex-col gap-[23px] items-start overflow-auto pb-[16px] pt-[12px] px-[12px] relative rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Dashboard Tab">
              <Svg24 />
              <Container63 />
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