/* ============================================================
   AFTERHOURS landing — interactions
   Scroll reveals, in-view counters, feature micro-animations, and the single
   source of truth for the contact email. Everything degrades gracefully with
   prefers-reduced-motion.
   ============================================================ */

/* ---- Contact: change this one line to update every CTA on the page. ---- */
const CONTACT_EMAIL = "info@impecable.dev";
const MAIL_SUBJECT = "AFTERHOURS — walkthrough for my venue";
const MAIL_BODY =
  "Hi — I run a venue and I'd like to see how AFTERHOURS would work for us.\n\nVenue:\nCity:\nRough capacity:\n\nThanks!";

const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  MAIL_SUBJECT
)}&body=${encodeURIComponent(MAIL_BODY)}`;

document.querySelectorAll("a.cta-mail").forEach((a) => {
  // Plain-email links (the footer/CTA line) show the address; buttons get the prefilled draft.
  a.href = a.textContent.trim().includes("@") ? `mailto:${CONTACT_EMAIL}` : mailHref;
});

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Nav: solidify on scroll ---- */
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---- Count-up for [data-count] ---- */
function countUp(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  if (reduce) {
    el.textContent = target.toLocaleString();
    return;
  }
  const dur = 1100;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    el.textContent = Math.round(target * eased).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---- Reduced motion: reveal everything up-front, no observers ---- */
if (reduce) {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
  document.querySelectorAll("[data-anim]").forEach((el) => el.classList.add("run"));
  document.querySelectorAll("[data-count]").forEach(countUp);
} else {
  /* Stagger siblings that reveal together for a gentle cascade. */
  const groups = new Map();
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    const arr = groups.get(el.parentElement) || [];
    el.style.transitionDelay = `${arr.length * 80}ms`;
    arr.push(el);
    groups.set(el.parentElement, arr);
  });

  const revealObs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => revealObs.observe(el));

  /* Feature micro-animations + counters: fire when the visual is well in view. */
  const animObs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("run");
        e.target.querySelectorAll("[data-count]").forEach(countUp);
        obs.unobserve(e.target);
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll("[data-anim]").forEach((el) => animObs.observe(el));

  /* Any counters not inside an animated mock (none today, but safe). */
  const looseCounters = [...document.querySelectorAll("[data-count]")].filter(
    (el) => !el.closest("[data-anim]")
  );
  if (looseCounters.length) {
    const cObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          countUp(e.target);
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.6 }
    );
    looseCounters.forEach((el) => cObs.observe(el));
  }
}

/* ---- Shared sticky-pin scrubber. A tall .zone pins its .sticky child; this maps
        scroll progress through that runway → 0..1, eases it with a rAF loop, and calls
        apply(eased) so the caller can drive whatever animation it wants. Used by both the
        Getting-Started timeline and the section-2 convergence scene. ---- */
const desktopMQ = () => window.matchMedia("(min-width: 801px)").matches;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
// easeInOutCubic on the raw progress
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function makePinnedScrubber(zone, apply, ease = easeInOut, isActive = desktopMQ) {
  let target = 0;
  let current = 0;
  let rafId = null;

  function rawProgress() {
    // Document-relative top (rect + scrollY), NOT offsetTop — the section is
    // position:relative so offsetTop would be ~0 (wrong origin).
    const docTop = zone.getBoundingClientRect().top + window.scrollY;
    const denom = zone.offsetHeight - window.innerHeight;
    return clamp01((window.scrollY - docTop) / (denom || 1));
  }

  function loop() {
    current += (target - current) * 0.14; // ease current toward target
    apply(ease(current));
    if (Math.abs(target - current) > 0.0005) {
      rafId = requestAnimationFrame(loop);
    } else {
      current = target;
      apply(ease(current));
      rafId = null;
    }
  }

  function onScrollP() {
    if (reduce || !isActive()) return;
    target = rawProgress();
    if (rafId == null) rafId = requestAnimationFrame(loop);
  }

  window.addEventListener("scroll", onScrollP, { passive: true });
  window.addEventListener("resize", onScrollP, { passive: true });

  // Init: set current = target so the first paint matches the scroll position.
  if (!reduce && isActive()) {
    target = current = rawProgress();
    apply(ease(current));
  }
}

/* ---- Getting-Started: scroll progress fills the 1→2→3 line fuller and fuller. ---- */
(function setupTimeline() {
  const zone = document.querySelector(".process .zone");
  const nodes = [...document.querySelectorAll(".journey .jnode")];
  const fills = [...document.querySelectorAll(".journey .jfill")];
  if (!zone || nodes.length === 0) return;

  // On small screens / reduced motion the section is a static stack — show it complete.
  if (reduce || !desktopMQ()) {
    nodes.forEach((n) => n.classList.add("lit"));
    fills.forEach((f) => (f.style.width = "100%"));
  }

  // Hold zones: the eased 0→1 runs through fill-1 → linger → fill-2 → linger,
  // so each step gets a moment to read before the next fills.
  function apply(e) {
    const seg1 = clamp01((e - 0.08) / 0.30); // fills over 0.08→0.38
    const seg2 = clamp01((e - 0.58) / 0.30); // fills over 0.58→0.88 (0.38→0.58 = hold)
    if (fills[0]) fills[0].style.width = (seg1 * 100).toFixed(1) + "%";
    if (fills[1]) fills[1].style.width = (seg2 * 100).toFixed(1) + "%";
    if (nodes[0]) nodes[0].classList.toggle("lit", e > 0.02);
    if (nodes[1]) nodes[1].classList.toggle("lit", seg1 > 0.92);
    if (nodes[2]) nodes[2].classList.toggle("lit", seg2 > 0.92);
  }

  makePinnedScrubber(zone, apply);
})();

/* ---- Section 2 convergence: the two product surfaces (guest phone + staff dashboard)
        assemble in the center first, then the six capabilities fly in from outside and wire
        into them — "we built the full system." Connector lines draw on as each docks. ---- */
(function setupConstellation() {
  // The scene needs room for the two device previews, so it runs a little wider than the
  // timeline; below this it's replaced by the static two-card block (matches the CSS query).
  const wideMQ = () => window.matchMedia("(min-width: 961px)").matches;

  const zone = document.querySelector(".conv-zone");
  const stage = document.querySelector(".constellation");
  if (!zone || !stage) return;

  const cluster = stage.querySelector(".cluster");
  const phone = stage.querySelector(".phone");
  const dash = stage.querySelector(".dash");
  const nodes = [...stage.querySelectorAll(".cnode")];
  const lines = [...stage.querySelectorAll(".conv-lines line")];
  // pathLength=1 makes stroke-dasharray/offset:1 mean "fully hidden" until a line draws on,
  // regardless of its real length or its (not-yet-measured) coordinates.
  lines.forEach((l) => l.setAttribute("pathLength", "1"));
  const hl = document.querySelector(".conv-hl");
  const sub = document.querySelector(".conv-sub");
  const lineForNode = (i) => lines.find((l) => l.dataset.i === String(i));

  const CORE_X = 50; // cluster centre, in viewBox units (0..100 / 0..60)
  const CORE_Y = 30;
  const SCATTER = 200; // px each node starts away from its docked spot
  const VBH = 60; // viewBox height — top% maps to this, so scale node Y by 100/60

  // Place each node at its docked %-coord; precompute its outward unit vector so it flies
  // straight in from the periphery toward the product cluster as progress rises.
  function place(el) {
    const x = +el.dataset.x;
    const y = +el.dataset.y;
    el.style.left = x + "%";
    el.style.top = (y / VBH) * 100 + "%";
    const dx = x - CORE_X;
    const dy = y - CORE_Y;
    const len = Math.hypot(dx, dy) || 1;
    el._ux = dx / len;
    el._uy = dy / len;
  }
  nodes.forEach(place);

  // Each connector runs from a node to the NEAREST edge of the nearer device (phone or
  // dashboard) — so lines plug into a real product surface instead of all crossing at the
  // centre. Recomputed lazily once the cluster has settled, and on resize.
  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
  let linesReady = false;
  function computeLines() {
    const sr = stage.getBoundingClientRect();
    const pr = phone.getBoundingClientRect();
    const dr = dash.getBoundingClientRect();
    if (!sr.width || !pr.width) return;
    const W = sr.width;
    const H = sr.height;
    const boxes = [pr, dr].map((r) => ({
      left: r.left - sr.left, right: r.right - sr.left,
      top: r.top - sr.top, bottom: r.bottom - sr.top,
    }));
    for (let i = 0; i < nodes.length; i++) {
      const mx = (+nodes[i].dataset.x / 100) * W;
      const my = (+nodes[i].dataset.y / VBH) * H;
      // closest attach point on whichever device is nearer
      let best = null;
      for (const b of boxes) {
        const ax = clamp(mx, b.left, b.right);
        const ay = clamp(my, b.top, b.bottom);
        const d = Math.hypot(mx - ax, my - ay);
        if (!best || d < best.d) best = { ax, ay, d };
      }
      const ln = lineForNode(i);
      if (!ln) continue;
      ln.setAttribute("x1", ((best.ax / W) * 100).toFixed(2));
      ln.setAttribute("y1", ((best.ay / H) * VBH).toFixed(2));
      ln.setAttribute("x2", ((mx / W) * 100).toFixed(2));
      ln.setAttribute("y2", ((my / H) * VBH).toFixed(2));
      ln.setAttribute("pathLength", "1");
    }
    linesReady = true;
  }
  window.addEventListener("resize", () => { linesReady = false; }, { passive: true });

  // p: 0 = scattered/faint, 1 = docked/solid.
  function dock(el, p) {
    const ox = ((1 - p) * el._ux * SCATTER).toFixed(1);
    const oy = ((1 - p) * el._uy * SCATTER).toFixed(1);
    el.style.opacity = (0.1 + 0.9 * p).toFixed(3);
    el.style.transform = `translate(-50%, -50%) translate(${ox}px, ${oy}px) scale(${(0.66 + 0.34 * p).toFixed(3)})`;
  }

  function apply(e) {
    // 1) the product cluster assembles first (fade + settle) over the first stretch.
    const cp = clamp01(e / 0.2);
    if (cluster) {
      cluster.style.opacity = cp.toFixed(3);
      cluster.style.transform = `translate(-50%, -50%) scale(${(0.9 + 0.1 * cp).toFixed(3)})`;
    }
    // Once the cluster is settled at full size, measure the connector attach points.
    if (!linesReady && cp >= 1) computeLines();
    // 2) the six capabilities wire in on staggered windows, one after another.
    for (let i = 0; i < nodes.length; i++) {
      const p = clamp01((e - (0.2 + i * 0.095)) / 0.26);
      dock(nodes[i], p);
      nodes[i].classList.toggle("lit", p > 0.96);
      const ln = lineForNode(i);
      if (ln) ln.style.strokeDashoffset = (1 - p).toFixed(3);
    }
    // 3) resolve the headline + subline once the system is fully connected.
    if (hl) hl.classList.toggle("lit", e > 0.9);
    if (sub) sub.classList.toggle("show", e > 0.92);
  }

  // Reduced motion / narrow: CSS hides the scene, but paint a complete state defensively.
  if (reduce || !wideMQ()) {
    apply(1);
    return;
  }

  // Linear (not eased) so the scene tracks the scroll 1:1 — it should respond the moment
  // the user starts scrolling, not sit dead through a flat ease-in.
  makePinnedScrubber(zone, apply, (t) => t, wideMQ);
})();
