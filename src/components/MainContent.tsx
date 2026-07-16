import { resume } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function MainContent() {
  return (
    <main className="border-t border-border lg:border-t-0 lg:border-l">
      <div className="space-y-12 p-8 lg:py-12 lg:pl-10 lg:pr-12">
        <section id="about" className="scroll-mt-8">
          <SectionHeading id="about-heading">Profile Summary</SectionHeading>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            {resume.summary}
          </p>
        </section>

        <section id="experience" className="scroll-mt-8">
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <ol className="mt-6 space-y-8">
            {resume.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="group">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-sm text-accent">{job.company}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted">{job.period}</p>
                </div>
                <p className="mt-2 font-mono text-xs text-muted">{job.stack}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-6 text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="products" className="scroll-mt-8">
          <SectionHeading id="products-heading">Graphland Products</SectionHeading>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {resume.products.map((product) => (
              <li
                key={product.name}
                className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <span className="shrink-0 text-xs text-muted">{product.tagline}</span>
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-mono text-xs text-accent hover:underline"
                >
                  {product.url.replace("https://", "")}
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {product.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="open-source" className="scroll-mt-8">
          <SectionHeading id="open-source-heading">Open Source</SectionHeading>
          <ul className="mt-6 space-y-5">
            {resume.openSource.map((project) => (
              <li key={project.name}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-muted">{project.stack}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-mono text-xs text-accent hover:underline"
                >
                  {project.linkLabel}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="scroll-mt-8">
          <SectionHeading id="education-heading">Education</SectionHeading>
          <ul className="mt-6 space-y-6">
            {resume.education.map((edu) => (
              <li key={edu.school}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-muted">{edu.degree}</p>
                    <p className="text-xs text-muted">{edu.location}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted">{edu.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="lg:hidden print:hidden">
          <SectionHeading id="skills-heading">Technical Skills</SectionHeading>
          <div className="mt-6 space-y-4">
            {Object.entries(resume.skills).map(([category, items]) => (
              <div key={category}>
                <p className="mb-2 text-xs font-medium text-foreground">{category}</p>
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
      </div>
    </main>
  );
}
