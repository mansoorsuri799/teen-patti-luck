/** Teen Patti Lucky — shared brand & SEO constants */
export const SITE = {
  name: "Teen Patti Lucky",
  shortName: "3 Patti Lucky",
  domain: "teenpattiluckygame.com.pk",
  origin: "https://teenpattiluckygame.com.pk",
  email: "support@teenpattiluckygame.com.pk",
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
    "https://pk3pattilucky.com/?from_gameid=6843038&channelCode=5577767",
  logo: "/teen-patti-lucky.webp",
  images: {
    hero: "/teen-patti-lucky.webp",
    game: "/teen-patti-lucky-game.webp",
    pakistan: "/teen-patti-lucky-pakistan.webp",
    deposit: "/teen-patti-lucky-deposit-money.webp",
    withdraw: "/teen-patti-lucky-withdraw-money.webp",
    bonus: "/teen-patti-lucky-user-bonus.webp",
    spin: "/teen-patti-lucky-spin-wheel.webp",
    share: "/teen-patti-lucky-share-and-earn.webp",
  },
  faviconIco: "/favicon.ico",
  faviconSvg: "/favicon.svg",
  faviconPng: "/favicon-96x96.png",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest192: "/web-app-manifest-192x192.png",
  manifest512: "/web-app-manifest-512x512.png",
  ogImage: "/feature/og-image.webp",
  ogImageSquare: "/feature/og-image-square.webp",
  twitterImage: "/feature/twitter-card.webp",
  version: "V1.232",
  fileSize: "45MB",
  androidMin: "Android 5.0+",
  ratingValue: "4.5",
  ratingCount: "500000",
  ratingCountDisplay: "500,000",
  downloadsDisplay: "500K+",
  year: "2026",
  locale: "en-PK",
  currency: "PKR",
  themeColor: "#041520",
  accentColor: "#FFC107",
  ctaBorder: "#EC4899",
  ctaIcon: "#F59E0B",
  cardBg: "#0A1F2E",
} as const;

export const ROUTES = {
  home: "/",
  downloadHub: "/download",
  download: "/download/teen-patti-lucky",
  deposit: "/deposit-money-in-teen-patti-lucky",
  withdraw: "/withdraw-money-from-teen-patti-lucky",
  pc: "/teen-patti-lucky-for-pc",
  about: "/about-us",
  blog: "/blog",
  contact: "/contact-us",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  blogSafety: "/blog/is-teen-patti-lucky-safe-legal-pakistan",
  blogLogin: "/blog/how-to-register-and-login-teen-patti-lucky",
  blogBonuses: "/blog/teen-patti-lucky-bonuses-rewards-guide",
  blogTips: "/blog/tips-to-win-teen-patti-lucky-pakistan",
} as const;

/** Keep only 3–4 unique SERP intents (skill rule). */
export const BLOG_POSTS = [
  {
    slug: "is-teen-patti-lucky-safe-legal-pakistan",
    title: "Is Teen Patti Lucky Safe & Legal in Pakistan? 2026 Guide",
    description:
      "Is Teen Patti Lucky safe and legal in Pakistan? Clear 2026 guide on security, JazzCash withdrawals, risks, and how to play responsibly.",
    date: "2026-08-05",
    readMin: 9,
  },
  {
    slug: "how-to-register-and-login-teen-patti-lucky",
    title: "How to Register and Login on Teen Patti Lucky",
    description:
      "Complete Teen Patti Lucky register and login guide for Pakistan: phone OTP signup, password login, and common login errors.",
    date: "2026-08-06",
    readMin: 8,
  },
  {
    slug: "teen-patti-lucky-bonuses-rewards-guide",
    title: "Teen Patti Lucky Bonuses & Rewards Guide 2026",
    description:
      "Full Teen Patti Lucky bonus guide: welcome offers, daily login rewards, referral cash, VIP perks, and how to claim them in Pakistan.",
    date: "2026-08-05",
    readMin: 8,
  },
  {
    slug: "tips-to-win-teen-patti-lucky-pakistan",
    title: "10 Smart Tips to Win at Teen Patti Lucky in Pakistan",
    description:
      "Practical Teen Patti Lucky tips for Pakistani players: bankroll control, table selection, Classic vs Muflis, and smarter play habits.",
    date: "2026-08-05",
    readMin: 10,
  },
] as const;

