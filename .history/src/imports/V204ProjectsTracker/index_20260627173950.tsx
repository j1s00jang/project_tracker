import svgPaths from "./svg-clgmhcfj8c";

function Svg() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[12px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g
                    clipPath="url(#clip0_1_2884)"
                    id="SVG"
                >
                    <g id="Vector">
                        <path
                            d={svgPaths.p5c60b40}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.16667"
                        />
                        <path
                            d={svgPaths.p5c60b40}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                        <path
                            d={svgPaths.p5c60b40}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d="M8.75 2.91667L11.0833 5.25"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.16667"
                        />
                        <path
                            d="M8.75 2.91667L11.0833 5.25"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                        <path
                            d="M8.75 2.91667L11.0833 5.25"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1_2884">
                        <rect
                            fill="white"
                            height="14"
                            width="14"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Button() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[40px] left-[816px] rounded-[10px] top-[14px] w-[72px]"
            data-name="Edit btn"
        >
            <Svg />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%+11.26px)] not-italic text-[#17171a] text-[12px] text-center top-1/2 w-[24.04px]">
                <p className="leading-[16px]">Edit</p>
            </div>
        </div>
    );
}

function Container() {
    return (
        <div
            className="-translate-y-1/2 absolute h-[20px] left-[28.16px] overflow-clip top-1/2 w-[158px]"
            data-name="Container"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-0 not-italic text-[#17171a] text-[12px] top-[10px] whitespace-nowrap">
                <p className="leading-[16px]">Northstar Brand Refresh</p>
            </div>
        </div>
    );
}

function Svg1() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[194px] size-[16px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d="M4 6L8 10L12 6"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M4 6L8 10L12 6"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M4 6L8 10L12 6"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Button1() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[40px] left-[896px] rounded-[10px] top-[14px] w-[224px]"
            data-name="Button"
        >
            <div
                className="-translate-y-1/2 absolute bg-[#956a1b] left-[12px] rounded-[33554400px] size-[8px] top-1/2"
                data-name="Background"
            />
            <Container />
            <Svg1 />
        </div>
    );
}

function Header() {
    return (
        <div
            className="absolute h-[60px] left-[31px] right-[691px] top-[31px]"
            data-name="Header"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-bold justify-center leading-[0] left-0 not-italic text-[#1c1d1f] text-[0px] top-[18px] tracking-[-0.5px] whitespace-nowrap">
                <p className="leading-[normal] text-[30px]">
                    Deliverable Tracker
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-px not-italic text-[#3170ad] text-[14px] top-[50px] whitespace-nowrap">
                <p className="leading-[20px]">
                    Track project progress, phases, and deliverables
                </p>
            </div>
            <Button />
            <Button1 />
        </div>
    );
}

function ProjectIcon() {
    return (
        <div
            className="absolute bg-[#956a1b] h-[48px] left-[20px] right-[1050px] rounded-[14px] top-[26px]"
            data-name="Project Icon"
        >
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[16px] justify-center leading-[0] left-[calc(50%+0.59px)] not-italic text-[#fbfcff] text-[0px] text-center top-1/2 w-[26.73px]">
                <p className="font-bold leading-[20px] text-[16px]">NB</p>
            </div>
        </div>
    );
}

function Container1() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[82.5px] overflow-clip py-[4px] right-[847.5px] top-[37px]"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1d1f] text-[0px] whitespace-nowrap">
                <p className="leading-[20px] text-[#17171a] text-[16px]">
                    Northstar Brand Refresh
                </p>
            </div>
        </div>
    );
}

function CurrentTracking() {
    return (
        <div
            className="absolute contents left-[81px] right-[846.5px] top-[20px]"
            data-name="Current Tracking"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[82px] not-italic right-[902px] text-[#737373] text-[12px] top-[29px] tracking-[-0.024px] whitespace-nowrap">
                <p className="leading-[16px]">CURRENTLY TRACKING</p>
            </div>
            <Container1 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[82px] not-italic right-[938px] text-[#737373] text-[12px] top-[73px] whitespace-nowrap">
                <p className="leading-[16px]">PM · Alex Morgan</p>
            </div>
        </div>
    );
}

function Progress() {
    return (
        <div
            className="[word-break:break-word] absolute contents leading-[0] left-[332px] not-italic right-[722px] top-[37px]"
            data-name="PROGRESS"
        >
            <div className="-translate-y-1/2 absolute flex flex-col font-medium justify-center left-[333px] right-[723px] text-[#737373] text-[12px] top-[46px] tracking-[-0.024px] whitespace-nowrap">
                <p className="leading-[16px]">PROGRESS</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-[333px] right-[762px] text-[#17171a] text-[0px] top-[68px] whitespace-nowrap">
                <p className="font-bold leading-[20px] text-[16px]">{`1/5 `}</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-[363.06px] right-[723.94px] text-[#737373] text-[13px] top-[69px] whitespace-nowrap">
                <p className="leading-[20px]">tasks</p>
            </div>
        </div>
    );
}

function Svg2() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[133.62px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <path
                        d="M2.91667 7H11.0833"
                        id="Vector"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                    <path
                        d={svgPaths.pf23dd00}
                        id="Vector_2"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                </g>
            </svg>
        </div>
    );
}

function ViewTasks() {
    return (
        <div
            className="absolute h-[20px] left-[950px] right-[20px] top-[60px]"
            data-name="View Tasks"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-0 not-italic text-[#3170ad] text-[13px] top-1/2 whitespace-nowrap">
                <p className="leading-[20px]">View Tasks Tracker</p>
            </div>
            <Svg2 />
        </div>
    );
}

function Background() {
    return (
        <div
            className="-translate-x-1/2 absolute bg-[#f0f4ff] h-[8px] left-1/2 rounded-[33554400px] top-[95px] w-[1079px]"
            data-name="Background"
        />
    );
}

function Background1() {
    return (
        <div
            className="-translate-x-1/2 absolute bg-gradient-to-l from-[rgba(240,244,255,0)] h-[8px] left-[calc(50%-408.97px)] rounded-[33554400px] to-[#9ab4fa] top-[95px] w-[261.064px]"
            data-name="Background"
        />
    );
}

function ProgressGradientBar() {
    return (
        <div
            className="-translate-x-1/2 absolute contents left-1/2 top-[94px]"
            data-name="Progress Gradient Bar"
        >
            <Background />
            <Background1 />
        </div>
    );
}

function Project() {
    return (
        <div
            className="absolute border border-[#d5e1ff] border-solid h-[126px] left-[31px] right-[716px] rounded-[18px] top-[113px]"
            style={{
                backgroundImage:
                    "linear-gradient(117.587deg, rgba(67, 141, 253, 0.13) 12.682%, rgba(90, 117, 255, 0.13) 69.195%, rgba(115, 0, 255, 0.13) 107.47%)",
            }}
            data-name="Project"
        >
            <ProjectIcon />
            <CurrentTracking />
            <Progress />
            <ViewTasks />
            <ProgressGradientBar />
        </div>
    );
}

function Svg3() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p3cd50200}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.16667"
                        />
                        <path
                            d={svgPaths.p3cd50200}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                        <path
                            d={svgPaths.p3cd50200}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.16667"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Svg4() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[119px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <path
                        d="M3.5 5.25L7 8.75L10.5 5.25"
                        id="Vector"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                </g>
            </svg>
        </div>
    );
}

function AllPhases() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[36px] left-[31px] right-[1693px] rounded-[10px] top-[266px]"
            data-name="All Phases"
        >
            <Svg3 />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%-2px)] not-italic text-[#17171a] text-[13px] text-center top-1/2 w-[66px]">
                <p className="leading-[20px]">All Phases</p>
            </div>
            <Svg4 />
        </div>
    );
}

