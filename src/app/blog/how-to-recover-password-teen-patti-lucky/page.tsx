import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { ROUTES, SITE } from "@/lib/site";

const slug = "how-to-recover-password-teen-patti-lucky";
const title = "How to Recover Password on Teen Patti Lucky";
const description =
  "Forgot your Teen Patti Lucky password? Step-by-step OTP recovery for Pakistani numbers, plus tips if SMS is delayed.";

export const metadata: Metadata = {
  title: "Recover Teen Patti Lucky Password (OTP Guide)",
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
        articleBody="Teen Patti Lucky password recovery using mobile OTP for Pakistani players with SMS delay fixes."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: "Recover Password" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h1>
      <div className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          If you forget the Teen Patti Lucky password, recovery almost always runs through the mobile number used at registration. Keeping that SIM active is the fastest way back into the account.
        </p>

        <h2 className="text-2xl font-bold text-accent">Password recovery steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open Teen Patti Lucky and go to the login screen.</li>
          <li>Tap <strong className="text-white">Forgot password</strong> / <strong className="text-white">Reset password</strong>.</li>
          <li>Enter the registered Pakistani mobile number.</li>
          <li>Request OTP and enter the SMS code.</li>
          <li>Set a new password, confirm it, then login immediately to verify.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent">If OTP does not arrive</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wait 60–90 seconds before requesting another code.</li>
          <li>Check SMS inbox and spam folders; confirm network signal.</li>
          <li>Switch between mobile data and Wi-Fi, then retry.</li>
          <li>Make sure you typed the same number used for original registration.</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent">After you recover access</h2>
        <p>
          Save the new password in a secure place. Avoid sharing OTPs with anyone claiming to be support. If login still fails after a successful reset, reinstall from the{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            official download guide
          </Link>{" "}
          and try again.
        </p>
        <p>
          New to the app? Start with{" "}
          <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
            how to register and login
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
