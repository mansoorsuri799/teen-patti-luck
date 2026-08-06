import { SITE } from "@/lib/site";

type Props = {
  className?: string;
  compact?: boolean;
};

/** Visible rating UI — must match SoftwareApplication aggregateRating exactly */
export default function AppRating({ className = "", compact = false }: Props) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${className}`}
      aria-label={`${SITE.ratingValue} out of 5 stars from ${SITE.ratingCountDisplay} ratings. Free Android game.`}
    >
      <span className="text-white font-semibold tabular-nums">{SITE.ratingValue}</span>
      <span className="text-accent tracking-tight" aria-hidden="true">
        ★★★★☆
      </span>
      <span className="text-gray-300">({SITE.ratingCountDisplay})</span>
      {!compact && (
        <>
          <span className="text-gray-600" aria-hidden="true">
            ·
          </span>
          <span className="text-gray-300">Free</span>
          <span className="text-gray-600" aria-hidden="true">
            ·
          </span>
          <span className="text-gray-300">Android</span>
          <span className="text-gray-600" aria-hidden="true">
            ·
          </span>
          <span className="text-gray-300">Game</span>
        </>
      )}
    </div>
  );
}
