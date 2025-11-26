import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Input from "./Input";
import trash from "../assets/trash.png";
import pencil from "../assets/pencil.jpg";


function formatDate(iso) {
  try {
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `Creato il ${dd}/${mm}/${yyyy}`;
  } catch {
    return "";
  }
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdateText }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function saveEdit() {
    const trimmed = text.trim();
    if (!trimmed) {
      setText(todo.text);
    } else {
      onUpdateText(todo.id, trimmed);
    }
    setEditing(false);
  }

  return (
    <div className="todo-item" role="listitem" aria-label={`Todo ${todo.text}`}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <Checkbox checked={todo.completed} onChange={(v) => onToggle(todo.id, v)} />
      </div>

      <div className="meta">
        {!editing ? (
          <>
            <p className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</p>
            <div className="created">{formatDate(todo.createdAt)}</div>
          </>
        ) : (
          <>
            <Input
              value={text}
              onChange={setText}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit();
                if (e.key === "Escape") {
                  setText(todo.text);
                  setEditing(false);
                }
              }}
            />
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <Button variant="primary" onClick={saveEdit}>Salva</Button>
              <Button onClick={() => { setText(todo.text); setEditing(false); }}>Annulla</Button>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Button onClick={() => setEditing((s) => !s)} className="ghost" title="Modifica">
           <img src={pencil} 
           style={{ width: 24, height: 24 }}
           />
        </Button>
        <Button onClick={() => onDelete(todo.id)} className="ghost" title="Elimina">
            <img src={trash} 
            style={{ width: 24, height: 24 }}
            />
        </Button>
      </div>
    </div>
  );
}
