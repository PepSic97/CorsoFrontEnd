import React from "react";

export default function Notifications({
  unread,
  read,
  onMarkRead,
  onMarkUnread,
}) {
  return (
    <div className="card">
      <h3>Notifiche</h3>

      <p>
        <strong>Non lette:</strong> {unread}
      </p>

      <p>
        <strong>Lette:</strong> {read}
      </p>

      <div className="notif-buttons">
        <button className="btn success" onClick={onMarkRead}>
          Segna come lette
        </button>

        <button className="btn warn" onClick={onMarkUnread}>
          Segna come non lette
        </button>
      </div>
    </div>
  );
}
