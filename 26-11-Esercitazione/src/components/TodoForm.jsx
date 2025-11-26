import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import plus from "../assets/plus.png";



export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Input
        value={text}
        onChange={setText}
        placeholder="Aggiungi una nuova task..."
        aria-label="Nuova task"
      />
      <Button type="submit" variant="primary" aria-label="Aggiungi">
        <img src={plus} 
        style={{ width: 24, height: 24 }}
        /> 
      </Button>
    </form>
  );
}
