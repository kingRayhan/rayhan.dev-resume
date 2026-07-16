type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="scroll-mt-8 border-b border-border pb-2 text-xs font-medium uppercase tracking-widest text-muted"
    >
      {children}
    </h2>
  );
}
