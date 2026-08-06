import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppRating from "@/components/AppRating";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadCTA from "@/components/DownloadCTA";
import SoftwareApplicationJsonLd from "@/components/SoftwareApplicationJsonLd";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teen Patti Lucky APK Download Free for Android 2026",
  description:
    "Download Teen Patti Lucky APK free for Android in Pakistan. V1.232 · 45MB. Safe install steps and JazzCash & EasyPaisa ready setup.",
  alternates: { canonical: `${SITE.origin}${ROUTES.download}` },
  openGraph: {
    title: "Teen Patti Lucky APK Download Free for Android",
    description: "Get Teen Patti Lucky APK for Pakistan with clear Android install steps.",
    url: `${SITE.origin}${ROUTES.download}`,
    images: [
      {
        url: `${SITE.origin}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Download Teen Patti Lucky APK",
      },
    ],
  },
};

export default function DownloadTeenPattiLuckyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Install Teen Patti Lucky APK on Android",
    step: [
      { "@type": "HowToStep", name: "Download", text: "Tap DOWNLOAD NOW on this page." },
      {
        "@type": "HowToStep",
        name: "Permit install",
        text: "Allow unknown apps for your browser if Android blocks the file.",
      },
      { "@type": "HowToStep", name: "Install", text: "Open the APK and confirm installation." },
      { "@type": "HowToStep", name: "Open app", text: "Launch Teen Patti Lucky and register." },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <SoftwareApplicationJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Download", href: ROUTES.downloadHub },
          { name: "Teen Patti Lucky APK" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Teen Patti Lucky APK Download for Android
      </h1>
      <p className="text-accent text-lg mb-2">
        {SITE.version} · {SITE.fileSize} · Pakistan
      </p>
      <AppRating className="mb-4" />

      <div className="flex flex-col items-center gap-5 my-8 text-center">
        <Image
          src="/teen-patti-lucky.webp"
          alt="Teen Patti Lucky APK download icon"
          width={512}
          height={512}
          className="rounded-2xl object-contain w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
          priority
          sizes="240px"
        />
        <DownloadCTA />
        <p className="text-gray-400 text-sm">{SITE.androidMin} recommended · Free · Game</p>
      </div>

      <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
        <h2 className="text-2xl font-bold text-accent">Why download Teen Patti Lucky from this guide?</h2>
        <p>
          Teen Patti Lucky is distributed as an Android APK outside some app stores, so install quality matters. This page walks Pakistani players through a clean download, the unknown-sources prompt, and the first launch checklist before any JazzCash deposit.
        </p>
        <p>
          Keep mobile data stable during download. A half-finished APK is a common cause of “app not installed” errors on Teen Patti Lucky.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-accent mb-4">Step-by-step Android install</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>
            Tap <strong className="text-white">DOWNLOAD NOW</strong> and save the Teen Patti Lucky APK.
          </li>
          <li>Open the notification or Downloads folder and select the file.</li>
          <li>If Android warns about unknown apps, open Settings and allow your browser or file manager once.</li>
          <li>Confirm Install, then Open when Teen Patti Lucky finishes.</li>
          <li>Accept permissions needed for network and notifications, then register with your Pakistani number.</li>
        </ol>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">After install checklist</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Complete OTP signup — see the{" "}
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              account guide
            </Link>
            .
          </li>
          <li>
            Claim only bonuses you understand —{" "}
            <Link href={ROUTES.blogBonuses} className="text-accent hover:underline">
              bonuses overview
            </Link>
            .
          </li>
          <li>
            Add a small deposit when ready —{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              deposit guide
            </Link>
            .
          </li>
          <li>
            Read safety notes —{" "}
            <Link href={ROUTES.blogSafety} className="text-accent hover:underline">
              is Teen Patti Lucky safe?
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Install problems & fixes</h2>
        <p>
          <strong className="text-white">Parse error:</strong> Re-download; the previous file may be incomplete.
        </p>
        <p>
          <strong className="text-white">Blocked by Play Protect:</strong> Review details, then install only if you trust this source; disable temporarily if needed and re-enable after.
        </p>
        <p>
          <strong className="text-white">Not enough storage:</strong> Clear cache or move photos off the phone, then retry Teen Patti Lucky.
        </p>
      </section>

      <div className="text-center py-6">
        <DownloadCTA />
      </div>
    </article>
  );
}
