import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { ROUTES, SITE } from "@/lib/site";

const slug = "fix-bonus-token-is-null-teen-patti-lucky";
const title = "Bonus Claim Says Token Is Null — How to Fix";
const description =
  "Teen Patti Lucky bonus claim shows token is null? Clear causes and fixes: re-login, update APK, network, and when to contact support.";

export const metadata: Metadata = {
  title: "Fix Teen Patti Lucky Bonus Token Is Null Error",
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
        articleBody="How to fix Teen Patti Lucky token is null error when claiming bonuses including session refresh and APK update steps."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: "Token Is Null Fix" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h1>
      <div className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          When Teen Patti Lucky shows “token is null” while claiming a bonus, the app usually lost a valid session token — not that the bonus itself disappeared forever. The fix is to refresh login state and retry on a clean network.
        </p>

        <h2 className="text-2xl font-bold text-accent">What “token is null” means</h2>
        <p>
          A token is a short-lived key that proves you are logged in. If it expires, clears, or fails to load, bonus claim APIs return null and the offer cannot attach to your wallet until the session is valid again.
        </p>

        <h2 className="text-2xl font-bold text-accent">Quick fixes that usually work</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Force-close Teen Patti Lucky and open it again.</li>
          <li>Log out, then log in with your registered number and password.</li>
          <li>Switch from Wi-Fi to mobile data (or the reverse) and reopen the bonus center.</li>
          <li>Clear the app cache, then claim the bonus once — do not tap repeatedly.</li>
          <li>
            Install the latest APK from the{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download guide
            </Link>{" "}
            if your build is outdated.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-accent">If the error continues</h2>
        <p>
          Screenshot the message, note the bonus name and time, and send it to in-app support. Avoid using mod APKs — they often break tokens and bonus claims. Review offer rules in our{" "}
          <Link href={ROUTES.blogBonuses} className="text-accent hover:underline">
            Teen Patti Lucky bonuses guide
          </Link>
          .
        </p>
        <p>
          Login problems first? Use{" "}
          <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
            register and login
          </Link>{" "}
          or{" "}
          <Link href={ROUTES.blogPassword} className="text-accent hover:underline">
            password recovery
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
