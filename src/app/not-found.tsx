import Link from "next/link";
import BlockMotif from "@/components/BlockMotif";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container-text flex flex-col items-center">
        <BlockMotif scene="meet" />
        <h1 className="t-display mt-8">We couldn&rsquo;t find that page.</h1>
        <p className="t-lead-airy mt-4 max-w-[520px]">
          It may have moved, or the link may be wrong.
        </p>
        <Link href="/" className="btn t-button mt-8">
          Go home
        </Link>
      </div>
    </section>
  );
}
