import { useEffect, useRef, useState } from "react";
import { NewProjectModal } from "./components/NewProjectModal";
import V201Dashboard from "../imports/V201Dashboard/index";
import V202Projects from "../imports/V202Projects/index";
import V203Templates from "../imports/V203Templates/index";
import V204ProjectsTracker from "../imports/V204ProjectsTracker/index";
import V205TaskTracker from "../imports/V205TaskTracker/index";
import V206TimelineChart from "../imports/V206TimelineChart/index";
import V207Mobilization from "../imports/V207Mobilization/index";
import V208Members from "../imports/V208Members/index";
import V209MembersCalendar from "../imports/V209MembersCalendar/index";
import V210DataUpload from "../imports/V210DataUpload/index";
import V21101SettingsPMs from "../imports/V21101SettingsPMs/index";
import V21102SettingsMembers from "../imports/V21102SettingsMembers-1/index";

type Page =
    | "dashboard"
    | "projects"
    | "templates"
    | "projectsTracker"
    | "tasksTracker"
    | "timelineChart"
    | "mobilization"
    | "members"
    | "membersCalendar"
    | "dataUpload"
    | "settingsPMs"
    | "settingsMembers";

const NAV_LEFT = 255;
const NAV_TOP = 80;
const SCREEN_W = 1440;
const SCREEN_H = 1024;
const MAIN_FRAME_WIDTH = SCREEN_W - NAV_LEFT;
const TOOLBAR_CONTROL_GAP = 8;

// Deliverable Tracker: pin header, currently-tracking card, filter row, and gap above table
const PROJECTS_TRACKER_FILTERS_TOP_MAIN = 266;
const PROJECTS_TRACKER_FILTERS_HEIGHT = 36;
const PROJECTS_TRACKER_TABLE_TOP_MAIN = 319;
const PROJECTS_TRACKER_FILTERS_TO_TABLE_GAP =
    PROJECTS_TRACKER_TABLE_TOP_MAIN -
    (PROJECTS_TRACKER_FILTERS_TOP_MAIN + PROJECTS_TRACKER_FILTERS_HEIGHT);
const PROJECTS_TRACKER_FIXED_TOP_HEIGHT =
    81 + PROJECTS_TRACKER_TABLE_TOP_MAIN - NAV_TOP;

// Resource Calendar: pin header, toolbar, and utilization legend above the data table
const MEMBERS_CALENDAR_CONTENT_LEFT = 256 + 32;
const MEMBERS_CALENDAR_CONTENT_WIDTH = 1185 - 64;
const MEMBERS_CALENDAR_TOOLBAR_TOP = 81 + 113;
const MEMBERS_CALENDAR_UTIL_TOP = 81 + 173;
const MEMBERS_CALENDAR_UTIL_HEIGHT = 24;
const MEMBERS_CALENDAR_DATA_TABLE_TOP = 214;
const MEMBERS_CALENDAR_UTIL_TO_TABLE_GAP =
    MEMBERS_CALENDAR_DATA_TABLE_TOP -
    (MEMBERS_CALENDAR_UTIL_TOP - 81) -
    MEMBERS_CALENDAR_UTIL_HEIGHT;
const MEMBERS_CALENDAR_FILTER_PANEL_MARGIN = 16;
const MEMBERS_CALENDAR_FILTER_PANEL_BG = "rgba(0, 114, 255, 0.1)";
const MEMBERS_CALENDAR_FILTER_PANEL_PADDING_Y = 14;
const MEMBERS_CALENDAR_FILTER_PANEL_CONTENT_HEIGHT = 10 + 4 + 36;
const MEMBERS_CALENDAR_FILTER_PANEL_HEIGHT =
    MEMBERS_CALENDAR_FILTER_PANEL_PADDING_Y * 2 +
    MEMBERS_CALENDAR_FILTER_PANEL_CONTENT_HEIGHT;
const MEMBERS_CALENDAR_FILTER_PANEL_TOP =
    MEMBERS_CALENDAR_TOOLBAR_TOP + 42 + MEMBERS_CALENDAR_FILTER_PANEL_MARGIN;
const MEMBERS_CALENDAR_UTIL_TOP_WITH_FILTERS =
    MEMBERS_CALENDAR_FILTER_PANEL_TOP +
    MEMBERS_CALENDAR_FILTER_PANEL_HEIGHT +
    MEMBERS_CALENDAR_FILTER_PANEL_MARGIN;
const MEMBERS_CALENDAR_UTIL_BOTTOM_PADDING = MEMBERS_CALENDAR_UTIL_TO_TABLE_GAP;
const MEMBERS_CALENDAR_FIXED_TOP_HEIGHT = 81 + 214 - NAV_TOP;
const MEMBERS_CALENDAR_FIXED_TOP_HEIGHT_WITH_FILTERS =
    MEMBERS_CALENDAR_UTIL_TOP_WITH_FILTERS +
    MEMBERS_CALENDAR_UTIL_HEIGHT +
    MEMBERS_CALENDAR_UTIL_BOTTOM_PADDING -
    NAV_TOP;
const MEMBERS_CALENDAR_FILTERS_LAYOUT_OFFSET =
    MEMBERS_CALENDAR_FIXED_TOP_HEIGHT_WITH_FILTERS -
    MEMBERS_CALENDAR_FIXED_TOP_HEIGHT;
const MEMBERS_CALENDAR_DATA_TABLE_TOP_WITH_FILTERS =
    MEMBERS_CALENDAR_DATA_TABLE_TOP + MEMBERS_CALENDAR_FILTERS_LAYOUT_OFFSET;

// Width of scrollable content per page (from left:255 to right edge of content)
const SCROLL_WIDTHS: Record<Page, number> = {
    dashboard: 1185,
    projects: 1185,
    templates: 1185,
    projectsTracker: 1869,
    tasksTracker: 1185,
    timelineChart: 1382,
    mobilization: 1185,
    members: 1185,
    membersCalendar: 1185,
    dataUpload: 1185,
    settingsPMs: 1185,
    settingsMembers: 1185,
};

const SCROLL_HEIGHTS: Record<Page, number> = {
    dashboard: 944,
    projects: 944,
    templates: 944,
    projectsTracker: 944,
    tasksTracker: 944,
    timelineChart: 944,
    mobilization: 1326,
    members: 978,
    membersCalendar: 944,
    dataUpload: 944,
    settingsPMs: 944,
    settingsMembers: 944,
};

function ScreenComponent({ page }: { page: Page }) {
    switch (page) {
        case "dashboard":
            return <V201Dashboard />;
        case "projects":
            return <V202Projects />;
        case "templates":
            return <V203Templates />;
        case "projectsTracker":
            return <V204ProjectsTracker />;
        case "tasksTracker":
            return <V205TaskTracker />;
        case "timelineChart":
            return <V206TimelineChart />;
        case "mobilization":
            return <V207Mobilization />;
        case "members":
            return <V208Members />;
        case "membersCalendar":
            return <V209MembersCalendar />;
        case "dataUpload":
            return <V210DataUpload />;
        case "settingsPMs":
            return <V21101SettingsPMs />;
        case "settingsMembers":
            return <V21102SettingsMembers />;
    }
}

const SEARCH_LEFT = NAV_LEFT + 31;
const SEARCH_WIDTH = 418;
const SEARCH_HEIGHT = 36;
const SEARCH_TOP = (NAV_TOP - SEARCH_HEIGHT) / 2;

const PROJECTS_SEARCH_LEFT = 256 + 32;
const PROJECTS_SEARCH_TOP = 81 + 113;
const PROJECTS_SEARCH_WIDTH = 320;
const PROJECTS_SEARCH_HEIGHT = 36;

const MOBILIZATION_SEARCH_LEFT = 256 + 289.42;
const MOBILIZATION_SEARCH_TOP = 81 + 283;
const MOBILIZATION_SEARCH_WIDTH = 273;
const MOBILIZATION_SEARCH_HEIGHT = 36;

const MEMBERS_SEARCH_LEFT = 256 + 32;
const MEMBERS_SEARCH_TOP = 81 + 113;
const MEMBERS_SEARCH_WIDTH = 287.5;
const MEMBERS_SEARCH_HEIGHT = 40;
const MEMBERS_CONTENT_LEFT = MEMBERS_CALENDAR_CONTENT_LEFT;
const MEMBERS_CONTENT_WIDTH = MEMBERS_CALENDAR_CONTENT_WIDTH;
const MEMBERS_MAIN_TOP = 81;
const MEMBERS_FIRST_CARD_TOP = 176;
const MEMBERS_FILTER_PANEL_TOP =
    MEMBERS_SEARCH_TOP +
    MEMBERS_SEARCH_HEIGHT +
    MEMBERS_CALENDAR_FILTER_PANEL_MARGIN;
const MEMBERS_CONTENT_TOP_WITH_FILTERS =
    MEMBERS_FILTER_PANEL_TOP +
    MEMBERS_CALENDAR_FILTER_PANEL_HEIGHT +
    MEMBERS_CALENDAR_FILTER_PANEL_MARGIN;