function Svg5() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[89px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <path
                        d="M3.5 5.25L7 8.75L10.5 5.25"
                        id="Vector"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                </g>
            </svg>
        </div>
    );
}

function AllTypes() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[36px] left-[185px] right-[1568px] rounded-[10px] top-[266px]"
            data-name="All Types"
        >
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%-16.34px)] not-italic text-[#17171a] text-[13px] text-center top-1/2 w-[56.31px]">
                <p className="leading-[20px]">All Types</p>
            </div>
            <Svg5 />
        </div>
    );
}

function Svg6() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[105.57px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <path
                        d="M3.5 5.25L7 8.75L10.5 5.25"
                        id="Vector"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                </g>
            </svg>
        </div>
    );
}

function AllStatues() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[36px] left-[310px] right-[1427px] rounded-[10px] top-[266px]"
            data-name="All Statues"
        >
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%-16.61px)] not-italic text-[#17171a] text-[13px] text-center top-1/2 w-[73.78px]">
                <p className="leading-[20px]">All Statuses</p>
            </div>
            <Svg6 />
        </div>
    );
}

function Svg7() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[122px] size-[14px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
            >
                <g id="SVG">
                    <path
                        d="M3.5 5.25L7 8.75L10.5 5.25"
                        id="Vector"
                        stroke="var(--stroke-0, #737373)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.16667"
                    />
                </g>
            </svg>
        </div>
    );
}

function Sort() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[36px] left-[451px] right-[1269px] rounded-[10px] top-[266px]"
            data-name="Sort"
        >
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[14px] justify-center leading-[0] left-[calc(50%-15.08px)] not-italic text-[#17171a] text-[13px] text-center top-1/2 w-[91.84px]">
                <p className="leading-[20px]">Sort: End Date</p>
            </div>
            <Svg7 />
        </div>
    );
}

function TableHeader() {
    return (
        <div
            className="[word-break:break-word] absolute bg-[rgba(0,114,255,0.1)] border border-[#d5e1ff] border-solid font-bold h-[40px] leading-[0] left-0 not-italic rounded-tl-[10px] rounded-tr-[10px] text-[11px] top-0 tracking-[1px] uppercase w-[1807px] whitespace-nowrap"
            data-name="Table Header"
        >
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[19px] right-[1778px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">#</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[63px] right-[1700px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Phase</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[167px] right-[1537px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Work Package</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[330px] right-[1390px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Deliverable</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[477px] right-[1242px] text-[#3170ad] top-[18.5px]">
                <p className="leading-[16.5px]">Responsible</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[625px] right-[1086px] text-[#3170ad] top-[18.5px]">
                <p className="leading-[16.5px]">Accountable</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[781px] right-[948px] text-[#3170ad] top-[18.5px]">
                <p className="leading-[16.5px]">Consulted</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[919px] right-[820px] text-[#3170ad] top-[18.5px]">
                <p className="leading-[16.5px]">Informed</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1037px] right-[719px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Status</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1188px] right-[555px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Due Date</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1312px] right-[395px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Delivery Date</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1472px] right-[291px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Notes</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1576px] right-[152px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">Start date</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[1704px] right-[39px] text-[#17171a] top-[18.5px]">
                <p className="leading-[16.5px]">End date</p>
            </div>
        </div>
    );
}

function Svg8() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10px] size-[12px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Status() {
    return (
        <div
            className="absolute bg-[rgba(0,114,255,0.1)] border border-[#d5e1ff] border-solid h-[26px] left-[1038px] opacity-80 right-[689px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg8 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[28px] not-italic text-[#3170ad] text-[11px] top-[calc(50%+0.5px)] whitespace-nowrap">
                <p className="leading-[16.5px]">Started</p>
            </div>
        </div>
    );
}

function TasksRow() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[50px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1779px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Project Charter</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1127px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Jesse Li
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status />
        </div>
    );
}

function Svg9() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg10() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status1() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg9 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg10 />
        </div>
    );
}

function TasksRow1() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[350px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1779px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Discovery Report</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status1 />
        </div>
    );
}

function Svg11() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg12() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status2() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg11 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg12 />
        </div>
    );
}

function TasksRow2() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[100px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1778px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Brand Positioning</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status2 />
        </div>
    );
}

function Svg13() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg14() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status3() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg13 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg14 />
        </div>
    );
}

function TasksRow3() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[400px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1778px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Creative Direction</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status3 />
        </div>
    );
}

function Svg15() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg16() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status4() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg15 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg16 />
        </div>
    );
}

function TasksRow4() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[150px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1777px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">3</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Logo Exploration Set</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status4 />
        </div>
    );
}

function Svg17() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg18() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status5() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg17 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg18 />
        </div>
    );
}

function TasksRow5() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[200px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1777px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">4</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Style Guide v1</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status5 />
        </div>
    );
}

function Svg19() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10.08px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Svg20() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[94.8px] size-[12px] top-[calc(50%-0.36px)]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g id="SVG">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </div>
    );
}

function Status6() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[26px] left-[1038px] right-[650.28px] rounded-[8px] top-[12px]"
            data-name="Status"
        >
            <Svg19 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal h-[12px] justify-center leading-[0] left-[28.08px] not-italic text-[#3170ad] text-[11px] top-[calc(50%-0.36px)] w-[60.92px]">
                <p className="leading-[16.5px]">Not Started</p>
            </div>
            <Svg20 />
        </div>
    );
}

