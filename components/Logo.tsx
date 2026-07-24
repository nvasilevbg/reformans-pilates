import React from "react";
import Link from "next/link";

interface LogoProps {
  color?: string;
  subColor?: string;
  className?: string;
  height?: number;
}

export default function Logo({
  color = "var(--plum-dark)",
  subColor = "var(--ink-soft)",
  className = "",
  height = 42,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`brand-logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        textDecoration: "none",
        userSelect: "none",
      }}
    >
      <img
        src="/images/logo.png"
        alt="Реформанс Пилатес"
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          borderRadius: "var(--radius-xs)",
          filter: "drop-shadow(0 2px 4px rgba(42, 29, 36, 0.08))",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "1.25rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: color,
          }}
        >
          Реформанс
        </span>
        <span
          style={{
            fontFamily: "var(--f-body)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: subColor,
          }}
        >
          Пилатес · Лозенец
        </span>
      </div>
    </Link>
  );
}
