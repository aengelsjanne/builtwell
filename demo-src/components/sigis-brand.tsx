import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { S } from "./sigis-tokens";
import { useBreakpoint } from "../hooks/use-mobile";
import { useAuth } from "../context/AuthContext";

// ── SigisHeart ────────────────────────────────────────────────────────────────
export function SigisHeart({
  size = 20,
  color = S.red,
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      style={{ display: "inline-flex", flexShrink: 0, ...style }}
    >
      <path d="M16 28s-14-8.5-14-17C2 7.1 5.1 4 9 4c2.8 0 5.2 1.6 7 4 1.8-2.4 4.2-4 7-4 3.9 0 7 3.1 7 7 0 8.5-14 17-14 17z" />
    </svg>
  );
}

// ── SigisWordmark ─────────────────────────────────────────────────────────────
export function SigisWordmark({
  size = 1,
  onDark = false,
}: {
  size?: number;
  onDark?: boolean;
}) {
  const s = size;
  return (
    <img
      src="/sigis-logo.png"
      alt="Sigis Backstüble"
      style={{
        height: 48 * s,
        width: "auto",
        display: "block",
      }}
    />
  );
}

// ── Eyebrow ───────────────────────────────────────────────────────────────────
export function Eyebrow({
  children,
  color = S.red,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 12,
        letterSpacing: "0.25em",
        color,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Display ───────────────────────────────────────────────────────────────────
export function Display({
  children,
  size = 48,
  color = S.dark,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: size,
        lineHeight: 0.92,
        letterSpacing: "0.005em",
        fontWeight: 400,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── RedCTA ────────────────────────────────────────────────────────────────────
type BtnSize = "sm" | "md" | "lg";

const BTN_SIZES: Record<BtnSize, { h: number; px: number; fs: number }> = {
  sm: { h: 38, px: 16, fs: 13 },
  md: { h: 46, px: 22, fs: 14 },
  lg: { h: 56, px: 30, fs: 16 },
};

export function RedCTA({
  children,
  size = "md",
  onClick,
  style,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  size?: BtnSize;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const sz = BTN_SIZES[size];
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        height: sz.h,
        paddingLeft: sz.px,
        paddingRight: sz.px,
        backgroundColor: disabled ? "#ccc" : S.red,
        color: "#FFFFFF",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: sz.fs,
        letterSpacing: "0.14em",
        border: "none",
        borderRadius: 4,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "0 2px 0 rgba(0,0,0,0.12)",
        transform: pressed ? "translateY(1px)" : "none",
        transition: "transform 80ms",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// ── OutlineBtn ────────────────────────────────────────────────────────────────
export function OutlineBtn({
  children,
  onClick,
  style,
  onDark = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  onDark?: boolean;
}) {
  const color = onDark ? "#FFFFFF" : S.dark;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        height: 46,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "transparent",
        color,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 14,
        letterSpacing: "0.14em",
        border: `1.5px solid ${color}`,
        borderRadius: 4,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// ── Placeholder ───────────────────────────────────────────────────────────────
export function Placeholder({
  label,
  bg = "#6B4423",
  accent = S.yellow,
  monogram,
  style,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  label?: string;
  bg?: string;
  accent?: string;
  monogram?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: bg,
        backgroundImage: `repeating-linear-gradient(45deg, ${accent}22 0px, ${accent}22 2px, transparent 2px, transparent 14px)`,
        ...style,
      }}
    >
      {monogram && (
        <span
          style={{
            position: "absolute",
            right: -14,
            top: -32,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 260,
            color: accent,
            opacity: 0.22,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {monogram}
        </span>
      )}
      {label && (
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontFamily: "ui-monospace, monospace",
            fontSize: 9,
            color: "rgba(255,255,255,0.75)",
            backgroundColor: "rgba(0,0,0,0.35)",
            padding: "2px 5px",
            borderRadius: 3,
            zIndex: 1,
          }}
        >
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

// ── StampCard ─────────────────────────────────────────────────────────────────
export function StampCard({
  children,
  style,
  bg = S.yellow,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  bg?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: bg,
        border: `2px solid ${S.dark}`,
        borderRadius: 10,
        padding: "16px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── SigisNav ──────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Produkte", href: "/produkte" },
  { label: "Bestellen", href: "/bestellen" },
  { label: "Filialen", href: "/filialen" },
  { label: "Karriere", href: "/karriere" },
];

export function SigisNav({ active }: { active?: string }) {
  const [location] = useLocation();
  const { isTablet } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: S.dark,
          borderBottom: `1px solid #2A2A28`,
          padding: isTablet ? "0 16px" : "0 48px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <SigisWordmark onDark />
          </Link>

          {isTablet ? (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: `1.5px solid #3A3A38`,
                borderRadius: 4,
                color: "#FFFFFF",
                cursor: "pointer",
                padding: "8px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#FFFFFF", borderRadius: 1 }} />
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#FFFFFF", borderRadius: 1 }} />
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#FFFFFF", borderRadius: 1 }} />
            </button>
          ) : (
            <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href || active === link.label.toLowerCase();
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 17,
                      letterSpacing: "0.12em",
                      color: isActive ? S.red : "#7A7A78",
                      textDecoration: "none",
                      padding: "10px 18px",
                      position: "relative",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 6,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: S.red,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              <div style={{ width: 1, height: 20, backgroundColor: "#2A2A28", margin: "0 8px" }} />
              {user ? (
                <Link
                  href="/admin"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 17,
                    letterSpacing: "0.12em",
                    color: location.startsWith("/admin") ? S.red : "#7A7A78",
                    textDecoration: "none",
                    padding: "10px 18px",
                  }}
                >
                  Mein Konto
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 17,
                    letterSpacing: "0.12em",
                    color: location === "/sign-in" ? S.red : "#7A7A78",
                    textDecoration: "none",
                    padding: "10px 18px",
                  }}
                >
                  Anmelden
                </Link>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      {isTablet && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: S.dark,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Overlay header */}
          <div
            style={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              borderBottom: `1px solid #2A2A28`,
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
              <SigisWordmark onDark />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: 28,
                lineHeight: 1,
                padding: "4px 8px",
              }}
            >
              ×
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", padding: "32px 24px", gap: 4 }}>
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href || active === link.label.toLowerCase();
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 36,
                    letterSpacing: "0.08em",
                    color: isActive ? S.red : "#FFFFFF",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: `1px solid #2A2A28`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            {user ? (
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 36,
                  letterSpacing: "0.08em",
                  color: location.startsWith("/admin") ? S.red : "#FFFFFF",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: `1px solid #2A2A28`,
                }}
              >
                Mein Konto
              </Link>
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 36,
                  letterSpacing: "0.08em",
                  color: location === "/sign-in" ? S.red : "#FFFFFF",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: `1px solid #2A2A28`,
                }}
              >
                Anmelden
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

// ── SigisFooter ───────────────────────────────────────────────────────────────
const FOOTER_COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "SORTIMENT",
    links: [
      { label: "Brot", href: "/produkte" },
      { label: "Gebäck", href: "/produkte" },
      { label: "Feingebäck", href: "/produkte" },
      { label: "Bestellformular", href: "/bestellen" },
    ],
  },
  {
    title: "HAUS",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Filialen", href: "/filialen" },
      { label: "Karriere", href: "/karriere" },
      { label: "Presse", href: "#" },
    ],
  },
  {
    title: "BONUSCLUB",
    links: [
      { label: "App laden", href: "#" },
      { label: "So funktioniert's", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export function SigisFooter() {
  const { isMobile, isTablet } = useBreakpoint();
  const { user, logout } = useAuth();
  const hPad = isMobile ? 16 : isTablet ? 24 : 48;
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1.3fr 1fr 1fr 1fr";
  const colGap = isMobile ? 20 : isTablet ? 24 : 40;

  return (
    <footer style={{ backgroundColor: S.dark, color: "#FFFFFF", padding: `56px ${hPad}px 28px` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            gap: colGap,
            paddingBottom: 40,
            borderBottom: `1px solid rgba(255,255,255,0.15)`,
          }}
        >
          {/* Brand col */}
          <div>
            <SigisWordmark onDark size={1.1} />
            <p
              style={{
                marginTop: 20,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
              }}
            >
              Zankwaldweg 6, 72275 Alpirsbach
              <br />
              Mo–Sa 06:30–11:00 (Stammhaus)
              <br />
              07444 - 2651
            </p>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.2em",
                  color: S.yellow,
                  marginBottom: 14,
                }}
              >
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: isMobile ? 12 : 0,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.1em",
          }}
        >
          <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {user ? (
              <button
                onClick={logout}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", cursor: "pointer", fontSize: 11, letterSpacing: "0.1em", padding: 0, fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                ABMELDEN
              </button>
            ) : (
              <Link href="/sign-in" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "0.1em" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                ADMIN
              </Link>
            )}
          </span>
          <span>© 1964–2026 SIGI'S BACKSTÜBLE · SCHWÄBISCH GMÜND</span>
          <span style={{ display: "flex", gap: 12 }}>
            <Link href="/impressum" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>IMPRESSUM</Link>
            <span>·</span>
            <Link href="#" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>DATENSCHUTZ</Link>
            <span>·</span>
            <Link href="#" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>AGB</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ── FormField ─────────────────────────────────────────────────────────────────
export function FormField({
  label,
  value,
  onChange,
  type = "text",
  error,
  options,
  placeholder,
  rows,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "email" | "date" | "select" | "textarea";
  error?: string;
  options?: string[];
  placeholder?: string;
  rows?: number;
}) {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 3,
    border: `1.5px solid ${error ? S.red : S.border}`,
    backgroundColor: S.softBg,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: S.dark,
    outline: "none",
    boxSizing: "border-box",
    resize: type === "textarea" ? "vertical" : undefined,
  };

  return (
    <div>
      <label
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: S.dark,
          display: "block",
          marginBottom: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        >
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows ?? 4}
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
      {error && (
        <p style={{ marginTop: 4, fontSize: 11, color: S.red }}>{error}</p>
      )}
    </div>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 20 }}>
      <Display size={32} color={S.red}>
        {n}
      </Display>
      <Display size={28} color={S.dark}>
        {title}
      </Display>
    </div>
  );
}

