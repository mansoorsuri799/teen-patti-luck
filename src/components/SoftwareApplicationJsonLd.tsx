import Script from "next/script";
import { getSoftwareApplicationSchema } from "@/lib/softwareApplicationSchema";

/** Emit on homepage + primary download page only */
export default function SoftwareApplicationJsonLd() {
  return (
    <Script
      id="software-application-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSoftwareApplicationSchema()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