const MEMBERS_FILTERS_LAYOUT_OFFSET =
    MEMBERS_CONTENT_TOP_WITH_FILTERS -
    (MEMBERS_MAIN_TOP + MEMBERS_FIRST_CARD_TOP);

type SearchSuggestion = {
    readonly icon: string;
    readonly label: string;
    readonly type: string;
};

const NAV_SEARCH_SUGGESTIONS: readonly SearchSuggestion[] = [
    { icon: "🕐", label: "Marketing Website Redesign", type: "Recent" },
    { icon: "🕐", label: "Q3 Product Launch", type: "Recent" },
    { icon: "🕐", label: "Alex Morgan", type: "Recent" },
    { icon: "📁", label: "Infrastructure Upgrade", type: "Project" },
    { icon: "📁", label: "Mobile App Development", type: "Project" },
    { icon: "👤", label: "Sarah Chen", type: "Resource" },
    { icon: "👤", label: "James Liu", type: "Resource" },
];

const PROJECTS_SEARCH_SUGGESTIONS: readonly SearchSuggestion[] = [
    { icon: "📁", label: "Northstar Brand Refresh", type: "Project" },
    { icon: "📁", label: "Atlas Website Redesign", type: "Project" },
    { icon: "📁", label: "Bluepeak Design System", type: "Project" },
    { icon: "📁", label: "Packaging Refresh", type: "Project" },
    { icon: "📁", label: "Internal Portal Redesign", type: "Project" },
];

const MEMBERS_SEARCH_SUGGESTIONS: readonly SearchSuggestion[] = [
    { icon: "👤", label: "Alex Morgan", type: "Resource" },
    { icon: "👤", label: "Daniel Wong", type: "Resource" },
    { icon: "👤", label: "Michelle Chen", type: "Resource" },
    { icon: "👤", label: "Sarah Chen", type: "Resource" },
    { icon: "👤", label: "Bryan Johnson", type: "Resource" },
    { icon: "👤", label: "Julie Kim", type: "Resource" },
    { icon: "👤", label: "Andy Smith", type: "Resource" },
    { icon: "👤", label: "Jason Liu", type: "Resource" },
    { icon: "👤", label: "Jessi Li", type: "Resource" },
    { icon: "👤", label: "Priya Shah", type: "Resource" },
];

type SearchFieldProps = {
    containerStyle: React.CSSProperties;
    width: number;
    height: number;
    placeholder: string;
    ariaLabel: string;
    suggestions: readonly SearchSuggestion[];
    groups: readonly string[];
    borderRadius?: number;
};

