import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE.name} guides on ${SITE.domain} — entertainment risk, no income guarantees.`,
  alternates: { canonical: `${SITE.origin}${ROUTES.disclaimer}` },
};

export default function DisclaimerPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Disclaimer</h1>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          {SITE.domain} publishes educational guides about downloading and using Teen Patti Lucky. We do not operate the game servers, process player deposits, or guarantee winnings.
        </p>
        <p>
          Real-money card games involve financial risk. You can lose money. Play only with funds you can afford to lose and follow local laws that apply to you in Pakistan or elsewhere.
        </p>
        <p>
          App version numbers, bonuses, and payment limits can change without notice. Always confirm details inside the live Teen Patti Lucky application.
        </p>
        <p>
          Download links may lead to third-party distribution pages. Review permissions carefully before installing any APK.
        </p>
        <p>
          Questions: <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>
        </p>
      </div>
    </article>
  );
}