function TasksRow6() {
    return (
        <div
            className="absolute border-[#d5e1ff] border-b border-solid h-[50px] left-[-1px] top-[250px] w-[1807px]"
            data-name="Tasks Row"
        >
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[21px] not-italic right-[1778px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">5</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[64px] not-italic right-[1694px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Starting</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[168px] not-italic right-[1610px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">MVP</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[331px] not-italic right-[1382px] text-[#17171a] text-[13px] top-[25px] whitespace-nowrap">
                <p className="leading-[20px]">Launch Communication Plan</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[478px] not-italic right-[1251px] text-[#5803cf] text-[0px] top-[25.5px] whitespace-nowrap">
                <p className="font-bold leading-[16.5px] text-[11px]">
                    + Alex Morgan
                </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[626px] not-italic right-[1135px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[782px] not-italic right-[979px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[920px] not-italic right-[841px] text-[11px] text-[rgba(88,3,207,0.42)] text-center top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">+ Assign</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#3170ad] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#17171a] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 3, 2026</p>
            </div>
            <Status6 />
        </div>
    );
}

function DataSvg() {
    return (
        <div
            className="-translate-y-1/2 absolute h-[16px] left-[16px] overflow-clip right-[1775px] top-[calc(50%+1px)]"
            data-name="Data → SVG"
        >
            <div
                className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
                data-name="Vector"
            >
                <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 9.33333 5.33333"
                    >
                        <g id="Vector">
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-0, #242429)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.33333"
                            />
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-1, black)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeOpacity="0.2"
                                strokeWidth="1.33333"
                            />
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-2, black)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeOpacity="0.2"
                                strokeWidth="1.33333"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Data() {
    return (
        <div
            className="[word-break:break-word] absolute h-[20px] leading-[0] left-[64px] not-italic right-[1041.48px] top-[16px] whitespace-nowrap"
            data-name="Data"
        >
            <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-0 text-[#17171a] text-[0px] top-[calc(50%+0.5px)]">
                <p className="font-bold leading-[20px] text-[13px]">
                    Initiation
                </p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-bold justify-center left-[79px] text-[#3170ad] text-[11px] top-[calc(50%+1px)] tracking-[1px] uppercase">
                <p className="leading-[16.5px]">1/5 done</p>
            </div>
        </div>
    );
}

function Svg21() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10px] size-[12px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Status7() {
    return (
        <div
            className="absolute bg-[rgba(0,114,255,0.1)] border border-[#d5e1ff] border-solid h-[26px] left-[1038px] opacity-80 right-[689px] rounded-[8px] top-[13px]"
            data-name="Status"
        >
            <Svg21 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[28px] not-italic text-[#3170ad] text-[11px] top-[calc(50%+0.5px)] whitespace-nowrap">
                <p className="leading-[16.5px]">Started</p>
            </div>
        </div>
    );
}

function ProjectTasksTableRow() {
    return (
        <div
            className="absolute bg-[rgba(0,114,255,0.04)] border-[#d5e1ff] border-b border-solid h-[51px] left-[-1px] top-[-1px] w-[1807px]"
            data-name="Project Tasks Table Row"
        >
            <DataSvg />
            <Data />
            <Status7 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#737373] text-[11px] top-[26.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 6, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#737373] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#737373] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 6, 2026</p>
            </div>
        </div>
    );
}

function DataSvg1() {
    return (
        <div
            className="-translate-y-1/2 absolute h-[16px] left-[16px] overflow-clip right-[1775px] top-[calc(50%+1px)]"
            data-name="Data → SVG"
        >
            <div
                className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
                data-name="Vector"
            >
                <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 9.33333 5.33333"
                    >
                        <g id="Vector">
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-0, #242429)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.33333"
                            />
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-1, black)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeOpacity="0.2"
                                strokeWidth="1.33333"
                            />
                            <path
                                d={svgPaths.p32098840}
                                stroke="var(--stroke-2, black)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeOpacity="0.2"
                                strokeWidth="1.33333"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Data1() {
    return (
        <div
            className="[word-break:break-word] absolute h-[20px] leading-[0] left-[64px] not-italic right-[1041.48px] top-[16px] whitespace-nowrap"
            data-name="Data"
        >
            <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-0 text-[#17171a] text-[0px] top-[calc(50%+0.5px)]">
                <p className="font-bold leading-[20px] text-[13px]">Planning</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-bold justify-center left-[79px] text-[#3170ad] text-[11px] top-[calc(50%+1px)] tracking-[1px] uppercase">
                <p className="leading-[16.5px]">0/2 done</p>
            </div>
        </div>
    );
}

function Svg22() {
    return (
        <div
            className="-translate-y-1/2 absolute left-[10px] size-[12px] top-1/2"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
            >
                <g
                    clipPath="url(#clip0_1_2908)"
                    id="SVG"
                >
                    <path
                        d={svgPaths.p3e7757b0}
                        id="Vector"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 3V6L8 7"
                        id="Vector_2"
                        stroke="var(--stroke-0, #3170AD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2908">
                        <rect
                            fill="white"
                            height="12"
                            width="12"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Status8() {
    return (
        <div
            className="absolute bg-[rgba(0,114,255,0.1)] border border-[#d5e1ff] border-solid h-[26px] left-[1038px] opacity-80 right-[689px] rounded-[8px] top-[13px]"
            data-name="Status"
        >
            <Svg22 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[28px] not-italic text-[#3170ad] text-[11px] top-[calc(50%+0.5px)] whitespace-nowrap">
                <p className="leading-[16.5px]">Started</p>
            </div>
        </div>
    );
}

function ProjectTasksTableRow1() {
    return (
        <div
            className="absolute bg-[rgba(0,114,255,0.04)] border-[#d5e1ff] border-b border-solid h-[51px] left-[-1px] top-[299px] w-[1807px]"
            data-name="Project Tasks Table Row"
        >
            <DataSvg1 />
            <Data1 />
            <Status8 />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1189px] not-italic right-[553px] text-[#737373] text-[11px] top-[26.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 6, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1577px] not-italic right-[165px] text-[#737373] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 2, 2026</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal justify-center leading-[0] left-[1705px] not-italic right-[37px] text-[#737373] text-[11px] top-[25.5px] whitespace-nowrap">
                <p className="leading-[16.5px]">May 6, 2026</p>
            </div>
        </div>
    );
}

function Body() {
    return (
        <div
            className="absolute bg-white border border-[#d5e1ff] border-solid h-[455px] left-0 top-[39px] w-[1807px]"
            data-name="Body"
        >
            <TasksRow />
            <TasksRow1 />
            <TasksRow2 />
            <TasksRow3 />
            <TasksRow4 />
            <TasksRow5 />
            <TasksRow6 />
            <ProjectTasksTableRow />
            <ProjectTasksTableRow1 />
        </div>
    );
}

function Table() {
    return (
        <div
            className="absolute bg-white h-[499px] left-[31px] right-[30px] rounded-tl-[20px] rounded-tr-[20px] top-[319px]"
            data-name="Table"
        >
            <TableHeader />
            <Body />
        </div>
    );
}

function Main() {
    return (
        <div
            className="absolute inset-[81px_-684px_-1px_256px]"
            data-name="Main"
        >
            <Header />
            <Project />
            <AllPhases />
            <AllTypes />
            <AllStatues />
            <Sort />
            <Table />
        </div>
    );
}

function DarkMode() {
    return (
        <div
            className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[123px] mt-0 place-items-start relative row-1"
            data-name="Dark mode"
        >
            <div
                className="col-1 ml-[27.6px] mt-[15px] relative row-1 size-[16px]"
                data-name="Vector"
            >
                <div className="absolute inset-[-4.69%]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 17.4998 17.4999"
                    >
                        <path
                            d={svgPaths.p2f9130f0}
                            id="Vector"
                            stroke="url(#paint0_linear_1_1641)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                        <defs>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1641"
                                x1="2.68916"
                                x2="18.6914"
                                y1="4.30557"
                                y2="5.24537"
                            >
                                <stop stopColor="#438DFD" />
                                <stop
                                    offset="0.596188"
                                    stopColor="#5A75FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#7300FF"
                                />
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
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 56 1"
                            >
                                <line
                                    id="Line 1"
                                    stroke="var(--stroke-0, #F3F4F6)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="55.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 flex h-[56px] items-center justify-center ml-0 mt-0 relative row-1 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[56px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 56 1"
                            >
                                <line
                                    id="Line 2"
                                    stroke="var(--stroke-0, #F3F4F6)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="55.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
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
        <div
            className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[52px] mt-0 place-items-start relative row-1"
            data-name="Notifications"
        >
            <div className="col-1 flex h-[56px] items-center justify-center ml-[71px] mt-0 relative row-1 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[56px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 56 1"
                            >
                                <line
                                    id="Line 1"
                                    stroke="var(--stroke-0, #F3F4F6)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="55.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 flex h-[56px] items-center justify-center ml-0 mt-0 relative row-1 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[56px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 56 1"
                            >
                                <line
                                    id="Line 2"
                                    stroke="var(--stroke-0, #F3F4F6)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="55.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-[11.6px] mt-[35px] not-italic relative row-1 text-[#737373] text-[8px] whitespace-nowrap">
                <p className="leading-[normal]">Notifications</p>
            </div>
            <div
                className="col-1 h-[18.375px] ml-[26.9px] mt-[13.31px] relative row-1 w-[16.289px]"
                data-name="Vector"
            >
                <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2887 18.375"
                >
                    <path
                        d={svgPaths.p89fbcc0}
                        fill="url(#paint0_linear_1_1588)"
                        id="Vector"
                    />
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_1_1588"
                            x1="1.97439"
                            x2="18.2773"
                            y1="4.08333"
                            y2="4.93209"
                        >
                            <stop stopColor="#438DFD" />
                            <stop
                                offset="0.596188"
                                stopColor="#5A75FF"
                            />
                            <stop
                                offset="1"
                                stopColor="#7300FF"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

function Pm() {
    return (
        <div
            className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
            data-name="PM"
        >
            <div className="col-1 flex h-[56px] items-center justify-center ml-[52px] mt-0 relative row-1 w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[56px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 56 1"
                            >
                                <line
                                    id="Line 1"
                                    stroke="var(--stroke-0, #F3F4F6)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="55.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="[word-break:break-word] col-1 flex flex-col font-normal justify-center ml-0 mt-[35px] not-italic relative row-1 text-[#737373] text-[8px] whitespace-nowrap">
                <p className="leading-[normal]">PM View</p>
            </div>
            <div
                className="col-1 ml-[13.88px] mt-[19.88px] relative row-1 size-[6.25px]"
                data-name="Vector"
            >
                <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 6.25 6.25"
                >
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p2a2d8600}
                        fill="url(#paint0_linear_1_1681)"
                        fillRule="evenodd"
                        id="Vector"
                    />
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_1_1681"
                            x1="0.757576"
                            x2="7.00844"
                            y1="1.38889"
                            y2="1.756"
                        >
                            <stop stopColor="#438DFD" />
                            <stop
                                offset="0.596188"
                                stopColor="#5A75FF"
                            />
                            <stop
                                offset="1"
                                stopColor="#7300FF"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div
                className="col-1 h-[14.583px] ml-[8.04px] mt-[15.71px] relative row-1 w-[17.917px]"
                data-name="Vector"
            >
                <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 17.9167 14.5833"
                >
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p1ad9a100}
                        fill="url(#paint0_linear_1_1507)"
                        fillRule="evenodd"
                        id="Vector"
                    />
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_1_1507"
                            x1="2.17172"
                            x2="20.0595"
                            y1="3.24074"
                            y2="4.53141"
                        >
                            <stop stopColor="#438DFD" />
                            <stop
                                offset="0.596188"
                                stopColor="#5A75FF"
                            />
                            <stop
                                offset="1"
                                stopColor="#7300FF"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

function Icons() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-name="Icons"
        >
            <DarkMode />
            <Notifications />
            <Pm />
        </div>
    );
}

function Profile() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-name="Profile"
        >
            <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]">
                <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 38 38"
                >
                    <circle
                        cx="19"
                        cy="19"
                        fill="url(#paint0_linear_1_1559)"
                        id="Ellipse 1"
                        r="19"
                    />
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_1_1559"
                            x1="4.60606"
                            x2="29.2859"
                            y1="8.44444"
                            y2="43.4986"
                        >
                            <stop stopColor="#438DFD" />
                            <stop
                                offset="0.337901"
                                stopColor="#5A75FF"
                            />
                            <stop
                                offset="1"
                                stopColor="#7300FF"
                            />
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
        <div
            className="absolute content-stretch flex gap-[17px] inset-[12.5%_1.81%_12.5%_67.5%] items-center justify-end leading-[0]"
            data-name="icons + profile"
        >
            <Icons />
            <div className="[word-break:break-word] flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#6e6f71] text-[0px] text-right whitespace-nowrap">
                <p className="leading-[20px] mb-0 text-[#17171a] text-[13px]">
                    Jisoo Jang
                </p>
                <p className="leading-[normal] text-[#737373] text-[8px]">
                    jisoo.jang@jisoodesign.ca
                </p>
            </div>
            <Profile />
        </div>
    );
}

function SearchBar() {
    return (
        <div
            className="absolute contents inset-[26.25%_62.11%_26.25%_2.62%]"
            data-name="Search Bar"
        >
            <div className="absolute bg-[#f3f4f6] border border-[#d9d9d9] border-solid inset-[26.25%_62.11%_26.25%_2.62%] rounded-[5px]" />
            <div className="[word-break:break-word] absolute flex flex-col font-normal inset-[40%_80.08%_40%_5.99%] justify-center leading-[0] not-italic text-[#b4b4b4] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Search Projects, Resources...</p>
            </div>
            <div
                className="absolute inset-[42.5%_94.68%_42.5%_4.3%]"
                data-name="Vector"
            >
                <div className="absolute inset-[0_2.28%_2.28%_0]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 11.7266 11.7266"
                    >
                        <path
                            d={svgPaths.p310d9f00}
                            fill="var(--fill-0, #B4B4B4)"
                            id="Vector"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Svg23() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.pff0fc00}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.pff0fc00}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.pff0fc00}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p1d76d410}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1d76d410}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1d76d410}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p2f091200}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p2f091200}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p2f091200}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d={svgPaths.p39897300}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p39897300}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p39897300}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container2() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Dashboard</p>
            </div>
        </div>
    );
}

function TabTitle() {
    return (
        <div
            className="relative shrink-0 w-full"
            data-name="Tab title"
        >
            <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
                    <p className="leading-[16.5px]">Project Management</p>
                </div>
            </div>
        </div>
    );
}

function Svg24() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p3159e300}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3159e300}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3159e300}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d="M5.33333 6.66667V9.33333"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 6.66667V9.33333"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 6.66667V9.33333"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d="M8 6.66667V8"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 6.66667V8"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 6.66667V8"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d="M10.6667 6.66667V10.6667"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 6.66667V10.6667"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 6.66667V10.6667"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container3() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Projects</p>
            </div>
        </div>
    );
}

