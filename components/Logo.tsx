import React from "react";
import Link from "next/link";

interface LogoProps {
  color?: string;
  subColor?: string;
  className?: string;
}

export default function Logo({
  color = "var(--plum-dark)",
  subColor = "var(--ink-soft)",
  className = "",
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
      {/* Sleek Minimalist Architectural Emblem */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Outer subtle alignment square */}
        <rect x="2" y="2" width="28" height="28" rx="6" stroke={color} strokeWidth="1.5" strokeOpacity="0.3" />
        {/* Precision reformer spring arch */}
        <path d="M9 22C9 14.8203 14.8203 9 22 9" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13 22C13 17.0294 17.0294 13 22 13" stroke="var(--rose-soft)" strokeWidth="1.8" strokeLinecap="round" />
        {/* Focal precision dot */}
        <circle cx="22" cy="22" r="2.5" fill={color} />
      </svg>

      {/* Brand Typography */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "1.28rem",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: color,
            fontVariationSettings: '"opsz" 72, "wght" 400',
          }}
        >
          Реформанс
        </span>
        <span
          style={{
            fontFamily: "var(--f-body)",
            fontSize: "0.64rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: subColor,
            marginTop: "3px",
          }}
        >
          Пилатес · София
        </span>
      </div>
    </Link>
  );
}