function SearchField({
    containerStyle,
    width,
    height,
    placeholder,
    ariaLabel,
    suggestions,
    groups: groupOrder,
    borderRadius = 10,
}: SearchFieldProps) {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [dropdownRect, setDropdownRect] = useState({
        top: 0,
        left: 0,
        width: 0,
    });
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const iconSize = 16;
    const iconPadding = 36;
    const idleBorder = "#d5e1ff";
    const idleBackground = "#ffffff";

    const normalizedQuery = query.trim().toLowerCase();
    const filtered = suggestions.filter(
        (item) =>
            !normalizedQuery ||
            item.label.toLowerCase().includes(normalizedQuery),
    );

    const updateDropdownRect = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setDropdownRect({
            top: rect.bottom + 6,
            left: rect.left,
            width: rect.width,
        });
    };

    useEffect(() => {
        if (!open) return;
        updateDropdownRect();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                inputRef.current?.blur();
            }
        };

        const onPointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("scroll", updateDropdownRect, true);
        window.addEventListener("resize", updateDropdownRect);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("scroll", updateDropdownRect, true);
            window.removeEventListener("resize", updateDropdownRect);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    const groups = groupOrder.flatMap((group) => {
        const items = filtered.filter((item) => item.type === group);
        return items.length ? [{ group, items }] : [];
    });

    return (
        <div
            ref={containerRef}
            data-search-field=""
            style={{
                width,
                fontFamily: "Inter, sans-serif",
                ...containerStyle,
            }}
        >
            <div style={{ position: "relative" }}>
                <svg
                    aria-hidden
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                    }}
                >
                    <path
                        d="M14 14L11.1067 11.1067"
                        stroke="#b4b4b4"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                        stroke="#b4b4b4"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    aria-label={ariaLabel}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    style={{
                        width: "100%",
                        height,
                        padding: `0 12px 0 ${iconPadding}px`,
                        border: `1px solid ${open ? "#438dfd" : idleBorder}`,
                        borderRadius,
                        background: open ? "#ffffff" : idleBackground,
                        color: "#17171a",
                        fontSize: 13,
                        lineHeight: "20px",
                        outline: "none",
                        boxShadow: open
                            ? "0 0 0 3px rgba(67, 141, 253, 0.12)"
                            : "none",
                        transition:
                            "background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
                    }}
                />
            </div>

            {open && (
                <div
                    role="listbox"
                    style={{
                        position: "fixed",
                        top: dropdownRect.top,
                        left: dropdownRect.left,
                        width: dropdownRect.width,
                        zIndex: 30,
                        background: "white",
                        border: "1px solid #d9d9d9",
                        borderRadius: 10,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ padding: "6px 0 8px" }}>
                        {groups.length > 0 ? (
                            groups.map(({ group, items }) => (
                                <div key={group}>
                                    <div
                                        style={{
                                            padding: "6px 14px 2px",
                                            fontSize: 10,
                                            fontWeight: 600,
                                            color: "#b4b4b4",
                                            letterSpacing: "0.5px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {group}
                                    </div>
                                    {items.map((item) => (
                                        <button
                                            key={item.label}
                                            type="button"
                                            role="option"
                                            onMouseDown={(event) =>
                                                event.preventDefault()
                                            }
                                            onClick={() => {
                                                setQuery(item.label);
                                                setOpen(false);
                                                inputRef.current?.blur();
                                            }}
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                alignItems: "center",
                                                gap: 10,
                                                padding: "7px 14px",
                                                border: "none",
                                                background: "transparent",
                                                cursor: "pointer",
                                                fontSize: 13,
                                                color: "#17171a",
                                                textAlign: "left",
                                            }}
                                            onMouseEnter={(event) => {
                                                event.currentTarget.style.background =
                                                    "#f5fbff";
                                            }}
                                            onMouseLeave={(event) => {
                                                event.currentTarget.style.background =
                                                    "transparent";
                                            }}
                                        >
                                            <span style={{ fontSize: 14 }}>
                                                {item.icon}
                                            </span>
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div
                                style={{
                                    padding: "12px 14px",
                                    fontSize: 13,
                                    color: "#737373",
                                }}
                            >
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function NavSearch() {
    return (
        <SearchField
            containerStyle={{
                position: "fixed",
                left: SEARCH_LEFT,
                top: SEARCH_TOP,
                zIndex: 20,
            }}
            width={SEARCH_WIDTH}
            height={SEARCH_HEIGHT}
            placeholder="Search Projects, Resources..."
            ariaLabel="Search projects and resources"
            suggestions={NAV_SEARCH_SUGGESTIONS}
            groups={["Recent", "Project", "Resource"]}
        />
    );
}

function ProjectsSearch() {
    return (
        <SearchField
            containerStyle={{
                position: "absolute",
                left: PROJECTS_SEARCH_LEFT,
                top: PROJECTS_SEARCH_TOP,
                zIndex: 20,
            }}
            width={PROJECTS_SEARCH_WIDTH}
            height={PROJECTS_SEARCH_HEIGHT}
            placeholder="Search Projects..."
            ariaLabel="Search projects"
            suggestions={PROJECTS_SEARCH_SUGGESTIONS}
            groups={["Project"]}
        />
    );
}

function MobilizationSearch() {
    return (
        <SearchField
            containerStyle={{
                position: "absolute",
                left: MOBILIZATION_SEARCH_LEFT,
                top: MOBILIZATION_SEARCH_TOP,
                zIndex: 20,
            }}
            width={MOBILIZATION_SEARCH_WIDTH}
            height={MOBILIZATION_SEARCH_HEIGHT}
            placeholder="Search Projects..."
            ariaLabel="Search projects"
            suggestions={PROJECTS_SEARCH_SUGGESTIONS}
            groups={["Project"]}
            borderRadius={8}
        />
    );
}

function MembersToolbar({
    filtersActive,
    onFiltersActiveChange,
}: {
    filtersActive: boolean;
    onFiltersActiveChange: (active: boolean) => void;
}) {
    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 20,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: MEMBERS_SEARCH_LEFT,
                    top: MEMBERS_SEARCH_TOP,
                    display: "flex",
                    alignItems: "center",
                    gap: TOOLBAR_CONTROL_GAP,
                    pointerEvents: "auto",
                }}
            >
                <SearchField
                    containerStyle={{ position: "relative" }}
                    width={MEMBERS_SEARCH_WIDTH}
                    height={MEMBERS_SEARCH_HEIGHT}
                    placeholder="Search Resources"
                    ariaLabel="Search resources"
                    suggestions={MEMBERS_SEARCH_SUGGESTIONS}
                    groups={["Resource"]}
                />
                <FiltersToggleButton
                    active={filtersActive}
                    onToggle={() => onFiltersActiveChange(!filtersActive)}
                    style={{ flexShrink: 0 }}
                />
            </div>

            {filtersActive && (
                <div
                    style={{
                        position: "absolute",
                        left: MEMBERS_CONTENT_LEFT,
                        top: MEMBERS_FILTER_PANEL_TOP,
                        width: MEMBERS_CONTENT_WIDTH,
                        pointerEvents: "auto",
                    }}
                >
                    <ResourcesFilterBar showSearch={false} />
                </div>
            )}
        </div>
    );
}

const PROJECTS_FILTER_HEIGHT = 36;

const PROJECT_FILTERS = [
    { id: "active", label: "Active", options: ["Active", "Inactive"] },
    {
        id: "pms",
        label: "All PMs",
        options: ["All PMs", "Alex Morgan", "Julie Kim"],
    },
    {
        id: "types",
        label: "All Types",
        options: ["All Types", "UX/UI Design", "Brand Strategy"],
    },
    {
        id: "clients",
        label: "All Clients",
        options: ["All Clients", "Northstar Inc.", "Atlas Co."],
    },
    {
        id: "contract",
        label: "All Contract Types",
        options: ["All Contract Types", "Fixed Price", "Time & Materials"],
    },
] as const;

type ProjectFilterId = (typeof PROJECT_FILTERS)[number]["id"];

const filterButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: PROJECTS_FILTER_HEIGHT,
    padding: "0 13px",
    background: "#ffffff",
    border: "1px solid #d5e1ff",
    borderRadius: 10,
    fontSize: 13,
    lineHeight: "20px",
    color: "#17171a",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    margin: 0,
};

function FilterChevron() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
        >
            <path
                d="M3.5 5.25L7 8.75L10.5 5.25"
                stroke="#B4B4B4"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

type FilterDropdownProps = {
    label: string;
    options: readonly string[];
    value: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (value: string) => void;
    buttonStyle?: React.CSSProperties;
    leading?: React.ReactNode;
};

function FilterDropdown({
    label,
    options,
    value,
    open,
    onOpenChange,
    onSelect,
    buttonStyle,
    leading,
}: FilterDropdownProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dropdownRect, setDropdownRect] = useState({
        top: 0,
        left: 0,
        width: 0,
    });

    const updateDropdownRect = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setDropdownRect({
            top: rect.bottom + 6,
            left: rect.left,
            width: rect.width,
        });
    };

    useEffect(() => {
        if (!open) return;
        updateDropdownRect();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onOpenChange(false);
        };

        const onPointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                onOpenChange(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("scroll", updateDropdownRect, true);
        window.addEventListener("resize", updateDropdownRect);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("scroll", updateDropdownRect, true);
            window.removeEventListener("resize", updateDropdownRect);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open, onOpenChange]);

    return (
        <div
            ref={containerRef}
            style={{ position: "relative", lineHeight: 0 }}
        >
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={`${label} filter`}
                onClick={() => onOpenChange(!open)}
                style={{ ...filterButtonStyle, ...buttonStyle }}
            >
                {leading}
                <span
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minWidth: 0,
                    }}
                >
                    {value}
                </span>
                <span
                    style={{
                        marginLeft: "auto",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <FilterChevron />
                </span>
            </button>

            {open && (
                <div
                    role="listbox"
                    style={{
                        position: "fixed",
                        top: dropdownRect.top,
                        left: dropdownRect.left,
                        minWidth: dropdownRect.width,
                        zIndex: 30,
                        background: "#ffffff",
                        border: "1px solid #d9d9d9",
                        borderRadius: 10,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        padding: "4px 0",
                    }}
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={option === value}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                onSelect(option);
                                onOpenChange(false);
                            }}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "7px 14px",
                                border: "none",
                                background:
                                    option === value
                                        ? "#f5fbff"
                                        : "transparent",
                                cursor: "pointer",
                                fontSize: 13,
                                lineHeight: "20px",
                                color: "#17171a",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.background =
                                    "#f5fbff";
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.background =
                                    option === value
                                        ? "#f5fbff"
                                        : "transparent";
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const TABLE_STATUS_HEIGHT = 26;

const tableStatusButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 4,
    height: TABLE_STATUS_HEIGHT,
    padding: "0 8px 0 10px",
    border: "1px solid #d5e1ff",
    borderRadius: 8,
    fontSize: 11,
    lineHeight: "16.5px",
    color: "#3170ad",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
};

function StatusClockIcon({ color = "#3170AD" }: { color?: string }) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            style={{ flexShrink: 0 }}
        >
            <path
                d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 3V6L8 7"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function StatusChevron({ color = "#3170AD" }: { color?: string }) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            style={{ flexShrink: 0, marginLeft: "auto" }}
        >
            <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function getTableStatusChipStyles(value: string): {
    background: string;
    color: string;
    borderColor: string;
    iconColor: string;
} {
    if (value === "Complete") {
        return {
            background: "rgba(64, 232, 191, 0.2)",
            color: "#26957a",
            borderColor: "#26957a",
            iconColor: "#26957a",
        };
    }

    if (value === "Started" || value === "In Progress") {
        return {
            background: "rgba(0, 114, 255, 0.1)",
            color: "#3170ad",
            borderColor: "#d5e1ff",
            iconColor: "#3170AD",
        };
    }

    return {
        background: "#ffffff",
        color: "#3170ad",
        borderColor: "#d5e1ff",
        iconColor: "#3170AD",
    };
}

type TableStatusDropdownProps = {
    label: string;
    options: readonly string[];
    value: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (value: string) => void;
    width: number;
};

function TableStatusDropdown({
    label,
    options,
    value,
    open,
    onOpenChange,
    onSelect,
    width,
}: TableStatusDropdownProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dropdownRect, setDropdownRect] = useState({
        top: 0,
        left: 0,
        width: 0,
    });

    const updateDropdownRect = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setDropdownRect({
            top: rect.bottom + 4,
            left: rect.left,
            width: rect.width,
        });
    };

    useEffect(() => {
        if (!open) return;
        updateDropdownRect();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onOpenChange(false);
        };

        const onPointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                onOpenChange(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("scroll", updateDropdownRect, true);
        window.addEventListener("resize", updateDropdownRect);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("scroll", updateDropdownRect, true);
            window.removeEventListener("resize", updateDropdownRect);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open, onOpenChange]);

    const chipStyles = getTableStatusChipStyles(value);

    return (
        <div
            ref={containerRef}
            style={{ position: "relative" }}
        >
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={`${label} status`}
                onClick={() => onOpenChange(!open)}
                style={{
                    ...tableStatusButtonStyle,
                    width,
                    background: chipStyles.background,
                    color: chipStyles.color,
                    borderColor: chipStyles.borderColor,
                }}
            >
                <StatusClockIcon color={chipStyles.iconColor} />
                <span
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minWidth: 0,
                    }}
                >
                    {value}
                </span>
                <StatusChevron color={chipStyles.iconColor} />
            </button>

            {open && (
                <div
                    role="listbox"
                    style={{
                        position: "fixed",
                        top: dropdownRect.top,
                        left: dropdownRect.left,
                        minWidth: dropdownRect.width,
                        zIndex: 30,
                        background: "#ffffff",
                        border: "1px solid #d9d9d9",
                        borderRadius: 8,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        padding: "4px 0",
                    }}
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={option === value}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                onSelect(option);
                                onOpenChange(false);
                            }}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "6px 12px",
                                border: "none",
                                background:
                                    option === value
                                        ? "#f5fbff"
                                        : "transparent",
                                cursor: "pointer",
                                fontSize: 11,
                                lineHeight: "16.5px",
                                color: "#3170ad",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.background =
                                    "#f5fbff";
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.background =
                                    option === value
                                        ? "#f5fbff"
                                        : "transparent";
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function ProjectsFilterBar() {
    const [openFilterId, setOpenFilterId] = useState<ProjectFilterId | null>(
        null,
    );
    const [values, setValues] = useState<Record<ProjectFilterId, string>>(
        () =>
            Object.fromEntries(
                PROJECT_FILTERS.map((filter) => [filter.id, filter.label]),
            ) as Record<ProjectFilterId, string>,
    );

    return (
        <div
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                left: PROJECTS_SEARCH_LEFT,
                top: PROJECTS_SEARCH_TOP,
                right: 32,
                height: PROJECTS_FILTER_HEIGHT,
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingLeft: PROJECTS_SEARCH_WIDTH + 8,
                zIndex: 20,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    pointerEvents: "auto",
                }}
            >
                {PROJECT_FILTERS.map((filter) => (
                    <FilterDropdown
                        key={filter.id}
                        label={filter.label}
                        options={filter.options}
                        value={values[filter.id]}
                        open={openFilterId === filter.id}
                        onOpenChange={(open) =>
                            setOpenFilterId(open ? filter.id : null)
                        }
                        onSelect={(value) =>
                            setValues((current) => ({
                                ...current,
                                [filter.id]: value,
                            }))
                        }
                    />
                ))}
            </div>

            <button
                type="button"
                style={{
                    ...filterButtonStyle,
                    marginLeft: "auto",
                    pointerEvents: "auto",
                }}
            >
                Show Closed
            </button>

            <div
                style={{
                    display: "flex",
                    padding: 3,
                    background: "#ffffff",
                    border: "1px solid #d5e1ff",
                    borderRadius: 10,
                    pointerEvents: "auto",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        placeItems: "center",
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: "rgba(0,114,255,0.1)",
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                    >
                        <rect
                            x="2"
                            y="2"
                            width="5"
                            height="5"
                            rx="1"
                            stroke="#3170AD"
                            strokeWidth="1.33"
                        />
                        <rect
                            x="9"
                            y="2"
                            width="5"
                            height="5"
                            rx="1"
                            stroke="#3170AD"
                            strokeWidth="1.33"
                        />
                        <rect
                            x="2"
                            y="9"
                            width="5"
                            height="5"
                            rx="1"
                            stroke="#3170AD"
                            strokeWidth="1.33"
                        />
                        <rect
                            x="9"
                            y="9"
                            width="5"
                            height="5"
                            rx="1"
                            stroke="#3170AD"
                            strokeWidth="1.33"
                        />
                    </svg>
                </div>
                <div
                    style={{
                        display: "grid",
                        placeItems: "center",
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M2 4H2.00667"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                        <path
                            d="M2 8H2.00667"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                        <path
                            d="M2 12H2.00667"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5.333 4H14"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5.333 8H14"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5.333 12H14"
                            stroke="#B4B4B4"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const TRACKER_MAIN_LEFT = 256;
const TRACKER_HEADER_INSET_LEFT = 31;
const TRACKER_HEADER_INSET_TOP = 31;
const TRACKER_EDIT_BTN_OFFSET_LEFT = 816;
const TRACKER_EDIT_BTN_WIDTH = 72;
const TRACKER_HEADER_BTN_GAP = TOOLBAR_CONTROL_GAP;
const TRACKER_PROJECT_DROPDOWN_OFFSET_LEFT =
    TRACKER_EDIT_BTN_OFFSET_LEFT +
    TRACKER_EDIT_BTN_WIDTH +
    TRACKER_HEADER_BTN_GAP;

const HEADER_PROJECT_DROPDOWN_LEFT =
    TRACKER_MAIN_LEFT +
    TRACKER_HEADER_INSET_LEFT +
    TRACKER_PROJECT_DROPDOWN_OFFSET_LEFT;
const HEADER_PROJECT_DROPDOWN_TOP = 81 + TRACKER_HEADER_INSET_TOP + 14;
const HEADER_PROJECT_DROPDOWN_BUTTON_STYLE: React.CSSProperties = {
    width: 224,
    height: 40,
    fontSize: 12,
    lineHeight: "16px",
    gap: 8,
    padding: "0 12px",
};

const HEADER_PROJECT_DROPDOWN_DOT = (
    <span
        style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#956a1b",
            flexShrink: 0,
        }}
    />
);

const TRACKER_VIEW_TASKS_LEFT = 256 + 31 + 950;
const TRACKER_VIEW_TASKS_TOP = 81 + 113 + 60;
const TRACKER_VIEW_TASKS_WIDTH = 160;
const TRACKER_VIEW_TASKS_HEIGHT = 24;
const TRACKER_FILTERS_LEFT = 256 + 31;
const TRACKER_FILTERS_TOP = 81 + 266;

const TRACKER_PROJECTS = [
    "Northstar Brand Refresh",
    "Atlas Website Redesign",
    "Bluepeak Design System",
    "Internal Portal Redesign",
] as const;

const TRACKER_FILTERS = [
    {
        id: "phases",
        label: "All Phases",
        options: ["All Phases", "Starting", "MVP", "Launch"],
    },
    {
        id: "types",
        label: "All Types",
        options: ["All Types", "UX/UI Design", "Brand Strategy"],
    },
    {
        id: "statuses",
        label: "All Statuses",
        options: ["All Statuses", "Started", "Not Started", "Complete"],
    },
    {
        id: "sort",
        label: "Sort: End Date",
        options: ["Sort: End Date", "Sort: Start Date", "Sort: Due Date"],
    },
] as const;

type TrackerFilterId = (typeof TRACKER_FILTERS)[number]["id"];
type TrackerDropdownId = TrackerFilterId | "project";

function TrackerFilterIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
        >
            <path
                d="M1.75 3.5H12.25M3.5 7H10.5M5.25 10.5H8.75"
                stroke="#242429"
                strokeWidth="1.17"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const secondaryToolbarButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 16px",
    borderRadius: 10,
    fontSize: 13,
    lineHeight: "20px",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    whiteSpace: "nowrap",
    cursor: "pointer",
    background: "#ffffff",
    border: "1px solid #d5e1ff",
};

function FiltersToggleButton({
    active,
    onToggle,
    style,
}: {
    active: boolean;
    onToggle: () => void;
    style?: React.CSSProperties;
}) {
    return (
        <button
            type="button"
            aria-pressed={active}
            aria-label="Toggle filters"
            onClick={onToggle}
            style={{
                ...secondaryToolbarButtonStyle,
                color: active ? "#3170ad" : "#17171a",
                ...style,
            }}
        >
            <TrackerFilterIcon />
            Filters
        </button>
    );
}

function ProjectsTrackerDropdowns() {
    const [openId, setOpenId] = useState<TrackerDropdownId | null>(null);
    const [project, setProject] = useState<string>(TRACKER_PROJECTS[0]);
    const [filterValues, setFilterValues] = useState<
        Record<TrackerFilterId, string>
    >(
        () =>
            Object.fromEntries(
                TRACKER_FILTERS.map((filter) => [filter.id, filter.label]),
            ) as Record<TrackerFilterId, string>,
    );

    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 13,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: HEADER_PROJECT_DROPDOWN_LEFT,
                    top: HEADER_PROJECT_DROPDOWN_TOP,
                    pointerEvents: "auto",
                }}
            >
                <FilterDropdown
                    label="Project"
                    options={TRACKER_PROJECTS}
                    value={project}
                    open={openId === "project"}
                    onOpenChange={(open) => setOpenId(open ? "project" : null)}
                    onSelect={setProject}
                    buttonStyle={HEADER_PROJECT_DROPDOWN_BUTTON_STYLE}
                    leading={HEADER_PROJECT_DROPDOWN_DOT}
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    left: TRACKER_FILTERS_LEFT,
                    top: TRACKER_FILTERS_TOP,
                    display: "flex",
                    alignItems: "center",
                    gap: TRACKER_HEADER_BTN_GAP,
                    pointerEvents: "auto",
                }}
            >
                {TRACKER_FILTERS.map((filter) => (
                    <FilterDropdown
                        key={filter.id}
                        label={filter.label}
                        options={filter.options}
                        value={filterValues[filter.id]}
                        open={openId === filter.id}
                        onOpenChange={(open) =>
                            setOpenId(open ? filter.id : null)
                        }
                        onSelect={(value) =>
                            setFilterValues((current) => ({
                                ...current,
                                [filter.id]: value,
                            }))
                        }
                        leading={
                            filter.id === "phases" ? (
                                <TrackerFilterIcon />
                            ) : undefined
                        }
                        buttonStyle={
                            filter.id === "phases"
                                ? { gap: 10, paddingLeft: 10 }
                                : undefined
                        }
                    />
                ))}
            </div>
        </div>
    );
}

