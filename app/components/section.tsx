import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: { title: string; children: ReactNode }) {
  return (
    <section>
      <div aria-hidden="true" className="hatch bleed" />
      <h2 className="rule-b py-2 text-[1.75rem] font-light tracking-tight">
        {title}
      </h2>
      <div className="py-6">{children}</div>
    </section>
  );
}
