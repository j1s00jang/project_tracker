import svgPaths from "./svg-lx07crbcw9";

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

export default function ActiveCard() {
  return (
    <div className="bg-white border border-[#d5e1ff] border-solid relative rounded-[18px] size-full" data-name="Active Card 1" style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(49,112,173,0.12)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
      <Icon />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}