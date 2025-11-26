import React from "react";

export default function Checkbox({ checked, onChange, className = "" }) {
  return (
    <button
      aria-pressed={checked}
      onClick={() => onChange?.(!checked)}
      className={`checkbox ${className}`}
      title={checked ? "Completed" : "Mark as complete"}
    >
      {checked ? "X" : null}
    </button>
  );
}