export type SitePage = {
  path: string;
  title: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly";
  lastmod: string;
  images?: { loc: string; title: string; caption: string }[];
};

export const INDEXABLE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Teen Patti Lucky APK Download Pakistan",
    priority: 1,
    changefreq: "daily",
    lastmod: "2026-08-06",
    images: [
      {
        loc: `${SITE.origin}${SITE.images.hero}`,
        title: "Teen Patti Lucky app icon",
        caption: "Teen Patti Lucky official APK icon for Android in Pakistan",
      },
      {
        loc: `${SITE.origin}${SITE.images.game}`,
        title: "Teen Patti Lucky game lobby",
        caption: "Teen Patti Lucky Android lobby with games and wallet UI",
      },
      {
        loc: `${SITE.origin}${SITE.images.pakistan}`,
        title: "Teen Patti Lucky Pakistan",
        caption: "Teen Patti Lucky promotional image for Pakistani players",
      },
    ],
  },
  {
    path: ROUTES.downloadHub,
    title: "Download Teen Patti Lucky",
    priority: 0.92,
    changefreq: "weekly",
    lastmod: "2026-08-06",
  },
  {
    path: ROUTES.download,
    title: "Download Teen Patti Lucky APK",
    priority: 0.95,
    changefreq: "weekly",
    lastmod: "2026-08-06",
    images: [
      {
        loc: `${SITE.origin}${SITE.images.hero}`,
        title: "Download Teen Patti Lucky",
        caption: "Download Teen Patti Lucky APK for Android",
      },
      {
        loc: `${SITE.origin}${SITE.images.game}`,
        title: "Teen Patti Lucky gameplay lobby",
        caption: "Teen Patti Lucky app interface after install",
      },
    ],
  },
  {
    path: ROUTES.deposit,
    title: "Deposit Money in Teen Patti Lucky",
    priority: 0.9,
    changefreq: "weekly",
    lastmod: "2026-08-05",
    images: [
      {
        loc: `${SITE.origin}${SITE.images.deposit}`,
        title: "Deposit money in Teen Patti Lucky",
        caption: "Teen Patti Lucky deposit screen for JazzCash and EasyPaisa",
      },
    ],
  },
  {
    path: ROUTES.withdraw,
    title: "Withdraw Money from Teen Patti Lucky",
    priority: 0.9,
    changefreq: "weekly",
    lastmod: "2026-08-05",
    images: [
      {
        loc: `${SITE.origin}${SITE.images.withdraw}`,
        title: "Withdraw money from Teen Patti Lucky",
        caption: "Teen Patti Lucky withdrawal screen for Pakistani wallets",
      },
    ],
  },
  {
    path: ROUTES.pc,
    title: "Teen Patti Lucky for PC",
    priority: 0.85,
    changefreq: "monthly",
    lastmod: "2026-08-05",
  },
  {
    path: ROUTES.about,
    title: "About Teen Patti Lucky",
    priority: 0.7,
    changefreq: "monthly",
    lastmod: "2026-08-05",
  },
  {
    path: ROUTES.blog,
    title: "Teen Patti Lucky Blog",
    priority: 0.8,
    changefreq: "weekly",
    lastmod: "2026-08-06",
  },
  {
    path: ROUTES.contact,
    title: "Contact Teen Patti Lucky",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: "2026-08-05",
  },
  {
    path: ROUTES.privacy,
    title: "Privacy Policy",
    priority: 0.4,
    changefreq: "monthly",
    lastmod: "2026-08-05",
  },
  {
    path: ROUTES.disclaimer,
    title: "Disclaimer",
    priority: 0.4,
    changefreq: "monthly",
    lastmod: "2026-08-05",
  },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    title: p.title,
    priority: 0.75,
    changefreq: "monthly" as const,
    lastmod: p.date,
    images: [
      {
        loc: `${SITE.origin}${SITE.images.game}`,
        title: p.title,
        caption: p.description,
      },
    ],
  })),
];
