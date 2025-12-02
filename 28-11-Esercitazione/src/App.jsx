import React, { useState } from "react";
import LoginList from "./components/LoginList";
import ProfileCard from "./components/ProfileCard";
import Notifications from "./components/Notifications";

const FREE_USERS = [
  {
    id: 1,
    nome: "Mario Rossi",
    email: "mario.rossi@example.com",
    tipo: "free",
  },
  {
    id: 2,
    nome: "Luigi Bianchi",
    email: "luigi.bianchi@example.com",
    tipo: "free",
  },
];

const PREMIUM_USERS = [
  {
    id: 3,
    nome: "Giulia Verdi",
    email: "giulia.verdi@example.com",
    tipo: "premium",
    professione: "Designer",
  },
  {
    id: 4,
    nome: "Marco Neri",
    email: "marco.neri@example.com",
    tipo: "premium",
    professione: "Developer",
  },
];

const ALL_USERS = [...FREE_USERS, ...PREMIUM_USERS];

export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({ unread: 3, read: 0 });

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleLogin = (u) => setUser(u);
  const handleLogout = () => setUser(null);

  const markAllRead = () =>
    setNotifications((n) => ({ unread: 0, read: n.unread + n.read }));

  const markAllUnread = () =>
    setNotifications((n) => ({ unread: n.unread + n.read, read: 0 }));

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>Dashboard Utente</h1>
        <div className="header-actions">
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          {user && (
            <button className="btn danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </header>

      <main className="container">
        {!user ? (
          <section>
            <h2>Schermata Login — scegli un utente</h2>
            <LoginList users={ALL_USERS} onLogin={handleLogin} />
          </section>
        ) : (
          <section className="dashboard">
            <div className="left">
              <ProfileCard user={user} />
            </div>

            <div className="right">
              <Notifications
                unread={notifications.unread}
                read={notifications.read}
                onMarkRead={markAllRead}
                onMarkUnread={markAllUnread}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
