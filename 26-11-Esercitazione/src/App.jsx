import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterGroup from "./components/FilterGroup";
import sun from "./assets/sun.jpg";
import moon from "./assets/moon.jpg";



const STORAGE_KEY = "todo-atomic-v1";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // helpers
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((t) => [newTodo, ...t]);
  };

  const updateTodo = (id, patch) => {
    setTodos((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };

  const deleteTodo = (id) => setTodos((list) => list.filter((t) => t.id !== id));

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <div className="header">
        <div>
          <div className="title">ToDo List Avanzata</div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
            La tua nuova lista con React 
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            className="btn ghost"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title="Toggle theme"
            aria-label="toggle theme"
          >
            <img 
            src={theme === "dark" ? sun : moon} 
            alt="toggle theme icon"
            style={{ width: 24, height: 24 }}
            />
          </button>
        </div>
      </div>

      <div className="card">
        <TodoForm onAdd={addTodo} />
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <FilterGroup filter={filter} setFilter={setFilter} />
          <div style={{ color: "var(--muted)", fontWeight: 700 }}>{todos.length} totale</div>
        </div>

        <TodoList
          todos={filtered}
          onToggle={(id, completed) => updateTodo(id, { completed })}
          onDelete={deleteTodo}
          onUpdateText={(id, text) => updateTodo(id, { text })}
          remaining={remaining}
        />
      </div>
    </div>
  );
}
