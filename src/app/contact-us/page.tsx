import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Teen Patti Lucky Support",
  description:
    "Contact Teen Patti Lucky website support for download, deposit, or guide questions. Email support@teenpattiluckygame.com.pk.",
  alternates: { canonical: `${SITE.origin}${ROUTES.contact}` },
};

export default function ContactPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Need help with a Teen Patti Lucky guide on this site? Send a message below or email{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>.
        For live wallet issues inside the app, use in-app chat with screenshots.
      </p>
      <ContactForm />
    </article>
  );
}
