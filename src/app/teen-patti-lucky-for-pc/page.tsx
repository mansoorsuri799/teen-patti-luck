import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadCTA from "@/components/DownloadCTA";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teen Patti Lucky for PC — Play with Android Emulator",
  description:
    "Play Teen Patti Lucky on PC in Pakistan using BlueStacks or LDPlayer. Emulator setup, APK install, and performance tips for Windows.",
  alternates: { canonical: `${SITE.origin}${ROUTES.pc}` },
  openGraph: {
    title: "Teen Patti Lucky for PC",
    description: "Run Teen Patti Lucky APK on Windows with an Android emulator.",
    url: `${SITE.origin}${ROUTES.pc}`,
  },
};

export default function PcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to play Teen Patti Lucky on PC",
    step: [
      { "@type": "HowToStep", name: "Install emulator", text: "Install BlueStacks or LDPlayer on Windows." },
      { "@type": "HowToStep", name: "Download APK", text: "Get Teen Patti Lucky APK from the official download guide." },
      { "@type": "HowToStep", name: "Install in emulator", text: "Drag the APK into the emulator or use the install APK button." },
      { "@type": "HowToStep", name: "Login", text: "Sign in with your Teen Patti Lucky account and play." },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "PC Version" }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Teen Patti Lucky for PC (Windows Emulator Guide)
      </h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        There is no separate Windows installer for Teen Patti Lucky. Pakistani players who prefer a larger screen run the same Android APK inside an emulator such as BlueStacks or LDPlayer. This guide covers a stable setup without changing how JazzCash deposits work on your phone wallet.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-accent mb-4">PC requirements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Windows 10/11 with virtualization enabled in BIOS when required</li>
          <li>At least 8 GB RAM for comfortable emulator play</li>
          <li>Stable broadband for live Teen Patti Lucky tables</li>
          <li>The latest Teen Patti Lucky APK from our <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-accent mb-4">Install Teen Patti Lucky on an emulator</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>Install BlueStacks or LDPlayer from the emulator’s official site.</li>
          <li>Download the Teen Patti Lucky APK to your PC.</li>
          <li>Use <strong className="text-white">Install APK</strong> or drag the file into the emulator window.</li>
          <li>Open Teen Patti Lucky, log in, and optionally enable fullscreen.</li>
        </ol>
      </section>

      <section className="mb-10 space-y-3 text-gray-300">
        <h2 className="text-2xl font-bold text-accent">Performance tips</h2>
        <p>Allocate 2+ CPU cores and 3–4 GB RAM in emulator settings. Close heavy Chrome tabs while you play. If graphics stutter, switch the emulator renderer and keep Teen Patti Lucky updated.</p>
        <p>
          Payments still complete through your mobile JazzCash or EasyPaisa account — follow the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> guides on your phone if the emulator payment UI is awkward.
        </p>
      </section>

      <div className="text-center py-6">
        <DownloadCTA />
      </div>
    </article>
  );
}
