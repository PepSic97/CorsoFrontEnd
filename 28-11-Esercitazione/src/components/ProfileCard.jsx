import React from "react";

export default function ProfileCard({ user }) {
  return (
    <div className="profile card">
      <div className="profile-top">
        <div className="avatar">
          {user.nome
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div>
          <div className="profile-name">{user.nome}</div>
          <div className="profile-email">{user.email}</div>
        </div>

        {user.tipo === "premium" && <div className="premium">★</div>}
      </div>

      <div className="profile-body">
        <p>
          <strong>Tipo:</strong> {user.tipo}
        </p>

        {user.tipo === "premium" && (
          <p>
            <strong>Professione:</strong> {user.professione}
          </p>
        )}
      </div>
    </div>
  );
}