function ProjectsTrackerViewTasksLink({
    onNavigate,
}: {
    onNavigate: () => void;
}) {
    return (
        <button
            type="button"
            aria-label="View Activity Tracker"
            onClick={(event) => {
                event.stopPropagation();
                onNavigate();
            }}
            style={{
                position: "absolute",
                left: TRACKER_VIEW_TASKS_LEFT,
                top: TRACKER_VIEW_TASKS_TOP,
                width: TRACKER_VIEW_TASKS_WIDTH,
                height: TRACKER_VIEW_TASKS_HEIGHT,
                zIndex: 14,
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: 0,
            }}
        />
    );
}

const TRACKER_TABLE_LEFT = TRACKER_MAIN_LEFT + 31;
const TRACKER_TABLE_BODY_TOP = 81 + 319 + 39;
const TRACKER_TABLE_STATUS_LEFT = TRACKER_TABLE_LEFT + 1037;
const TRACKER_TABLE_STATUS_WIDTH = 118.72;
const TRACKER_TABLE_STATUS_TOP_OFFSET = 12;

const TRACKER_TABLE_STATUS_OPTIONS = [
    "Not Started",
    "Started",
    "Complete",
] as const;

const PROJECTS_TRACKER_STATUS_ROWS = [
    { id: "pt-row-0", rowTop: 50, initial: "Started" },
    { id: "pt-row-1", rowTop: 350, initial: "Not Started" },
    { id: "pt-row-2", rowTop: 100, initial: "Not Started" },
    { id: "pt-row-3", rowTop: 400, initial: "Not Started" },
    { id: "pt-row-4", rowTop: 150, initial: "Not Started" },
    { id: "pt-row-5", rowTop: 200, initial: "Not Started" },
    { id: "pt-row-6", rowTop: 250, initial: "Not Started" },
    { id: "pt-project-0", rowTop: -1, initial: "Started", statusTopOffset: 13 },
    {
        id: "pt-project-1",
        rowTop: 299,
        initial: "Started",
        statusTopOffset: 13,
    },
] as const;

