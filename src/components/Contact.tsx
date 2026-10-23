"use client";

import { motion } from "framer-motion";
import { handleSpotlight } from "@/lib/spotlight";

const contactLinks = [
  {
    label: "Email",
    value: "abdullah009aziz@gmail.com",
    href: "mailto:abdullah009aziz@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone / WhatsApp",
    value: "0345 5550677",
    href: "https://wa.me/923455550677",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Islamabad, Pakistan",
    href: "https://www.google.com/maps/search/Islamabad",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-surface/70 px-8 py-16 shadow-2xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-xl sm:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)",
          }}
        />

        <div className="relative text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Open to full-time roles &amp; freelance work
          </p>

          <h2 className="mt-6 bg-gradient-to-r from-foreground to-muted bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Have a project in mind or an opening on your team? I&apos;m always
            open to discussing full-stack development, CMS builds, or custom
            business systems.
          </p>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleSpotlight}
              style={{ "--mx": "50%", "--my": "0%" } as React.CSSProperties}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-background/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--mx) var(--my), color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
                }}
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <span className="h-5 w-5">{link.icon}</span>
              </span>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {link.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:abdullah009aziz@gmail.com"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
          >
            Say Hello
          </a>
          <a
            href="https://wa.me/923455550677"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
