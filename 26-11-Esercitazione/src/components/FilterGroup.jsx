import React from "react";
import Button from "./Button";


export default function FilterGroup({ filter, setFilter }) {
  const buttons = [
    { key: "all", label: "Tutti" },
    { key: "active", label: "Non completati" },
    { key: "completed", label: "Completati" },
  ];

  return (
    <div className="filter-group" role="tablist" aria-label="Filtri ToDo">
      {buttons.map((b) => (
        <Button
          key={b.key}
          variant={filter === b.key ? "primary" : undefined}
          onClick={() => setFilter(b.key)}
        >
          {b.label}
        </Button>
      ))}
    </div>
  );
}
