import React, { useState } from "react";
import { S } from "./sigis-tokens";

export function SigisHeart({ size = 20, color = S.red, style }: { size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={{ display: "inline-flex", flexShrink: 0, ...style }}>
      <path d="M16 28s-14-8.5-14-17C2 7.1 5.1 4 9 4c2.8 0 5.2 1.6 7 4 1.8-2.4 4.2-4 7-4 3.9 0 7 3.1 7 7 0 8.5-14 17-14 17z" />
    </svg>
  );
}

export function Eyebrow({ children, color = S.red, style }: { children: React.ReactNode; color?: string; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: "0.25em", color, margin: 0, ...style }}>
      {children}
    </p>
  );
}

export function Display({ children, size = 48, color = S.dark, style }: { children: React.ReactNode; size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: size, lineHeight: 0.92, letterSpacing: "0.005em", fontWeight: 400, color, ...style }}>
      {children}
    </div>
  );
}

type BtnSize = "sm" | "md" | "lg";
const BTN_SIZES: Record<BtnSize, { h: number; px: number; fs: number }> = {
  sm: { h: 38, px: 16, fs: 13 },
  md: { h: 46, px: 22, fs: 14 },
  lg: { h: 56, px: 30, fs: 16 },
};

export function RedCTA({ children, size = "md", onClick, style, type = "button", disabled }: { children: React.ReactNode; size?: BtnSize; onClick?: () => void; style?: React.CSSProperties; type?: "button" | "submit"; disabled?: boolean }) {
  const sz = BTN_SIZES[size];
  const [pressed, setPressed] = useState(false);
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} onMouseLeave={() => setPressed(false)}
      style={{ height: sz.h, paddingLeft: sz.px, paddingRight: sz.px, backgroundColor: disabled ? "#ccc" : S.red, color: "#FFFFFF", fontFamily: "'Bebas Neue', sans-serif", fontSize: sz.fs, letterSpacing: "0.14em", border: "none", borderRadius: 4, cursor: disabled ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 2px 0 rgba(0,0,0,0.12)", transform: pressed ? "translateY(1px)" : "none", transition: "transform 80ms", whiteSpace: "nowrap", ...style }}>
      {children}
    </button>
  );
}
