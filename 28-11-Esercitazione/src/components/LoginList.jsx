import React from "react";

export default function LoginList({ users, onLogin }) {
  return (
    <div className="login-list">
      {users.map((u) => (
        <div key={u.id} className="login-card card">
          <div className="login-top">
            <div>
              <div className="nome">{u.nome}</div>
              <div className="email">{u.email}</div>
            </div>
            <button className="btn" onClick={() => onLogin(u)}>
              Login
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
