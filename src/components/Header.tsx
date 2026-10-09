import Link from "next/link";
import Logo from "./Logo";

/* Frosted Bright Snow bar (not the Nightgrass nav): the wordmark is dark green and
   would disappear on a Nightgrass bar, and it must not be recolored. */
export default function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(247, 247, 247, 0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="container-grid flex h-16 items-center justify-between px-6">
        <Link href="/" aria-label="FWENDS home" className="flex items-center">
          <Logo className="w-[104px] sm:w-[120px]" />
        </Link>
        <Link href="/#waitlist" className="btn t-button">
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
