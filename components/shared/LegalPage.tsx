import type { ReactNode } from "react";
import { PageHero } from "@/components/shared/PageHero";

type LegalPageProps = {
  crumb: string;
  title: ReactNode;
  lede: string;
  children: ReactNode;
  compactTitle?: boolean;
};

export function LegalPage({
  crumb,
  title,
  lede,
  children,
  compactTitle,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        crumb={crumb}
        title={title}
        lede={lede}
        compactTitle={compactTitle}
      />
      <section className="cream-section">
        <div className="legal-page">{children}</div>
      </section>
    </>
  );
}
