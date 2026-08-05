import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { ROUTES, SITE } from "@/lib/site";

const slug = "create-teen-patti-lucky-account-and-login";
const title = "How to Create a Teen Patti Lucky Account & Login";
const description =
  "Step-by-step Teen Patti Lucky registration and login guide for Pakistan. Phone signup, OTP, password reset, and login fixes.";

export const metadata: Metadata = {
  title: "Create Teen Patti Lucky Account & Login Guide",
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
        datePublished="2026-08-05"
        articleBody="Teen Patti Lucky registration and login walkthrough for Pakistani mobile numbers including OTP and troubleshooting."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: "Account & Login" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h1>
      <div className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          A stable Teen Patti Lucky account starts with a Pakistani mobile number you control. That same SIM often unlocks OTP login, password resets, and withdrawal checks, so avoid temporary numbers.
        </p>
        <h2 className="text-2xl font-bold text-accent">Create your account</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <Link href={ROUTES.download} className="text-accent hover:underline">Download and install</Link> Teen Patti Lucky.
          </li>
          <li>Open the app and choose Register / Sign up.</li>
          <li>Enter your mobile number and request the OTP.</li>
          <li>Set a strong password and confirm any profile fields the app requires.</li>
          <li>Log in once to verify the credentials work offline from the OTP screen.</li>
        </ol>
        <h2 className="text-2xl font-bold text-accent">Daily login tips</h2>
        <p>
          Save the account on one primary phone. If you switch devices, log out of unused sessions when the app allows it. Enable any in-app security lock if offered.
        </p>
        <h2 className="text-2xl font-bold text-accent">Fix login problems</h2>
        <p>
          <strong className="text-white">OTP not arriving:</strong> wait 60 seconds, check spam SMS folders, confirm signal, then retry.{" "}
          <strong className="text-white">Wrong password:</strong> use reset with the same SIM.{" "}
          <strong className="text-white">App stuck on splash:</strong> clear cache or reinstall the latest APK.
        </p>
        <p>
          After login, add a small balance only when ready — see the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>.
        </p>
      </div>
    </article>
  );
}
