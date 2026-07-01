import React, { useState, useEffect, useRef } from "react";
import { S } from "../components/sigis-tokens";
import { Display, Eyebrow, RedCTA, SigisHeart } from "../components/demo-brand";
import { useBreakpoint } from "../hooks/use-mobile";

const MARQUEE =
  "BONUSCLUB ◆ QR-SCAN ◆ PRÄMIEN ◆ ONLINE-BESTELLUNG ◆ ADMIN-DASHBOARD ◆ iOS ◆ ANDROID ◆ ";

const CHART_BARS = [38, 62, 48, 75, 58, 88, 52, 70, 82, 91, 66, 85];

const PRODUCTS = [
  { name: "Sauerteig-Brot", price: "4,80 €", cat: "Brot", img: "/images/bread-hero.jpg" },
  { name: "Roggen-Mischbrot", price: "3,90 €", cat: "Brot", img: "/images/bread-tradition.jpg" },
  { name: "Dinkelweizen", price: "4,20 €", cat: "Brot", img: "/images/bread-tray.jpg" },
  { name: "Brezel", price: "1,10 €", cat: "Gebäck", img: "/images/brot-der-woche.jpg" },
  { name: "Croissant", price: "1,80 €", cat: "Gebäck", img: "/images/bread-tray.jpg" },
  { name: "Nusszopf", price: "2,40 €", cat: "Feingebäck", img: "/images/bread-tradition.jpg" },
];

const BROWSER_PRODUCTS = [
  ...PRODUCTS,
  { name: "Vollkornbrot", price: "4,40 €", cat: "Brot", img: "/images/bread-hero.jpg" },
  { name: "Laugenbrezel", price: "1,20 €", cat: "Gebäck", img: "/images/brot-der-woche.jpg" },
  { name: "Zimtschnecke", price: "2,20 €", cat: "Feingebäck", img: "/images/bread-tradition.jpg" },
];

