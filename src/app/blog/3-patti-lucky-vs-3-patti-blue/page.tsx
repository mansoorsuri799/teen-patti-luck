import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { ROUTES, SITE } from "@/lib/site";

const slug = "3-patti-lucky-vs-3-patti-blue";
const title = "3 Patti Lucky vs 3 Patti Blue — Comparison 2026";
const description =
  "3 Patti Lucky vs 3 Patti Blue for Pakistani players: games, payments, bonuses, and which APK fits your play style.";

export const metadata: Metadata = {
  title: "3 Patti Lucky vs 3 Patti Blue Comparison 2026",
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
        articleBody="Side-by-side comparison of 3 Patti Lucky and 3 Patti Blue for Pakistani Android players covering games, wallets, and who should choose which app."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: "Lucky vs Blue" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h1>
      <div className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          Pakistani players often search both <strong className="text-white">3 Patti Lucky</strong> (Teen Patti Lucky) and{" "}
          <strong className="text-white">3 Patti Blue</strong> when choosing an Android Teen Patti APK. This comparison focuses on practical differences — not hype — so you can pick the app that matches how you play.
        </p>

        <h2 className="text-2xl font-bold text-accent">Quick comparison table</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="min-w-full text-sm">
            <thead className="bg-[#0A1F2E] text-accent">
              <tr>
                <th className="text-left p-3">Point</th>
                <th className="text-left p-3">3 Patti Lucky</th>
                <th className="text-left p-3">3 Patti Blue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white">Focus</td>
                <td className="p-3">Teen Patti + multi-game lobby</td>
                <td className="p-3">Teen Patti-led blue-brand lobby</td>
              </tr>
              <tr className="bg-[#0A1F2E]/40">
                <td className="p-3 text-white">Payments (PK)</td>
                <td className="p-3">JazzCash / EasyPaisa common</td>
                <td className="p-3">Similar wallet-style cashouts (check in-app)</td>
              </tr>
              <tr>
                <td className="p-3 text-white">Bonuses</td>
                <td className="p-3">Login, spin, referral style offers</td>
                <td className="p-3">Own promo calendar — compare live banners</td>
              </tr>
              <tr className="bg-[#0A1F2E]/40">
                <td className="p-3 text-white">Best for</td>
                <td className="p-3">Players following Teen Patti Lucky guides on this site</td>
                <td className="p-3">Players already used to Blue branding</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-accent">Games and lobby feel</h2>
        <p>
          Both apps sit in the Teen Patti / 3 Patti category with extra tables such as variants, casual casino titles, or side games. 3 Patti Lucky’s lobby is documented on this site with deposit, withdraw, and bonus help tailored to that APK. Blue may look familiar if you have used it before, but menus and offer names will differ.
        </p>

        <h2 className="text-2xl font-bold text-accent">Payments and trust habits</h2>
        <p>
          For either app, use your own JazzCash or EasyPaisa wallet, finish verification before large withdrawals, and avoid mod APKs. On this website we only publish full payment walkthroughs for Teen Patti Lucky — see{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit
          </Link>{" "}
          and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            withdraw
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-accent">Which should you choose?</h2>
        <p>
          Choose <strong className="text-white">3 Patti Lucky</strong> if you want one APK with clear Pakistani guides for install, login, IP errors, and bonuses on {SITE.domain}. Choose{" "}
          <strong className="text-white">3 Patti Blue</strong> only if you already prefer that brand and understand its own support path — do not mix deposit receipts across apps.
        </p>
        <p>
          Ready to try Lucky?{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            Download Teen Patti Lucky APK
          </Link>{" "}
          and follow{" "}
          <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
            register and login
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
