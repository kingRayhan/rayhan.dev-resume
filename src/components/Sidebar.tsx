import Image from "next/image";
import { resume } from "@/data/resume";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "open-source", label: "Open Source" },
  { id: "education", label: "Education" },
];

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto print:static print:h-auto">
      <div className="flex flex-col gap-8 p-8 lg:py-12 lg:pr-10 lg:pl-12">
        <header>
          <Image
            src={resume.photo}
            alt={resume.name}
            width={120}
            height={120}
            priority
            className="mb-5 size-28 rounded-2xl border border-border object-cover shadow-sm"
          />
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
            Resume
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {resume.name}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">{resume.title}</p>
        </header>

        <nav className="hidden lg:block print:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-5 text-sm">
          <ContactBlock />
          <SkillsBlock />
        </div>

        <div className="flex flex-wrap gap-2 print:hidden">
          <a
            href={resume.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
      </div>
    </aside>
  );
}

function ContactBlock() {
  const { contact } = resume;

  return (
    <section>
      <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
        Contact
      </h2>
      <ul className="space-y-2 text-muted">
        <li>
          <a href={`mailto:${contact.email}`} className="hover:text-foreground">
            {contact.email}
          </a>
        </li>
        <li>
          <a href={`tel:${contact.phone}`} className="hover:text-foreground">
            {contact.phone}
          </a>
        </li>
        <li>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

function SkillsBlock() {
  return (
    <section className="hidden lg:block print:block">
      <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
        Skills
      </h2>
      <div className="space-y-4">
        {Object.entries(resume.skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-1.5 text-xs font-medium text-foreground">{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
