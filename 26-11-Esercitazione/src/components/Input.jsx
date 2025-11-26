import React from "react";
export default function Input({ value, onChange, placeholder = "", onKeyDown, className = "", ...rest }) {
  return (
    <input
      className={`input ${className}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
}
