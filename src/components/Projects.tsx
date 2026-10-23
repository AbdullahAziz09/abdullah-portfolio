"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { handleSpotlight } from "@/lib/spotlight";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-y border-border bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-base text-muted">
            A selection of live platforms and internal systems I&apos;ve
            designed and developed end-to-end.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background/70 p-8 shadow-lg shadow-black/10 ring-1 ring-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40"
              style={{ "--mx": "50%", "--my": "0%" } as React.CSSProperties}
            >
              {/* cursor-following spotlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(360px circle at var(--mx) var(--my), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
                }}
              />

              <span className="pointer-events-none absolute -right-3 -top-6 select-none text-7xl font-black text-white/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {project.tagline}
                  </p>
                </div>

                <span
                  className={`flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    project.link
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-border bg-surface text-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.link ? "bg-emerald-400" : "bg-muted"
                    }`}
                  />
                  {project.link ? "Live" : "Internal"}
                </span>
              </div>

              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 border-t border-border pt-5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5 hover:text-accent-light"
                  >
                    Visit Live Site
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
                    Internal / Private Project
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
