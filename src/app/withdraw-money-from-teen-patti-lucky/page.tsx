import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadCTA from "@/components/DownloadCTA";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Withdraw Money from Teen Patti Lucky — JazzCash Guide",
  description:
    "Withdraw money from Teen Patti Lucky to JazzCash or EasyPaisa in Pakistan. Verification tips, minimum cash-out notes, and pending withdrawal fixes.",
  alternates: { canonical: `${SITE.origin}${ROUTES.withdraw}` },
  openGraph: {
    title: "Withdraw Money from Teen Patti Lucky",
    description: "Cash out Teen Patti Lucky winnings via JazzCash or EasyPaisa.",
    url: `${SITE.origin}${ROUTES.withdraw}`,
    images: [{ url: `${SITE.origin}${SITE.images.withdraw}`, width: 800, height: 800, alt: "Withdraw from Teen Patti Lucky" }],
  },
};

export default function WithdrawPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to withdraw money from Teen Patti Lucky",
    step: [
      { "@type": "HowToStep", name: "Verify profile", text: "Complete any required ID or mobile verification." },
      { "@type": "HowToStep", name: "Open withdrawal", text: "Go to Wallet → Withdraw in Teen Patti Lucky." },
      { "@type": "HowToStep", name: "Choose wallet", text: "Select JazzCash or EasyPaisa and enter matching details." },
      { "@type": "HowToStep", name: "Confirm", text: "Submit the amount and track status until PKR arrives." },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Withdraw Guide" }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How to Withdraw Money from Teen Patti Lucky
      </h1>
      <Image
        src={SITE.images.withdraw}
        alt="Teen Patti Lucky withdraw money screen for JazzCash and EasyPaisa"
        width={720}
        height={720}
        className="w-full max-w-md mx-auto mb-8 rounded-2xl border border-gray-800 object-contain bg-[#0A1F2E]"
        priority
        sizes="(max-width: 768px) 100vw, 448px"
      />
      <p className="text-gray-300 leading-relaxed mb-8">
        A smooth Teen Patti Lucky withdrawal usually depends on verification and matching wallet details more than on luck. This page explains the Pakistani JazzCash and EasyPaisa cash-out path and what to check when a request stays pending.
      </p>

      <section className="mb-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Withdrawal requirements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Account registered with an active Pakistani mobile number</li>
          <li>Profile or CNIC verification completed if the app requests it</li>
          <li>Withdrawable balance at or above the in-app minimum (often near PKR 500)</li>
          <li>JazzCash or EasyPaisa number that matches your verified identity when required</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-accent mb-4">Step-by-step cash-out</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>Open Teen Patti Lucky → <strong className="text-white">Wallet</strong> → <strong className="text-white">Withdraw</strong>.</li>
          <li>Choose JazzCash or EasyPaisa.</li>
          <li>Enter the amount and double-check the wallet number.</li>
          <li>Submit and save the confirmation screen.</li>
          <li>Wait for processing; many requests complete the same day once verified.</li>
        </ol>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Pending or failed withdrawals</h2>
        <p>
          Pending status often means verification is incomplete or the wallet number does not match. Fix profile details first, then message in-app support with your request ID. Avoid creating multiple withdrawals for the same balance.
        </p>
        <p>
          If you still need to add funds later, use the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>. For safety context, read{" "}
          <Link href={ROUTES.blogSafety} className="text-accent hover:underline">Is Teen Patti Lucky safe in Pakistan?</Link>
        </p>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Responsible cash-out habits</h2>
        <p>
          Withdraw wins you do not plan to replay. Keeping entertainment money separate from rent or bills is the simplest way to enjoy Teen Patti Lucky without financial stress.
        </p>
      </section>

      <div className="text-center py-6">
        <DownloadCTA />
      </div>
    </article>
  );
}
