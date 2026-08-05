import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: SITE.themeColor,
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Teen Patti Lucky APK for Pakistan — download the latest version, play Classic Teen Patti & more, and cash out via JazzCash & EasyPaisa. Free Android game guide.",
  keywords: [
    "Teen Patti Lucky",
    "Teen Patti Lucky APK",
    "3 Patti Lucky",
    "3 Patti Lucky Pakistan",
    "Teen Patti Lucky download",
    "Teen Patti Lucky Pakistan",
    "JazzCash Teen Patti",
    "EasyPaisa Teen Patti",
    "Teen Patti Lucky 2026",
  ],
  authors: [{ name: `${SITE.name} Team` }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: SITE.logo, type: "image/webp", sizes: "192x192" },
    ],
    apple: [{ url: SITE.logo, sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE.origin,
  },
  openGraph: {
    title: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
    description:
      "Download Teen Patti Lucky APK for Pakistan. Play real Teen Patti tables with JazzCash & EasyPaisa support. Free · Android · Game.",
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Pakistan Teen Patti APK`,
      },
      {
        url: `${SITE.origin}${SITE.ogImageSquare}`,
        width: 800,
        height: 800,
        alt: `${SITE.name} app icon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
    description:
      "Download Teen Patti Lucky APK for Pakistan. JazzCash & EasyPaisa ready. Free Android game guide.",
    images: [
      {
        url: `${SITE.origin}${SITE.twitterImage}`,
        width: 1200,
        height: 600,
        alt: `${SITE.name} — Pakistan Teen Patti APK`,
      },
    ],
  },
  applicationName: SITE.name,
  category: "Gaming",
  classification: "Teen Patti Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="apple-touch-icon" href={SITE.logo} sizes="180x180" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(236, 72, 153, 0.12) 0%, transparent 42%), radial-gradient(circle at 88% 10%, rgba(255, 193, 7, 0.08) 0%, transparent 40%), linear-gradient(180deg, #041520 0%, #061A28 55%, #041520 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20" />
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.origin,
              logo: `${SITE.origin}${SITE.logo}`,
              description: `${SITE.name} helps Pakistani players download the Teen Patti Lucky APK and use JazzCash & EasyPaisa safely.`,
              email: SITE.email,
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE.email,
                contactType: "Customer Support",
                areaServed: "PK",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
