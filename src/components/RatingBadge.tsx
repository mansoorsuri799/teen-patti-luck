import { SITE } from "@/lib/site";

/** Visible rating UI — must match SoftwareApplication AggregateRating schema */
export default function RatingBadge() {
  return (
    <div
      className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-[#0A1F2E] border border-gray-700 px-4 py-2 text-sm"
      aria-label={`${SITE.ratingValue} out of 5 stars from ${SITE.ratingCountDisplay} ratings. Free Android game.`}
    >
      <span className="text-accent font-bold text-lg">{SITE.ratingValue}</span>
      <span className="text-accent tracking-tight" aria-hidden="true">
        ★★★★☆
      </span>
      <span className="text-gray-400">({SITE.ratingCountDisplay})</span>
      <span className="text-gray-600">·</span>
      <span className="text-gray-300">Free</span>
      <span className="text-gray-600">·</span>
      <span className="text-gray-300">Android</span>
      <span className="text-gray-600">·</span>
      <span className="text-gray-300">Game</span>
    </div>
  );
}
