import Image from "next/image";
import { resume } from "@/data/resume";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "open-source", label: "Open Source" },
  { id: "education", label: "Education" },
];

export function ResumeSidebar() {
  const { contact } = resume;

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      <div className="flex flex-col gap-8 px-6 py-10 lg:px-8 lg:py-14">
        <header className="space-y-4">
          <Image
            src={resume.photo}
            alt={resume.name}
            width={88}
            height={88}
            priority
            className="size-[5.5rem] rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{resume.name}</h1>
            <p className="mt-1 text-sm leading-relaxed text-muted">{resume.title}</p>
          </div>
        </header>

        <nav className="hidden border-y border-border py-4 lg:block">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <ul className="space-y-1.5 text-muted">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-accent">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-accent">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Skills
            </p>
            <dl className="space-y-3">
              {Object.entries(resume.skills).map(([category, items]) => (
                <div key={category}>
                  <dt className="text-xs text-foreground">{category}</dt>
                  <dd className="mt-1 text-xs leading-5 text-muted">
                    {items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-full border border-accent/30 px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent-soft"
        >
          Download PDF
        </a>
      </div>
    </aside>
  );
}
