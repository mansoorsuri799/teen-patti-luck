import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { ROUTES, SITE } from "@/lib/site";

const slug = "how-to-register-and-login-teen-patti-lucky";
const title = "How to Register and Login on Teen Patti Lucky";
const description =
  "Complete Teen Patti Lucky register and login guide for Pakistan: phone OTP signup, password login, and common login errors.";

export const metadata: Metadata = {
  title: "How to Register and Login Teen Patti Lucky",
  description,
  alternates: { canonical: `${SITE.origin}/blog/${slug}` },
  openGraph: { title, description, url: `${SITE.origin}/blog/${slug}` },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-08-06"
        articleBody="Teen Patti Lucky registration and login steps for Pakistani mobile users including OTP signup and troubleshooting."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: "Register & Login" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h1>
      <div className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          Registering on Teen Patti Lucky is the first step before bonuses, tables, or JazzCash deposits. This guide walks Pakistani players through signup and daily login so the same SIM stays linked to the account.
        </p>

        <h2 className="text-2xl font-bold text-accent">Before you register</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Install the latest APK from the{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              Teen Patti Lucky download page
            </Link>
            .
          </li>
          <li>Use an active Pakistani mobile number you control.</li>
          <li>Keep SMS available for OTP during signup and later withdrawals.</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent">How to register on Teen Patti Lucky</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open Teen Patti Lucky and tap <strong className="text-white">Register</strong> or <strong className="text-white">Sign up</strong>.</li>
          <li>Enter your mobile number in the correct country format.</li>
          <li>Request the OTP and enter the code from SMS.</li>
          <li>Create a strong password and confirm any profile fields the app asks for.</li>
          <li>Finish signup, then log out and log in once to confirm the password works.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent">How to login</h2>
        <p>
          On the login screen, enter the same mobile number and password. If the app offers guest play, convert or bind a real number before you deposit — guest sessions are harder to recover.
        </p>

        <h2 className="text-2xl font-bold text-accent">Common register / login problems</h2>
        <p>
          <strong className="text-white">OTP delay:</strong> wait one minute, check signal, then resend.{" "}
          <strong className="text-white">Wrong password:</strong> use Forgot Password in the app and
          complete the OTP reset on your Pakistani number.{" "}
          <strong className="text-white">App stuck:</strong> clear cache or reinstall the latest APK.
        </p>

        <p>
          After login, learn offers in the{" "}
          <Link href={ROUTES.blogBonuses} className="text-accent hover:underline">
            bonuses guide
          </Link>{" "}
          and add cash only when ready via the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit guide
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
