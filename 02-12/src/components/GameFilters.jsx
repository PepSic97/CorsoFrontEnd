import React, { useMemo } from "react";
import "./GameFilters.css";

const GameFilters = ({ games = [], filters, setFilters }) => {
  // 🔒 Safety check
  const safeGames = Array.isArray(games) ? games : [];

  const genres = useMemo(() => {
    const unique = [...new Set(safeGames.map((g) => g.genre))];
    return ["tutti", ...unique];
  }, [safeGames]);

  const platforms = useMemo(() => {
    const unique = [...new Set(safeGames.map((g) => g.platform))];
    return ["tutti", ...unique];
  }, [safeGames]);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Filtri</h3>

      <div className="filter-row">
        <span>Genere </span>
        <select
          value={filters.genre}
          onChange={(e) => setFilters((f) => ({ ...f, genre: e.target.value }))}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <br></br>

      <div className="filter-row">
        <span>Piattaforma </span>
        <select
          value={filters.platform}
          onChange={(e) =>
            setFilters((f) => ({ ...f, platform: e.target.value }))
          }
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <br></br>
      <div className="filter-row">
        <span>Voto minimo: {filters.minRating}</span>
        <input
          type="range"
          min="1"
          max="10"
          value={filters.minRating}
          onChange={(e) =>
            setFilters((f) => ({
              ...f,
              minRating: Number(e.target.value),
            }))
          }
        />
      </div>

      <br></br>
      <div className="filter-row">
        <input
          type="checkbox"
          checked={filters.onlyWishlist}
          onChange={(e) =>
            setFilters((f) => ({
              ...f,
              onlyWishlist: e.target.checked,
            }))
          }
        />
        <span>Solo wishlist</span>
      </div>
    </div>
  );
};

export default GameFilters;
