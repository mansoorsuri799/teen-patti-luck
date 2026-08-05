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
  download: "/download-teen-patti-lucky",
  deposit: "/deposit-money-in-teen-patti-lucky",
  withdraw: "/withdraw-money-from-teen-patti-lucky",
  pc: "/teen-patti-lucky-for-pc",
  about: "/about-us",
  blog: "/blog",
  contact: "/contact-us",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  blogSafety: "/blog/is-teen-patti-lucky-safe-legal-pakistan",
  blogLogin: "/blog/create-teen-patti-lucky-account-and-login",
  blogBonuses: "/blog/teen-patti-lucky-bonuses-rewards-guide",
  blogTips: "/blog/tips-to-win-teen-patti-lucky-pakistan",
} as const;

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
    slug: "create-teen-patti-lucky-account-and-login",
    title: "How to Create a Teen Patti Lucky Account & Login",
    description:
      "Step-by-step Teen Patti Lucky registration and login guide for Pakistan. Phone signup, OTP, password reset, and login fixes.",
    date: "2026-08-05",
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
  images?: { loc: string; title: string; caption: string }[];
};

export const INDEXABLE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Teen Patti Lucky APK Download Pakistan",
    priority: 1,
    changefreq: "daily",
    images: [
      {
        loc: `${SITE.origin}${SITE.logo}`,
        title: "Teen Patti Lucky app icon",
        caption: "Teen Patti Lucky official APK icon for Android in Pakistan",
      },
    ],
  },
  {
    path: ROUTES.download,
    title: "Download Teen Patti Lucky APK",
    priority: 0.95,
    changefreq: "weekly",
    images: [
      {
        loc: `${SITE.origin}${SITE.logo}`,
        title: "Download Teen Patti Lucky",
        caption: "Download Teen Patti Lucky APK for Android",
      },
    ],
  },
  {
    path: ROUTES.deposit,
    title: "Deposit Money in Teen Patti Lucky",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: ROUTES.withdraw,
    title: "Withdraw Money from Teen Patti Lucky",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: ROUTES.pc,
    title: "Teen Patti Lucky for PC",
    priority: 0.85,
    changefreq: "monthly",
  },
  {
    path: ROUTES.about,
    title: "About Teen Patti Lucky",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: ROUTES.blog,
    title: "Teen Patti Lucky Blog",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: ROUTES.contact,
    title: "Contact Teen Patti Lucky",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: ROUTES.privacy,
    title: "Privacy Policy",
    priority: 0.4,
    changefreq: "monthly",
  },
  {
    path: ROUTES.disclaimer,
    title: "Disclaimer",
    priority: 0.4,
    changefreq: "monthly",
  },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    title: p.title,
    priority: 0.75,
    changefreq: "monthly" as const,
    images: [
      {
        loc: `${SITE.origin}${SITE.logo}`,
        title: p.title,
        caption: p.description,
      },
    ],
  })),
];
