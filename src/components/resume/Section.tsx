type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-10">
      <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent underline-offset-4 transition-opacity hover:underline ${className}`}
    >
      {children}
    </a>
  );
}
