import React from "react";

export default function Button({ onClick, children, variant, type = "button", className = "", ...rest }) {
  const cls = `btn ${variant === "primary" ? "primary" : variant === "ghost" ? "ghost" : ""} ${className}`;
  return (
    <button {...rest} type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
