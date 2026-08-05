import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadCTA from "@/components/DownloadCTA";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deposit Money in Teen Patti Lucky — JazzCash & EasyPaisa",
  description:
    "How to deposit money in Teen Patti Lucky with JazzCash or EasyPaisa in Pakistan. Step-by-step top-up, proofs, and common deposit fixes.",
  alternates: { canonical: `${SITE.origin}${ROUTES.deposit}` },
  openGraph: {
    title: "Deposit Money in Teen Patti Lucky",
    description: "JazzCash & EasyPaisa deposit guide for Teen Patti Lucky Pakistan.",
    url: `${SITE.origin}${ROUTES.deposit}`,
    images: [{ url: `${SITE.origin}${SITE.images.deposit}`, width: 800, height: 800, alt: "Deposit in Teen Patti Lucky" }],
  },
};

export default function DepositPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to deposit money in Teen Patti Lucky",
    description: "Add PKR to Teen Patti Lucky using JazzCash or EasyPaisa.",
    step: [
      { "@type": "HowToStep", name: "Open wallet", text: "Launch Teen Patti Lucky and open Add Cash / Wallet." },
      { "@type": "HowToStep", name: "Choose method", text: "Select JazzCash or EasyPaisa." },
      { "@type": "HowToStep", name: "Enter amount", text: "Type a PKR amount you can afford and confirm." },
      { "@type": "HowToStep", name: "Complete payment", text: "Approve the wallet payment and wait for chips to credit." },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Deposit Guide" }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How to Deposit Money in Teen Patti Lucky
      </h1>
      <Image
        src={SITE.images.deposit}
        alt="Teen Patti Lucky deposit money screen for JazzCash and EasyPaisa"
        width={720}
        height={720}
        className="w-full max-w-md mx-auto mb-8 rounded-2xl border border-gray-800 object-contain bg-[#0A1F2E]"
        priority
        sizes="(max-width: 768px) 100vw, 448px"
      />
      <p className="text-gray-300 leading-relaxed mb-8">
        Depositing on Teen Patti Lucky is how Pakistani players move PKR from JazzCash or EasyPaisa into table chips. This guide focuses on a careful first top-up so you avoid overpaying and keep a payment proof if credit is delayed.
      </p>

      <section className="mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">Before you deposit</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Install the latest APK from our <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link>.</li>
          <li>Finish phone OTP registration.</li>
          <li>Decide a small starter amount — enough for a few low tables, not a week’s budget.</li>
          <li>Use a JazzCash or EasyPaisa account in your own name when possible.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-accent mb-4">JazzCash / EasyPaisa deposit steps</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>Open Teen Patti Lucky and tap the wallet or <strong className="text-white">Add Cash</strong> button.</li>
          <li>Select <strong className="text-white">JazzCash</strong> or <strong className="text-white">EasyPaisa</strong>.</li>
          <li>Enter the PKR amount and confirm the on-screen summary.</li>
          <li>Approve the payment in your wallet app or USSD/SMS flow.</li>
          <li>Return to Teen Patti Lucky and wait for the balance update. Screenshot the success page.</li>
        </ol>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">If chips do not appear</h2>
        <p>Wait 10–15 minutes on a stable connection. Restart the app once. If the balance is still wrong, open in-app support with your payment screenshot, approximate time, and amount. Do not send a second deposit until support confirms the first one.</p>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Deposit tips that protect your bankroll</h2>
        <p>Top up only what you plan to play that day. Linking deposit size to session length keeps Teen Patti Lucky entertainment-focused. When you later cash out, use the same verified wallet where possible — see the <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw guide</Link>.</p>
      </section>

      <div className="text-center py-6 space-y-4">
        <p className="text-gray-400 text-sm">Need the APK first?</p>
        <DownloadCTA />
      </div>
    </article>
  );
}
