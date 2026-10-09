import Image from "next/image";

/* The wordmark, exactly as supplied (2180×545 PNG, transparent). Never recolor,
   stretch or redraw it. `unoptimized` serves the original file so it stays crisp
   on high-density screens; height is derived from the width so it can't distort. */
export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/fwends-logo.png"
      alt="FWENDS"
      width={2180}
      height={545}
      priority={priority}
      unoptimized
      className={`h-auto ${className}`}
    />
  );
}
