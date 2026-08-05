import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.domain} — how we handle information on the Teen Patti Lucky guide site.`,
  alternates: { canonical: `${SITE.origin}${ROUTES.privacy}` },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>Last updated: August 5, {SITE.year}</p>
        <p>
          {SITE.domain} (“we”) provides informational guides about Teen Patti Lucky. We aim to collect as little personal data as practical.
        </p>
        <h2 className="text-xl font-semibold text-accent pt-2">Information we may collect</h2>
        <p>
          If you use the contact form, we receive the details you submit (such as name, email, and message). Server logs may include IP address and browser type for security and performance.
        </p>
        <h2 className="text-xl font-semibold text-accent pt-2">How we use information</h2>
        <p>
          Contact submissions are used only to reply to your request. Analytics tools, if enabled, help us understand aggregated traffic — not to sell personal profiles.
        </p>
        <h2 className="text-xl font-semibold text-accent pt-2">Cookies</h2>
        <p>
          Essential cookies may be used for site function. Third-party analytics cookies load only when configured by the site operator.
        </p>
        <h2 className="text-xl font-semibold text-accent pt-2">Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>
        </p>
      </div>
    </article>
  );
}
