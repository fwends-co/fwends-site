/* Simple square "blocks": the only illustration on the site. Decorative. */
const NIGHT = "var(--color-nightgrass)";
const FERN = "var(--color-fernwood)";

export type BlockScene = "meet" | "share" | "collect";

export default function BlockMotif({ scene }: { scene: BlockScene }) {
  return (
    <svg viewBox="0 0 120 48" width="120" height="48" aria-hidden="true" focusable="false">
      {scene === "meet" && (
        <>
          <rect x="4" y="4" width="40" height="40" rx="5" fill={NIGHT} />
          <rect x="76" y="4" width="40" height="40" rx="5" fill={FERN} />
        </>
      )}
      {scene === "share" && (
        <>
          <rect x="20" y="4" width="40" height="40" rx="5" fill={NIGHT} />
          <rect x="60" y="4" width="40" height="40" rx="5" fill={FERN} />
          <rect x="50" y="14" width="20" height="20" rx="5" fill="#f7f7f7" />
        </>
      )}
      {scene === "collect" && (
        <>
          <rect x="4" y="12" width="24" height="24" rx="5" fill={FERN} />
          <rect x="34" y="12" width="24" height="24" rx="5" fill={NIGHT} />
          <rect x="64" y="12" width="24" height="24" rx="5" fill={FERN} />
          <rect x="94" y="12" width="24" height="24" rx="5" fill={NIGHT} />
        </>
      )}
    </svg>
  );
}
