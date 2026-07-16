import { resume } from "@/data/resume";
import { ExternalLink, Section } from "./Section";

export function ResumeContent() {
  return (
    <div className="border-t border-border px-6 py-10 lg:border-t-0 lg:border-l lg:px-10 lg:py-14">
      <div className="space-y-14">
        <Section id="about" title="About">
          <p className="max-w-2xl text-[15px] leading-7 text-muted">{resume.summary}</p>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="relative space-y-0">
            {resume.experience.map((job, index) => (
              <li
                key={`${job.company}-${job.period}`}
                className="relative border-l border-border pb-10 pl-6 last:pb-0"
              >
                <span
                  className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-background bg-accent"
                  aria-hidden
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-[15px] font-medium">{job.role}</h3>
                    <p className="text-sm text-accent">{job.company}</p>
                  </div>
                  <time className="shrink-0 text-xs text-muted">{job.period}</time>
                </div>
                <p className="mt-2 font-mono text-[11px] text-muted">{job.stack}</p>
                <ul className="mt-3 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
                {index < resume.experience.length - 1 ? (
                  <span className="sr-only">Next position</span>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="products" title="Products">
          <ul className="divide-y divide-border">
            {resume.products.map((product) => (
              <li
                key={product.name}
                className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <span className="text-xs text-muted">{product.tagline}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {product.description}
                  </p>
                </div>
                <ExternalLink
                  href={product.url}
                  className="shrink-0 font-mono text-xs sm:pt-0.5"
                >
                  {product.url.replace("https://", "")} ↗
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="open-source" title="Open Source">
          <ul className="divide-y divide-border">
            {resume.openSource.map((project) => (
              <li key={project.name} className="py-5 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-sm font-medium">{project.name}</h3>
                      <span className="font-mono text-[11px] text-muted">
                        {project.stack}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink
                    href={project.link}
                    className="shrink-0 font-mono text-xs sm:pt-0.5"
                  >
                    {project.linkLabel} ↗
                  </ExternalLink>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <ul className="divide-y divide-border">
            {resume.education.map((edu) => (
              <li
                key={edu.school}
                className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-medium">{edu.school}</h3>
                  <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                  <p className="mt-1 text-xs text-muted">{edu.location}</p>
                </div>
                <time className="shrink-0 text-xs text-muted">{edu.period}</time>
              </li>
            ))}
          </ul>
        </Section>

        <section className="border-t border-border pt-8 lg:hidden">
          <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Skills
          </h2>
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
        </section>
      </div>
    </div>
  );
}
