import { useEffect, type CSSProperties, type ReactNode } from "react";

type NewProjectModalProps = {
  onClose: () => void;
};

const ACCENT_COLORS = [
  "#438dfd",
  "#5a9fff",
  "#40e8bf",
  "#9b59b6",
  "#ffa600",
  "#ff5546",
  "#26957a",
  "#a3e635",
];

const fieldStyle: CSSProperties = {
  width: "100%",
  height: 36,
  padding: "0 12px",
  border: "1px solid #d5e1ff",
  borderRadius: 8,
  background: "#f8faff",
  color: "#17171a",
  fontSize: 13,
  lineHeight: "20px",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
};

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label
      style={{
        display: "block",
        marginBottom: 6,
        fontSize: 13,
        fontWeight: 500,
        color: "#17171a",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
      {required && <span style={{ color: "#c92a2a" }}> *</span>}
    </label>
  );
}

function FormField({
  label,
  required,
  placeholder,
  defaultValue,
  type = "text",
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        readOnly={false}
        style={fieldStyle}
      />
    </div>
  );
}

function SelectField({
  label,
  required,
  defaultValue,
  placeholder,
  indicator,
}: {
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  indicator?: ReactNode;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div style={{ position: "relative" }}>
        {indicator && (
          <div
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            {indicator}
          </div>
        )}
        <select
          defaultValue={defaultValue ?? ""}
          style={{
            ...fieldStyle,
            appearance: "none",
            paddingRight: 32,
            paddingLeft: indicator ? 28 : 12,
            color: defaultValue ? "#17171a" : "#b4b4b4",
          }}
        >
          {placeholder && !defaultValue && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
          {!defaultValue && placeholder && <option value="placeholder">{placeholder}</option>}
        </select>
        <svg
          aria-hidden
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            stroke="#B4B4B4"
            strokeWidth="1.17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function StatusDot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
      }}
    />
  );
}

export function NewProjectModal({ onClose }: NewProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-project-title"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        boxShadow: "0 24px 48px rgba(15, 23, 42, 0.18)",
        maxHeight: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ padding: "24px 28px 0", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <div>
            <h2
              id="new-project-title"
              style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#17171a", letterSpacing: "-0.3px" }}
            >
              New Project
            </h2>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#737373", lineHeight: "20px" }}>
              Set up the project details. You can review resources in the next step.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              color: "#737373",
              fontSize: 22,
              lineHeight: 1,
              cursor: "pointer",
              padding: 4,
            }}
          >
            ×
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 24,
            paddingBottom: 20,
            borderBottom: "1px solid #eef2ff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#3170ad",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 600,
                display: "grid",
                placeItems: "center",
              }}
            >
              1
            </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#3170ad" }}>Details</span>
          </div>
          <div style={{ flex: 1, height: 1, background: "#d5e1ff", maxWidth: 120 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#ececf0",
                color: "#737373",
                fontSize: 12,
                fontWeight: 600,
                display: "grid",
                placeItems: "center",
              }}
            >
              2
            </span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#737373" }}>Review Resources</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 28px", overflowY: "auto", flex: 1 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <FormField label="Project Name" required placeholder="e.g. Digital Transformation Phase 2" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FormField label="Project Code" placeholder="e.g. PRJ-001" />
            <FormField label="Client Name" placeholder="Client / company name" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <SelectField label="Project Type" required defaultValue="Development" />
            <SelectField label="Contract Type" required placeholder="Select..." />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <SelectField
              label="Project Status"
              defaultValue="Active"
              indicator={<StatusDot color="#438dfd" />}
            />
            <SelectField
              label="Contract Status"
              defaultValue="Active"
              indicator={<StatusDot color="#26957a" />}
            />
          </div>

          <SelectField label="Project Manager" required placeholder="Select a Project Manager..." />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FormField label="Start Date" placeholder="mm/dd/yyyy" />
            <FormField label="End Date" placeholder="mm/dd/yyyy" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "end" }}>
            <FormField label="Budget" placeholder="0.00" />
            <div>
              <FieldLabel>Accent Color</FieldLabel>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 4 }}>
                {ACCENT_COLORS.map((color, index) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`Accent color ${index + 1}`}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: index === 0 ? "2px solid #3170ad" : "2px solid transparent",
                      background: color,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <FieldLabel>Description</FieldLabel>
            <textarea
              placeholder="Project description..."
              rows={3}
              style={{
                ...fieldStyle,
                height: "auto",
                minHeight: 88,
                padding: "10px 12px",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <SelectField
              label="⚡ Onboarding Template"
              required
              placeholder="Select a template..."
            />
            <SelectField
              label="⚡ Offboarding Template"
              required
              placeholder="Select a template..."
            />
          </div>

          <SelectField label="WBS Template" required placeholder="Select a template..." />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
          padding: "16px 28px 24px",
          borderTop: "1px solid #eef2ff",
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            color: "#737373",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            padding: "8px 12px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          data-primary-blue
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "none",
            background: "#3170ad",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 10,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Next
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
