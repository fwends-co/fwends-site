import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-parchment" style={{ padding: "64px 24px" }}>
      <div className="container-grid flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="t-body-strong text-heading">FWENDS</p>
          <p className="t-caption mt-2 max-w-sm">
            Meet in real life. Keep what you make together.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col md:items-end">
            <li>
              <a href="mailto:hello@fwends.co" className="t-dense-link text-heading">
                hello@fwends.co
              </a>
            </li>
            <li>
              <Link href="/privacy" className="t-dense-link text-heading">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="t-dense-link text-heading">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Legal line uses Carbon Black, not the system's Ink Muted 48 (#7a7a7a),
          which is only 4.0:1 on Parchment and fails WCAG AA at 12px. */}
      <p className="t-fine container-grid mt-10 border-t border-black/10 pt-4">
        &copy; 2026 Fwends LLC
      </p>
    </footer>
  );
}
