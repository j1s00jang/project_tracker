import svgPaths from "./svg-bhuhxxduqp";

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 12 12" aria-hidden>
      <path d={svgPaths.pbb9d080} stroke="#AD0000" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 4.5V6.5" stroke="#AD0000" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8.5H6.005" stroke="#AD0000" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type WeekSummaryCardProps = {
  bgClass: string;
  textClass: string;
  percent: string;
  hours: string;
  peak: string;
  date: string;
  dataName?: string;
  showWarning?: boolean;
};

function WeekSummaryCard({
  bgClass,
  textClass,
  percent,
  hours,
  peak,
  date,
  dataName = "Paragraph+Overlay",
  showWarning,
}: WeekSummaryCardProps) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center gap-[2px] h-[85px] left-[8px] not-italic overflow-hidden rounded-[8px] top-[12px] w-[96px] ${bgClass} ${textClass}`}
      data-name={dataName}
    >
      <div className="flex max-w-full items-center justify-center gap-[3px] whitespace-nowrap">
        {showWarning && <WarningIcon className="block shrink-0 size-[12px]" />}
        <span className="shrink-0 text-[14px] font-bold leading-none">{percent}</span>
      </div>
      <span className="max-w-full shrink-0 text-[9px] font-normal leading-none opacity-80 whitespace-nowrap">{hours}</span>
      <span className="max-w-full shrink-0 text-[9px] font-bold leading-none whitespace-nowrap">{peak}</span>
      <span className="max-w-full shrink-0 text-[9px] font-normal leading-none opacity-70 whitespace-nowrap">{date}</span>
    </div>
  );
}

type DayUtilizationBadgeProps = {
  bgClass: string;
  colorClass: string;
  value: string;
  dataName?: string;
  showWarning?: boolean;
};

function DayUtilizationBadge({ bgClass, colorClass, value, dataName = "Background", showWarning }: DayUtilizationBadgeProps) {
  return (
    <div
      className={`absolute box-border flex h-[40px] w-[48px] items-center justify-center gap-0.5 left-[2px] overflow-hidden rounded-[8px] top-[34.5px] p-1 ${bgClass} ${colorClass}`}
      data-name={dataName}
    >
      {showWarning && <WarningIcon className="block shrink-0 size-[10px]" />}
      <span className="text-[11px] font-bold leading-none whitespace-nowrap">{value}</span>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[32px] not-italic top-[32px] whitespace-nowrap" data-name="Header">
      <div className="-translate-y-1/2 absolute flex flex-col font-bold justify-center left-[32px] right-[calc(75%+53px)] text-[#17171a] text-[30px] top-[50px] tracking-[-0.5px]">
        <p className="leading-[normal]">Resource Calendar</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-[32px] text-[#3170ad] text-[14px] top-[80px]">
        <p className="leading-[20px]">View resource availability</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[11px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#3170ad] h-[32px] left-[4px] rounded-[8px] top-[4px] w-[78.84px]" data-name="Button">
      <Svg />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[calc(50%+11.08px)] not-italic text-[13px] text-center text-white top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">Daily</p>
      </div>
    </div>
  );
}

function DailyWeeklyMonthly() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[42px] left-[32px] right-[calc(75%+32.78px)] rounded-[10px] top-[113px]" data-name="Daily/Weekly/Monthly">
      <Button />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[119.84px] not-italic text-[#737373] text-[13px] text-center top-[20px] whitespace-nowrap">
        <p className="leading-[20px]">Weekly</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[188.84px] not-italic text-[#737373] text-[13px] text-center top-[20px] whitespace-nowrap">
        <p className="leading-[20px]">Monthly</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[30px] left-[295.22px] right-[calc(50%+266.78px)] rounded-[8px] top-[119px]" data-name="Button">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3170AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[30px] left-[calc(25%+131px)] right-[calc(50%+135px)] rounded-[8px] top-[119px]" data-name="Button">
      <Svg2 />
    </div>
  );
}

function Month() {
  return (
    <div className="absolute contents left-[295.22px] right-[calc(50%+135px)] top-[119px]" data-name="Month">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[calc(25%+51px)] not-italic right-[calc(50%+186px)] text-[#1c1d1f] text-[0px] top-[134px] whitespace-nowrap">
        <p className="font-bold leading-[16px] text-[12px]">May 2026</p>
      </div>
      <Button1 />
      <Button2 />
    </div>
  );
}

function AddMembersBtn() {
  return (
    <div
      className="absolute content-stretch flex gap-[8px] items-center px-[16px] py-[10px] right-[32px] rounded-[10px] top-[113px]"
      data-name="Add Members btn"
    >
      <div className="absolute bg-[#3170ad] inset-0 rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="relative shrink-0 size-[16px]" data-name="SVG">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="SVG">
            <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #F5FBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #F5FBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f5fbff] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Add Resource to Project</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-y-1/2 absolute left-[17px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <g id="Vector">
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-0, #242429)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TimeOffBtn() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[40px] left-[calc(50%+231px)] right-[247.36px] rounded-[10px] top-[113px]" data-name="Time off btn">
      <Svg4 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[calc(50%+11.18px)] not-italic text-[#17171a] text-[13px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">Time Off</p>
      </div>
    </div>
  );
}

function Free() {
  return (
    <div className="absolute bg-[#e7e7e7] h-[24px] left-[106px] right-[calc(75%+120px)] rounded-[8px] top-[173px]" data-name="Free">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[35px] not-italic text-[#4f4f4f] text-[12px] text-center top-[12px] w-[70px]">
        <p className="leading-[16px]">Free (0%)</p>
      </div>
    </div>
  );
}

function Low() {
  return (
    <div className="absolute bg-[#cdfce1] h-[24px] left-[186px] right-[calc(75%+23px)] rounded-[8px] top-[173px]" data-name="Low">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[43.45px] not-italic text-[#006133] text-[12px] text-center top-[12px] w-[87px]">
        <p className="leading-[16px]">Low (1–49%)</p>
      </div>
    </div>
  );
}

function Mid() {
  return (
    <div className="absolute bg-[#c4eeff] h-[24px] left-[283px] right-[calc(50%+217px)] rounded-[8px] top-[173px]" data-name="Mid">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[46px] not-italic text-[#0049a1] text-[12px] text-center top-[12px] w-[92px]">
        <p className="leading-[16px]">Mid (50–79%)</p>
      </div>
    </div>
  );
}

function High() {
  return (
    <div className="absolute bg-[#ffe4a2] h-[24px] left-[calc(25%+89px)] right-[calc(50%+111px)] rounded-[8px] top-[173px]" data-name="High">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[48px] not-italic text-[#814400] text-[12px] text-center top-[12px] w-[96px]">
        <p className="leading-[16px]">High (80–99%)</p>
      </div>
    </div>
  );
}

function Conflict() {
  return (
    <div className="absolute bg-[#ffd7d0] h-[24px] left-[calc(25%+195px)] right-[calc(25%+282px)] rounded-[8px] top-[173px]" data-name="Conflict">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[57.5px] not-italic text-[#ad0000] text-[12px] text-center top-[12px] w-[115px]">
        <p className="leading-[16px]">{`Conflict (>8h/day)`}</p>
      </div>
    </div>
  );
}

function TimeOff() {
  return (
    <div className="absolute bg-[#ede5ff] h-[24px] left-[calc(50%+24px)] right-[calc(25%+210px)] rounded-[8px] top-[173px]" data-name="Time Off">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[30.8px] not-italic text-[#5803cf] text-[12px] text-center top-[12px] w-[62px]">
        <p className="leading-[16px]">Time Off</p>
      </div>
    </div>
  );
}

function WeekendHoliday() {
  return (
    <div className="absolute bg-[#d3d3d3] h-[24px] left-[calc(50%+96px)] right-[calc(25%+86px)] rounded-[8px] top-[173px]" data-name="Weekend/Holiday">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[57px] not-italic text-[12px] text-black text-center top-[12px] w-[114px]">
        <p className="leading-[16px]">Weekend/Holiday</p>
      </div>
    </div>
  );
}

function UtilizationChips() {
  return (
    <div className="absolute contents left-[32px] right-[calc(25%+86px)] top-[173px]" data-name="Utilization chips">
      <div className="absolute flex h-[24px] items-center left-[32px] top-[173px]">
        <span className="font-bold text-[12px] leading-none text-[#6e6f71] whitespace-nowrap">Utilization:</span>
      </div>
      <Free />
      <Low />
      <Mid />
      <High />
      <Conflict />
      <TimeOff />
      <WeekendHoliday />
    </div>
  );
}

function ParagraphOverlay() {
  return (
    <WeekSummaryCard
      bgClass="bg-[#cdfce1]"
      date="May 25"
      hours="2h"
      peak="Peak: 5%"
      percent="1%"
      colorClass="text-[#006133]"
    />
  );
}

function Data() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[140.73px] right-[1612px] top-[-1px]" data-name="Data">
      <ParagraphOverlay />
    </div>
  );
}

function Data1() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[252.73px] right-[1560px] top-[-1px]" data-name="Data" />;
}

function Data2() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[304.73px] right-[1508px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data3() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[356.73px] right-[1456px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data4() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[408.73px] right-[1404px] top-[-1px]" data-name="Data" />;
}

function Data5() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[460.73px] right-[1352px] top-[-1px]" data-name="Data" />;
}

function Data6() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[512.73px] right-[1300px] top-[-1px]" data-name="Data" />;
}

function Data7() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[564.73px] right-[1248px] top-[-1px]" data-name="Data" />;
}

function Data8() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[616.73px] right-[1196px] top-[-1px]" data-name="Data" />;
}

function Data9() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[668.73px] right-[1144px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data10() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[720.73px] right-[1092px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data11() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[772.73px] right-[1040px] top-[-1px]" data-name="Data" />;
}

function Data12() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[824.73px] right-[988px] top-[-1px]" data-name="Data" />;
}

function Data13() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[876.73px] right-[936px] top-[-1px]" data-name="Data" />;
}

function Data14() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[928.73px] right-[884px] top-[-1px]" data-name="Data" />;
}

function Data15() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[980.73px] right-[832px] top-[-1px]" data-name="Data" />;
}

function Data16() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1032.73px] right-[780px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data17() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1084.73px] right-[728px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data18() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data" />;
}

function Data19() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[rgba(237,229,255,0.7)] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background+Border" />
    </div>
  );
}

function Data20() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1240.73px] right-[572px] top-[-1px]" data-name="Data" />;
}

function Data21() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1292.73px] right-[520px] top-[-1px]" data-name="Data" />;
}

function Data22() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1344.73px] right-[468px] top-[-1px]" data-name="Data" />;
}

function Data23() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1396.73px] right-[416px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data24() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1448.73px] right-[364px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="5%" />
  );
}

function Data25() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1500.73px] right-[312px] top-[-1px]" data-name="Data">
      <Background />
    </div>
  );
}

function Background1() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="5%" />
  );
}

function Data26() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1552.73px] right-[260px] top-[-1px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="5%" />
  );
}

function Data27() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1604.73px] right-[208px] top-[-1px]" data-name="Data">
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="5%" />
  );
}

function Data28() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1656.73px] right-[156px] top-[-1px]" data-name="Data">
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="5%" />
  );
}

function Data29() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1708.73px] right-[104px] top-[-1px]" data-name="Data">
      <Background4 />
    </div>
  );
}

function Data30() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1760.73px] right-[52px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data31() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1812.73px] right-0 top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background5() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[24/24] bg-[#14b2a4] left-[16px] right-[97.73px] rounded-[33554400px] top-1/2" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%-0.34px)] not-italic text-[0px] text-center text-white top-[calc(50%+0.5px)] w-[10.31px]">
        <p className="font-bold leading-[20px] text-[14px]">A</p>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="bg-white border-[#d5e1ff] border-solid border-t h-[110px] pointer-events-auto sticky top-0" data-name="Data">
      <Background5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[34px] justify-center leading-[0] left-[51.73px] not-italic right-[28.05px] text-[#17171a] text-[0px] top-[35px]">
        <p className="font-bold leading-[16px] mb-0 text-[12px]">Alex</p>
        <p className="font-bold leading-[16px] text-[12px]">Morgan</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[51.73px] not-italic right-[39px] text-[#737373] text-[12px] top-[73px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Project</p>
        <p className="leading-[16px]">Manager</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-0 right-0 top-0" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
      <Data25 />
      <Data26 />
      <Data27 />
      <Data28 />
      <Data29 />
      <Data30 />
      <Data31 />
      <div className="absolute h-[111px] inset-[-1px_1724px_0_0] pointer-events-none">
        <Data32 />
      </div>
    </div>
  );
}

function ParagraphOverlay1() {
  return (
    <WeekSummaryCard
      bgClass="bg-[#cdfce1]"
      date="May 1"
      hours="1.6h"
      peak="Peak: 20%"
      percent="1%"
      colorClass="text-[#006133]"
    />
  );
}

function Data33() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[140.73px] right-[1612px] top-[-1px]" data-name="Data">
      <ParagraphOverlay1 />
    </div>
  );
}

function Background6() {
  return (
    <DayUtilizationBadge bgClass="bg-[#cdfce1]" dataName="Background" colorClass="text-[#006133]" value="20%" />
  );
}

function Data34() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[252.73px] right-[1560px] top-[-1px]" data-name="Data">
      <Background6 />
    </div>
  );
}

function Data35() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[304.73px] right-[1508px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data36() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[356.73px] right-[1456px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data37() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[408.73px] right-[1404px] top-[-1px]" data-name="Data" />;
}

function Data38() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[460.73px] right-[1352px] top-[-1px]" data-name="Data" />;
}

function Data39() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[512.73px] right-[1300px] top-[-1px]" data-name="Data" />;
}

function Data40() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[564.73px] right-[1248px] top-[-1px]" data-name="Data" />;
}

function Data41() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[616.73px] right-[1196px] top-[-1px]" data-name="Data" />;
}

function Data42() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[668.73px] right-[1144px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data43() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[720.73px] right-[1092px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data44() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[772.73px] right-[1040px] top-[-1px]" data-name="Data" />;
}

function Data45() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[824.73px] right-[988px] top-[-1px]" data-name="Data" />;
}

function Data46() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[876.73px] right-[936px] top-[-1px]" data-name="Data" />;
}

function Data47() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[928.73px] right-[884px] top-[-1px]" data-name="Data" />;
}

function Data48() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[980.73px] right-[832px] top-[-1px]" data-name="Data" />;
}

function Data49() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1032.73px] right-[780px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data50() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1084.73px] right-[728px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data51() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data" />;
}

function Data52() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[rgba(237,229,255,0.7)] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background+Border" />
    </div>
  );
}

function Data53() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1240.73px] right-[572px] top-[-1px]" data-name="Data" />;
}

function Data54() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1292.73px] right-[520px] top-[-1px]" data-name="Data" />;
}

function Data55() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1344.73px] right-[468px] top-[-1px]" data-name="Data" />;
}

function Data56() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1396.73px] right-[416px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data57() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1448.73px] right-[364px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data58() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1500.73px] right-[312px] top-[-1px]" data-name="Data" />;
}

function Data59() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1552.73px] right-[260px] top-[-1px]" data-name="Data" />;
}

function Data60() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1604.73px] right-[208px] top-[-1px]" data-name="Data" />;
}

function Data61() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1656.73px] right-[156px] top-[-1px]" data-name="Data" />;
}

function Data62() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1708.73px] right-[104px] top-[-1px]" data-name="Data" />;
}

function Data63() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1760.73px] right-[52px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data64() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1812.73px] right-0 top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ff7f16] h-[27px] left-[16px] right-[97.73px] rounded-[33554400px] top-1/2" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-bold h-[14px] justify-center leading-[0] left-[calc(50%-0.34px)] not-italic text-[14px] text-center text-white top-[calc(50%+0.5px)] w-[10.31px]">
        <p className="leading-[20px]">A</p>
      </div>
    </div>
  );
}

function Data65() {
  return (
    <div className="bg-white border-[#d5e1ff] border-solid border-t h-[110px] pointer-events-auto sticky top-0" data-name="Data">
      <Background7 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[34px] justify-center leading-[0] left-[55.61px] not-italic right-[28.92px] text-[#17171a] text-[0px] top-[44px]">
        <p className="font-bold leading-[16px] mb-0 text-[12px]">Andy</p>
        <p className="font-bold leading-[16px] text-[12px]">Smith</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[55.61px] not-italic right-[23.12px] text-[#737373] text-[12px] top-[73px] whitespace-nowrap">
        <p className="leading-[16px]">Consultant</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-0 right-0 top-[110px]" data-name="Row">
      <Data33 />
      <Data34 />
      <Data35 />
      <Data36 />
      <Data37 />
      <Data38 />
      <Data39 />
      <Data40 />
      <Data41 />
      <Data42 />
      <Data43 />
      <Data44 />
      <Data45 />
      <Data46 />
      <Data47 />
      <Data48 />
      <Data49 />
      <Data50 />
      <Data51 />
      <Data52 />
      <Data53 />
      <Data54 />
      <Data55 />
      <Data56 />
      <Data57 />
      <Data58 />
      <Data59 />
      <Data60 />
      <Data61 />
      <Data62 />
      <Data63 />
      <Data64 />
      <div className="absolute h-[111px] inset-[-1px_1724px_0_0] pointer-events-none">
        <Data65 />
      </div>
    </div>
  );
}

function ParagraphOverlay2() {
  return (
    <WeekSummaryCard
      bgClass="bg-[#ffe4a2]"
      date="May 1"
      hours="52.8h"
      peak="Peak: 100%"
      percent="31%"
      colorClass="text-[#814400]"
    />
  );
}

function Data66() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[140.73px] right-[1612px] top-[-1px]" data-name="Data">
      <ParagraphOverlay2 />
    </div>
  );
}

function Background8() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data67() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[252.73px] right-[1560px] top-[-1px]" data-name="Data">
      <Background8 />
    </div>
  );
}

function Data68() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[304.73px] right-[1508px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data69() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[356.73px] right-[1456px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background9() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data70() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[408.73px] right-[1404px] top-[-1px]" data-name="Data">
      <Background9 />
    </div>
  );
}

function Background10() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data71() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[460.73px] right-[1352px] top-[-1px]" data-name="Data">
      <Background10 />
    </div>
  );
}

function Background11() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data72() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[512.73px] right-[1300px] top-[-1px]" data-name="Data">
      <Background11 />
    </div>
  );
}

function Background12() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data73() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[564.73px] right-[1248px] top-[-1px]" data-name="Data">
      <Background12 />
    </div>
  );
}

function Background13() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data74() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[616.73px] right-[1196px] top-[-1px]" data-name="Data">
      <Background13 />
    </div>
  );
}

function Data75() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[668.73px] right-[1144px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data76() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[720.73px] right-[1092px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background14() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data77() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[772.73px] right-[1040px] top-[-1px]" data-name="Data">
      <Background14 />
    </div>
  );
}

function Background15() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="80%" />
  );
}

function Data78() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[824.73px] right-[988px] top-[-1px]" data-name="Data">
      <Background15 />
    </div>
  );
}

function Data79() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[876.73px] right-[936px] top-[-1px]" data-name="Data" />;
}

function Data80() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[928.73px] right-[884px] top-[-1px]" data-name="Data" />;
}

function Data81() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[980.73px] right-[832px] top-[-1px]" data-name="Data" />;
}

function Data82() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1032.73px] right-[780px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data83() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1084.73px] right-[728px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data84() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data" />;
}

function Data85() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[rgba(237,229,255,0.7)] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background+Border" />
    </div>
  );
}

function Data86() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1240.73px] right-[572px] top-[-1px]" data-name="Data" />;
}

function Data87() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1292.73px] right-[520px] top-[-1px]" data-name="Data" />;
}

function Data88() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1344.73px] right-[468px] top-[-1px]" data-name="Data" />;
}

function Data89() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1396.73px] right-[416px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data90() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1448.73px] right-[364px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data91() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1500.73px] right-[312px] top-[-1px]" data-name="Data" />;
}

function Data92() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1552.73px] right-[260px] top-[-1px]" data-name="Data" />;
}

function Data93() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1604.73px] right-[208px] top-[-1px]" data-name="Data" />;
}

function Background16() {
  return (
    <DayUtilizationBadge bgClass="bg-[#c4eeff]" dataName="Background" colorClass="text-[#0049a1]" value="60%" />
  );
}

function Data94() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1656.73px] right-[156px] top-[-1px]" data-name="Data">
      <Background16 />
    </div>
  );
}

function Background17() {
  return (
    <DayUtilizationBadge bgClass="bg-[#c4eeff]" dataName="Background" colorClass="text-[#0049a1]" value="60%" />
  );
}

function Data95() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1708.73px] right-[104px] top-[-1px]" data-name="Data">
      <Background17 />
    </div>
  );
}

function Data96() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1760.73px] right-[52px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data97() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1812.73px] right-0 top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background18() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#eb0000] h-[27px] left-[16px] right-[97.73px] rounded-[33554400px] top-1/2" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.13px)] not-italic text-[0px] text-center text-white top-[calc(50%+0.5px)] w-[10.31px]">
        <p className="font-bold leading-[20px] text-[14px]">B</p>
      </div>
    </div>
  );
}

function Data98() {
  return (
    <div className="bg-white border-[#d5e1ff] border-solid border-t h-[110px] pointer-events-auto sticky top-0" data-name="Data">
      <Background18 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[34px] justify-center leading-[0] left-[55.08px] not-italic right-[27.03px] text-[#17171a] text-[0px] top-[44px]">
        <p className="font-bold leading-[16px] mb-0 text-[12px]">Bryan</p>
        <p className="font-bold leading-[16px] text-[12px]">Johnson</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[55.08px] not-italic right-[23.65px] text-[#737373] text-[12px] top-[73px] whitespace-nowrap">
        <p className="leading-[16px]">Consultant</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-0 right-0 top-[220px]" data-name="Row">
      <Data66 />
      <Data67 />
      <Data68 />
      <Data69 />
      <Data70 />
      <Data71 />
      <Data72 />
      <Data73 />
      <Data74 />
      <Data75 />
      <Data76 />
      <Data77 />
      <Data78 />
      <Data79 />
      <Data80 />
      <Data81 />
      <Data82 />
      <Data83 />
      <Data84 />
      <Data85 />
      <Data86 />
      <Data87 />
      <Data88 />
      <Data89 />
      <Data90 />
      <Data91 />
      <Data92 />
      <Data93 />
      <Data94 />
      <Data95 />
      <Data96 />
      <Data97 />
      <div className="absolute h-[111px] inset-[-1px_1724px_0_0] pointer-events-none">
        <Data98 />
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <WeekSummaryCard
      bgClass="bg-[#e7e7e7]"
      dataName="Paragraph+Background"
      date="—"
      hours="0h"
      peak="Peak: 0%"
      percent="0%"
      colorClass="text-[#4f4f4f]"
    />
  );
}

function Data99() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[140.73px] right-[1612px] top-[-1px]" data-name="Data">
      <ParagraphBackground />
    </div>
  );
}

function Data100() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[252.73px] right-[1560px] top-[-1px]" data-name="Data" />;
}

function Data101() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[304.73px] right-[1508px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data102() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[356.73px] right-[1456px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data103() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[408.73px] right-[1404px] top-[-1px]" data-name="Data" />;
}

function Data104() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[460.73px] right-[1352px] top-[-1px]" data-name="Data" />;
}

function Data105() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[512.73px] right-[1300px] top-[-1px]" data-name="Data" />;
}

function Data106() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[564.73px] right-[1248px] top-[-1px]" data-name="Data" />;
}

function Data107() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[616.73px] right-[1196px] top-[-1px]" data-name="Data" />;
}

function Data108() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[668.73px] right-[1144px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data109() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[720.73px] right-[1092px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data110() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[772.73px] right-[1040px] top-[-1px]" data-name="Data" />;
}

function Data111() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[824.73px] right-[988px] top-[-1px]" data-name="Data" />;
}

function Data112() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[876.73px] right-[936px] top-[-1px]" data-name="Data" />;
}

function Data113() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[928.73px] right-[884px] top-[-1px]" data-name="Data" />;
}

function Data114() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[980.73px] right-[832px] top-[-1px]" data-name="Data" />;
}

function Data115() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1032.73px] right-[780px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data116() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1084.73px] right-[728px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data117() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data" />;
}

function Data118() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[rgba(237,229,255,0.7)] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background+Border" />
    </div>
  );
}

function Data119() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1240.73px] right-[572px] top-[-1px]" data-name="Data" />;
}

function Data120() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1292.73px] right-[520px] top-[-1px]" data-name="Data" />;
}

function Data121() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1344.73px] right-[468px] top-[-1px]" data-name="Data" />;
}

function Data122() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1396.73px] right-[416px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data123() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1448.73px] right-[364px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data124() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1500.73px] right-[312px] top-[-1px]" data-name="Data" />;
}

function Data125() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1552.73px] right-[260px] top-[-1px]" data-name="Data" />;
}

function Data126() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1604.73px] right-[208px] top-[-1px]" data-name="Data" />;
}

function Data127() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1656.73px] right-[156px] top-[-1px]" data-name="Data" />;
}

function Data128() {
  return <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1708.73px] right-[104px] top-[-1px]" data-name="Data" />;
}

function Data129() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1760.73px] right-[52px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data130() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1812.73px] right-0 top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background19() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ffc300] h-[27px] left-[16px] right-[97.73px] rounded-[33554400px] top-1/2" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.88px)] not-italic text-[0px] text-center text-white top-[calc(50%+0.5px)] w-[10.31px]">
        <p className="font-bold leading-[20px] text-[14px]">D</p>
      </div>
    </div>
  );
}

function Data131() {
  return (
    <div className="bg-white border-[#d5e1ff] border-solid border-t h-[110px] pointer-events-auto sticky top-0" data-name="Data">
      <Background19 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[34px] justify-center leading-[0] left-[54.55px] not-italic right-[34.69px] text-[#17171a] text-[0px] top-[44px]">
        <p className="font-bold leading-[16px] text-[12px]">
          Daniel
          <br aria-hidden />
          Wong
        </p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[54.55px] not-italic right-[28.18px] text-[#737373] text-[12px] top-[74px] whitespace-nowrap">
        <p className="leading-[16px]">Developer</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-0 right-0 top-[330px]" data-name="Row">
      <Data99 />
      <Data100 />
      <Data101 />
      <Data102 />
      <Data103 />
      <Data104 />
      <Data105 />
      <Data106 />
      <Data107 />
      <Data108 />
      <Data109 />
      <Data110 />
      <Data111 />
      <Data112 />
      <Data113 />
      <Data114 />
      <Data115 />
      <Data116 />
      <Data117 />
      <Data118 />
      <Data119 />
      <Data120 />
      <Data121 />
      <Data122 />
      <Data123 />
      <Data124 />
      <Data125 />
      <Data126 />
      <Data127 />
      <Data128 />
      <Data129 />
      <Data130 />
      <div className="absolute h-[111px] inset-[-1px_1724px_0_0] pointer-events-none">
        <Data131 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <WeekSummaryCard
      bgClass="bg-[#ffd7d0]"
      dataName="Overlay"
      date="May 1"
      hours="203.2h"
      peak="Peak: 155%"
      percent="121%"
      showWarning
      colorClass="text-[#ad0000]"
    />
  );
}

function Data132() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[140.73px] right-[1612px] top-[-1px]" data-name="Data">
      <Overlay />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background20() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data133() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[252.73px] right-[1560px] top-[-1px]" data-name="Data">
      <Background20 />
    </div>
  );
}

function Data134() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[304.73px] right-[1508px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data135() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[356.73px] right-[1456px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background21() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data136() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[408.73px] right-[1404px] top-[-1px]" data-name="Data">
      <Background21 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background22() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data137() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[460.73px] right-[1352px] top-[-1px]" data-name="Data">
      <Background22 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background23() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data138() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[512.73px] right-[1300px] top-[-1px]" data-name="Data">
      <Background23 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background24() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data139() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[564.73px] right-[1248px] top-[-1px]" data-name="Data">
      <Background24 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data140() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[616.73px] right-[1196px] top-[-1px]" data-name="Data">
      <Background25 />
    </div>
  );
}

function Data141() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[668.73px] right-[1144px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data142() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[720.73px] right-[1092px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background26() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data143() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[772.73px] right-[1040px] top-[-1px]" data-name="Data">
      <Background26 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.35px)] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #AD0000)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background27() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffd7d0]" showWarning colorClass="text-[#ad0000]" value="155%" />
  );
}

function Data144() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[824.73px] right-[988px] top-[-1px]" data-name="Data">
      <Background27 />
    </div>
  );
}

function Background28() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data145() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[876.73px] right-[936px] top-[-1px]" data-name="Data">
      <Background28 />
    </div>
  );
}

function Background29() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data146() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[928.73px] right-[884px] top-[-1px]" data-name="Data">
      <Background29 />
    </div>
  );
}

function Background30() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data147() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[980.73px] right-[832px] top-[-1px]" data-name="Data">
      <Background30 />
    </div>
  );
}

function Data148() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1032.73px] right-[780px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data149() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1084.73px] right-[728px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background31() {
  return <div className="absolute bg-[#f2edff] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />;
}

function Data150() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1136.73px] right-[676px] top-[-1px]" data-name="Data">
      <Background31 />
    </div>
  );
}

function Background32() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data151() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1188.73px] right-[624px] top-[-1px]" data-name="Data">
      <Background32 />
    </div>
  );
}

function Background33() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data152() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1240.73px] right-[572px] top-[-1px]" data-name="Data">
      <Background33 />
    </div>
  );
}

function Background34() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data153() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1292.73px] right-[520px] top-[-1px]" data-name="Data">
      <Background34 />
    </div>
  );
}

function Background35() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data154() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1344.73px] right-[468px] top-[-1px]" data-name="Data">
      <Background35 />
    </div>
  );
}

function Data155() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1396.73px] right-[416px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data156() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1448.73px] right-[364px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background36() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data157() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1500.73px] right-[312px] top-[-1px]" data-name="Data">
      <Background36 />
    </div>
  );
}

function Background37() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data158() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1552.73px] right-[260px] top-[-1px]" data-name="Data">
      <Background37 />
    </div>
  );
}

function Background38() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data159() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1604.73px] right-[208px] top-[-1px]" data-name="Data">
      <Background38 />
    </div>
  );
}

function Background39() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data160() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1656.73px] right-[156px] top-[-1px]" data-name="Data">
      <Background39 />
    </div>
  );
}

function Background40() {
  return (
    <DayUtilizationBadge bgClass="bg-[#ffe4a2]" dataName="Background" colorClass="text-[#814400]" value="100%" />
  );
}

function Data161() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1708.73px] right-[104px] top-[-1px]" data-name="Data">
      <Background40 />
    </div>
  );
}

function Data162() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1760.73px] right-[52px] top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Data163() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-[1812.73px] right-0 top-[-1px]" data-name="Data">
      <div className="absolute bg-[#f3f4f6] h-[40px] left-[2px] rounded-[8px] top-[34.5px] w-[48px]" data-name="Background" />
    </div>
  );
}

function Background41() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#3170ad] h-[27px] left-[16px] right-[97.73px] rounded-[33554400px] top-1/2" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[0px] text-center text-white top-[calc(50%+0.5px)] w-[8px]">
        <p className="font-bold leading-[20px] text-[14px]">J</p>
      </div>
    </div>
  );
}

function Data164() {
  return (
    <div className="bg-white border-[#d5e1ff] border-solid border-t h-[110px] pointer-events-auto sticky top-0" data-name="Data">
      <Background41 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[34px] justify-center leading-[0] left-[54.59px] not-italic right-[27.53px] text-[#17171a] text-[0px] top-[44px]">
        <p className="font-bold leading-[16px] mb-0 text-[12px]">Jason</p>
        <p className="font-bold leading-[16px] text-[12px]">Liu</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[54.59px] not-italic right-[28.14px] text-[#737373] text-[12px] top-[72px] whitespace-nowrap">
        <p className="leading-[16px]">Developer</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="absolute border-[#d5e1ff] border-solid border-t h-[110px] left-0 right-0 top-[440px]" data-name="Row">
      <Data132 />
      <Data133 />
      <Data134 />
      <Data135 />
      <Data136 />
      <Data137 />
      <Data138 />
      <Data139 />
      <Data140 />
      <Data141 />
      <Data142 />
      <Data143 />
      <Data144 />
      <Data145 />
      <Data146 />
      <Data147 />
      <Data148 />
      <Data149 />
      <Data150 />
      <Data151 />
      <Data152 />
      <Data153 />
      <Data154 />
      <Data155 />
      <Data156 />
      <Data157 />
      <Data158 />
      <Data159 />
      <Data160 />
      <Data161 />
      <Data162 />
      <Data163 />
      <div className="absolute h-[111px] inset-[-1px_1724px_0_0] pointer-events-none">
        <Data164 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[550px] left-0 right-0 top-[49px]" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Date() {
  return (
    <div className="[word-break:break-word] bg-[#3170ad] font-normal h-[49px] leading-[0] not-italic pointer-events-auto sticky text-[0px] top-0" data-name="Date">
      <div className="-translate-y-1/2 absolute flex items-center left-[16px] top-1/2 whitespace-nowrap">
        <span className="font-bold text-[12px] leading-none text-white">Resource</span>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[275.36px] right-[-141.56px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">F</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">1</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[327.06px] right-[-193.88px] text-[#3170ad] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">2</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[379.06px] right-[-245.88px] text-[#3170ad] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">3</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[430.14px] right-[-298.78px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">M</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">4</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[483.36px] right-[-349.56px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[533.53px] right-[-403.39px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">W</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">6</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[587.36px] right-[-453.56px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">7</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[639.36px] right-[-505.56px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">F</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">8</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[691.06px] right-[-557.88px] text-[#3170ad] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">9</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[740.61px] right-[-612.88px] text-[#3170ad] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">10</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[792.61px] right-[-664.31px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">M</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">11</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[844.61px] right-[-716.31px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">12</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[896.61px] right-[-768.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">W</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">13</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[948.61px] right-[-820.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">14</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1000.61px] right-[-872.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">F</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">15</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1052.61px] right-[-924.88px] text-[#3170ad] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">16</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[1104.61px] right-[-976.31px] text-[#3170ad] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[#c92a2a] text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[#c92a2a] text-[11px]">17</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1156.61px] right-[-1028.88px] text-[#c92a2a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">M</p>
        <p className="font-bold leading-[16.5px] text-[11px]">18</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1208.61px] right-[-1080.88px] text-[#17171a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[#737373] text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[11px]">19</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1259.61px] right-[-1133.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">W</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">20</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[27.5px] justify-center left-[1312.61px] right-[-1184.31px] text-[#737373] text-center top-[23.75px]">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">21</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1363.61px] right-[-1236.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">F</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">22</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1415.61px] right-[-1289.88px] text-[#c92a2a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[11px]">23</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1467.61px] right-[-1341.88px] text-[#c92a2a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[11px]">24</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1519.61px] right-[-1393.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">M</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">25</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1571.61px] right-[-1445.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">26</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1623.61px] right-[-1496.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">W</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">27</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1675.61px] right-[-1549.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">T</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">28</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1727.61px] right-[-1601.88px] text-[#737373] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">F</p>
        <p className="font-bold leading-[16.5px] text-[#17171a] text-[11px]">29</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1779.61px] right-[-1653.88px] text-[#c92a2a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[11px]">30</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1832.61px] right-[-1704.88px] text-[#c92a2a] text-center top-[23.5px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0 text-[11px]">S</p>
        <p className="font-bold leading-[16.5px] text-[11px]">31</p>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[rgba(0,114,255,0.1)] h-[49px] left-0 right-0 top-0" data-name="Table Header">
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[140.73px] right-[1612px] text-[#17171a] top-1/2 whitespace-nowrap">
        <span className="font-bold text-[12px] leading-none">Week</span>
      </div>
      <div className="absolute h-[49px] inset-[0_1724px_0_0] pointer-events-none">
        <Date />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[599px] left-0 top-0 w-[1864.73px]" data-name="Table">
      <Body />
      <TableHeader />
    </div>
  );
}

function DataTable() {
  return (
    <div className="absolute bg-white border border-[#d5e1ff] border-solid h-[601px] left-[32px] overflow-auto right-[-715px] rounded-[14px] top-[214px]" data-name="Data Table">
      <Table />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[944px] left-[256px] right-0 top-[81px]" data-name="Main">
      <Header />
      <DailyWeeklyMonthly />
      <Month />
      <AddMembersBtn />
      <TimeOffBtn />
      <UtilizationChips />
      <DataTable />
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

function Svg14() {
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

function Container() {
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

function Svg15() {
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

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Projects</p>
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

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Templates</p>
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

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Deliverable Tracker</p>
      </div>
    </div>
  );
}

function Svg18() {
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

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Activity Tracker</p>
      </div>
    </div>
  );
}

function Svg19() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Timeline Chart</p>
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

function Container6() {
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
        <Svg15 />
        <Container1 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Templates">
        <Svg16 />
        <Container2 />
      </div>
      <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Projects Tracker">
        <Svg17 />
        <Container3 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Tasks Tracker">
        <Svg18 />
        <Container4 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Timeline Chart">
        <Svg19 />
        <Container5 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Mobilization">
        <Svg20 />
        <Container6 />
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

function Svg21() {
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

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Resources</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 9.33333H5.34" id="Vector_5" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 9.33333H8.00667" id="Vector_6" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 9.33333H10.6733" id="Vector_7" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H5.34" id="Vector_8" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_9" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12H10.6733" id="Vector_10" stroke="var(--stroke-0, #0033D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0033d9] text-[13px] w-full">
        <p className="leading-[20px]">Resource Calendar</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Project Members">
        <Svg21 />
        <Container7 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" style={{ backgroundImage: "linear-gradient(110.649deg, rgba(67, 141, 253, 0.15) 12.682%, rgba(90, 117, 255, 0.15) 69.195%, rgba(115, 0, 255, 0.15) 107.47%)" }} data-name="Members Calendar">
        <Svg22 />
        <Container8 />
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

function Svg23() {
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

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
        <p className="leading-[20px]">Data Upload</p>
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

function Container10() {
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
        <Svg23 />
        <Container9 />
      </div>
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Configuration">
        <Svg24 />
        <Container10 />
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

export default function V209MembersCalendar() {
  return (
    <div className="bg-white relative size-full" data-name="v2 - 09 members calendar">
      <div className="absolute bg-white h-[946px] left-[255px] top-[78px] w-[1945px]" data-name="extended bg - white" />
      <div className="absolute bg-[#f5fbff] h-[946px] left-[255px] top-[78px] w-[1945px]" data-name="extended bg - blue" />
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
            <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]" data-name="Dashboard Tab">
              <Svg14 />
              <Container />
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