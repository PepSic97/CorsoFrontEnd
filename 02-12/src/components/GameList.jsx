import React from "react";
import "./GameList.css";

export default function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((g) => (
        <div key={g.id} className="game-card">
          {/* immagine */}
          <div className="cover-wrap">
            <img src={g.coverUrl} alt={g.title} className="game-cover" />
          </div>

          <div className="card-body">
            <h3>{g.title}</h3>
            <p>Genere: {g.genre}</p>
            <p>Piattaforma: {g.platform}</p>
            <p>Voto: {g.rating}</p>
            <p>Status: {g.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
