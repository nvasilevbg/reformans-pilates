import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({
  className = "",
  height = 42,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`brand-logo-container ${className}`}
      aria-label="Реформанс Пилатес — Начало"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        userSelect: "none",
      }}
    >
      <img
        src="/images/logo.png"
        alt="Реформанс Пилатес Лого"
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          borderRadius: "var(--radius-xs)",
          filter: "drop-shadow(0 2px 4px rgba(42, 29, 36, 0.08))",
        }}
      />
    </Link>
  );
}