function Svg25() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p118e9580}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p118e9580}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p118e9580}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p36cdaf00}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p36cdaf00}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p36cdaf00}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p21ad0600}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p21ad0600}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p21ad0600}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container4() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Templates</p>
            </div>
        </div>
    );
}

function Svg26() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <path
                        d="M8.66667 3.33333H14"
                        id="Vector"
                        stroke="var(--stroke-0, #0033D9)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                    />
                    <path
                        d="M8.66667 8H14"
                        id="Vector_2"
                        stroke="var(--stroke-0, #0033D9)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                    />
                    <path
                        d="M8.66667 12.6667H14"
                        id="Vector_3"
                        stroke="var(--stroke-0, #0033D9)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                    />
                    <path
                        d={svgPaths.p245c7a00}
                        id="Vector_4"
                        stroke="var(--stroke-0, #0033D9)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                    />
                    <path
                        d={svgPaths.pbb5d900}
                        id="Vector_5"
                        stroke="var(--stroke-0, #0033D9)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                    />
                </g>
            </svg>
        </div>
    );
}

function Container5() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0033d9] text-[13px] w-full">
                <p className="leading-[20px]">Deliverable Tracker</p>
            </div>
        </div>
    );
}

function Svg27() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g
                    clipPath="url(#clip0_1_1556)"
                    id="SVG"
                >
                    <g id="Vector">
                        <path
                            d={svgPaths.p3227a460}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3227a460}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3227a460}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1_1556">
                        <rect
                            fill="white"
                            height="16"
                            width="16"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Container6() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Tasks Tracker</p>
            </div>
        </div>
    );
}

