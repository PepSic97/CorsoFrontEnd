import React, { useState } from "react";
import "./GameCard.css";

function ratingColor(r) {
  if (r >= 8.5) return blue;
  if (r >= 6) return yellow;
  return red;
}

function statusBadge(status) {
  switch (status) {
    case "completato":
      return { label: "Completato", color: blue };
    case "in-corso":
      return { label: "In Corso", color: yellow };
    case "wishlist":
      return { label: "Wishlist", color: green };
    case "abbandonato":
      return { label: "Abbandonato", color: gray };
    default:
      return { label: status, color: gray };
  }
}

export default function GameCard({ game }) {
  const [open, setOpen] = useState(false);
  const badge = statusBadge(game.status);

  return (
    <div className="game-card" onClick={() => setOpen((o) => !o)}>
      <div className="cover-wrap">
        <img src={game.coverUrl} alt={game.title} className="game-cover" />
        <div
          className="rating"
          style={{ borderColor: ratingColor(game.rating) }}
        >
          {game.rating}
        </div>
        <div className="status-badge" style={{ background: badge.color }}>
          {badge.label}
        </div>
      </div>

      <div className="card-body">
        <h4 style={{ margin: "8px 0" }}>{game.title}</h4>
        <div className="small-muted">
          {game.genre} • {game.platform}
        </div>

        {open && (
          <div className="extra">
            <div>
              Anno: {game.year} • Prezzo: €{Number(game.price).toFixed(2)}
            </div>
            <div>
              Ore: {game.hoursPlayed} • Difficoltà: {game.difficulty}
            </div>
            <div style={{ marginTop: 8 }} className="small-muted">
              Stato: {badge.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
