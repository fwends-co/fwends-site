import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="section">
      <article className="container-text legal">
        <p className="t-eyebrow">Legal</p>
        <h1 className="t-display mt-3">{title}</h1>
        <p className="t-caption mt-3">Last updated {updated}</p>
        <div className="mt-10 max-w-[720px]">{children}</div>
      </article>
    </div>
  );
}