function Svg28() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p19d57600}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p19d57600}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p19d57600}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d="M6 5.33333H10.6667"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M6 5.33333H10.6667"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M6 5.33333H10.6667"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d="M5.33333 8H9.33333"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 8H9.33333"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 8H9.33333"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d="M7.33333 10.6667H10.6667"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M7.33333 10.6667H10.6667"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M7.33333 10.6667H10.6667"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container7() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Timeline Chart</p>
            </div>
        </div>
    );
}

function Svg29() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.pcbc4a80}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.pcbc4a80}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.pcbc4a80}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p32566c00}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p32566c00}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p32566c00}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p25e54000}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p25e54000}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p25e54000}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d={svgPaths.p2a9e6140}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p2a9e6140}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p2a9e6140}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container8() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Project Mobilization</p>
            </div>
        </div>
    );
}

function Tabs() {
    return (
        <div
            className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
            data-name="Tabs"
        >
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Projects"
            >
                <Svg24 />
                <Container3 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Templates"
            >
                <Svg25 />
                <Container4 />
            </div>
            <div
                className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                style={{
                    backgroundImage:
                        "linear-gradient(110.649deg, rgba(67, 141, 253, 0.15) 12.682%, rgba(90, 117, 255, 0.15) 69.195%, rgba(115, 0, 255, 0.15) 107.47%)",
                }}
                data-name="Projects Tracker"
            >
                <Svg26 />
                <Container5 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Tasks Tracker"
            >
                <Svg27 />
                <Container6 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Timeline Chart"
            >
                <Svg28 />
                <Container7 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Project Mobilization"
            >
                <Svg29 />
                <Container8 />
            </div>
        </div>
    );
}

function TabTitle1() {
    return (
        <div
            className="relative shrink-0 w-full"
            data-name="Tab title"
        >
            <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
                    <p className="leading-[16.5px]">Resource Management</p>
                </div>
            </div>
        </div>
    );
}

function Svg30() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p32887f80}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p32887f80}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p32887f80}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p1a837050}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1a837050}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1a837050}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p1f197700}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1f197700}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1f197700}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d={svgPaths.p3694d280}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3694d280}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3694d280}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container9() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Project Members</p>
            </div>
        </div>
    );
}

function Svg31() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d="M5.33333 1.33333V4"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 1.33333V4"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 1.33333V4"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d="M10.6667 1.33333V4"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 1.33333V4"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 1.33333V4"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p3ee34580}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3ee34580}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p3ee34580}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_4">
                        <path
                            d="M2 6.66667H14"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M2 6.66667H14"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M2 6.66667H14"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_5">
                        <path
                            d="M5.33333 9.33333H5.34"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 9.33333H5.34"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 9.33333H5.34"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_6">
                        <path
                            d="M8 9.33333H8.00667"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 9.33333H8.00667"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 9.33333H8.00667"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_7">
                        <path
                            d="M10.6667 9.33333H10.6733"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 9.33333H10.6733"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 9.33333H10.6733"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_8">
                        <path
                            d="M5.33333 12H5.34"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 12H5.34"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M5.33333 12H5.34"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_9">
                        <path
                            d="M8 12H8.00667"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 12H8.00667"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 12H8.00667"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_10">
                        <path
                            d="M10.6667 12H10.6733"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 12H10.6733"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M10.6667 12H10.6733"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container10() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Members Calendar</p>
            </div>
        </div>
    );
}

