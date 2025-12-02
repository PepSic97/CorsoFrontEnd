import React from "react";
import "./Navigation.css";

export default function Navigation({ tabs, active, onChange }) {
  return (
    <nav className="navigation">
      {tabs.map((t) => (
        <button
          key={t.key}
          className={active === t.key ? "active" : ""}
          onClick={() => onChange(t.key)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