type ProjectsTrackerStatusRowId =
    (typeof PROJECTS_TRACKER_STATUS_ROWS)[number]["id"];

function ProjectsTrackerStatusDropdowns() {
    const [openId, setOpenId] = useState<ProjectsTrackerStatusRowId | null>(
        null,
    );
    const [values, setValues] = useState<
        Record<ProjectsTrackerStatusRowId, string>
    >(
        () =>
            Object.fromEntries(
                PROJECTS_TRACKER_STATUS_ROWS.map((row) => [
                    row.id,
                    row.initial,
                ]),
            ) as Record<ProjectsTrackerStatusRowId, string>,
    );

    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 13,
                pointerEvents: "none",
            }}
        >
            {PROJECTS_TRACKER_STATUS_ROWS.map((row) => (
                <div
                    key={row.id}
                    style={{
                        position: "absolute",
                        left: TRACKER_TABLE_STATUS_LEFT,
                        top:
                            TRACKER_TABLE_BODY_TOP +
                            row.rowTop +
                            ("statusTopOffset" in row
                                ? row.statusTopOffset
                                : TRACKER_TABLE_STATUS_TOP_OFFSET),
                        pointerEvents: "auto",
                    }}
                >
                    <TableStatusDropdown
                        label={`Task ${row.id}`}
                        options={TRACKER_TABLE_STATUS_OPTIONS}
                        value={values[row.id]}
                        open={openId === row.id}
                        onOpenChange={(open) => setOpenId(open ? row.id : null)}
                        onSelect={(value) =>
                            setValues((current) => ({
                                ...current,
                                [row.id]: value,
                            }))
                        }
                        width={TRACKER_TABLE_STATUS_WIDTH}
                    />
                </div>
            ))}
        </div>
    );
}

const TASKS_MAIN_WIDTH = 1185;
const TASKS_FILTERS_TOP = 81 + 264;
const TASKS_FILTERS_CONTAINER_LEFT = 256 + 32;
const TASKS_FILTERS_CONTAINER_WIDTH = TASKS_MAIN_WIDTH - 64;
const TASKS_VIEW_PROJECTS_LEFT = 256 + 32 + 935;
const TASKS_VIEW_PROJECTS_TOP = 81 + 113 + 60;
const TASKS_VIEW_PROJECTS_WIDTH = 187;
const TASKS_VIEW_PROJECTS_HEIGHT = 24;

const TASKS_FILTERS = [
    {
        id: "statuses",
        label: "All Statuses",
        options: ["All Statuses", "Not Started", "In Progress", "Complete"],
    },
    {
        id: "assignees",
        label: "All Assignees",
        options: [
            "All Assignees",
            "Alex Morgan",
            "Jesse Li",
            "Sarah Chen",
            "Unassigned",
        ],
    },
] as const;

type TasksFilterId = (typeof TASKS_FILTERS)[number]["id"];
type TasksDropdownId = TasksFilterId | "project";

function TasksTrackerDropdowns() {
    const [openId, setOpenId] = useState<TasksDropdownId | null>(null);
    const [project, setProject] = useState<string>(TRACKER_PROJECTS[0]);
    const [filterValues, setFilterValues] = useState<
        Record<TasksFilterId, string>
    >(
        () =>
            Object.fromEntries(
                TASKS_FILTERS.map((filter) => [filter.id, filter.label]),
            ) as Record<TasksFilterId, string>,
    );

    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 13,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: HEADER_PROJECT_DROPDOWN_LEFT,
                    top: HEADER_PROJECT_DROPDOWN_TOP,
                    pointerEvents: "auto",
                }}
            >
                <FilterDropdown
                    label="Project"
                    options={TRACKER_PROJECTS}
                    value={project}
                    open={openId === "project"}
                    onOpenChange={(open) => setOpenId(open ? "project" : null)}
                    onSelect={setProject}
                    buttonStyle={HEADER_PROJECT_DROPDOWN_BUTTON_STYLE}
                    leading={HEADER_PROJECT_DROPDOWN_DOT}
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    left: TASKS_FILTERS_CONTAINER_LEFT,
                    top: TASKS_FILTERS_TOP,
                    width: TASKS_FILTERS_CONTAINER_WIDTH,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 8,
                    pointerEvents: "auto",
                }}
            >
                {TASKS_FILTERS.map((filter) => (
                    <FilterDropdown
                        key={filter.id}
                        label={filter.label}
                        options={filter.options}
                        value={filterValues[filter.id]}
                        open={openId === filter.id}
                        onOpenChange={(open) =>
                            setOpenId(open ? filter.id : null)
                        }
                        onSelect={(value) =>
                            setFilterValues((current) => ({
                                ...current,
                                [filter.id]: value,
                            }))
                        }
                        leading={
                            filter.id === "statuses" ? (
                                <TrackerFilterIcon />
                            ) : undefined
                        }
                        buttonStyle={
                            filter.id === "statuses"
                                ? { gap: 10, paddingLeft: 10 }
                                : undefined
                        }
                    />
                ))}
            </div>
        </div>
    );
}

function TasksTrackerViewProjectsLink({
    onNavigate,
}: {
    onNavigate: () => void;
}) {
    return (
        <button
            type="button"
            aria-label="View Deliverable Tracker"
            onClick={(event) => {
                event.stopPropagation();
                onNavigate();
            }}
            style={{
                position: "absolute",
                left: TASKS_VIEW_PROJECTS_LEFT,
                top: TASKS_VIEW_PROJECTS_TOP,
                width: TASKS_VIEW_PROJECTS_WIDTH,
                height: TASKS_VIEW_PROJECTS_HEIGHT,
                zIndex: 14,
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: 0,
            }}
        />
    );
}

const TASKS_TABLE_STATUS_LEFT = TRACKER_MAIN_LEFT + 31 + 469;
const TASKS_TABLE_STATUS_WIDTH = 120.72;
const TASKS_TABLE_STATUS_TOP_OFFSET = 11;

const TASKS_TABLE_STATUS_OPTIONS = [
    "Not Started",
    "In Progress",
    "Complete",
] as const;

const TASKS_TRACKER_STATUS_ROWS = [
    { id: "tt-row-0", rowTop: 412, initial: "Started" },
    { id: "tt-row-1", rowTop: 461, initial: "Not Started" },
    { id: "tt-row-2", rowTop: 510, initial: "Not Started" },
    { id: "tt-row-3", rowTop: 670, initial: "Not Started" },
    { id: "tt-row-4", rowTop: 719, initial: "Not Started" },
    { id: "tt-row-5", rowTop: 817, initial: "Not Started" },
    { id: "tt-row-6", rowTop: 768, initial: "Not Started" },
    { id: "tt-row-7", rowTop: 866, initial: "Not Started" },
] as const;

type TasksTrackerStatusRowId = (typeof TASKS_TRACKER_STATUS_ROWS)[number]["id"];

function TasksTrackerStatusDropdowns() {
    const [openId, setOpenId] = useState<TasksTrackerStatusRowId | null>(null);
    const [values, setValues] = useState<
        Record<TasksTrackerStatusRowId, string>
    >(
        () =>
            Object.fromEntries(
                TASKS_TRACKER_STATUS_ROWS.map((row) => [row.id, row.initial]),
            ) as Record<TasksTrackerStatusRowId, string>,
    );

    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 13,
                pointerEvents: "none",
            }}
        >
            {TASKS_TRACKER_STATUS_ROWS.map((row) => (
                <div
                    key={row.id}
                    style={{
                        position: "absolute",
                        left: TASKS_TABLE_STATUS_LEFT,
                        top: 81 + row.rowTop + TASKS_TABLE_STATUS_TOP_OFFSET,
                        pointerEvents: "auto",
                    }}
                >
                    <TableStatusDropdown
                        label={`Task ${row.id}`}
                        options={TASKS_TABLE_STATUS_OPTIONS}
                        value={values[row.id]}
                        open={openId === row.id}
                        onOpenChange={(open) => setOpenId(open ? row.id : null)}
                        onSelect={(value) =>
                            setValues((current) => ({
                                ...current,
                                [row.id]: value,
                            }))
                        }
                        width={TASKS_TABLE_STATUS_WIDTH}
                    />
                </div>
            ))}
        </div>
    );
}

function TimelineChartProjectDropdown() {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState<string>(TRACKER_PROJECTS[0]);

    return (
        <div
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                left: HEADER_PROJECT_DROPDOWN_LEFT,
                top: HEADER_PROJECT_DROPDOWN_TOP,
                zIndex: 13,
                pointerEvents: "auto",
            }}
        >
            <FilterDropdown
                label="Project"
                options={TRACKER_PROJECTS}
                value={project}
                open={open}
                onOpenChange={setOpen}
                onSelect={setProject}
                buttonStyle={HEADER_PROJECT_DROPDOWN_BUTTON_STYLE}
                leading={HEADER_PROJECT_DROPDOWN_DOT}
            />
        </div>
    );
}