function Tabs1() {
    return (
        <div
            className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
            data-name="Tabs"
        >
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Project Members"
            >
                <Svg30 />
                <Container9 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Members Calendar"
            >
                <Svg31 />
                <Container10 />
            </div>
        </div>
    );
}

function TabTitle2() {
    return (
        <div
            className="relative shrink-0 w-full"
            data-name="Tab title"
        >
            <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[1px] uppercase w-full">
                    <p className="leading-[16.5px]">Help</p>
                </div>
            </div>
        </div>
    );
}

function Svg32() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d="M8 2V10"
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 2V10"
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d="M8 2V10"
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p26e09a00}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p26e09a00}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p26e09a00}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_3">
                        <path
                            d={svgPaths.p23ad1400}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p23ad1400}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p23ad1400}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container11() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">Data Upload</p>
            </div>
        </div>
    );
}

function Svg33() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="SVG"
        >
            <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="SVG">
                    <g id="Vector">
                        <path
                            d={svgPaths.p1e124b00}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1e124b00}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p1e124b00}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                    <g id="Vector_2">
                        <path
                            d={svgPaths.p28db2b80}
                            stroke="var(--stroke-0, #242429)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p28db2b80}
                            stroke="var(--stroke-1, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                        <path
                            d={svgPaths.p28db2b80}
                            stroke="var(--stroke-2, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity="0.2"
                            strokeWidth="1.33333"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Container12() {
    return (
        <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="Container"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[13px] w-full">
                <p className="leading-[20px]">App Settings</p>
            </div>
        </div>
    );
}

function Tabs2() {
    return (
        <div
            className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
            data-name="Tabs"
        >
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Data Upload"
            >
                <Svg32 />
                <Container11 />
            </div>
            <div
                className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                data-name="Configuration"
            >
                <Svg33 />
                <Container12 />
            </div>
        </div>
    );
}

