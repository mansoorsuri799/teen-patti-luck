import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Teen Patti Lucky — Pakistan APK Guide",
  description:
    "About teenpattiluckygame.com.pk: independent Teen Patti Lucky download guides, JazzCash help, and responsible-play resources for Pakistan.",
  alternates: { canonical: `${SITE.origin}${ROUTES.about}` },
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About Teen Patti Lucky Guides</h1>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">{SITE.domain}</strong> publishes practical Teen Patti Lucky (3 Patti Lucky) guides for Pakistani Android users. We focus on clear download steps, JazzCash and EasyPaisa wallet help, and safety habits — not income guarantees.
        </p>
        <p>
          Our pages are written for search intent around Teen Patti Lucky APK, deposits, withdrawals, and PC emulator play. Content is original and updated for {SITE.year}.
        </p>
        <p>
          Questions about a guide? Visit{" "}
          <Link href={ROUTES.contact} className="text-accent hover:underline">Contact Us</Link> or email{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>.
        </p>
        <p>
          Also read our <Link href={ROUTES.privacy} className="text-accent hover:underline">Privacy Policy</Link> and{" "}
          <Link href={ROUTES.disclaimer} className="text-accent hover:underline">Disclaimer</Link>.
        </p>
      </div>
    </article>
  );
}