const TEMPLATES_TAB_LEFT = NAV_LEFT + 33;
const TEMPLATES_TAB_TOP = 81 + 122;
const TEMPLATES_TAB_WIDTH = 602;
const TEMPLATES_TAB_HEIGHT = 46;

type TemplatesTabId = "wbs" | "onboarding" | "offboarding";

const TEMPLATE_TABS: readonly {
    id: TemplatesTabId;
    label: string;
    left: number;
}[] = [
    { id: "wbs", label: "WBS Templates", left: 4 },
    { id: "onboarding", label: "Project Onboarding Templates", left: 142 },
    { id: "offboarding", label: "Project Offboarding Templates", left: 371 },
];

type CalendarViewMode = "daily" | "weekly" | "monthly";

const CALENDAR_VIEW_MODES: { id: CalendarViewMode; label: string }[] = [
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
];

const CALENDAR_ROLE_OPTIONS = [
    "All Roles",
    "Designer",
    "Developer",
    "PM",
] as const;
const CALENDAR_PROJECT_OPTIONS = [
    "All Projects",
    "Northstar Rebrand",
    "Atlas Mobile App",
] as const;
const CALENDAR_SORT_OPTIONS = [
    "Name A–Z",
    "Name Z–A",
    "Utilization High–Low",
    "Utilization Low–High",
] as const;
const CALENDAR_FILTER_CONTROL_HEIGHT = PROJECTS_FILTER_HEIGHT;
const RESOURCES_FILTER_FIELD_GAP = 4;
const RESOURCES_FILTER_LABEL_HEIGHT = 10;
const RESOURCES_FILTER_FIELD_BLOCK_HEIGHT =
    RESOURCES_FILTER_LABEL_HEIGHT +
    RESOURCES_FILTER_FIELD_GAP +
    CALENDAR_FILTER_CONTROL_HEIGHT;

const calendarFilterFieldLabelStyle: React.CSSProperties = {
    fontSize: 10,
    lineHeight: "10px",
    height: 10,
    color: "#737373",
    fontFamily: "Inter, sans-serif",
    margin: 0,
    padding: 0,
    display: "block",
};

const resourcesFilterFieldColumnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: RESOURCES_FILTER_FIELD_GAP,
    flex: "0 0 148px",
};

const resourcesFilterBarOuterStyle: React.CSSProperties = {
    height: MEMBERS_CALENDAR_FILTER_PANEL_HEIGHT,
    paddingTop: MEMBERS_CALENDAR_FILTER_PANEL_PADDING_Y,
    paddingBottom: MEMBERS_CALENDAR_FILTER_PANEL_PADDING_Y,
    paddingLeft: 16,
    paddingRight: 16,
    background: MEMBERS_CALENDAR_FILTER_PANEL_BG,
    borderRadius: 16,
    boxSizing: "border-box",
};

const resourcesFilterBarInnerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    gap: 12,
    height: MEMBERS_CALENDAR_FILTER_PANEL_CONTENT_HEIGHT,
    minHeight: MEMBERS_CALENDAR_FILTER_PANEL_CONTENT_HEIGHT,
    maxHeight: MEMBERS_CALENDAR_FILTER_PANEL_CONTENT_HEIGHT,
};

const resourcesFilterCountStyle: React.CSSProperties = {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginLeft: "auto",
    height: CALENDAR_FILTER_CONTROL_HEIGHT,
    fontSize: 12,
    lineHeight: `${CALENDAR_FILTER_CONTROL_HEIGHT}px`,
    color: "#9ca3af",
    fontFamily: "Inter, sans-serif",
    whiteSpace: "nowrap",
};

const calendarFilterDropdownButtonStyle: React.CSSProperties = {
    ...filterButtonStyle,
    width: "100%",
};

const UTILIZATION_LEGEND = [
    { label: "Free (0%)", bg: "#e7e7e7", color: "#4f4f4f" },
    { label: "Low (1–49%)", bg: "#cdfce1", color: "#006133" },
    { label: "Mid (50–79%)", bg: "#c4eeff", color: "#0049a1" },
    { label: "High (80–99%)", bg: "#ffe4a2", color: "#814400" },
    { label: "Conflict (>8h/day)", bg: "#ffd7d0", color: "#ad0000" },
    { label: "Time Off", bg: "#ede5ff", color: "#5803cf" },
    { label: "Weekend/Holiday", bg: "#d3d3d3", color: "#000000" },
] as const;

function CalendarIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
        >
            <path
                d="M5.33333 1.33333V4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
            <path
                d="M10.6667 1.33333V4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
            <path
                d="M2 2.66667H14C14.7364 2.66667 15.3333 3.26362 15.3333 4V13.3333C15.3333 14.0697 14.7364 14.6667 14 14.6667H2C1.26362 14.6667 0.666667 14.0697 0.666667 13.3333V4C0.666667 3.26362 1.26362 2.66667 2 2.66667Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
            <path
                d="M2 6.66667H14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
        </svg>
    );
}

function PlusIcon({ color = "#F5FBFF" }: { color?: string }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
        >
            <path
                d="M3.33333 8H12.6667"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
            <path
                d="M8 3.33333V12.6667"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
        </svg>
    );
}

function ResourcesCountIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
        >
            <path
                d="M9.33333 12.8333V11.6667C9.33333 10.5616 8.60876 9.625 7.66667 9.625H3.5C2.55791 9.625 1.83333 10.5616 1.83333 11.6667V12.8333"
                stroke="#9ca3af"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.58333 6.41667C6.73392 6.41667 7.66667 5.48392 7.66667 4.33333C7.66667 3.18275 6.73392 2.25 5.58333 2.25C4.43275 2.25 3.5 3.18275 3.5 4.33333C3.5 5.48392 4.43275 6.41667 5.58333 6.41667Z"
                stroke="#9ca3af"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.1667 12.8333V11.6667C12.1662 10.7228 11.4979 9.91479 10.5 9.69167"
                stroke="#9ca3af"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.75 2.31667C9.75328 2.53605 10.4258 3.34802 10.4258 4.29583C10.4258 5.24365 9.75328 6.05562 8.75 6.275"
                stroke="#9ca3af"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ResourcesFilterBar({
    showSearch = true,
    resourcesShown = 10,
}: {
    showSearch?: boolean;
    resourcesShown?: number;
}) {
    const [openId, setOpenId] = useState<"role" | "project" | "sort" | null>(
        null,
    );
    const [role, setRole] = useState<string>(CALENDAR_ROLE_OPTIONS[0]);
    const [project, setProject] = useState<string>(CALENDAR_PROJECT_OPTIONS[0]);
    const [sort, setSort] = useState<string>(CALENDAR_SORT_OPTIONS[0]);

    return (
        <div style={resourcesFilterBarOuterStyle}>
            <div style={resourcesFilterBarInnerStyle}>
                {showSearch && (
                    <div
                        style={{
                            ...resourcesFilterFieldColumnStyle,
                            flex: "1 1 280px",
                            minWidth: 180,
                        }}
                    >
                        <div style={calendarFilterFieldLabelStyle}>
                            Search by name / role
                        </div>
                        <SearchField
                            containerStyle={{
                                position: "relative",
                                width: "100%",
                                lineHeight: 0,
                            }}
                            width={280}
                            height={CALENDAR_FILTER_CONTROL_HEIGHT}
                            placeholder="Search..."
                            ariaLabel="Search by name or role"
                            suggestions={MEMBERS_SEARCH_SUGGESTIONS}
                            groups={["Resource"]}
                        />
                    </div>
                )}

                <div style={resourcesFilterFieldColumnStyle}>
                    <div style={calendarFilterFieldLabelStyle}>Role</div>
                    <FilterDropdown
                        label="Role"
                        options={CALENDAR_ROLE_OPTIONS}
                        value={role}
                        open={openId === "role"}
                        onOpenChange={(open) => setOpenId(open ? "role" : null)}
                        onSelect={setRole}
                        buttonStyle={calendarFilterDropdownButtonStyle}
                    />
                </div>

                <div style={resourcesFilterFieldColumnStyle}>
                    <div style={calendarFilterFieldLabelStyle}>Project</div>
                    <FilterDropdown
                        label="Project"
                        options={CALENDAR_PROJECT_OPTIONS}
                        value={project}
                        open={openId === "project"}
                        onOpenChange={(open) =>
                            setOpenId(open ? "project" : null)
                        }
                        onSelect={setProject}
                        buttonStyle={calendarFilterDropdownButtonStyle}
                    />
                </div>

                <div style={resourcesFilterFieldColumnStyle}>
                    <div style={calendarFilterFieldLabelStyle}>Sort By</div>
                    <FilterDropdown
                        label="Sort By"
                        options={CALENDAR_SORT_OPTIONS}
                        value={sort}
                        open={openId === "sort"}
                        onOpenChange={(open) => setOpenId(open ? "sort" : null)}
                        onSelect={setSort}
                        buttonStyle={calendarFilterDropdownButtonStyle}
                    />
                </div>

                <div style={resourcesFilterCountStyle}>
                    <ResourcesCountIcon />
                    {resourcesShown} resources shown
                </div>
            </div>
        </div>
    );
}

