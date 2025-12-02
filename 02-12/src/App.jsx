import React, { useMemo, useState } from "react";
import { gamesData } from "./data/mockData.js";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import GameFilters from "./components/GameFilters.jsx";
import GameList from "./components/GameList.jsx";
import GameStats from "./components/GameStats.jsx";
import { computeStats } from "./utils/statsHelpers.js";
import "./App.css";

const TABS = [
  { key: "tutti", label: "Tutti" },
  { key: "completato", label: "Completati" },
  { key: "in-corso", label: "In Corso" },
  { key: "wishlist", label: "Wishlist" },
  { key: "abbandonato", label: "Abbandonati" },
];

export default function App() {
  const [games] = useState(gamesData);
  const [activeTab, setActiveTab] = useState("tutti");
  const [filters, setFilters] = useState({
    genre: "tutti",
    platform: "tutti",
    minRating: 1,
    onlyWishlist: false,
    searchText: "",
  });

  const filteredGames = useMemo(() => {
    return games.filter((g) => {
      if (activeTab !== "tutti") {
        if (activeTab === "completato" && g.status !== "completato")
          return false;
        if (activeTab === "in-corso" && g.status !== "in-corso") return false;
        if (activeTab === "wishlist" && g.status !== "wishlist") return false;
        if (activeTab === "abbandonato" && g.status !== "abbandonato")
          return false;
      }
      if (filters.genre !== "tutti" && g.genre !== filters.genre) return false;

      if (filters.platform !== "tutti" && g.platform !== filters.platform)
        return false;

      if (Number(g.rating) < Number(filters.minRating)) return false;

      if (filters.onlyWishlist && g.status !== "wishlist") return false;

      const q = filters.searchText.trim().toLowerCase();
      if (q) {
        const match =
          g.title.toLowerCase().includes(q) ||
          g.genre.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [games, activeTab, filters]);

  const stats = useMemo(() => computeStats(games), [games]);

  return (
    <div className="container app-layout">
      <Header
        title="🎮 GameHub"
        gamertag="YourTag#001"
        total={games.length}
        searchText={filters.searchText}
        onSearch={(text) => setFilters((f) => ({ ...f, searchText: text }))}
      />
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 250px", minWidth: 240 }}>
          <GameStats stats={stats} />
          <GameFilters
            games={games}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <div style={{ flex: "3 1 720px" }}>
          <Navigation tabs={TABS} active={activeTab} onChange={setActiveTab} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ color: "var(--muted)" }}>
              Risultati: {filteredGames.length} / {games.length}
            </div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>
              Filtri applicati:{" "}
              {[
                filters.genre !== "tutti" ? filters.genre : null,
                filters.platform !== "tutti" ? filters.platform : null,
                filters.minRating > 1 ? `≥${filters.minRating}` : null,
                filters.onlyWishlist ? "wishlist" : null,
                filters.searchText ? `"${filters.searchText}"` : null,
              ]
                .filter(Boolean)
                .join(" • ") || "Nessuno"}
            </div>
          </div>

          <GameList games={filteredGames} />
        </div>
      </div>
    </div>
  );
}
