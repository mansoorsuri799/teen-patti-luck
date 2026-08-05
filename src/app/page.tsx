import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import DownloadCTA from "@/components/DownloadCTA";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
  },
  description:
    "Teen Patti Lucky APK Download for Pakistan — latest V1.232, JazzCash & EasyPaisa cash-out, Classic Teen Patti, Muflis, AK47 & more. Free Android guide.",
  alternates: { canonical: SITE.origin },
  openGraph: {
    title: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
    description:
      "Download Teen Patti Lucky APK for Pakistan. Play Teen Patti tables and withdraw via JazzCash & EasyPaisa.",
    url: SITE.origin,
    images: [
      {
        url: `${SITE.origin}${SITE.logo}`,
        width: 1024,
        height: 1024,
        alt: "Teen Patti Lucky APK icon for Pakistan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
    description:
      "Download Teen Patti Lucky APK for Pakistan. JazzCash & EasyPaisa ready.",
    images: [`${SITE.origin}${SITE.logo}`],
  },
};

const faqs = [
  {
    q: "What is Teen Patti Lucky?",
    a: "Teen Patti Lucky (also called 3 Patti Lucky) is an Android card-gaming app popular with Pakistani players. It offers Classic Teen Patti and related modes plus wallet tools for JazzCash and EasyPaisa.",
  },
  {
    q: "How do I download Teen Patti Lucky APK in Pakistan?",
    a: "Open teenpattiluckygame.com.pk, tap Download, allow installs from unknown sources if prompted, then install the APK. Prefer Android 5.0 or newer and a stable mobile network.",
  },
  {
    q: "Is Teen Patti Lucky free to install?",
    a: "Yes. The APK download is free. In-app play may require a wallet balance if you join cash tables. Always review table stakes before you sit.",
  },
  {
    q: "Can I withdraw with JazzCash or EasyPaisa?",
    a: "Pakistani players commonly cash out through JazzCash or EasyPaisa after account verification. See our withdraw guide for the full checklist.",
  },
  {
    q: "What is the minimum withdrawal?",
    a: "Many players report a practical minimum around PKR 500, but the live app wallet screen is the source of truth for your account.",
  },
  {
    q: "Does Teen Patti Lucky work on iPhone?",
    a: "The primary package covered here is the Android APK. iOS users should check official store availability rather than sideloading unknown files.",
  },
  {
    q: "Is there a Teen Patti Lucky mod APK?",
    a: "Avoid mod or unlimited-chip APKs. They often steal accounts or break withdrawals. Use only the clean package linked from this site.",
  },
  {
    q: "How do I contact support?",
    a: `Use in-app live chat first for wallet issues. You can also email ${SITE.email} for website guide questions.`,
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: SITE.origin,
        name: SITE.name,
        description:
          "Teen Patti Lucky APK download and JazzCash EasyPaisa guides for Pakistan",
        inLanguage: "en-PK",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.origin}/#webpage`,
        url: SITE.origin,
        name: `Teen Patti Lucky APK Download Pakistan ${SITE.year}`,
        isPartOf: { "@id": `${SITE.origin}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE.origin}${SITE.logo}`,
          width: 1024,
          height: 1024,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#organization`,
        name: SITE.name,
        url: SITE.origin,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.origin}${SITE.logo}`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
        email: SITE.email,
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "HowTo",
        name: "How to download and install Teen Patti Lucky on Android",
        description:
          "Install Teen Patti Lucky APK safely on an Android phone in Pakistan.",
        totalTime: "PT5M",
        step: [
          {
            "@type": "HowToStep",
            name: "Open the download page",
            text: `Visit ${SITE.domain}/download/teen-patti-lucky and tap DOWNLOAD NOW.`,
          },
          {
            "@type": "HowToStep",
            name: "Allow unknown sources if needed",
            text: "Enable install permission for your browser or file manager.",
          },
          {
            "@type": "HowToStep",
            name: "Install the APK",
            text: "Open the downloaded Teen Patti Lucky APK and confirm install.",
          },
          {
            "@type": "HowToStep",
            name: "Register and verify",
            text: "Create your account with a Pakistani mobile number and complete OTP verification.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Teen Patti Lucky
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-accent">
                APK Download for Pakistan {SITE.year}
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">
                Teen Patti Lucky
              </Link>{" "}
              brings Classic Teen Patti and popular variants to Android with wallets that Pakistani players already use. This guide covers a clean APK install, registration, JazzCash and EasyPaisa flows, and the habits that keep sessions safer.
            </p>

            <div className="flex justify-center my-8">
              <DownloadCTA />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-[#0A1F2E] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.downloadsDisplay}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1F2E] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.version}</div>
                <div className="text-gray-400 text-sm">Latest APK</div>
              </div>
              <div className="bg-[#0A1F2E] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/teen-patti-lucky.webp"
              alt="Teen Patti Lucky – 3 Patti Lucky APK icon for Pakistan"
              title="Teen Patti Lucky APK Download Pakistan"
              width={512}
              height={512}
              className="object-contain drop-shadow-2xl w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 280px, 360px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Teen Patti Lucky APK Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", SITE.name],
                ["Also Known As", SITE.shortName],
                ["Version", SITE.version],
                ["Category", "Cards / Game"],
                ["Size", SITE.fileSize],
                ["Platform", SITE.androidMin],
                ["Price", "Free"],
                ["Payments", "JazzCash, EasyPaisa"],
              ].map(([k, v]) => (
                <tr key={k} className="bg-[#0A1F2E]/50">
                  <td className="py-4 px-6 font-medium text-white">{k}</td>
                  <td className="py-4 px-6 text-gray-200">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <article className="px-4 md:px-8 max-w-7xl mx-auto space-y-14 pb-16 prose-invert">
        <section id="what-is">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">What Is Teen Patti Lucky?</h2>
          <div className="md:flex md:gap-8 md:items-start mb-6">
            <div className="flex-1 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Teen Patti Lucky is an Android Teen Patti app built for quick tables, familiar hand rankings, and mobile wallets used across Pakistan. Players open the lobby, pick a stake they can afford, and play Classic or variant modes without needing a desktop casino account.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The product sits in the same search space as “3 Patti Lucky Pakistan,” so this site uses both names clearly. What matters for ranking and for users is accurate install help, honest payment guidance, and links to deeper deposit and withdraw pages instead of vague promises.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you are new, start with low tables after a small JazzCash or EasyPaisa top-up. That approach lets you learn timing and pot control before you risk larger balances on Teen Patti Lucky.
              </p>
            </div>
            <Image
              src={SITE.images.pakistan}
              alt="Teen Patti Lucky Pakistan APK promotional artwork"
              width={360}
              height={360}
              className="mt-6 md:mt-0 w-full max-w-[280px] mx-auto md:mx-0 rounded-2xl object-contain"
              sizes="280px"
            />
          </div>
        </section>

        <section id="features">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Teen Patti Lucky Features Pakistani Players Use Most</h2>
          <figure className="mb-8">
            <Image
              src={SITE.images.game}
              alt="Teen Patti Lucky game lobby showing Teen Patti, Rummy, Dragon vs Tiger and more"
              width={960}
              height={540}
              className="w-full rounded-2xl border border-gray-800 object-cover"
              sizes="(max-width: 1280px) 100vw, 960px"
            />
            <figcaption className="text-gray-500 text-sm mt-2">
              Teen Patti Lucky lobby on Android — games, wallet balance, and promotions in one place.
            </figcaption>
          </figure>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Classic Teen Patti tables</h3>
              <p className="leading-relaxed">
                Classic mode follows the three-card format most players already know. Blind and seen play, pot growth, and showdowns stay readable on a phone screen, which helps beginners stay oriented during busy rounds on Teen Patti Lucky.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Popular variants in one lobby</h3>
              <p className="leading-relaxed">
                Modes such as Muflis, AK47, Joker, and Hukam appear beside Classic so you can switch without leaving the app. Each variant changes hand strength logic, so read the table rules before your first bet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">JazzCash & EasyPaisa wallets</h3>
              <p className="leading-relaxed">
                Pakistani players usually fund and cash out with JazzCash or EasyPaisa. Matching your wallet name to your verified mobile number reduces failed withdrawals later. Full steps live on our{" "}
                <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and{" "}
                <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> guides.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Daily rewards and referral value</h3>
              <p className="leading-relaxed">
                Login rewards and referral offers can add small top-ups when used carefully. Treat bonuses as optional chips, not guaranteed income — see the{" "}
                <Link href={ROUTES.blogBonuses} className="text-accent hover:underline">bonuses guide</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Light APK footprint</h3>
              <p className="leading-relaxed">
                At about {SITE.fileSize}, Teen Patti Lucky installs cleanly on mid-range Android phones common in Pakistan. Close background apps before install if storage is tight.
              </p>
            </div>
          </div>
        </section>

        <section id="bonuses">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Bonuses & Rewards on Teen Patti Lucky</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <Image
              src={SITE.images.bonus}
              alt="Teen Patti Lucky user bonus and welcome rewards"
              width={400}
              height={400}
              className="w-full rounded-xl border border-gray-800 object-contain bg-[#0A1F2E]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <Image
              src={SITE.images.spin}
              alt="Teen Patti Lucky spin wheel daily reward"
              width={400}
              height={400}
              className="w-full rounded-xl border border-gray-800 object-contain bg-[#0A1F2E]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <Image
              src={SITE.images.share}
              alt="Teen Patti Lucky share and earn referral bonus"
              width={400}
              height={400}
              className="w-full rounded-xl border border-gray-800 object-contain bg-[#0A1F2E]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome chips, daily check-ins, recharge extras, and referral credits are the usual Teen Patti Lucky reward types. Offers change, so always read the in-app banner before you claim.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Bonuses help new players explore tables with less stress, but wagering or expiry rules may apply. Responsible players claim what they understand and skip offers that push oversized deposits.
          </p>
        </section>

        <section id="install">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">How to Download & Install Teen Patti Lucky</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Open <strong className="text-white">{SITE.domain}</strong> on your Android browser.</li>
            <li>Tap <strong className="text-white">DOWNLOAD NOW</strong> and wait for the APK file.</li>
            <li>If Android blocks the install, allow your browser or file manager in Install unknown apps.</li>
            <li>Open the APK, confirm install, then launch Teen Patti Lucky.</li>
            <li>Register with your Pakistani mobile number and complete OTP verification.</li>
          </ol>
          <p className="text-gray-300 mt-4">
            Need screenshots-level detail? Visit the{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link>.
            Prefer a large screen? See{" "}
            <Link href={ROUTES.pc} className="text-accent hover:underline">Teen Patti Lucky for PC</Link>.
          </p>
        </section>

        <section id="register-login">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Registration & Login</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most accounts start with a Pakistani phone number and OTP. Keep that SIM active — it is often required again for withdrawals and password resets on Teen Patti Lucky.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Full walkthrough:{" "}
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              create account and login guide
            </Link>
            .
          </p>
        </section>

        <section id="payments">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Deposit, Withdrawal & Payment Methods</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Add cash only from a wallet you control. JazzCash and EasyPaisa are the practical choices for most Pakistani players using Teen Patti Lucky. Save payment screenshots until chips appear.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Withdrawals usually need a verified profile and a matching wallet number. For exact steps use{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">Deposit Money in Teen Patti Lucky</Link>{" "}
            and{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline">Withdraw Money from Teen Patti Lucky</Link>.
          </p>
        </section>

        <section id="troubleshooting">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Troubleshooting Common Teen Patti Lucky Issues</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li><strong className="text-white">Install blocked:</strong> enable unknown sources for the downloading app, then retry.</li>
            <li><strong className="text-white">App crash:</strong> clear cache, free storage, reinstall the latest APK.</li>
            <li><strong className="text-white">Chips missing after deposit:</strong> wait a few minutes, then contact support with the receipt.</li>
            <li><strong className="text-white">Withdrawal pending:</strong> confirm CNIC/profile details and wallet number match.</li>
            <li><strong className="text-white">Login OTP delay:</strong> check SMS inbox, network signal, and that the SIM is not dual-registered incorrectly.</li>
          </ul>
        </section>

        <section id="tips">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Tips for Smarter Teen Patti Lucky Play</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Set a session budget in PKR before you open a table. Leave when the budget is gone — chasing losses is the fastest way to empty a JazzCash wallet.
          </p>
          <p className="text-gray-300 leading-relaxed">
            More tactics:{" "}
            <Link href={ROUTES.blogTips} className="text-accent hover:underline">
              10 smart tips for Teen Patti Lucky
            </Link>
            .
          </p>
        </section>

        <section id="pros-cons">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0A1F2E] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Pros</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Familiar Teen Patti rules for Pakistani players</li>
                <li>JazzCash & EasyPaisa friendly wallet flow</li>
                <li>Multiple variants in one APK</li>
                <li>Moderate install size for mid-range phones</li>
              </ul>
            </div>
            <div className="bg-[#0A1F2E] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Cons</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Android sideload requires care</li>
                <li>Real-money play can create losses</li>
                <li>Verification needed before smooth withdrawals</li>
                <li>iOS not the focus of this APK guide</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="safety">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Safety & Responsible Play</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Download only from trusted links, never share OTPs, and treat Teen Patti Lucky as entertainment with a risk of loss. Local rules can vary — read our{" "}
            <Link href={ROUTES.blogSafety} className="text-accent hover:underline">safety & legal overview</Link>{" "}
            and play only with money you can afford to lose.
          </p>
        </section>

        <section id="support">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Customer Support</h2>
          <p className="text-gray-300 leading-relaxed">
            Wallet and gameplay issues clear fastest through in-app chat with screenshots attached. For website guide questions, email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
              {SITE.email}
            </a>{" "}
            or use the{" "}
            <Link href={ROUTES.contact} className="text-accent hover:underline">contact page</Link>.
          </p>
        </section>

        <section id="faq">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Teen Patti Lucky FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-[#0A1F2E] rounded-xl border border-gray-800 p-5 group">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-accent ml-3 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-300 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="conclusion" className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Ready to Try Teen Patti Lucky?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Teen Patti Lucky gives Pakistani Android users a focused Teen Patti lobby with JazzCash and EasyPaisa support. Download the clean APK, verify your number, start small, and use our deposit and withdraw guides when you move real PKR.
          </p>
          <DownloadCTA />
        </section>
      </article>
    </>
  );
}