function MembersCalendarControls({
    filtersActive,
    onFiltersActiveChange,
}: {
    filtersActive: boolean;
    onFiltersActiveChange: (active: boolean) => void;
}) {
    const [viewMode, setViewMode] = useState<CalendarViewMode>("daily");

    const toolbarButtonStyle: React.CSSProperties = {
        ...secondaryToolbarButtonStyle,
    };

    return (
        <div
            aria-hidden={false}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 13,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: MEMBERS_CALENDAR_CONTENT_LEFT,
                    top: MEMBERS_CALENDAR_TOOLBAR_TOP,
                    width: MEMBERS_CALENDAR_CONTENT_WIDTH,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    gap: TOOLBAR_CONTROL_GAP,
                    pointerEvents: "auto",
                }}
            >
                <div
                    role="tablist"
                    aria-label="Calendar view"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        height: 42,
                        padding: 4,
                        background: "#ffffff",
                        border: "1px solid #d5e1ff",
                        borderRadius: 10,
                        flexShrink: 0,
                    }}
                >
                    {CALENDAR_VIEW_MODES.map((mode) => {
                        const isActive = viewMode === mode.id;
                        return (
                            <button
                                key={mode.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                data-primary-blue={isActive ? true : undefined}
                                onClick={() => setViewMode(mode.id)}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    height: 32,
                                    padding: "0 14px",
                                    border: "none",
                                    borderRadius: 8,
                                    background: isActive
                                        ? "#3170ad"
                                        : "transparent",
                                    color: isActive ? "#ffffff" : "#737373",
                                    fontSize: 13,
                                    lineHeight: "20px",
                                    fontWeight: 500,
                                    fontFamily: "Inter, sans-serif",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {mode.id === "daily" && isActive && (
                                    <CalendarIcon />
                                )}
                                {mode.label}
                            </button>
                        );
                    })}
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexShrink: 0,
                    }}
                >
                    <button
                        type="button"
                        aria-label="Previous month"
                        style={{
                            ...toolbarButtonStyle,
                            width: 30,
                            height: 30,
                            padding: 0,
                            borderRadius: 8,
                            background: "#ffffff",
                            border: "1px solid #d5e1ff",
                            color: "#3170ad",
                        }}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden
                        >
                            <path
                                d="M10 12L6 8L10 4"
                                stroke="#3170AD"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.33333"
                            />
                        </svg>
                    </button>
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 700,
                            lineHeight: "16px",
                            color: "#1c1d1f",
                            fontFamily: "Inter, sans-serif",
                            whiteSpace: "nowrap",
                            minWidth: 72,
                            textAlign: "center",
                        }}
                    >
                        May 2026
                    </span>
                    <button
                        type="button"
                        aria-label="Next month"
                        style={{
                            ...toolbarButtonStyle,
                            width: 30,
                            height: 30,
                            padding: 0,
                            borderRadius: 8,
                            background: "#ffffff",
                            border: "1px solid #d5e1ff",
                            color: "#3170ad",
                        }}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden
                        >
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="#3170AD"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.33333"
                            />
                        </svg>
                    </button>
                </div>

                <div style={{ flex: 1, minWidth: 16 }} />

                <FiltersToggleButton
                    active={filtersActive}
                    onToggle={() => onFiltersActiveChange(!filtersActive)}
                    style={{ flexShrink: 0 }}
                />

                <button
                    type="button"
                    style={{
                        ...toolbarButtonStyle,
                        color: "#17171a",
                        flexShrink: 0,
                    }}
                >
                    <PlusIcon color="#242429" />
                    Time Off
                </button>

                <button
                    type="button"
                    data-primary-blue
                    style={{
                        ...toolbarButtonStyle,
                        background: "#3170ad",
                        border: "none",
                        color: "#f5fbff",
                        flexShrink: 0,
                    }}
                >
                    <PlusIcon />
                    Add Resource to Project
                </button>
            </div>

            {filtersActive && (
                <div
                    style={{
                        position: "absolute",
                        left: MEMBERS_CALENDAR_CONTENT_LEFT,
                        top: MEMBERS_CALENDAR_FILTER_PANEL_TOP,
                        width: MEMBERS_CALENDAR_CONTENT_WIDTH,
                        pointerEvents: "auto",
                    }}
                >
                    <ResourcesFilterBar />
                </div>
            )}

            <div
                style={{
                    position: "absolute",
                    left: MEMBERS_CALENDAR_CONTENT_LEFT,
                    top: filtersActive
                        ? MEMBERS_CALENDAR_UTIL_TOP_WITH_FILTERS
                        : MEMBERS_CALENDAR_UTIL_TOP,
                    width: MEMBERS_CALENDAR_CONTENT_WIDTH,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    pointerEvents: "auto",
                }}
            >
                <span
                    style={{
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: "16px",
                        color: "#6e6f71",
                        fontFamily: "Inter, sans-serif",
                        whiteSpace: "nowrap",
                        marginRight: 4,
                    }}
                >
                    Utilization:
                </span>
                {UTILIZATION_LEGEND.map((item) => (
                    <span
                        key={item.label}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 24,
                            padding: "0 10px",
                            borderRadius: 10,
                            background: item.bg,
                            color: item.color,
                            fontSize: 12,
                            lineHeight: "16px",
                            fontFamily: "Inter, sans-serif",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                        }}
                    >
                        {item.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TemplatesTabBar({
    activeTab,
    onTabChange,
}: {
    activeTab: TemplatesTabId;
    onTabChange: (tab: TemplatesTabId) => void;
}) {
    return (
        <div
            data-templates-tab-bar
            role="tablist"
            aria-label="Template categories"
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "absolute",
                left: TEMPLATES_TAB_LEFT,
                top: TEMPLATES_TAB_TOP,
                width: TEMPLATES_TAB_WIDTH,
                height: TEMPLATES_TAB_HEIGHT,
                zIndex: 20,
                pointerEvents: "auto",
            }}
        >
            {TEMPLATE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        data-primary-blue={isActive ? true : undefined}
                        onClick={() => onTabChange(tab.id)}
                        style={{
                            position: "absolute",
                            top: 4,
                            left: tab.left,
                            border: "none",
                            cursor: "pointer",
                            padding: "8px 17px",
                            borderRadius: 8,
                            fontSize: 13,
                            lineHeight: "20px",
                            whiteSpace: "nowrap",
                            fontFamily: "Inter, sans-serif",
                            background: isActive ? "#3170ad" : "transparent",
                            color: isActive ? "#ffffff" : "#b4b4b4",
                            fontWeight: isActive ? 500 : 400,
                            boxShadow: isActive
                                ? "0 1px 1.5px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.1)"
                                : "none",
                        }}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}

export default function App() {
    const [page, setPage] = useState<Page>("dashboard");
    const [newProjectOpen, setNewProjectOpen] = useState(false);
    const [templatesTab, setTemplatesTab] = useState<TemplatesTabId>("wbs");
    const [membersCalendarFiltersActive, setMembersCalendarFiltersActive] =
        useState(false);
    const [membersFiltersActive, setMembersFiltersActive] = useState(false);

    useEffect(() => {
        if (page !== "projects") setNewProjectOpen(false);
    }, [page]);

    useEffect(() => {
        if (page !== "membersCalendar") setMembersCalendarFiltersActive(false);
    }, [page]);

    useEffect(() => {
        if (page !== "members") setMembersFiltersActive(false);
    }, [page]);

    const handleNavClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("[data-name='Dashboard Tab']")) {
            setPage("dashboard");
            return;
        }
        if (target.closest("[data-name='Logo & Name Container']")) {
            setPage("dashboard");
            return;
        }
        if (target.closest("[data-name='Projects']")) {
            setPage("projects");
            return;
        }
        if (target.closest("[data-name='Active Card 1']")) {
            setPage("projects");
            return;
        }
        if (target.closest("[data-name='Completed Card']")) {
            setPage("projects");
            return;
        }
        if (target.closest("[data-name='Active Card 2']")) {
            setPage("members");
            return;
        }
        if (target.closest("[data-name='Warning Card']")) {
            setPage("membersCalendar");
            return;
        }
        if (target.closest("[data-name='Dashboard All link']")) {
            setPage("projects");
            return;
        }
        if (target.closest("[data-name='Dashboard Projects link']")) {
            setPage("projects");
            return;
        }
        if (target.closest("[data-name='Dashboard Calendar link']")) {
            setPage("membersCalendar");
            return;
        }
        if (target.closest("[data-name='New Project btn']")) {
            setNewProjectOpen(true);
            return;
        }
        if (target.closest("[data-name='Templates']")) {
            setPage("templates");
            return;
        }
        if (target.closest("[data-name='Templates btn']")) {
            setPage("templates");
            return;
        }
        if (target.closest("[data-name='Projects Tracker']")) {
            setPage("projectsTracker");
            return;
        }
        if (target.closest("[data-name='View Tasks']")) {
            setPage(
                page === "tasksTracker" ? "projectsTracker" : "tasksTracker",
            );
            return;
        }
        if (target.closest("[data-name='Tasks Tracker']")) {
            setPage("tasksTracker");
            return;
        }
        if (target.closest("[data-name='Timeline Chart']")) {
            setPage("timelineChart");
            return;
        }
        if (target.closest("[data-name='Project Mobilization']")) {
            setPage("mobilization");
            return;
        }
        if (target.closest("[data-name='Project Members']")) {
            setPage("members");
            return;
        }
        if (target.closest("[data-name='Members Calendar']")) {
            setPage("membersCalendar");
            return;
        }
        if (target.closest("[data-name='Data Upload']")) {
            setPage("dataUpload");
            return;
        }
        if (target.closest("[data-name='Configuration']")) {
            setPage("settingsPMs");
            return;
        }
        if (target.closest("[data-name='Tab-Members']")) {
            setPage("settingsMembers");
            return;
        }
        if (target.closest("[data-name='Tab-PMs']")) {
            setPage("settingsPMs");
            return;
        }
    };

    const scrollWidth = SCROLL_WIDTHS[page];
    const scrollHeight =
        page === "members" && membersFiltersActive
            ? SCROLL_HEIGHTS.members + MEMBERS_FILTERS_LAYOUT_OFFSET
            : SCROLL_HEIGHTS[page];

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#f5fbff",
                overflow: "hidden",
            }}
        >
            {/* Stretchable nav backgrounds — fill extra viewport space without moving icons/search */}
            <div
                aria-hidden
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: NAV_LEFT,
                    height: NAV_TOP,
                    background: "white",
                    zIndex: 8,
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "fixed",
                    left: 0,
                    top: NAV_TOP,
                    width: NAV_LEFT,
                    bottom: 0,
                    background: "white",
                    zIndex: 8,
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "fixed",
                    left: NAV_LEFT,
                    top: 0,
                    right: 0,
                    height: NAV_TOP,
                    background: "white",
                    zIndex: 8,
                    pointerEvents: "none",
                }}
            />

            {/* Left sidebar (255px wide, full height) — fixed, clips to show nav + logo */}
            <div
                onClick={handleNavClick}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: NAV_LEFT,
                    bottom: 0,
                    overflow: "hidden",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: SCREEN_W,
                        height: SCREEN_H,
                    }}
                >
                    <ScreenComponent page={page} />
                </div>
            </div>

            {/* Top nav bar — fixed, clips to show only the top nav area */}
            <div
                onClick={handleNavClick}
                style={{
                    position: "fixed",
                    left: NAV_LEFT,
                    top: 0,
                    right: 0,
                    height: NAV_TOP,
                    overflow: "hidden",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: -NAV_LEFT,
                        width: SCREEN_W,
                        height: SCREEN_H,
                    }}
                >
                    <ScreenComponent page={page} />
                </div>
            </div>

            <NavSearch />

            {page === "projectsTracker" && (
                <div
                    onClick={handleNavClick}
                    style={{
                        position: "fixed",
                        left: NAV_LEFT,
                        top: NAV_TOP,
                        right: 0,
                        height: PROJECTS_TRACKER_FIXED_TOP_HEIGHT,
                        overflow: "hidden",
                        background: "#f5fbff",
                        zIndex: 12,
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: -NAV_TOP,
                            left: -NAV_LEFT,
                            width: SCREEN_W,
                            height: SCREEN_H,
                        }}
                    >
                        <ScreenComponent page="projectsTracker" />
                        <ProjectsTrackerDropdowns />
                        <ProjectsTrackerViewTasksLink
                            onNavigate={() => setPage("tasksTracker")}
                        />
                    </div>
                </div>
            )}

            {page === "membersCalendar" && (
                <div
                    data-members-calendar-fixed-header
                    onClick={handleNavClick}
                    style={{
                        position: "fixed",
                        left: NAV_LEFT,
                        top: NAV_TOP,
                        right: 0,
                        height: membersCalendarFiltersActive
                            ? MEMBERS_CALENDAR_FIXED_TOP_HEIGHT_WITH_FILTERS
                            : MEMBERS_CALENDAR_FIXED_TOP_HEIGHT,
                        overflow: "hidden",
                        background: "#f5fbff",
                        zIndex: 12,
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: -NAV_TOP,
                            left: -NAV_LEFT,
                            width: SCREEN_W,
                            height: SCREEN_H,
                        }}
                    >
                        <ScreenComponent page="membersCalendar" />
                        <MembersCalendarControls
                            filtersActive={membersCalendarFiltersActive}
                            onFiltersActiveChange={
                                setMembersCalendarFiltersActive
                            }
                        />
                    </div>
                </div>
            )}

            {newProjectOpen && page === "projects" && (
                <>
                    <div
                        aria-hidden
                        onClick={() => setNewProjectOpen(false)}
                        style={{
                            position: "fixed",
                            left: NAV_LEFT,
                            top: NAV_TOP,
                            width: MAIN_FRAME_WIDTH,
                            bottom: 0,
                            background: "rgba(15, 23, 42, 0.32)",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            zIndex: 25,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            left: NAV_LEFT,
                            top: NAV_TOP,
                            width: MAIN_FRAME_WIDTH,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 24,
                            boxSizing: "border-box",
                            zIndex: 26,
                            pointerEvents: "none",
                        }}
                    >
                        <div
                            style={{
                                pointerEvents: "auto",
                                width: "min(800px, calc(100% - 48px))",
                            }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <NewProjectModal
                                onClose={() => setNewProjectOpen(false)}
                            />
                        </div>
                    </div>
                </>
            )}

            {/* Fixed nav border lines — always visible regardless of scroll */}
            <div
                style={{
                    position: "fixed",
                    left: 0,
                    top: NAV_TOP,
                    right: 0,
                    height: 1,
                    background: "#d9d9d9",
                    zIndex: 15,
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "fixed",
                    left: NAV_LEFT,
                    top: 0,
                    width: 1,
                    bottom: 0,
                    background: "#d9d9d9",
                    zIndex: 15,
                    pointerEvents: "none",
                }}
            />

            {/* Main content area — scrollable, component shifted so main aligns to scroll origin */}
            <div
                data-scroll-content
                data-members-calendar-filters-active={
                    page === "membersCalendar" && membersCalendarFiltersActive
                        ? ""
                        : undefined
                }
                data-members-filters-active={
                    page === "members" && membersFiltersActive ? "" : undefined
                }
                onClick={handleNavClick}
                style={{
                    position: "fixed",
                    left: NAV_LEFT,
                    top: NAV_TOP,
                    right: 0,
                    bottom: 0,
                    overflow: "auto",
                    zIndex: 5,
                    ["--members-calendar-data-table-top" as string]: `${MEMBERS_CALENDAR_DATA_TABLE_TOP_WITH_FILTERS}px`,
                    ["--members-filters-layout-offset" as string]: `${MEMBERS_FILTERS_LAYOUT_OFFSET}px`,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: scrollWidth,
                        height: scrollHeight,
                        minWidth: "100%",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: -NAV_TOP,
                            left: -NAV_LEFT,
                            width: SCREEN_W,
                            height: SCREEN_H,
                        }}
                    >
                        <ScreenComponent page={page} />
                        {page === "projects" && (
                            <>
                                <ProjectsSearch />
                                <ProjectsFilterBar />
                            </>
                        )}
                        {(page === "settingsPMs" ||
                            page === "settingsMembers") && (
                            <>
                                <div
                                    onClick={() => setPage("settingsPMs")}
                                    style={{
                                        position: "absolute",
                                        left: 297,
                                        top: 203,
                                        width: 545,
                                        height: 46,
                                        cursor: "pointer",
                                        zIndex: 20,
                                    }}
                                />
                                <div
                                    onClick={() => setPage("settingsMembers")}
                                    style={{
                                        position: "absolute",
                                        left: 854,
                                        top: 203,
                                        width: 545,
                                        height: 46,
                                        cursor: "pointer",
                                        zIndex: 20,
                                    }}
                                />
                            </>
                        )}
                        {page === "tasksTracker" && (
                            <>
                                <TasksTrackerDropdowns />
                                <TasksTrackerViewProjectsLink
                                    onNavigate={() =>
                                        setPage("projectsTracker")
                                    }
                                />
                                <TasksTrackerStatusDropdowns />
                            </>
                        )}
                        {page === "projectsTracker" && (
                            <ProjectsTrackerStatusDropdowns />
                        )}
                        {page === "timelineChart" && (
                            <TimelineChartProjectDropdown />
                        )}
                        {page === "mobilization" && <MobilizationSearch />}
                        {page === "members" && (
                            <MembersToolbar
                                filtersActive={membersFiltersActive}
                                onFiltersActiveChange={setMembersFiltersActive}
                            />
                        )}
                        {page === "templates" && (
                            <TemplatesTabBar
                                activeTab={templatesTab}
                                onTabChange={setTemplatesTab}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
