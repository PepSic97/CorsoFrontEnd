import React from "react";
import "./GameStats.css";

export default function GameStats({ stats }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Statistiche Live</h3>
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-value">{stats.totalHours}</div>
          <div className="stat-label">Ore giocate</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.counts.completato || 0}</div>
          <div className="stat-label">Completati</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.counts["in-corso"] || 0}</div>
          <div className="stat-label">In Corso</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.counts.wishlist || 0}</div>
          <div className="stat-label">Wishlist</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.avgRating.toFixed(2)}</div>
          <div className="stat-label">Voto medio</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.topPlatform || "-"}</div>
          <div className="stat-label">Piattaforma più comune</div>
        </div>
      </div>
    </div>
  );
}
