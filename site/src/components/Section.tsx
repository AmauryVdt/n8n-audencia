interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