function LogoContainer() {
    return (
        <div
            className="content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[40px]"
            data-name="Logo Container"
        >
            <div
                className="relative shrink-0 size-[34px]"
                data-name="External - ProjectPulse Icon"
            >
                <div className="absolute bottom-[24.39%] left-[24.39%] right-1/4 top-1/4">
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 17.2073 17.2073"
                    >
                        <path
                            d={svgPaths.p195c4b00}
                            fill="url(#paint0_linear_1_1481)"
                            id="Rectangle 53"
                        />
                        <defs>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1481"
                                x1="8.60366"
                                x2="8.60366"
                                y1="0"
                                y2="17.2073"
                            >
                                <stop stopColor="#4282E2" />
                                <stop
                                    offset="0.5"
                                    stopColor="#3558CD"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#292DB8"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute inset-[0_54.27%_54.27%_0]">
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1683_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 49"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint0_linear_1_1683)"
                            />
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint1_radial_1_1683)"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1683_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path d={svgPaths.p21e79800} />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1683"
                                x1="2.23765"
                                x2="26.5216"
                                y1="-0.555313"
                                y2="32.8001"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.3"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1683"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    className="absolute inset-[0_54.27%_54.27%_0]"
                    data-name="Rectangle 49 (Stroke)"
                >
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1471_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 49 (Stroke)"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint0_linear_1_1471)"
                                fillRule="evenodd"
                            />
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint1_radial_1_1471)"
                                fillRule="evenodd"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1471_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path
                                    clipRule="evenodd"
                                    d={svgPaths.p23880d80}
                                    fillRule="evenodd"
                                />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1471"
                                x1="2.23765"
                                x2="16.812"
                                y1="-0.555314"
                                y2="7.95414"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1471"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute inset-[0_0_54.27%_54.27%]">
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1501_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 50"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint0_linear_1_1501)"
                            />
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint1_radial_1_1501)"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1501_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path d={svgPaths.p21e79800} />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1501"
                                x1="2.23765"
                                x2="3.61508"
                                y1="-0.555314"
                                y2="41.8172"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.3"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1501"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    className="absolute inset-[0_0_54.27%_54.27%]"
                    data-name="Rectangle 50 (Stroke)"
                >
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1471_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 49 (Stroke)"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint0_linear_1_1471)"
                                fillRule="evenodd"
                            />
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint1_radial_1_1471)"
                                fillRule="evenodd"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1471_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path
                                    clipRule="evenodd"
                                    d={svgPaths.p23880d80}
                                    fillRule="evenodd"
                                />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1471"
                                x1="2.23765"
                                x2="16.812"
                                y1="-0.555314"
                                y2="7.95414"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1471"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute inset-[54.27%_54.27%_0_0]">
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1592_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 52"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint0_linear_1_1592)"
                            />
                            <path
                                d={svgPaths.p21e79800}
                                fill="url(#paint1_radial_1_1592)"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1592_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path d={svgPaths.p21e79800} />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1592"
                                x1="2.23765"
                                x2="22.3052"
                                y1="-0.555314"
                                y2="25.1514"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.3"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1592"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    className="absolute inset-[54.27%_54.27%_0_0]"
                    data-name="Rectangle 52 (Stroke)"
                >
                    <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15.5488 15.5488"
                    >
                        <foreignObject
                            height="27.9878"
                            width="27.9878"
                            x="-6.21951"
                            y="-6.21951"
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(3.11px)",
                                    clipPath: "url(#bgblur_0_1_1471_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                                xmlns="http://www.w3.org/1999/xhtml"
                            />
                        </foreignObject>
                        <g
                            id="Rectangle 49 (Stroke)"
                            data-figma-bg-blur-radius="6.21951"
                        >
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint0_linear_1_1471)"
                                fillRule="evenodd"
                            />
                            <path
                                clipRule="evenodd"
                                d={svgPaths.p23880d80}
                                fill="url(#paint1_radial_1_1471)"
                                fillRule="evenodd"
                            />
                        </g>
                        <defs>
                            <clipPath
                                id="bgblur_0_1_1471_clip_path"
                                transform="translate(6.21951 6.21951)"
                            >
                                <path
                                    clipRule="evenodd"
                                    d={svgPaths.p23880d80}
                                    fillRule="evenodd"
                                />
                            </clipPath>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_1_1471"
                                x1="2.23765"
                                x2="16.812"
                                y1="-0.555314"
                                y2="7.95414"
                            >
                                <stop
                                    offset="0.188941"
                                    stopColor="#E7F0FF"
                                    stopOpacity="0.523483"
                                />
                                <stop
                                    offset="0.526042"
                                    stopColor="#88A4FF"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#B4D2FF"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                            <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="matrix(7.68833 -9.48661 9.48661 20.0056 2.32371 15.0397)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_1_1471"
                                r="1"
                            >
                                <stop stopColor="white" />
                                <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    className="absolute inset-[48.78%_0_0_54.88%]"
                    data-name="Icons/Icon:34"
                >
                    <div className="absolute inset-[0_62.22%_75.61%_23.89%]">
                        <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 2.13076 4.24747"
                        >
                            <foreignObject
                                height="16.6865"
                                width="14.5698"
                                x="-6.21951"
                                y="-6.21951"
                            >
                                <div
                                    style={{
                                        backdropFilter: "blur(3.11px)",
                                        clipPath:
                                            "url(#bgblur_0_1_1469_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                    xmlns="http://www.w3.org/1999/xhtml"
                                />
                            </foreignObject>
                            <g
                                id="Rectangle 13"
                                data-figma-bg-blur-radius="6.21951"
                            >
                                <path
                                    d={svgPaths.p3e8e8900}
                                    fill="url(#paint0_linear_1_1469)"
                                />
                                <path
                                    d={svgPaths.p3e8e8900}
                                    fill="url(#paint1_radial_1_1469)"
                                />
                                <path
                                    d={svgPaths.p3e8e8900}
                                    stroke="url(#paint2_linear_1_1469)"
                                    strokeWidth="0.103659"
                                />
                            </g>
                            <defs>
                                <clipPath
                                    id="bgblur_0_1_1469_clip_path"
                                    transform="translate(6.21951 6.21951)"
                                >
                                    <path d={svgPaths.p3e8e8900} />
                                </clipPath>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint0_linear_1_1469"
                                    x1="0.306641"
                                    x2="2.77312"
                                    y1="-0.151695"
                                    y2="0.570731"
                                >
                                    <stop
                                        offset="0.188941"
                                        stopColor="#E7F0FF"
                                        stopOpacity="0.523483"
                                    />
                                    <stop
                                        offset="0.526042"
                                        stopColor="#88A4FF"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#B4D2FF"
                                        stopOpacity="0.3"
                                    />
                                </linearGradient>
                                <radialGradient
                                    cx="0"
                                    cy="0"
                                    gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)"
                                    gradientUnits="userSpaceOnUse"
                                    id="paint1_radial_1_1469"
                                    r="1"
                                >
                                    <stop stopColor="white" />
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint2_linear_1_1469"
                                    x1="1.06538"
                                    x2="1.06538"
                                    y1="0"
                                    y2="4.24747"
                                >
                                    <stop stopColor="#4282E2" />
                                    <stop
                                        offset="0.5"
                                        stopColor="#3558CD"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#292DB8"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute inset-[0_23.89%_75.61%_62.22%]">
                        <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 2.13076 4.24747"
                        >
                            <g id="Rectangle 14">
                                <path
                                    d={svgPaths.p2acab100}
                                    fill="url(#paint0_linear_1_1467)"
                                />
                                <path
                                    d={svgPaths.p2acab100}
                                    fill="url(#paint1_radial_1_1467)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint0_linear_1_1467"
                                    x1="0.306641"
                                    x2="2.77312"
                                    y1="-0.151695"
                                    y2="0.570731"
                                >
                                    <stop
                                        offset="0.188941"
                                        stopColor="#E7F0FF"
                                        stopOpacity="0.523483"
                                    />
                                    <stop
                                        offset="0.526042"
                                        stopColor="#88A4FF"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#B4D2FF"
                                        stopOpacity="0.3"
                                    />
                                </linearGradient>
                                <radialGradient
                                    cx="0"
                                    cy="0"
                                    gradientTransform="matrix(1.05359 -2.59146 1.30002 5.46495 0.318434 4.10842)"
                                    gradientUnits="userSpaceOnUse"
                                    id="paint1_radial_1_1467"
                                    r="1"
                                >
                                    <stop stopColor="white" />
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="-translate-y-1/2 absolute aspect-[74/73.75609588623047] left-0 right-[-1.35%] top-[calc(50%+1.19px)]">
                        <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15.5488 15.4975"
                        >
                            <foreignObject
                                height="27.9366"
                                width="27.9878"
                                x="-6.21951"
                                y="-6.21951"
                            >
                                <div
                                    style={{
                                        backdropFilter: "blur(3.11px)",
                                        clipPath:
                                            "url(#bgblur_0_1_1465_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                    xmlns="http://www.w3.org/1999/xhtml"
                                />
                            </foreignObject>
                            <g
                                id="Rectangle 12"
                                data-figma-bg-blur-radius="6.21951"
                            >
                                <path
                                    d={svgPaths.p3cc88a00}
                                    fill="url(#paint0_linear_1_1465)"
                                />
                                <path
                                    d={svgPaths.p3cc88a00}
                                    fill="url(#paint1_radial_1_1465)"
                                />
                                <path
                                    d={svgPaths.p3cc88a00}
                                    stroke="url(#paint2_linear_1_1465)"
                                    strokeWidth="0.425"
                                />
                            </g>
                            <defs>
                                <clipPath
                                    id="bgblur_0_1_1465_clip_path"
                                    transform="translate(6.21951 6.21951)"
                                >
                                    <path d={svgPaths.p3cc88a00} />
                                </clipPath>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint0_linear_1_1465"
                                    x1="2.23765"
                                    x2="16.7875"
                                    y1="-0.553483"
                                    y2="7.96976"
                                >
                                    <stop
                                        offset="0.188941"
                                        stopColor="#E7F0FF"
                                        stopOpacity="0.523483"
                                    />
                                    <stop
                                        offset="0.526042"
                                        stopColor="#88A4FF"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#B4D2FF"
                                        stopOpacity="0.3"
                                    />
                                </linearGradient>
                                <radialGradient
                                    cx="0"
                                    cy="0"
                                    gradientTransform="matrix(7.68833 -9.45534 9.48661 19.9397 2.32371 14.9902)"
                                    gradientUnits="userSpaceOnUse"
                                    id="paint1_radial_1_1465"
                                    r="1"
                                >
                                    <stop stopColor="white" />
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint2_linear_1_1465"
                                    x1="7.77439"
                                    x2="7.77439"
                                    y1="0"
                                    y2="15.4975"
                                >
                                    <stop stopColor="#4282E2" />
                                    <stop
                                        offset="0.5"
                                        stopColor="#3558CD"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#292DB8"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="absolute inset-[12.2%_0_0_0]"
                        data-name="Rectangle 12 (Stroke)"
                    >
                        <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15.3415 15.2909"
                        >
                            <foreignObject
                                height="27.7299"
                                width="27.7805"
                                x="-6.21951"
                                y="-6.21951"
                            >
                                <div
                                    style={{
                                        backdropFilter: "blur(3.11px)",
                                        clipPath:
                                            "url(#bgblur_0_1_1463_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                    xmlns="http://www.w3.org/1999/xhtml"
                                />
                            </foreignObject>
                            <g
                                id="Rectangle 12 (Stroke)"
                                data-figma-bg-blur-radius="6.21951"
                            >
                                <path
                                    clipRule="evenodd"
                                    d={svgPaths.p2446fb00}
                                    fill="url(#paint0_linear_1_1463)"
                                    fillRule="evenodd"
                                />
                                <path
                                    clipRule="evenodd"
                                    d={svgPaths.p2446fb00}
                                    fill="url(#paint1_radial_1_1463)"
                                    fillRule="evenodd"
                                />
                            </g>
                            <defs>
                                <clipPath
                                    id="bgblur_0_1_1463_clip_path"
                                    transform="translate(6.21951 6.21951)"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d={svgPaths.p2446fb00}
                                        fillRule="evenodd"
                                    />
                                </clipPath>
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint0_linear_1_1463"
                                    x1="2.20781"
                                    x2="16.5637"
                                    y1="-0.546104"
                                    y2="7.86349"
                                >
                                    <stop
                                        offset="0.188941"
                                        stopColor="#E7F0FF"
                                        stopOpacity="0.523483"
                                    />
                                    <stop
                                        offset="0.526042"
                                        stopColor="#88A4FF"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#B4D2FF"
                                        stopOpacity="0.1"
                                    />
                                </linearGradient>
                                <radialGradient
                                    cx="0"
                                    cy="0"
                                    gradientTransform="matrix(7.58582 -9.32927 9.36012 19.6738 2.29273 14.7903)"
                                    gradientUnits="userSpaceOnUse"
                                    id="paint1_radial_1_1463"
                                    r="1"
                                >
                                    <stop stopColor="white" />
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="absolute inset-[38.54%_29.71%_26.72%_29.44%]"
                        data-name="31"
                    >
                        <div className="absolute inset-[-3.43%_-3.31%_-3.43%_-3.58%]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 6.698 6.46575"
                            >
                                <path
                                    d={svgPaths.p2efa7400}
                                    fill="url(#paint0_linear_1_1473)"
                                    id="31"
                                    stroke="url(#paint1_linear_1_1473)"
                                    strokeWidth="0.207317"
                                />
                                <defs>
                                    <linearGradient
                                        gradientUnits="userSpaceOnUse"
                                        id="paint0_linear_1_1473"
                                        x1="3.35748"
                                        x2="3.35748"
                                        y1="0.207317"
                                        y2="6.25844"
                                    >
                                        <stop stopColor="#4282E2" />
                                        <stop
                                            offset="0.5"
                                            stopColor="#3558CD"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="#292DB8"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        gradientUnits="userSpaceOnUse"
                                        id="paint1_linear_1_1473"
                                        x1="3.35748"
                                        x2="3.35748"
                                        y1="0.207317"
                                        y2="6.25844"
                                    >
                                        <stop stopColor="#4282E2" />
                                        <stop
                                            offset="0.5"
                                            stopColor="#3558CD"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="#292DB8"
                                        />
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
        <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-name="Name"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#17171a] text-[0px] whitespace-nowrap">
                <p className="font-bold leading-[20px] text-[16px]">
                    ProjectTracker
                </p>
            </div>
        </div>
    );
}

function Desc() {
    return (
        <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-name="Desc"
        >
            <div className="[word-break:break-word] flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">{`good design inc. `}</p>
            </div>
        </div>
    );
}

function AppNameContainer() {
    return (
        <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]"
            data-name="App Name Container"
        >
            <Name />
            <Desc />
        </div>
    );
}

function LogoNameContainer() {
    return (
        <div
            className="absolute bg-white content-stretch flex gap-[12px] items-center left-0 p-[20px] top-0 w-[255px]"
            data-name="Logo & Name Container"
        >
            <div
                aria-hidden
                className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none"
            />
            <LogoContainer />
            <AppNameContainer />
        </div>
    );
}

function Grid() {
    return (
        <div
            className="absolute h-[944px] left-[255px] top-[80px] w-[1185px]"
            data-name="grid"
        />
    );
}

export default function V204ProjectsTracker() {
    return (
        <div
            className="bg-white relative size-full"
            data-name="v2 - 04 projects tracker"
        >
            <div
                className="absolute bg-white h-[943px] left-[255px] top-[80px] w-[1869px]"
                data-name="extended bg - white"
            />
            <div
                className="absolute bg-[#f5fbff] h-[943px] left-[255px] top-[80px] w-[1869px]"
                data-name="extended bg - blue"
            />
            <Main />
            <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[1024px] left-1/2 top-1/2 w-[1440px]"
                data-name="Completed Nav Bars"
            >
                <div
                    className="absolute h-[80px] left-[255px] top-0 w-[1185px]"
                    data-name="Top Nav Bar"
                >
                    <div
                        className="absolute bg-white inset-0"
                        data-name="top nav bar"
                    >
                        <div
                            aria-hidden
                            className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none"
                        />
                    </div>
                    <IconsProfile />
                    <SearchBar />
                </div>
                <div
                    className="absolute bg-white h-[944px] left-0 top-[80px] w-[255px]"
                    data-name="Left Nav"
                >
                    <div className="content-stretch flex flex-col gap-[23px] items-start overflow-auto pb-[16px] pt-[12px] px-[12px] relative rounded-[inherit] size-full">
                        <div
                            className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[231px]"
                            data-name="Dashboard Tab"
                        >
                            <Svg23 />
                            <Container2 />
                        </div>
                        <div
                            className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]"
                            data-name="Project Management Section"
                        >
                            <TabTitle />
                            <Tabs />
                        </div>
                        <div
                            className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]"
                            data-name="Resource Management Section"
                        >
                            <TabTitle1 />
                            <Tabs1 />
                        </div>
                        <div
                            className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]"
                            data-name="Help Section"
                        >
                            <TabTitle2 />
                            <Tabs2 />
                        </div>
                    </div>
                    <div
                        aria-hidden
                        className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none"
                    />
                </div>
                <LogoNameContainer />
            </div>
            <Grid />
        </div>
    );
}
