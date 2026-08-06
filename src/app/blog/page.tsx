import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teen Patti Lucky Blog — Guides & Tips 2026",
  description:
    "Teen Patti Lucky blog for Pakistan: four focused guides on safety, account login, bonuses, and winning tips that support the main APK pages.",
  alternates: { canonical: `${SITE.origin}${ROUTES.blog}` },
};

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Teen Patti Lucky Blog</h1>
      <p className="text-gray-300 mb-10 text-lg">
        Focused guides for Pakistani players — safety, login, bonuses, and smarter Teen Patti habits.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-secondary px-8 py-8 rounded-lg border border-gray-700 hover:border-accent transition-all"
          >
            <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readMin} min read</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
