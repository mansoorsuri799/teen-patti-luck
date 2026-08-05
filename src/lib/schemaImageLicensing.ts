import { SITE } from "./site";

export const SITE_ORIGIN = SITE.origin;

export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: SITE.name,
  url: SITE_ORIGIN,
} as const;

export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: `© ${SITE.year} ${SITE.name}. All rights reserved.`,
  creditText: SITE.name,
} as const;
