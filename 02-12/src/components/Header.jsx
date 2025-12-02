import React from "react";
import "./Header.css";

export default function Header({
  title,
  gamertag,
  total,
  searchText,
  onSearch,
}) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        <p className="gamertag">{gamertag}</p>
        <p className="total">Giochi totali: {total}</p>
      </div>

      <input
        type="text"
        placeholder="Cerca giochi..."
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}
