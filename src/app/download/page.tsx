import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadCTA from "@/components/DownloadCTA";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Teen Patti Lucky APK Hub",
  description:
    "Download hub for Teen Patti Lucky APK in Pakistan — official install guide, ratings, and Android setup.",
  alternates: { canonical: `${SITE.origin}${ROUTES.downloadHub}` },
};

export default function DownloadHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Download Hub" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Teen Patti Lucky APK Files
      </h1>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Get the Teen Patti Lucky Android APK and follow the Pakistan-ready install guide.
      </p>
      <Link
        href={ROUTES.download}
        className="flex flex-col sm:flex-row gap-6 items-center bg-[#0A1F2E] border border-gray-700 hover:border-accent rounded-2xl p-6 transition-colors"
      >
        <Image
          src="/teen-patti-lucky.webp"
          alt="Teen Patti Lucky APK"
          width={96}
          height={96}
          className="rounded-xl object-contain"
        />
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-xl font-bold text-accent mb-1">Teen Patti Lucky APK</h2>
          <p className="text-gray-400 text-sm mb-3">
            {SITE.version} · {SITE.fileSize} · Android APK
          </p>
          <span className="text-white font-medium underline decoration-accent">
            Open download page →
          </span>
        </div>
      </Link>
      <div className="mt-8 flex justify-center">
        <DownloadCTA />
      </div>
    </div>
  );
}