// ── Phone: Loyalty screen ────────────────────────────────────────────────────
function PhoneLoyalty() {
  return (
    <div
      style={{
        width: 254,
        height: 548,
        display: "flex",
        flexDirection: "column",
        borderRadius: 44,
        border: `2.5px solid #2A2A2A`,
        backgroundColor: "#0A0A0A",
        boxShadow: `0 32px 80px rgba(0,0,0,0.35), -8px 8px 0 ${S.yellow}`,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 46, backgroundColor: "#f0eee9", flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 16, paddingRight: 14, paddingTop: 8 }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 90, height: 24, backgroundColor: "#0A0A0A", borderRadius: 12, zIndex: 10 }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: "#1A1A1A", zIndex: 11 }}>9:41</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#1A1A1A", zIndex: 11 }}>▐▐▐ ▊</span>
      </div>

      {/* Screen — flex 1, clipped */}
      <div style={{ flex: 1, backgroundColor: "#f0eee9", overflow: "hidden" }}>
        {/* Greeting */}
        <div style={{ padding: "10px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, letterSpacing: 2, color: "#7A7A78", marginBottom: 1 }}>GUTEN TAG</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A" }}>Anna</p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: S.yellow, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={S.dark} strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
        </div>
        {/* Balance */}
        <div style={{ margin: "4px 12px", backgroundColor: "#FAFAF8", borderRadius: 12, padding: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: S.yellow, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <SigisHeart size={20} color={S.red} />
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, letterSpacing: 2, color: "#7A7A78", marginBottom: 1 }}>IHR STAND</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: "#1A1A1A", lineHeight: 1 }}>180</span>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: "#1A1A1A" }}> HERZEN</span>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: S.red, borderRadius: 3, padding: "2px 6px" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 7, letterSpacing: 1.5, color: "#FFF" }}>BONUSCLUB</span>
          </div>
        </div>
        {/* Prämien header */}
        <div style={{ padding: "10px 14px 6px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: "#1A1A1A" }}>PRÄMIEN</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#7A7A78" }}>1 verfügbar</span>
        </div>
        {[
          { name: "KAFFEE", cost: 40, progress: 1, img: "/images/praemie-kaffee.jpg" },
          { name: "BROT DES MONATS", cost: 120, progress: 0.5, img: "/images/bread-hero.jpg" },
          { name: "GEBÄCK-KORB", cost: 200, progress: 0.2, img: "/images/praemie-gebaeck.jpg" },
        ].map((p) => (
          <div key={p.name} style={{ margin: "0 12px 7px", backgroundColor: "#FAFAF8", borderRadius: 9, padding: "9px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <img src={p.img} alt={p.name} style={{ width: 38, height: 38, borderRadius: 7, objectFit: "cover", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{p.name}</p>
              <div style={{ height: 3, borderRadius: 2, backgroundColor: "#E8E8E4", overflow: "hidden" }}>
                <div style={{ height: 3, width: `${p.progress * 100}%`, backgroundColor: S.red, borderRadius: 2 }} />
              </div>
            </div>
            <div style={{ backgroundColor: p.progress >= 1 ? S.red : "#EDEAE4", borderRadius: 999, padding: "5px 7px", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, color: p.progress >= 1 ? "#FFF" : "#9A9894" }}>
                {p.progress >= 1 ? "EINLÖSEN" : `${p.cost}♥`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ height: 60, backgroundColor: "#FAFAF8", borderTop: "0.5px solid #E0DDD8", display: "flex", alignItems: "center", justifyContent: "space-around", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", width: 46, height: 46, borderRadius: 23, backgroundColor: S.red, boxShadow: `0 4px 14px rgba(232,36,42,0.4), 0 0 0 3px #FAFAF8`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* top-left */}
            <path d="M2 7 L2 2 L7 2" />
            {/* top-right */}
            <path d="M13 2 L18 2 L18 7" />
            {/* bottom-left */}
            <path d="M2 13 L2 18 L7 18" />
            {/* bottom-right */}
            <path d="M13 18 L18 18 L18 13" />
            {/* scan line through middle */}
            <line x1="4" y1="10" x2="16" y2="10" strokeWidth="1.4" stroke="rgba(255,255,255,0.7)" />
          </svg>
        </div>
        {[
          { label: "Club", isHeart: true, active: true },
          { label: "Produkte", active: false },
          { isScan: true },
          { label: "Karte", active: false },
          { label: "Menü", active: false },
        ].map((tab, i) => tab.isScan ? (
          <div key="s" style={{ width: 46 }} />
        ) : (
          <div key={tab.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 36 }}>
            <div style={{ width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {tab.isHeart ? <SigisHeart size={15} color={S.red} /> :
               tab.label === "Produkte" ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A9894" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> :
               tab.label === "Karte" ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A9894" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> :
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A9894" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, color: tab.active ? S.red : "#9A9894" }}>{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Home indicator */}
      <div style={{ height: 14, backgroundColor: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <div style={{ width: 70, height: 3, backgroundColor: "#2A2A28", borderRadius: 2, opacity: 0.2 }} />
      </div>
    </div>
  );
}

// ── Phone: QR Scanner screen ─────────────────────────────────────────────────
function PhoneScanner() {
  return (
    <div
      style={{
        width: 254,
        height: 548,
        display: "flex",
        flexDirection: "column",
        borderRadius: 44,
        border: `2.5px solid rgba(255,255,255,0.18)`,
        backgroundColor: "#000",
        overflow: "hidden",
        boxShadow: `0 24px 64px rgba(0,0,0,0.5), 8px 8px 0 ${S.yellow}`,
        flexShrink: 0,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 46, backgroundColor: "#111", flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 16, paddingRight: 14, paddingTop: 8 }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 90, height: 24, backgroundColor: "#000", borderRadius: 12, zIndex: 10 }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: "#FFF", zIndex: 11 }}>9:41</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.7)", zIndex: 11 }}>▐▐▐ ▊</span>
      </div>

      {/* Camera view — flex 1 */}
      <div style={{ flex: 1, backgroundColor: "#111", position: "relative", overflow: "hidden" }}>
        {/* Top overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%", backgroundColor: "rgba(0,0,0,0.80)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, gap: 6 }}>
          <div style={{ backgroundColor: S.yellow, borderRadius: 999, padding: "3px 10px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 8, letterSpacing: 0.8, color: S.dark }}>QR SCANNEN</span>
          </div>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, color: "#FFF", letterSpacing: 0.5 }}>RECHNUNGS-QR SCANNEN</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>Kassenbon in den Rahmen halten</span>
        </div>

        {/* Middle: viewfinder */}
        <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: "46%", display: "flex", zIndex: 2 }}>
          <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.62)" }} />
          <div style={{ width: 170, position: "relative", overflow: "hidden" }}>
            {[
              { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0 },
              { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0 },
              { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0 },
              { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0 },
            ].map((c, i) => (
              <div key={i} style={{ position: "absolute", width: 22, height: 22, border: `2.5px solid ${S.yellow}`, ...c }} />
            ))}
            <div style={{ position: "absolute", left: 0, right: 0, height: 2, backgroundColor: S.red, opacity: 0.9, animation: "demo-scan 2s ease-in-out infinite" }} />
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.62)" }} />
        </div>

        {/* Bottom overlay */}
        <div style={{ position: "absolute", top: "76%", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.78)", zIndex: 2 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 4px)" }} />
      </div>

      {/* Home indicator */}
      <div style={{ height: 22, backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <div style={{ width: 70, height: 3, backgroundColor: "#444", borderRadius: 2 }} />
      </div>
    </div>
  );
}

// ── Interactive browser mockup ────────────────────────────────────────────────
type BrowserTab = "Produkte" | "Bestellen" | "Filialen" | "Club";

function InteractiveBrowser() {
  const [active, setActive] = useState<BrowserTab>("Produkte");
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navItems: BrowserTab[] = ["Produkte", "Bestellen", "Filialen", "Club"];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive(prev => navItems[(navItems.indexOf(prev) + 1) % navItems.length]);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const handleTabClick = (tab: BrowserTab) => {
    setActive(tab);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>

      <div style={{ borderRadius: 10, border: `2px solid ${S.dark}`, overflow: "hidden", boxShadow: `0 24px 64px rgba(0,0,0,0.12), 8px 8px 0 ${S.yellow}` }}>
        {/* Chrome */}
        <div style={{ backgroundColor: "#F0F0F0", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #D8D8D8" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: c }} />)}
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFF", border: "1px solid #D8D8D8", borderRadius: 6, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 9, color: "#4CAF50" }}>🔒</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#6B6B6B" }}>ihre-baeckerei.app</span>
          </div>
        </div>

        {/* Page */}
        <div style={{ backgroundColor: S.warmBg }}>
          {/* Nav */}
          <div style={{ backgroundColor: S.dark, padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 50 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: "#FFF" }}>B</span>
              </div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: "0.08em", color: "#FFF" }}>IHRE BÄCKEREI</span>
            </div>
            <div style={{ display: "flex" }}>
              {navItems.map(item => (
                <button key={item} onClick={() => handleTabClick(item)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.1em", color: active === item ? S.yellow : "rgba(255,255,255,0.55)", background: "none", border: "none", cursor: "pointer", padding: "0 12px", height: 50, borderBottom: active === item ? `2.5px solid ${S.yellow}` : "2.5px solid transparent", transition: "color 0.25s, border-color 0.25s", animation: active === item ? "demo-tab-flash 0.45s ease-out" : "none" }}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Yellow strip */}
          <div style={{ backgroundColor: S.yellow, borderTop: `1.5px solid ${S.dark}`, borderBottom: `1.5px solid ${S.dark}`, padding: "5px 18px", overflow: "hidden", whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, letterSpacing: "0.1em", color: S.dark }}>
              TÄGLICH FRISCH ◆ HANDGEMACHT ◆ OFEN AN UM 04:30 ◆ FRISCH AB 06:00 ◆ NATURSAUERTEIG
            </span>
          </div>

          {/* Content */}
          <div style={{ height: 420, overflow: "hidden" }}>
            {active === "Produkte" && (
              <div style={{ padding: "16px 20px 20px", animation: "demo-fade-in 0.25s ease-out" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.18em", color: S.red }}>◆ UNSER SORTIMENT</p>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["Alle", "Brot", "Gebäck", "Feingebäck"].map((cat, i) => (
                      <span key={cat} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 3, backgroundColor: i === 0 ? S.dark : "transparent", color: i === 0 ? "#FFF" : S.muted, border: `1px solid ${i === 0 ? S.dark : S.border}`, cursor: "pointer" }}>{cat}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {PRODUCTS.map(p => (
                    <div key={p.name} style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${S.border}`, backgroundColor: "#FAFAF8", cursor: "pointer" }}>
                      <div style={{ position: "relative" }}>
                        <img src={p.img} alt={p.name} style={{ width: "100%", height: 106, objectFit: "cover", display: "block" }} />
                        <div style={{ position: "absolute", top: 7, left: 7, backgroundColor: "rgba(26,26,26,0.72)", borderRadius: 2, padding: "2px 7px" }}>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, letterSpacing: "0.12em", color: "#FFF" }}>{p.cat.toUpperCase()}</span>
                        </div>
                      </div>
                      <div style={{ padding: "10px 12px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: S.dark, marginBottom: 2 }}>{p.name}</p>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, color: S.red }}>{p.price}</span>
                        </div>
                        <div style={{ backgroundColor: S.dark, borderRadius: 3, padding: "5px 9px", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, color: "#FFF", letterSpacing: "0.08em" }}>BESTELLEN</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === "Bestellen" && (
              <div style={{ padding: "20px 20px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, alignItems: "start", animation: "demo-fade-in 0.25s ease-out" }}>
                <div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.18em", color: S.red, marginBottom: 16 }}>◆ ONLINE VORBESTELLEN</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "Filiale wählen", value: "Mitte — Marktplatz 4" },
                      { label: "Abholdatum", value: "Morgen, 15. Juli 2025" },
                      { label: "Produkt", value: "Sauerteig-Brot × 1" },
                    ].map(f => (
                      <div key={f.label}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 600, color: S.muted, marginBottom: 4 }}>{f.label}</p>
                        <div style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 4, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: S.dark }}>{f.value}</span>
                          <span style={{ fontSize: 9, color: S.muted }}>▾</span>
                        </div>
                      </div>
                    ))}
                    <div style={{ backgroundColor: S.dark, borderRadius: 4, padding: "10px 16px", textAlign: "center", marginTop: 4 }}>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: "0.12em", color: S.yellow }}>VORBESTELLEN →</span>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 6, padding: "16px" }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.15em", color: S.muted, marginBottom: 12 }}>IHRE BESTELLUNG</p>
                  <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    <img src="/images/bread-hero.jpg" style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 4 }} />
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: S.dark }}>Sauerteig-Brot</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: S.muted }}>× 1</p>
                    </div>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: S.dark, marginLeft: "auto" }}>4,80 €</span>
                  </div>
                  <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: S.dark }}>Gesamt</span>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: S.dark }}>4,80 €</span>
                  </div>
                </div>
              </div>
            )}

            {active === "Filialen" && (
              <div style={{ padding: "16px 20px 20px", animation: "demo-fade-in 0.25s ease-out" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.18em", color: S.red, marginBottom: 14 }}>◆ UNSERE FILIALEN</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {[
                    { name: "Filiale Mitte", street: "Marktplatz 4 · 12345 Musterstadt", tag: "HAUPTFILIALE", hours: [{ d: "Mo – Fr", t: "06:00 – 18:00" }, { d: "Samstag", t: "06:00 – 14:00" }, { d: "Sonntag", t: "Geschlossen" }], img: "/images/bakery-filiale-1.jpg" },
                    { name: "Filiale Nord", street: "Hauptstraße 22 · 12347 Musterstadt", tag: null, hours: [{ d: "Mo – Fr", t: "06:00 – 17:00" }, { d: "Samstag", t: "06:00 – 13:00" }, { d: "Sonntag", t: "Geschlossen" }], img: "/images/bakery-filiale-2.jpg" },
                    { name: "Filiale West", street: "Bahnhofstr. 11 · 12346 Musterstadt", tag: null, hours: [{ d: "Mo – Fr", t: "06:30 – 17:30" }, { d: "Samstag", t: "06:30 – 13:00" }, { d: "Sonntag", t: "Geschlossen" }], img: "/images/bakery-filiale-3.jpg" },
                  ].map(f => (
                    <div key={f.name} style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 6, overflow: "hidden" }}>
                      <div style={{ position: "relative" }}>
                        <img src={f.img} alt={f.name} style={{ width: "100%", height: 150, objectFit: "cover", display: "block" }} />
                        <div style={{ position: "absolute", top: 8, right: 8, backgroundColor: "#2D9E5F", borderRadius: 2, padding: "2px 7px" }}>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, color: "#FFF" }}>OFFEN</span>
                        </div>
                        {f.tag && (
                          <div style={{ position: "absolute", top: 8, left: 8, backgroundColor: S.yellow, borderRadius: 2, padding: "2px 7px" }}>
                            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, color: S.dark }}>{f.tag}</span>
                          </div>
                        )}
                      </div>
                      <div style={{ padding: "12px 14px" }}>
                        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: S.dark, marginBottom: 2 }}>{f.name}</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.muted, marginBottom: 10 }}>{f.street}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 12 }}>
                          {f.hours.map(h => (
                            <div key={h.d} style={{ display: "flex", justifyContent: "space-between" }}>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.muted }}>{h.d}</span>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 600, color: h.t === "Geschlossen" ? "#C0392B" : S.dark }}>{h.t}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 10, display: "flex", justifyContent: "flex-end" }}>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.1em", color: S.red, cursor: "pointer" }}>ROUTE PLANEN →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === "Club" && (
              <div style={{ padding: "16px 20px 20px", animation: "demo-fade-in 0.25s ease-out" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.18em", color: S.red }}>◆ BONUSCLUB</p>
                  <div style={{ display: "flex", gap: 20 }}>
                    {[{ label: "MITGLIEDER", val: "1.287" }, { label: "HERZEN VERGEBEN", val: "42.800" }].map(s => (
                      <div key={s.label} style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 17, color: S.dark, lineHeight: 1 }}>{s.val}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: S.muted, letterSpacing: "0.1em" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div style={{ backgroundColor: S.dark, borderRadius: 6, padding: "20px", position: "relative", overflow: "hidden" }}>
                    <span style={{ position: "absolute", right: -20, top: -40, fontFamily: "'Bebas Neue', sans-serif", fontSize: 160, color: S.red, opacity: 0.12, lineHeight: 1 }}>♥</span>
                    <div style={{ position: "relative" }}>
                      <SigisHeart size={28} color={S.yellow} />
                      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "#FFF", marginTop: 8, marginBottom: 6, lineHeight: 0.88 }}>HERZEN SAMMELN.<br /><span style={{ color: S.yellow }}>BROT KRIEGEN.</span></p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 14 }}>Je €1 = 2 Herzen. App herunterladen und sofort loslegen.</p>
                      <div style={{ backgroundColor: S.red, borderRadius: 3, padding: "5px 12px", display: "inline-block" }}>
                        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: "#FFF", letterSpacing: "0.1em" }}>APP HERUNTERLADEN →</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { cost: 40, label: "Kaffee", img: "/images/praemie-kaffee.jpg", progress: 1 },
                      { cost: 80, label: "Croissant", img: "/images/bread-tray.jpg", progress: 0.85 },
                      { cost: 120, label: "Brot des Monats", img: "/images/bread-hero.jpg", progress: 0.6 },
                      { cost: 200, label: "Gebäck-Korb", img: "/images/praemie-gebaeck.jpg", progress: 0.3 },
                    ].map(r => (
                      <div key={r.label} style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 6, padding: "9px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                        <img src={r.img} alt={r.label} style={{ width: 30, height: 30, borderRadius: 5, objectFit: "cover", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: S.dark }}>{r.label}</span>
                            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                              <SigisHeart size={8} color={S.red} />
                              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: S.dark }}>{r.cost}</span>
                            </div>
                          </div>
                          <div style={{ height: 3, borderRadius: 2, backgroundColor: "#E8E8E4", overflow: "hidden" }}>
                            <div style={{ height: 3, width: `${r.progress * 100}%`, backgroundColor: r.progress >= 1 ? S.red : S.yellow, borderRadius: 2 }} />
                          </div>
                        </div>
                        {r.progress >= 1 && <div style={{ backgroundColor: S.red, borderRadius: 3, padding: "3px 7px", flexShrink: 0 }}><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, color: "#FFF" }}>EINLÖSEN</span></div>}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Live activity strip */}
                <div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, letterSpacing: "0.18em", color: S.muted, marginBottom: 7 }}>LETZTE AKTIVITÄTEN</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                    {[
                      { name: "Anna M.", action: "+12 Herzen", time: "vor 3 Min.", positive: true },
                      { name: "Max S.", action: "Kaffee eingelöst", time: "vor 8 Min.", positive: false },
                      { name: "Julia B.", action: "+8 Herzen", time: "vor 15 Min.", positive: true },
                      { name: "Tom K.", action: "+20 Herzen", time: "vor 22 Min.", positive: true },
                    ].map(a => (
                      <div key={a.name} style={{ backgroundColor: "#FAFAF8", border: `1px solid ${S.border}`, borderRadius: 5, padding: "8px 10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 }}>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: S.dark }}>{a.name}</span>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: S.muted }}>{a.time}</span>
                        </div>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 600, color: a.positive ? "#2D9E5F" : S.red }}>{a.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Interactive admin mockup ───────────────────────────────────────────────────
type AdminSection = "dashboard" | "produkte" | "bestellungen" | "mitglieder";

function InteractiveAdmin({ bars }: { bars: number[] }) {
  const [section, setSection] = useState<AdminSection>("dashboard");
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const adminSections: AdminSection[] = ["dashboard", "produkte", "bestellungen", "mitglieder"];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSection(prev => adminSections[(adminSections.indexOf(prev) + 1) % adminSections.length]);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const handleSectionClick = (s: AdminSection) => {
    setSection(s);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000);
  };

  const sidebar = [
    { section: "ÜBERSICHT", items: [{ id: "dashboard", label: "Dashboard" }, { id: "mitglieder", label: "Mitglieder" }, { id: "bestellungen", label: "Bestellungen" }] },
    { section: "KATALOG", items: [{ id: "produkte", label: "Produkte" }] },
    { section: "LOYALTY", items: [{ id: "praemien", label: "Prämien" }, { id: "aktionen", label: "Aktionen" }] },
  ] as const;

  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ borderRadius: 8, border: `2px solid ${S.dark}`, overflow: "hidden", boxShadow: `0 20px 60px rgba(0,0,0,0.12), 8px 8px 0 ${S.red}`, display: "flex", minHeight: 560 }}>
        {/* Sidebar */}
        <div style={{ width: 140, backgroundColor: S.dark, padding: "20px 0", flexShrink: 0 }}>
          <div style={{ padding: "0 16px 18px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: "#FFF" }}>B</span>
              </div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>DASHBOARD</span>
            </div>
          </div>
          <div style={{ padding: "10px 0" }}>
            {sidebar.map(group => (
              <div key={group.section} style={{ marginBottom: 8 }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, letterSpacing: "0.2em", color: S.yellow, padding: "6px 16px 4px" }}>{group.section}</p>
                {group.items.map(item => {
                  const isActive = section === item.id;
                  return (
                    <button key={item.id} onClick={() => ["dashboard","produkte","bestellungen","mitglieder"].includes(item.id) ? handleSectionClick(item.id as AdminSection) : undefined}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "6px 16px", backgroundColor: isActive ? "rgba(255,255,255,0.08)" : "transparent", borderLeft: isActive ? `2px solid ${S.red}` : "2px solid transparent", border: "none", cursor: "pointer", transition: "background 0.25s, border-color 0.25s", animation: isActive ? "demo-sidebar-flash 0.45s ease-out" : "none" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)" }}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, backgroundColor: "#F5F4F1", minWidth: 0 }}>
          {section === "dashboard" && (
            <div style={{ padding: 20, animation: "demo-fade-in 0.25s ease-out" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, letterSpacing: "0.2em", color: "#7A7A78", marginBottom: 2 }}>◆ ÜBERSICHT</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: S.dark }}>DASHBOARD</p>
                </div>
                <div style={{ backgroundColor: S.red, borderRadius: 4, padding: "5px 12px" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: "#FFF" }}>+ NEUES PRODUKT</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "MITGLIEDER", value: "1.287", delta: "+12%" },
                  { label: "HERZEN", value: "42.800", delta: "+8%" },
                  { label: "QR-SCANS", value: "890", delta: "+15%" },
                  { label: "EINLÖSUNGEN", value: "234", delta: "+6%" },
                ].map(kpi => (
                  <div key={kpi.label} style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 6, padding: "12px 14px" }}>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 8, letterSpacing: "0.15em", color: "#7A7A78", marginBottom: 4 }}>{kpi.label}</p>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: S.dark, lineHeight: 1 }}>{kpi.value}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#2D9E5F", marginTop: 3 }}>{kpi.delta} Woche</p>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 6, padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: S.dark }}>HERZEN-VERLAUF</p>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["7T","30T","3M","1J"].map((p, i) => <div key={p} style={{ padding: "2px 8px", borderRadius: 3, backgroundColor: i===1?S.red:"transparent", border: `1px solid ${i===1?S.red:S.border}` }}><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, color: i===1?"#FFF":"#7A7A78" }}>{p}</span></div>)}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
                  {bars.map((h, i) => <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end" }}><div style={{ width: "100%", height: `${h}%`, backgroundColor: i===bars.length-1?S.red:i%3===0?S.yellow:"#E8E8E4", borderRadius: "2px 2px 0 0" }} /></div>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  {["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"].map(m => <span key={m} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, color: "#7A7A78" }}>{m}</span>)}
                </div>
              </div>
            </div>
          )}

          {section === "produkte" && (
            <div style={{ padding: 20, animation: "demo-fade-in 0.25s ease-out" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: S.dark }}>PRODUKTE <span style={{ color: S.muted, fontSize: 13 }}>(18)</span></p>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ border: `1.5px solid ${S.border}`, borderRadius: 4, padding: "5px 10px" }}><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, color: S.muted }}>CSV EXPORT</span></div>
                  <div style={{ backgroundColor: S.red, borderRadius: 4, padding: "5px 10px" }}><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, color: "#FFF" }}>+ NEUES PRODUKT</span></div>
                </div>
              </div>
              <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 70px 70px 50px", padding: "8px 14px", borderBottom: `1px solid ${S.border}` }}>
                  {["", "Name", "Kategorie", "Preis", "Status", ""].map((h, i) => <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: S.muted }}>{h}</span>)}
                </div>
                {PRODUCTS.map((p, i) => (
                  <div key={p.name} style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 70px 70px 50px", padding: "8px 14px", borderBottom: i<PRODUCTS.length-1?`1px solid ${S.border}`:"none", alignItems: "center" }}>
                    <img src={p.img} style={{ width: 28, height: 28, objectFit: "cover", borderRadius: 4 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: S.dark }}>{p.name}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted }}>{p.cat}</span>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: S.dark }}>{p.price}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#2D9E5F" }}>● Aktiv</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted, cursor: "pointer" }}>✎</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section === "bestellungen" && (
            <div style={{ padding: 20, animation: "demo-fade-in 0.25s ease-out" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: S.dark, marginBottom: 16 }}>BESTELLUNGEN <span style={{ color: S.muted, fontSize: 13 }}>(23 offen)</span></p>
              <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 120px 80px 70px", padding: "8px 14px", borderBottom: `1px solid ${S.border}` }}>
                  {["Datum", "Kunde", "Produkt", "Filiale", "Status"].map(h => <span key={h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: S.muted }}>{h}</span>)}
                </div>
                {[
                  { date: "Heute 14:32", name: "Müller, A.", product: "Sauerteigbrot ×2", branch: "Mitte", status: "Offen", color: S.yellow },
                  { date: "Heute 12:11", name: "Schmidt, B.", product: "Brezel ×4", branch: "Nord", status: "Bereit", color: "#2D9E5F" },
                  { date: "Heute 10:03", name: "Wagner, K.", product: "Dinkelweizen ×1", branch: "West", status: "Abgeholt", color: S.muted },
                  { date: "Gestern 17:45", name: "Klein, M.", product: "Croissant ×3", branch: "Mitte", status: "Abgeholt", color: S.muted },
                  { date: "Gestern 16:20", name: "Bauer, L.", product: "Nusszopf ×1", branch: "Nord", status: "Offen", color: S.yellow },
                ].map((o, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 120px 80px 70px", padding: "9px 14px", borderBottom: i<4?`1px solid ${S.border}`:"none", alignItems: "center" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.muted }}>{o.date}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: S.dark }}>{o.name}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.ink }}>{o.product}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted }}>{o.branch}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: o.color }}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section === "mitglieder" && (
            <div style={{ padding: 20, animation: "demo-fade-in 0.25s ease-out" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: S.dark, marginBottom: 16 }}>MITGLIEDER <span style={{ color: S.muted, fontSize: 13 }}>(1.287)</span></p>
              <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 80px 80px", padding: "8px 14px", borderBottom: `1px solid ${S.border}` }}>
                  {["Name", "Herzen", "Einlösung", "Seit"].map(h => <span key={h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: S.muted }}>{h}</span>)}
                </div>
                {[
                  { name: "Anna M.", hearts: 180, max: 500, redeemed: 3, since: "Jun 2025" },
                  { name: "Max S.", hearts: 340, max: 500, redeemed: 7, since: "Mär 2025" },
                  { name: "Julia B.", hearts: 90, max: 500, redeemed: 1, since: "Jul 2025" },
                  { name: "Tom K.", hearts: 420, max: 500, redeemed: 12, since: "Jan 2025" },
                  { name: "Lena H.", hearts: 220, max: 500, redeemed: 5, since: "Mai 2025" },
                ].map((m, i) => (
                  <div key={m.name} style={{ display: "grid", gridTemplateColumns: "1fr 140px 80px 80px", padding: "10px 14px", borderBottom: i<4?`1px solid ${S.border}`:"none", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: S.yellow, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: S.dark }}>{m.name[0]}</span>
                      </div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: S.dark }}>{m.name}</span>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
                        <SigisHeart size={8} color={S.red} />
                        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: S.dark }}>{m.hearts}</span>
                      </div>
                      <div style={{ height: 3, borderRadius: 2, backgroundColor: "#E8E8E4", overflow: "hidden" }}>
                        <div style={{ height: 3, width: `${(m.hearts/m.max)*100}%`, backgroundColor: S.red, borderRadius: 2 }} />
                      </div>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted }}>{m.redeemed}×</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted }}>{m.since}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Mobile browser preview ───────────────────────────────────────────────────
function MobileBrowserPreview() {
  const [active, setActive] = useState<BrowserTab>("Produkte");
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navItems: BrowserTab[] = ["Produkte", "Bestellen", "Filialen", "Club"];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive(prev => navItems[(navItems.indexOf(prev) + 1) % navItems.length]);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const handleTabClick = (tab: BrowserTab) => {
    setActive(tab);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div style={{ borderRadius: 10, border: `2px solid ${S.dark}`, overflow: "hidden", boxShadow: `0 20px 48px rgba(0,0,0,0.10), 8px 8px 0 ${S.yellow}` }}>
      {/* Chrome: URL bar */}
      <div style={{ backgroundColor: "#F0F0F0", padding: "8px 12px", display: "flex", alignItems: "center", borderBottom: "1px solid #D8D8D8" }}>
        <div style={{ flex: 1, backgroundColor: "#FFF", border: "1px solid #D8D8D8", borderRadius: 6, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 9, color: "#4CAF50" }}>🔒</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#6B6B6B" }}>ihre-baeckerei.app</span>
        </div>
      </div>
      {/* Site nav */}
      <div style={{ backgroundColor: S.dark, padding: "0 14px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: "#FFF" }}>B</span>
          </div>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: "0.08em", color: "#FFF" }}>IHRE BÄCKEREI</span>
        </div>
        <div style={{ display: "flex", gap: 0 }}>
          {navItems.map(item => (
            <button key={item} onClick={() => handleTabClick(item)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.06em", color: active === item ? S.yellow : "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: "0 8px", height: 44, borderBottom: active === item ? `2px solid ${S.yellow}` : "2px solid transparent", transition: "color 0.25s, border-color 0.25s", animation: active === item ? "demo-tab-flash 0.45s ease-out" : "none" }}>
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Yellow strip */}
      <div style={{ backgroundColor: S.yellow, borderTop: `1.5px solid ${S.dark}`, borderBottom: `1.5px solid ${S.dark}`, padding: "4px 14px" }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, letterSpacing: "0.1em", color: S.dark }}>TÄGLICH FRISCH ◆ HANDGEMACHT ◆ OFEN AN UM 04:30 ◆ FRISCH AB 06:00 ◆ NATURSAUERTEIG</span>
      </div>
      {/* Content */}
      <div style={{ backgroundColor: S.warmBg, height: 360, overflow: "hidden" }}>
        {active === "Produkte" && (
          <div style={{ padding: "12px 14px", animation: "demo-fade-in 0.25s ease-out" }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: S.red, marginBottom: 10 }}>◆ UNSER SORTIMENT</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {PRODUCTS.map(p => (
                <div key={p.name} style={{ borderRadius: 5, overflow: "hidden", border: `1px solid ${S.border}`, backgroundColor: "#FAFAF8" }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: 72, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "7px 9px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: S.dark, marginBottom: 1 }}>{p.name}</p>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: S.red }}>{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {active === "Bestellen" && (
          <div style={{ padding: "12px 14px", animation: "demo-fade-in 0.25s ease-out" }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: S.red, marginBottom: 12 }}>◆ ONLINE VORBESTELLEN</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Filiale wählen", value: "Mitte — Marktplatz 4" },
                { label: "Abholdatum", value: "Morgen, 15. Juli 2025" },
                { label: "Produkt", value: "Sauerteig-Brot × 1" },
              ].map(f => (
                <div key={f.label}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 600, color: S.muted, marginBottom: 3 }}>{f.label}</p>
                  <div style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 4, padding: "7px 10px", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: S.dark }}>{f.value}</span>
                    <span style={{ fontSize: 9, color: S.muted }}>▾</span>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, alignItems: "center", backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 4, padding: "8px 10px" }}>
                <img src="/images/bread-hero.jpg" style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 3, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: S.dark }}>Sauerteig-Brot</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.muted }}>× 1 · 4,80 €</p>
                </div>
              </div>
              <div style={{ backgroundColor: S.dark, borderRadius: 4, padding: "9px 16px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.1em", color: S.yellow }}>VORBESTELLEN →</span>
              </div>
            </div>
          </div>
        )}
        {active === "Filialen" && (
          <div style={{ padding: "12px 14px", animation: "demo-fade-in 0.25s ease-out" }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: S.red, marginBottom: 10 }}>◆ UNSERE FILIALEN</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "Filiale Mitte", street: "Marktplatz 4 · 12345 Musterstadt", tag: "HAUPTFILIALE", img: "/images/bakery-filiale-1.jpg" },
                { name: "Filiale Nord", street: "Hauptstraße 22 · 12347 Musterstadt", tag: null, img: "/images/bakery-filiale-2.jpg" },
                { name: "Filiale West", street: "Bahnhofstr. 11 · 12346 Musterstadt", tag: null, img: "/images/bakery-filiale-3.jpg" },
              ].map(f => (
                <div key={f.name} style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 5, padding: "9px 10px", display: "flex", gap: 10, alignItems: "center" }}>
                  <img src={f.img} alt={f.name} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, color: S.dark }}>{f.name}</span>
                      {f.tag && <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 7, backgroundColor: S.yellow, color: S.dark, padding: "1px 5px", borderRadius: 2 }}>{f.tag}</span>}
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.muted }}>{f.street}</p>
                  </div>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: S.red, flexShrink: 0 }}>→</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {active === "Club" && (
          <div style={{ padding: "12px 14px", animation: "demo-fade-in 0.25s ease-out" }}>
            <div style={{ backgroundColor: S.dark, borderRadius: 6, padding: "14px", marginBottom: 10, position: "relative", overflow: "hidden" }}>
              <span style={{ position: "absolute", right: -12, top: -30, fontFamily: "'Bebas Neue', sans-serif", fontSize: 100, color: S.red, opacity: 0.15, lineHeight: 1 }}>♥</span>
              <SigisHeart size={20} color={S.yellow} />
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: "#FFF", marginTop: 6, marginBottom: 6, lineHeight: 0.9 }}>HERZEN SAMMELN.<br /><span style={{ color: S.yellow }}>BROT KRIEGEN.</span></p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 10 }}>Je €1 = 2 Herzen. App herunterladen und loslegen.</p>
              <div style={{ backgroundColor: S.red, borderRadius: 3, padding: "5px 10px", display: "inline-block" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, color: "#FFF", letterSpacing: "0.1em" }}>APP HERUNTERLADEN →</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { cost: 40, label: "Kaffee", img: "/images/praemie-kaffee.jpg", progress: 1 },
                { cost: 80, label: "Croissant", img: "/images/bread-tray.jpg", progress: 0.85 },
                { cost: 120, label: "Brot des Monats", img: "/images/bread-hero.jpg", progress: 0.6 },
              ].map(r => (
                <div key={r.label} style={{ backgroundColor: "#FAFAF8", border: `1.5px solid ${S.border}`, borderRadius: 5, padding: "7px 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <img src={r.img} alt={r.label} style={{ width: 26, height: 26, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: S.dark }}>{r.label}</span>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, color: S.dark }}>{r.cost}♥</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, backgroundColor: "#E8E8E4", overflow: "hidden" }}>
                      <div style={{ height: 3, width: `${r.progress * 100}%`, backgroundColor: r.progress >= 1 ? S.red : S.yellow, borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Mobile admin preview ──────────────────────────────────────────────────────
function MobileAdminPreview({ bars }: { bars: number[] }) {
  const [section, setSection] = useState<AdminSection>("dashboard");
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const adminSections: AdminSection[] = ["dashboard", "produkte", "bestellungen", "mitglieder"];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSection(prev => adminSections[(adminSections.indexOf(prev) + 1) % adminSections.length]);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const handleSectionClick = (s: AdminSection) => {
    setSection(s);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000);
  };

  const sectionLabels: Record<AdminSection, string> = { dashboard: "Dashboard", produkte: "Produkte", bestellungen: "Bestellungen", mitglieder: "Mitglieder" };

  return (
    <div style={{ borderRadius: 8, border: `2px solid ${S.dark}`, overflow: "hidden", boxShadow: `0 20px 48px rgba(0,0,0,0.10), 8px 8px 0 ${S.red}` }}>
      {/* Top bar */}
      <div style={{ backgroundColor: S.dark, padding: "0 14px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: "#FFF" }}>B</span>
          </div>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>DASHBOARD</span>
        </div>
        <div style={{ backgroundColor: S.red, borderRadius: 3, padding: "4px 9px" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 9, color: "#FFF", letterSpacing: "0.06em" }}>+ NEUES PRODUKT</span>
        </div>
      </div>
      {/* Section nav */}
      <div style={{ backgroundColor: "#ECEAE5", borderBottom: `1px solid ${S.border}`, padding: "8px 14px", display: "flex", gap: 6, flexWrap: "wrap" }}>
        {adminSections.map(s => (
          <button key={s} onClick={() => handleSectionClick(s)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, letterSpacing: "0.08em", color: section === s ? "#FFF" : S.muted, backgroundColor: section === s ? S.red : "transparent", border: `1px solid ${section === s ? S.red : S.border}`, borderRadius: 3, padding: "3px 8px", cursor: "pointer", animation: section === s ? "demo-tab-flash 0.45s ease-out" : "none" }}>
            {sectionLabels[s]}
          </button>
        ))}
      </div>
      {/* Content */}
      <div style={{ backgroundColor: "#F5F4F1", height: 340, overflow: "hidden" }}>
        {section === "dashboard" && (
          <div style={{ padding: 14, animation: "demo-fade-in 0.25s ease-out" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
              {[
                { label: "MITGLIEDER", value: "1.287", delta: "+12%" },
                { label: "HERZEN", value: "42.800", delta: "+8%" },
                { label: "QR-SCANS", value: "890", delta: "+15%" },
                { label: "EINLÖSUNGEN", value: "234", delta: "+6%" },
              ].map(kpi => (
                <div key={kpi.label} style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 5, padding: "10px 12px" }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 7, letterSpacing: "0.15em", color: "#7A7A78", marginBottom: 3 }}>{kpi.label}</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: S.dark, lineHeight: 1 }}>{kpi.value}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "#2D9E5F", marginTop: 2 }}>{kpi.delta} Woche</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 5, padding: "10px 12px" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: S.dark, marginBottom: 8 }}>HERZEN-VERLAUF</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
                {bars.map((h, i) => (
                  <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end" }}>
                    <div style={{ width: "100%", height: `${h}%`, backgroundColor: i === bars.length - 1 ? S.red : i % 3 === 0 ? S.yellow : "#E8E8E4", borderRadius: "2px 2px 0 0" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                {["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"].map(m => (
                  <span key={m} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 6, color: "#7A7A78" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        )}
        {section === "produkte" && (
          <div style={{ padding: 14, animation: "demo-fade-in 0.25s ease-out" }}>
            <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 5, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "24px 1fr 56px 44px", padding: "7px 12px", borderBottom: `1px solid ${S.border}` }}>
                {["", "Name", "Preis", "Status"].map((h, i) => <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: S.muted }}>{h}</span>)}
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} style={{ display: "grid", gridTemplateColumns: "24px 1fr 56px 44px", padding: "7px 12px", borderBottom: i < PRODUCTS.length - 1 ? `1px solid ${S.border}` : "none", alignItems: "center" }}>
                  <img src={p.img} style={{ width: 20, height: 20, objectFit: "cover", borderRadius: 3 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: S.dark }}>{p.name}</span>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: S.dark }}>{p.price}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "#2D9E5F" }}>● Aktiv</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {section === "bestellungen" && (
          <div style={{ padding: 14, animation: "demo-fade-in 0.25s ease-out" }}>
            <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 5, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 52px", padding: "7px 12px", borderBottom: `1px solid ${S.border}` }}>
                {["Kunde", "Produkt", "Status"].map(h => <span key={h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: S.muted }}>{h}</span>)}
              </div>
              {[
                { name: "Müller, A.", product: "Sauerteigbrot ×2", status: "Offen", color: S.yellow },
                { name: "Schmidt, B.", product: "Brezel ×4", status: "Bereit", color: "#2D9E5F" },
                { name: "Wagner, K.", product: "Dinkelweizen ×1", status: "Abgeholt", color: S.muted },
                { name: "Klein, M.", product: "Croissant ×3", status: "Abgeholt", color: S.muted },
                { name: "Bauer, L.", product: "Nusszopf ×1", status: "Offen", color: S.yellow },
              ].map((o, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 52px", padding: "7px 12px", borderBottom: i < 4 ? `1px solid ${S.border}` : "none", alignItems: "center" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, color: S.dark }}>{o.name}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.ink }}>{o.product}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: o.color }}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {section === "mitglieder" && (
          <div style={{ padding: 14, animation: "demo-fade-in 0.25s ease-out" }}>
            <div style={{ backgroundColor: "#FFF", border: `1.5px solid ${S.border}`, borderRadius: 5, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 96px 44px", padding: "7px 12px", borderBottom: `1px solid ${S.border}` }}>
                {["Name", "Herzen", "Seit"].map(h => <span key={h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: S.muted }}>{h}</span>)}
              </div>
              {[
                { name: "Anna M.", hearts: 180, max: 500, since: "Jun 2025" },
                { name: "Max S.", hearts: 340, max: 500, since: "Mär 2025" },
                { name: "Julia B.", hearts: 90, max: 500, since: "Jul 2025" },
                { name: "Tom K.", hearts: 420, max: 500, since: "Jan 2025" },
                { name: "Lena H.", hearts: 220, max: 500, since: "Mai 2025" },
              ].map((m, i) => (
                <div key={m.name} style={{ display: "grid", gridTemplateColumns: "1fr 96px 44px", padding: "8px 12px", borderBottom: i < 4 ? `1px solid ${S.border}` : "none", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: S.yellow, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, color: S.dark }}>{m.name[0]}</span>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, color: S.dark }}>{m.name}</span>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 2 }}>
                      <SigisHeart size={7} color={S.red} />
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, color: S.dark }}>{m.hearts}</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, backgroundColor: "#E8E8E4", overflow: "hidden" }}>
                      <div style={{ height: 3, width: `${(m.hearts / m.max) * 100}%`, backgroundColor: S.red, borderRadius: 2 }} />
                    </div>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: S.muted }}>{m.since}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export function Demo() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = isMobile ? 16 : isTablet ? 24 : 48;

  return (
    <div style={{ minHeight: "100dvh", backgroundColor: S.warmBg, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        @keyframes demo-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes demo-scan {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(216px); }
        }
        @keyframes demo-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes demo-tab-flash {
          0%   { background: rgba(255,255,255,0.22); }
          100% { background: transparent; }
        }
        @keyframes demo-sidebar-flash {
          0%   { background: rgba(255,255,255,0.28); }
          100% { background: rgba(255,255,255,0.08); }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: S.dark, color: "#FFF", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px)", pointerEvents: "none" }} />
        <span style={{ position: "absolute", right: -60, top: -80, fontFamily: "'Bebas Neue', sans-serif", fontSize: 520, color: S.red, opacity: 0.15, lineHeight: 1, letterSpacing: "-0.05em", pointerEvents: "none", userSelect: "none" }}>S</span>

        <div style={{ padding: `16px ${hPad}px`, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
          <a href="https://impecable.dev" target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#FFF", lineHeight: 1 }}>i</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: "#FFF", letterSpacing: "0.02em" }}>Impecable</span>
          </a>
          <a href="mailto:info@impecable.dev" style={{ textDecoration: "none", backgroundColor: S.yellow, fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: "0.2em", color: S.dark, padding: "5px 14px", borderRadius: 3 }}>◆ KONTAKT AUFNEHMEN</a>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? `48px ${hPad}px 64px` : isTablet ? `56px ${hPad}px 72px` : `72px ${hPad}px 96px`, display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1.05fr 1fr", gap: isTablet ? 48 : 64, alignItems: "center", position: "relative" }}>
          <div>
            <Eyebrow color={S.yellow} style={{ marginBottom: 24 }}>◆ FÜR HANDWERKSBÄCKER</Eyebrow>
            <Display size={isMobile ? 52 : isTablet ? 80 : 108} color="#FFFFFF" style={{ lineHeight: 0.86, marginBottom: 28 }}>
              IHRE BÄCKEREI VERDIENT MEHR <span style={{ color: S.yellow }}>STAMMKUNDEN.</span>
            </Display>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 490, marginBottom: 40 }}>
              Wir bauen Ihnen die digitale Plattform dafür — Bonusclub-App, Webauftritt und Bestellsystem. Maßgeschneidert für Ihre Bäckerei, alles aus einer Hand.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["BONUSCLUB-APP", "QR-SCAN-SYSTEM", "WEB-PLATTFORM", "iOS + ANDROID"].map(chip => (
                <span key={chip} style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 3, padding: "7px 14px", fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: "0.16em", color: S.yellow }}>{chip}</span>
              ))}
            </div>
          </div>
          {!isTablet && (
            <div style={{ position: "relative" }}>
              <img src="/images/bread-hero.jpg" alt="Handwerksbäckerei" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 6, border: `6px solid ${S.yellow}`, boxShadow: `12px 12px 0 rgba(232,36,42,0.9)`, display: "block" }} />
              <div style={{ position: "absolute", bottom: 22, left: 22, right: 22, backgroundColor: S.yellow, border: `2px solid ${S.dark}`, borderRadius: 4, padding: "12px 16px", transform: "rotate(-1.5deg)" }}>
                <Eyebrow color={S.red} style={{ marginBottom: 4 }}>◆ DIGITALE PLATTFORM</Eyebrow>
                <Display size={30} color={S.dark} style={{ lineHeight: 0.92 }}>APP. WEB. ADMIN.</Display>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: S.yellow, borderTop: `2px solid ${S.dark}`, borderBottom: `2px solid ${S.dark}`, overflow: "hidden", whiteSpace: "nowrap", padding: "12px 0" }}>
        <div style={{ display: "inline-block", animation: "demo-marquee 32s linear infinite" }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 14 : 20, letterSpacing: "0.12em", color: S.dark, marginRight: 32 }}>{MARQUEE}</span>
          ))}
        </div>
      </div>

      {/* ── WEBAUFTRITT — interactive ───────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? 48 : 72}px ${hPad}px`, backgroundColor: S.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 36 }}>
            <Eyebrow color={S.red} style={{ marginBottom: 12 }}>◆ WEB-AUFTRITT</Eyebrow>
            <Display size={isMobile ? 52 : 72} style={{ lineHeight: 0.88 }}>RUND UM DIE UHR GEFUNDEN.</Display>
          </div>
          {isMobile ? <MobileBrowserPreview /> : <InteractiveBrowser />}
        </div>
      </section>

      {/* ── BONUSCLUB-APP ──────────────────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? 56 : 80}px ${hPad}px`, backgroundColor: S.red, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 10px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>

          {/* Header row: headline left, description right */}
          <div style={{ display: "flex", flexDirection: isTablet ? "column" : "row", alignItems: isTablet ? "flex-start" : "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52 }}>
            <div>
              <Eyebrow color={S.yellow} style={{ marginBottom: 14 }}>◆ BONUSCLUB · APP</Eyebrow>
              <Display size={isMobile ? 52 : 80} color="#FFFFFF" style={{ lineHeight: 0.88, whiteSpace: isMobile ? "normal" : "nowrap" }}>
                KUNDEN DIE <span style={{ color: S.yellow }}>WIEDERKOMMEN.</span>
              </Display>
            </div>
          </div>

          {/* Three-column: [loyalty phone] [steps] [scanner phone] */}
          {!isMobile ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 200px 1fr", gap: 24, alignItems: "stretch" }}>
              {/* Left: label + loyalty phone */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <SigisHeart size={14} color={S.yellow} />
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: "0.1em", color: "#FFF" }}>BONUSCLUB-KARTE</p>
                </div>
                <PhoneLoyalty />
              </div>

              {/* Middle: 4 steps centered vertically */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", justifyContent: "center" }}>
                {[
                  { n: "01", title: "PLUG & PLAY", desc: "Läuft direkt über Ihren Kassenbon. Sofort einsatzbereit." },
                  { n: "02", title: "VOLLAUTOMATISCH", desc: "Kunden scannen selbst. Ihr Team tut nichts extra." },
                  { n: "03", title: "ECHTZEITDATEN", desc: "Jeden Scan sofort im Dashboard sehen." },
                  { n: "04", title: "STAMMKUNDEN", desc: "Aus Einmalkäufern werden treue Gäste." },
                ].map(step => (
                  <div key={step.n} style={{ textAlign: "center", width: "100%" }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: S.yellow, letterSpacing: "0.15em", marginBottom: 4 }}>{step.n}</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#FFF", letterSpacing: "0.08em", marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.45 }}>{step.desc}</div>
                  </div>
                ))}
              </div>

              {/* Right: label + scanner phone */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 14, height: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ border: "1.5px solid rgba(255,255,255,0.8)", borderRadius: 1 }} />)}
                  </div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: "0.1em", color: "#FFF" }}>QR-SCANNER</p>
                </div>
                <PhoneScanner />
              </div>
            </div>
          ) : (
            /* Mobile: stacked */
            <div style={{ display: "flex", flexDirection: "column", gap: 48, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: "0.1em", color: "#FFF", marginBottom: 16 }}>BONUSCLUB-KARTE</p>
                <PhoneLoyalty />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 300 }}>
                {[
                  { n: "01", title: "PLUG & PLAY", desc: "Läuft direkt über Ihren Kassenbon. Sofort einsatzbereit." },
                  { n: "02", title: "VOLLAUTOMATISCH", desc: "Kunden scannen selbst. Ihr Team tut nichts extra." },
                  { n: "03", title: "ECHTZEITDATEN", desc: "Jeden Scan sofort im Dashboard sehen." },
                  { n: "04", title: "STAMMKUNDEN", desc: "Aus Einmalkäufern werden treue Gäste." },
                ].map(step => (
                  <div key={step.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: S.yellow, flexShrink: 0, width: 28 }}>{step.n}</span>
                    <div>
                      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, color: "#FFF", marginBottom: 2 }}>{step.title}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: "0.1em", color: "#FFF", marginBottom: 16 }}>QR-SCANNER</p>
                <PhoneScanner />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── ADMIN DASHBOARD ────────────────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? 56 : 80}px ${hPad}px`, backgroundColor: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 36 }}>
            <Eyebrow color={S.red} style={{ marginBottom: 12 }}>◆ DEIN DASHBOARD</Eyebrow>
            <Display size={isMobile ? 52 : 72} style={{ lineHeight: 0.88 }}>ALLES IM BLICK. <span style={{ color: S.red }}>ALLES UNTER KONTROLLE.</span></Display>
          </div>
          {isMobile ? <MobileAdminPreview bars={CHART_BARS} /> : <InteractiveAdmin bars={CHART_BARS} />}
        </div>
      </section>

      {/* ── WAS SIE BEKOMMEN ───────────────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? 56 : 96}px ${hPad}px`, backgroundColor: S.warmBg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color={S.red} style={{ marginBottom: 16 }}>◆ WAS SIE BEKOMMEN</Eyebrow>
          <div style={{ display: "flex", flexDirection: isTablet ? "column" : "row", justifyContent: "space-between", alignItems: isTablet ? "flex-start" : "flex-end", marginBottom: 48, gap: 16 }}>
            <Display size={isMobile ? 52 : 80}>IHR KOMPLETTES<br /><span style={{ color: S.red }}>DIGITAL-PAKET.</span></Display>
            <p style={{ fontSize: 15, color: S.muted, maxWidth: 300, lineHeight: 1.65, textAlign: isTablet ? "left" : "right" }}>
              Alles, was Ihre Bäckerei digital braucht — fertig eingerichtet, sofort bereit, vollständig Ihrer Marke angepasst.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 2, border: `2px solid ${S.dark}`, borderRadius: 4, overflow: "hidden" }}>
            {[
              { num: "01", tag: "WEB-AUFTRITT", headline: "IHRE BÄCKEREI IM WEB.", desc: "Produktkatalog, Online-Vorbestellung, Filialinfos, Karriere — Ihr kompletter Webauftritt.", items: ["Produktkatalog mit Filtern", "Online-Vorbestellung", "Filialseiten mit Öffnungszeiten", "Karriere & Impressum"], color: "#6B4423" },
              { num: "02", tag: "BONUSCLUB-APP", headline: "DIE APP FÜR IHRE KUNDEN.", desc: "Eigene iOS & Android App. Herzen sammeln, Prämien einlösen, QR-Scan am Kassenbon.", items: ["iOS + Android App", "Herzen je Einkauf", "Prämien einlösen", "QR-Scan am Kassenbon"], color: S.red },
              { num: "03", tag: "ADMIN-DASHBOARD", headline: "ALLES IM GRIFF.", desc: "Produkte verwalten, Bestellungen bearbeiten, Loyalitätsdaten einsehen.", items: ["Produkt-CRUD + CSV-Import", "Bestell-Management", "Loyalty-Analytics", "Prämien & Aktionen"], color: S.dark },
            ].map(pillar => (
              <div key={pillar.num} style={{ backgroundColor: "#FFFFFF", padding: 28 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: pillar.color, marginBottom: 6 }}>{pillar.num}</div>
                <div style={{ display: "inline-block", backgroundColor: pillar.color, borderRadius: 2, padding: "3px 9px", marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 10, letterSpacing: "0.15em", color: "#FFF" }}>{pillar.tag}</span>
                </div>
                <Display size={24} color={S.dark} style={{ marginBottom: 10, lineHeight: 1.05 }}>{pillar.headline}</Display>
                <p style={{ fontSize: 13, color: S.muted, lineHeight: 1.6, marginBottom: 18 }}>{pillar.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {pillar.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: pillar.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: S.ink, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? 64 : 104}px ${hPad}px`, backgroundColor: S.yellow, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 10px)", pointerEvents: "none" }} />
        <span style={{ position: "absolute", right: -80, bottom: -120, fontFamily: "'Bebas Neue', sans-serif", fontSize: 480, color: S.red, opacity: 0.12, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>S</span>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Eyebrow color={S.red} style={{ marginBottom: 20 }}>◆ JETZT LOSLEGEN</Eyebrow>
          <Display size={isMobile ? 52 : 88} color={S.dark} style={{ lineHeight: 0.88, marginBottom: 24 }}>
            BEREIT FÜR<br /><span style={{ color: S.red }}>MEHR KUNDEN?</span>
          </Display>
          <p style={{ fontSize: 17, color: S.ink, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 44px" }}>
            Wir entwickeln digitale Plattformen für Handwerksbäckereien — maßgeschneidert, vollständig, ohne Kompromisse. App, Web, Bonussystem.
          </p>
          <a href="mailto:info@impecable.dev" style={{ textDecoration: "none" }}>
            <RedCTA size="lg">KONTAKT AUFNEHMEN →</RedCTA>
          </a>
          <div style={{ marginTop: 56, paddingTop: 28, borderTop: `1px solid rgba(0,0,0,0.12)`, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="https://impecable.dev" target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: S.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#FFF", lineHeight: 1 }}>i</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 400, color: S.dark, letterSpacing: "0.02em" }}>Impecable</span>
            </a>
            <span style={{ width: 1, height: 28, backgroundColor: "rgba(0,0,0,0.15)" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(26,26,26,0.55)", lineHeight: 1.6 }}>
              Eine Plattform für Handwerksbäckereien.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
