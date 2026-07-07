/* ============================================================
   AFTERHOURS landing — interactions
   Scroll reveals, in-view counters, feature micro-animations, and the single
   source of truth for the contact email. Everything degrades gracefully with
   prefers-reduced-motion.
   ============================================================ */

/* ---- Contact: change this one line to update every CTA on the page. ---- */
const CONTACT_EMAIL = "info@impecable.dev";

/* Plain-email links (the footer/CTA line) show the address and never change;
   draft buttons get a prefilled subject/body that must be rebuilt per language. */
const mailDraftLinks = [...document.querySelectorAll("a.cta-mail")].filter(
  (a) => !a.textContent.trim().includes("@")
);
document.querySelectorAll("a.cta-mail").forEach((a) => {
  if (!mailDraftLinks.includes(a)) a.href = `mailto:${CONTACT_EMAIL}`;
});

function updateMailLinks(lang) {
  const { email } = getI18n(lang);
  const body = `${email.greeting}\n\n${email.labels.venue}:\n${email.labels.city}:\n${email.labels.capacity}:\n\n${email.signoff}`;
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    email.subject
  )}&body=${encodeURIComponent(body)}`;
  mailDraftLinks.forEach((a) => (a.href = href));
}

/* ============================================================
   i18n — EN/DE/FR/ES. Plain inline data + DOM walkers (no imports, no
   fetch()) so this keeps working when build-standalone.mjs inlines this
   file as a non-module <script> opened via file://.
   ============================================================ */
const AFTERHOURS_I18N = {
  en: {
    seo: {
      title: "AFTERHOURS — the operating system for your club",
      description:
        "AFTERHOURS is one platform to sell tickets, run the door, book VIP tables, and keep guests coming back — a guest app and a staff dashboard on one backend, built for nightlife venues.",
      ogTitle: "AFTERHOURS — the operating system for your club",
      ogDescription:
        "Ticketing, door check-in, VIP tables, DJ requests, safety, and face-recognition photos — one platform for your venue.",
    },
    nav: {
      home: "AFTERHOURS home",
      links: { platform: "Platform", capabilities: "Capabilities", howItWorks: "How it works" },
    },
    common: {
      bookCta: "Book a walkthrough",
      modules: {
        ticketing: "Ticketing",
        doorCheckin: "Door check-in",
        vipTables: "VIP tables",
        djRequests: "DJ requests",
        safety: "Safety",
        eventPhotos: "Event photos",
      },
      badges: { guestApp: "Guest app", staffDashboard: "Staff dashboard" },
    },
    hero: {
      status: "Built for nightlife venues",
      titleHtml: "The operating system <br />for your club.",
      sub: "Sell tickets, run the door, book VIP tables, and keep guests coming back — one guest app, one staff dashboard, one backend.",
      secondaryCta: "See the platform",
    },
    platform: {
      eyebrow: "The platform",
      headlinePre: "Everything your night runs on,",
      headlineHl: "in one system.",
      convSub: "A guest app and a staff dashboard — every part of your night, connected.",
      staticLede:
        "A guest app and a staff dashboard on one backend — ticketing, the door, tables, and photos in one place, not six separate tools.",
      guest: {
        title: "For your guests",
        desc: "Buy tickets, hold a QR pass, book a table, and find their photos — all in your venue's own app.",
        ticks: [
          "Tickets & QR passes in the wallet",
          "Table bookings & bottle service",
          "Face-recognition photo galleries",
        ],
      },
      staff: {
        title: "For your team",
        desc: "One command center for your whole team. Each role — owner, manager, DJ, security — signs in and sees exactly what it needs.",
        ticks: [
          "Publish events & track sales",
          "Door scanning & live capacity",
          "Role-based access for every staff type",
        ],
      },
    },
    capabilities: {
      eyebrow: "Capabilities",
      headline: "Purpose-built for how a venue actually operates.",
      lede: "Six modules that share one guest and sales record — each works on its own, or as one system.",
      items: [
        {
          title: "Events & ticketing",
          desc: "Publish an event and sell tickets through Stripe. Revenue settles straight to your own account — no middleman holding your money.",
          ticks: ["Stripe checkout, your account", "QR passes issued automatically", "Live sales on your dashboard"],
        },
        {
          title: "Door & check-in",
          desc: "Scan tickets in seconds and watch capacity update live — so you always know exactly how full the room is.",
          ticks: ["Fast QR scanning at entry", "Live headcount and capacity", "Role-based access for every staff type"],
        },
        {
          title: "VIP tables",
          desc: "Lay out your floor once, then take bookings against it. Guests reserve a table and add bottle service at checkout, with a waitlist for the overflow.",
          ticks: ["Visual floor-plan blueprint", "Bookings, waitlist & bottle-service upsell", "See what's booked at a glance"],
        },
        {
          title: "DJ & song requests",
          desc: "Guests send requests straight into a DJ queue. Your DJ stays in control — accept, reorder, or skip.",
          ticks: ["Requests from the guest app", "A queue the DJ fully controls", "Keeps the floor engaged"],
        },
        {
          title: "Safety",
          desc: "Security raises an alert in one tap and the right staff are notified instantly — incidents handled fast and on the record.",
          ticks: ["One-tap alerts for security", "The right people notified instantly", "A calmer, safer room"],
        },
        {
          title: "Event photos",
          desc: "Upload the night's photos and face recognition sorts them by guest. They reshare to their followers — marketing your next night — and a paid membership to unlock them opens a whole new revenue stream.",
          ticks: [
            "Face-recognition photo matching",
            "Reshares that market the next night",
            "Paid membership to unlock photos — a new revenue stream",
          ],
        },
      ],
    },
    payoff: {
      eyebrow: "The payoff",
      headline: "Grow your revenue. Own the guest relationship.",
      kpis: [
        { val: "Keep your ticket revenue", note: "Sales go straight to your Stripe. No reseller takes a cut." },
        { val: "Run the night from one screen", note: "Door, tables, sales, and safety in one dashboard — not six tools." },
        { val: "Guests fill your next event", note: "Reshared photos put your night in front of new crowds — free." },
        { val: "Build your own audience", note: "Guests download your app. Every regular you earn stays yours." },
      ],
    },
    process: {
      eyebrow: "Getting started",
      headline: "You're live in three steps — that's it.",
      steps: [
        { title: "See a walkthrough", desc: "We show you the platform and learn how your venue runs today." },
        { title: "We tailor & build it", desc: "We set up the modules you need, in your brand — your name, your app." },
        { title: "Launch your night", desc: "We deploy it and support you through your first events." },
      ],
    },
    cta: {
      headline: "Let's talk about your venue.",
      sub: "Tell us about your club and we'll show you how AFTERHOURS would run your nights.",
    },
    footer: { tagline: "The operating system for your club." },
    email: {
      subject: "AFTERHOURS — walkthrough for my venue",
      greeting: "Hi — I run a venue and I'd like to see how AFTERHOURS would work for us.",
      labels: { venue: "Venue", city: "City", capacity: "Rough capacity" },
      signoff: "Thanks!",
    },
  },
  de: {
    seo: {
      title: "AFTERHOURS — das Betriebssystem für Ihren Club",
      description:
        "AFTERHOURS ist eine Plattform für Ticketverkauf, Einlasskontrolle, VIP-Tische und wiederkehrende Gäste — eine Gäste-App und ein Staff-Dashboard auf einem Backend, gebaut für Nightlife-Venues.",
      ogTitle: "AFTERHOURS — das Betriebssystem für Ihren Club",
      ogDescription:
        "Ticketing, Einlasskontrolle, VIP-Tische, DJ-Wünsche, Sicherheit und Gesichtserkennungs-Fotos — eine Plattform für Ihre Venue.",
    },
    nav: {
      home: "AFTERHOURS Startseite",
      links: { platform: "Plattform", capabilities: "Funktionen", howItWorks: "So funktioniert's" },
    },
    common: {
      bookCta: "Demo buchen",
      modules: {
        ticketing: "Ticketing",
        doorCheckin: "Einlasskontrolle",
        vipTables: "VIP-Tische",
        djRequests: "DJ-Wünsche",
        safety: "Sicherheit",
        eventPhotos: "Event-Fotos",
      },
      badges: { guestApp: "Gäste-App", staffDashboard: "Staff-Dashboard" },
    },
    hero: {
      status: "Gebaut für Nightlife-Venues",
      titleHtml: "Das Betriebssystem <br />für Ihren Club.",
      sub: "Verkaufen Sie Tickets, steuern Sie den Einlass, verwalten Sie VIP-Tische und binden Sie Ihre Gäste — eine Gäste-App, ein Staff-Dashboard, ein Backend.",
      secondaryCta: "Plattform ansehen",
    },
    platform: {
      eyebrow: "Die Plattform",
      headlinePre: "Alles, was Ihren Abend antreibt,",
      headlineHl: "in einem System.",
      convSub: "Eine Gäste-App und ein Staff-Dashboard — jeder Teil Ihres Abends, verbunden.",
      staticLede:
        "Eine Gäste-App und ein Staff-Dashboard auf einem Backend — Ticketing, Einlass, Tische und Fotos an einem Ort, statt sechs einzelner Tools.",
      guest: {
        title: "Für Ihre Gäste",
        desc: "Tickets kaufen, QR-Pass in der Wallet, Tisch reservieren und eigene Fotos finden — alles in der App Ihrer Venue.",
        ticks: [
          "Tickets & QR-Pässe in der Wallet",
          "Tischbuchungen & Bottle Service",
          "Fotogalerien mit Gesichtserkennung",
        ],
      },
      staff: {
        title: "Für Ihr Team",
        desc: "Eine Zentrale für Ihr gesamtes Team. Jede Rolle — Inhaber, Manager, DJ, Security — meldet sich an und sieht genau das, was sie braucht.",
        ticks: [
          "Events veröffentlichen & Umsatz verfolgen",
          "Einlass-Scanning & Live-Kapazität",
          "Rollenbasierter Zugriff für jede Position",
        ],
      },
    },
    capabilities: {
      eyebrow: "Funktionen",
      headline: "Gebaut für den Alltag einer Venue.",
      lede: "Sechs Module, ein gemeinsamer Gäste- und Umsatzdatensatz — jedes funktioniert für sich, oder als ein System.",
      items: [
        {
          title: "Events & Ticketing",
          desc: "Event veröffentlichen und Tickets über Stripe verkaufen. Der Umsatz geht direkt auf Ihr eigenes Konto — kein Mittelsmann, der etwas einbehält.",
          ticks: ["Stripe-Checkout, Ihr eigenes Konto", "QR-Pässe automatisch ausgestellt", "Live-Umsätze in Ihrem Dashboard"],
        },
        {
          title: "Einlass & Check-in",
          desc: "Tickets in Sekunden scannen und die Kapazität live mitverfolgen — Sie wissen immer genau, wie voll der Raum ist.",
          ticks: ["Schnelles QR-Scanning am Eingang", "Live-Gästezahl und Kapazität", "Rollenbasierter Zugriff für jede Position"],
        },
        {
          title: "VIP-Tische",
          desc: "Ihre Fläche einmal anlegen, dann Buchungen dagegen entgegennehmen. Gäste reservieren einen Tisch und fügen beim Checkout Bottle Service hinzu, inklusive Warteliste für den Rest.",
          ticks: ["Visueller Grundriss", "Buchungen, Warteliste & Bottle-Service-Upsell", "Auf einen Blick sehen, was gebucht ist"],
        },
        {
          title: "DJ & Songwünsche",
          desc: "Gäste schicken Wünsche direkt in eine DJ-Warteschlange. Ihr DJ behält die Kontrolle — annehmen, umsortieren oder überspringen.",
          ticks: ["Wünsche direkt aus der Gäste-App", "Eine Warteschlange, die der DJ voll kontrolliert", "Hält die Tanzfläche engagiert"],
        },
        {
          title: "Sicherheit",
          desc: "Security löst einen Alarm mit einem Tap aus, das richtige Personal wird sofort benachrichtigt — Vorfälle werden schnell und dokumentiert gehandhabt.",
          ticks: ["Alarm mit einem Tap für Security", "Die richtigen Leute sofort benachrichtigt", "Ein ruhigerer, sichererer Raum"],
        },
        {
          title: "Event-Fotos",
          desc: "Fotos der Nacht hochladen, Gesichtserkennung ordnet sie automatisch den Gästen zu. Gäste teilen sie mit ihren Followern — Marketing für Ihre nächste Nacht — und eine kostenpflichtige Mitgliedschaft zum Freischalten eröffnet eine neue Umsatzquelle.",
          ticks: [
            "Fotoabgleich per Gesichtserkennung",
            "Reshares, die Ihre nächste Nacht bewerben",
            "Kostenpflichtige Mitgliedschaft für Fotos — eine neue Umsatzquelle",
          ],
        },
      ],
    },
    payoff: {
      eyebrow: "Der Mehrwert",
      headline: "Steigern Sie Ihren Umsatz. Behalten Sie die Gästebeziehung.",
      kpis: [
        { val: "Behalten Sie Ihren Ticketumsatz", note: "Verkäufe gehen direkt auf Ihr Stripe-Konto. Kein Reseller nimmt einen Anteil." },
        { val: "Steuern Sie den Abend von einem Bildschirm aus", note: "Einlass, Tische, Umsatz und Sicherheit in einem Dashboard — statt sechs Tools." },
        { val: "Gäste füllen Ihr nächstes Event", note: "Geteilte Fotos bringen Ihre Nacht kostenlos vor neue Zielgruppen." },
        { val: "Bauen Sie Ihr eigenes Publikum auf", note: "Gäste laden Ihre App herunter. Jeder Stammgast, den Sie gewinnen, bleibt Ihrer." },
      ],
    },
    process: {
      eyebrow: "Erste Schritte",
      headline: "In drei Schritten live — mehr braucht es nicht.",
      steps: [
        { title: "Demo ansehen", desc: "Wir zeigen Ihnen die Plattform und lernen, wie Ihre Venue heute läuft." },
        { title: "Wir passen es an & bauen es", desc: "Wir richten die Module ein, die Sie brauchen, in Ihrer Marke — Ihr Name, Ihre App." },
        { title: "Starten Sie Ihre Nacht", desc: "Wir stellen es bereit und begleiten Sie durch Ihre ersten Events." },
      ],
    },
    cta: {
      headline: "Lassen Sie uns über Ihre Venue sprechen.",
      sub: "Erzählen Sie uns von Ihrem Club, und wir zeigen Ihnen, wie AFTERHOURS Ihre Nächte steuern würde.",
    },
    footer: { tagline: "Das Betriebssystem für Ihren Club." },
    email: {
      subject: "AFTERHOURS — Demo für meine Venue",
      greeting: "Hallo — ich betreibe eine Venue und würde gerne sehen, wie AFTERHOURS bei uns funktionieren würde.",
      labels: { venue: "Venue", city: "Stadt", capacity: "Ungefähre Kapazität" },
      signoff: "Danke!",
    },
  },
  fr: {
    seo: {
      title: "AFTERHOURS — le système d'exploitation de votre club",
      description:
        "AFTERHOURS est une plateforme unique pour vendre des billets, gérer l'entrée, réserver des tables VIP et fidéliser vos clients — une application invité et un tableau de bord staff sur un seul backend, conçue pour les lieux nocturnes.",
      ogTitle: "AFTERHOURS — le système d'exploitation de votre club",
      ogDescription:
        "Billetterie, contrôle à l'entrée, tables VIP, demandes DJ, sécurité et photos par reconnaissance faciale — une seule plateforme pour votre lieu.",
    },
    nav: {
      home: "Accueil AFTERHOURS",
      links: { platform: "Plateforme", capabilities: "Fonctionnalités", howItWorks: "Comment ça marche" },
    },
    common: {
      bookCta: "Réserver une démo",
      modules: {
        ticketing: "Billetterie",
        doorCheckin: "Contrôle à l'entrée",
        vipTables: "Tables VIP",
        djRequests: "Demandes DJ",
        safety: "Sécurité",
        eventPhotos: "Photos d'événement",
      },
      badges: { guestApp: "Application invité", staffDashboard: "Tableau de bord staff" },
    },
    hero: {
      status: "Conçu pour les lieux nocturnes",
      titleHtml: "Le système d'exploitation <br />de votre club.",
      sub: "Vendez des billets, gérez l'entrée, réservez des tables VIP et fidélisez vos clients — une application invité, un tableau de bord staff, un seul backend.",
      secondaryCta: "Découvrir la plateforme",
    },
    platform: {
      eyebrow: "La plateforme",
      headlinePre: "Tout ce qui fait tourner votre soirée,",
      headlineHl: "dans un seul système.",
      convSub: "Une application invité et un tableau de bord staff — chaque partie de votre soirée, connectée.",
      staticLede:
        "Une application invité et un tableau de bord staff sur un seul backend — billetterie, entrée, tables et photos au même endroit, pas six outils séparés.",
      guest: {
        title: "Pour vos clients",
        desc: "Acheter des billets, garder un pass QR, réserver une table et retrouver leurs photos — le tout dans l'application de votre lieu.",
        ticks: [
          "Billets & pass QR dans le wallet",
          "Réservations de tables & bottle service",
          "Galeries photo par reconnaissance faciale",
        ],
      },
      staff: {
        title: "Pour votre équipe",
        desc: "Un centre de commande unique pour toute votre équipe. Chaque rôle — propriétaire, manager, DJ, sécurité — se connecte et voit exactement ce dont il a besoin.",
        ticks: [
          "Publier des événements & suivre les ventes",
          "Scan à l'entrée & capacité en direct",
          "Accès selon le rôle pour chaque membre du staff",
        ],
      },
    },
    capabilities: {
      eyebrow: "Fonctionnalités",
      headline: "Pensé pour le fonctionnement réel d'un lieu.",
      lede: "Six modules qui partagent un seul historique client et de ventes — chacun fonctionne seul, ou comme un système complet.",
      items: [
        {
          title: "Billetterie & événements",
          desc: "Publiez un événement et vendez des billets via Stripe. Les revenus arrivent directement sur votre propre compte — aucun intermédiaire ne prend de commission.",
          ticks: ["Paiement Stripe, votre propre compte", "Pass QR émis automatiquement", "Ventes en direct sur votre tableau de bord"],
        },
        {
          title: "Entrée & contrôle",
          desc: "Scannez les billets en quelques secondes et suivez la capacité en direct — vous savez toujours exactement combien de monde est présent.",
          ticks: ["Scan QR rapide à l'entrée", "Effectif et capacité en direct", "Accès selon le rôle pour chaque membre du staff"],
        },
        {
          title: "Tables VIP",
          desc: "Configurez votre plan de salle une fois, puis prenez les réservations. Les clients réservent une table et ajoutent du bottle service au paiement, avec une liste d'attente pour le surplus.",
          ticks: ["Plan de salle visuel", "Réservations, liste d'attente & vente additionnelle de bottle service", "Voir en un coup d'œil ce qui est réservé"],
        },
        {
          title: "Demandes DJ",
          desc: "Les clients envoient leurs demandes directement dans une file DJ. Votre DJ garde le contrôle — accepter, réorganiser ou passer.",
          ticks: ["Demandes depuis l'application invité", "Une file entièrement contrôlée par le DJ", "Garde la piste engagée"],
        },
        {
          title: "Sécurité",
          desc: "La sécurité déclenche une alerte en un geste et le bon personnel est notifié instantanément — les incidents sont traités rapidement et enregistrés.",
          ticks: ["Alerte en un geste pour la sécurité", "Les bonnes personnes notifiées instantanément", "Une salle plus calme et plus sûre"],
        },
        {
          title: "Photos d'événement",
          desc: "Chargez les photos de la soirée, la reconnaissance faciale les trie par client. Ils les repartagent à leurs followers — de la publicité gratuite pour votre prochaine soirée — et un abonnement payant pour les débloquer ouvre une toute nouvelle source de revenus.",
          ticks: [
            "Reconnaissance faciale pour trier les photos",
            "Partages qui font la promo de votre prochaine soirée",
            "Abonnement payant pour débloquer les photos — une nouvelle source de revenus",
          ],
        },
      ],
    },
    payoff: {
      eyebrow: "Les bénéfices",
      headline: "Augmentez vos revenus. Gardez la relation avec vos clients.",
      kpis: [
        { val: "Gardez vos revenus de billetterie", note: "Les ventes vont directement sur votre compte Stripe. Aucun revendeur ne prend de commission." },
        { val: "Gérez la soirée depuis un seul écran", note: "Entrée, tables, ventes et sécurité dans un seul tableau de bord — pas six outils." },
        { val: "Vos clients remplissent votre prochain événement", note: "Les photos partagées font découvrir votre soirée à de nouveaux publics — gratuitement." },
        { val: "Construisez votre propre audience", note: "Vos clients téléchargent votre application. Chaque habitué que vous fidélisez reste le vôtre." },
      ],
    },
    process: {
      eyebrow: "Pour commencer",
      headline: "En ligne en trois étapes — c'est tout.",
      steps: [
        { title: "Voir une démo", desc: "Nous vous montrons la plateforme et découvrons comment votre lieu fonctionne aujourd'hui." },
        { title: "Nous l'adaptons et la construisons", desc: "Nous configurons les modules dont vous avez besoin, à votre marque — votre nom, votre application." },
        { title: "Lancez votre soirée", desc: "Nous la déployons et vous accompagnons pour vos premiers événements." },
      ],
    },
    cta: {
      headline: "Parlons de votre lieu.",
      sub: "Parlez-nous de votre club et nous vous montrerons comment AFTERHOURS gérerait vos soirées.",
    },
    footer: { tagline: "Le système d'exploitation de votre club." },
    email: {
      subject: "AFTERHOURS — démo pour mon lieu",
      greeting: "Bonjour — je gère un lieu et j'aimerais voir comment AFTERHOURS fonctionnerait pour nous.",
      labels: { venue: "Lieu", city: "Ville", capacity: "Capacité approximative" },
      signoff: "Merci !",
    },
  },
  es: {
    seo: {
      title: "AFTERHOURS — el sistema operativo de tu club",
      description:
        "AFTERHOURS es una sola plataforma para vender entradas, controlar el acceso, reservar mesas VIP y hacer que tus clientes vuelvan — una app para invitados y un panel de staff sobre un mismo backend, hecha para locales nocturnos.",
      ogTitle: "AFTERHOURS — el sistema operativo de tu club",
      ogDescription:
        "Venta de entradas, control de acceso, mesas VIP, peticiones al DJ, seguridad y fotos con reconocimiento facial — una sola plataforma para tu local.",
    },
    nav: {
      home: "Inicio de AFTERHOURS",
      links: { platform: "Plataforma", capabilities: "Funciones", howItWorks: "Cómo funciona" },
    },
    common: {
      bookCta: "Reservar una demo",
      modules: {
        ticketing: "Venta de entradas",
        doorCheckin: "Control de acceso",
        vipTables: "Mesas VIP",
        djRequests: "Peticiones al DJ",
        safety: "Seguridad",
        eventPhotos: "Fotos del evento",
      },
      badges: { guestApp: "App de invitados", staffDashboard: "Panel de staff" },
    },
    hero: {
      status: "Hecho para locales nocturnos",
      titleHtml: "El sistema operativo <br />de tu club.",
      sub: "Vende entradas, controla el acceso, reserva mesas VIP y haz que tus clientes vuelvan — una app de invitados, un panel de staff, un solo backend.",
      secondaryCta: "Ver la plataforma",
    },
    platform: {
      eyebrow: "La plataforma",
      headlinePre: "Todo lo que hace funcionar tu noche,",
      headlineHl: "en un solo sistema.",
      convSub: "Una app de invitados y un panel de staff — cada parte de tu noche, conectada.",
      staticLede:
        "Una app de invitados y un panel de staff sobre un mismo backend — entradas, acceso, mesas y fotos en un solo lugar, no en seis herramientas distintas.",
      guest: {
        title: "Para tus clientes",
        desc: "Comprar entradas, guardar un pase QR, reservar una mesa y encontrar sus fotos — todo dentro de la app de tu local.",
        ticks: [
          "Entradas y pases QR en el wallet",
          "Reservas de mesas y bottle service",
          "Galerías de fotos con reconocimiento facial",
        ],
      },
      staff: {
        title: "Para tu equipo",
        desc: "Un centro de mando único para todo tu equipo. Cada rol — dueño, manager, DJ, seguridad — inicia sesión y ve exactamente lo que necesita.",
        ticks: [
          "Publica eventos y sigue las ventas",
          "Escaneo en la puerta y aforo en vivo",
          "Acceso según el rol de cada miembro del staff",
        ],
      },
    },
    capabilities: {
      eyebrow: "Funciones",
      headline: "Diseñado para cómo funciona realmente un local.",
      lede: "Seis módulos que comparten un mismo registro de clientes y ventas — cada uno funciona por su cuenta, o como un solo sistema.",
      items: [
        {
          title: "Entradas y eventos",
          desc: "Publica un evento y vende entradas con Stripe. Los ingresos van directo a tu propia cuenta — sin intermediarios que se queden con nada.",
          ticks: ["Checkout con Stripe, tu propia cuenta", "Pases QR emitidos automáticamente", "Ventas en vivo en tu panel"],
        },
        {
          title: "Acceso y control",
          desc: "Escanea entradas en segundos y sigue el aforo en vivo — siempre sabes exactamente cuánta gente hay.",
          ticks: ["Escaneo QR rápido en la entrada", "Aforo y control de capacidad en vivo", "Acceso según el rol de cada miembro del staff"],
        },
        {
          title: "Mesas VIP",
          desc: "Diseña tu plano de sala una vez y luego recibe reservas sobre él. Los clientes reservan una mesa y agregan bottle service al pagar, con lista de espera para el resto.",
          ticks: ["Plano de sala visual", "Reservas, lista de espera y upsell de bottle service", "Ve de un vistazo qué está reservado"],
        },
        {
          title: "Peticiones al DJ",
          desc: "Los clientes envían peticiones directo a una cola para el DJ. Tu DJ mantiene el control — aceptar, reordenar o saltar.",
          ticks: ["Peticiones desde la app de invitados", "Una cola que el DJ controla por completo", "Mantiene la pista activa"],
        },
        {
          title: "Seguridad",
          desc: "Seguridad activa una alerta con un toque y el personal indicado se notifica al instante — los incidentes se resuelven rápido y quedan registrados.",
          ticks: ["Alerta con un toque para seguridad", "Notifica al instante a las personas indicadas", "Un ambiente más tranquilo y seguro"],
        },
        {
          title: "Fotos del evento",
          desc: "Sube las fotos de la noche y el reconocimiento facial las organiza por invitado. Las comparten con sus seguidores — promocionando tu próxima noche — y una membresía paga para desbloquearlas abre una nueva fuente de ingresos.",
          ticks: [
            "Coincidencia de fotos por reconocimiento facial",
            "Comparticiones que promocionan tu próxima noche",
            "Membresía paga para desbloquear fotos — una nueva fuente de ingresos",
          ],
        },
      ],
    },
    payoff: {
      eyebrow: "El resultado",
      headline: "Haz crecer tus ingresos. Conserva la relación con tus clientes.",
      kpis: [
        { val: "Conserva todos tus ingresos por entradas", note: "Las ventas van directo a tu cuenta de Stripe. Ningún revendedor se queda con nada." },
        { val: "Controla la noche desde una sola pantalla", note: "Acceso, mesas, ventas y seguridad en un solo panel — no en seis herramientas." },
        { val: "Tus clientes llenan tu próximo evento", note: "Las fotos compartidas ponen tu noche frente a nuevos públicos — gratis." },
        { val: "Construye tu propia audiencia", note: "Tus clientes se descargan tu app. Cada habitual que ganas se queda contigo." },
      ],
    },
    process: {
      eyebrow: "Primeros pasos",
      headline: "En marcha en tres pasos — así de simple.",
      steps: [
        { title: "Ver una demo", desc: "Te mostramos la plataforma y aprendemos cómo funciona tu local hoy." },
        { title: "La adaptamos y la construimos", desc: "Configuramos los módulos que necesitas, con tu marca — tu nombre, tu app." },
        { title: "Lanza tu noche", desc: "La ponemos en marcha y te acompañamos en tus primeros eventos." },
      ],
    },
    cta: {
      headline: "Hablemos de tu local.",
      sub: "Cuéntanos sobre tu club y te mostramos cómo AFTERHOURS manejaría tus noches.",
    },
    footer: { tagline: "El sistema operativo de tu club." },
    email: {
      subject: "AFTERHOURS — demo para mi local",
      greeting: "Hola — tengo un local y me gustaría ver cómo funcionaría AFTERHOURS para nosotros.",
      labels: { venue: "Local", city: "Ciudad", capacity: "Aforo aproximado" },
      signoff: "¡Gracias!",
    },
  },
};

function getI18n(lang) {
  return AFTERHOURS_I18N[lang] || AFTERHOURS_I18N.en;
}

function detectLang() {
  try {
    const saved = localStorage.getItem("afterhours_lang");
    if (saved && AFTERHOURS_I18N[saved]) return saved;
  } catch (_) {}
  return "en";
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("afterhours_lang", lang);
  } catch (_) {}
  const T = getI18n(lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.dataset.i18n.split(".");
    let val = T;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const keys = el.dataset.i18nHtml.split(".");
    let val = T;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const keys = el.dataset.i18nAria.split(".");
    let val = T;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.setAttribute("aria-label", val);
  });

  document.title = T.seo.title;
  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  };
  setMeta('meta[name="description"]', T.seo.description);
  setMeta('meta[property="og:title"]', T.seo.ogTitle);
  setMeta('meta[property="og:description"]', T.seo.ogDescription);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateMailLinks(lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Payoff KPI icons: normalize each glyph to pathLength=1 so the CSS draw-on
        (stroke-dasharray/offset: 1) means "fully undrawn" regardless of the glyph's
        real geometry — same trick as the platform-section connector lines. ---- */
document.querySelectorAll(".kpi-ic svg *").forEach((el) => el.setAttribute("pathLength", "1"));

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
  /* Stagger siblings that reveal together for a gentle cascade. Grouped by the nearest
     .feature-copy (so a feature's number/heading/paragraph/ticks cascade as one sequence,
     independent of the feature's own visual, which reveals on its own beat) — falling back
     to the immediate parent everywhere else. */
  const groups = new Map();
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    const key = el.closest(".feature-copy") || el.parentElement;
    const arr = groups.get(key) || [];
    el.style.transitionDelay = `${arr.length * 80}ms`;
    arr.push(el);
    groups.set(key, arr);
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
      // Pull the node-side tip back to the pill's near edge (not its center) so the line
      // stops at the border instead of drawing into the middle of the node.
      const hw = nodes[i].offsetWidth / 2;
      const hh = nodes[i].offsetHeight / 2;
      const { _ux: ux, _uy: uy } = nodes[i];
      const t = 1 / (Math.max(Math.abs(ux) / hw, Math.abs(uy) / hh) || 1);
      const ex = mx - ux * t;
      const ey = my - uy * t;
      ln.setAttribute("x1", ((best.ax / W) * 100).toFixed(2));
      ln.setAttribute("y1", ((best.ay / H) * VBH).toFixed(2));
      ln.setAttribute("x2", ((ex / W) * 100).toFixed(2));
      ln.setAttribute("y2", ((ey / H) * VBH).toFixed(2));
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

applyLang(detectLang());
