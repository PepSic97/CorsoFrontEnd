import React from "react";
import TodoItem from "./TodoItem";


export default function TodoList({ todos, onToggle, onDelete, onUpdateText, remaining }) {
  return (
    <div style={{ marginTop: 12 }}>
      <div role="list" aria-label="Lista ToDo">
        {todos.length === 0 ? (
          <div style={{ padding: 16, color: "var(--muted)" }}>Nessun task</div>
        ) : (
          todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdateText={onUpdateText}
            />
          ))
        )}
      </div>

      <div className="footer">
        <div>{remaining > 0 ? `Task rimanenti: ${remaining}` : "Tutti i task completati"}</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>{todos.length > 0 ? `Presenti in lista: ${todos.length}` : ``}</div>
      </div>
    </div>
  );
}
