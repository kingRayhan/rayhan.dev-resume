import Image from "next/image";
import { resume } from "@/data/resume";
import { linkHover } from "./Section";

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
            className=" rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              {resume.name}
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {resume.title}
            </p>
          </div>
        </header>

        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm text-muted ${linkHover}`}
        >
          <DownloadIcon />
          Download PDF
        </a>

        <nav className="hidden border-y border-border py-4 lg:block">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm text-muted ${linkHover}`}
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
                <a href={`mailto:${contact.email}`} className={linkHover}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className={linkHover}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkHover}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkHover}
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
      </div>
    </aside>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-3.5 shrink-0"
    >
      <path
        d="M8 2v7M8 9l2.5-2.5M8 9L5.5 6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 11.5v1a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-1" />
    </svg>
  );
}
