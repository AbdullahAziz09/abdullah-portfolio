"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const badges = [
  { label: "React.js", className: "left-[-10%] top-[8%]", delay: 0 },
  { label: "Next.js", className: "right-[-12%] top-[18%]", delay: 0.6 },
  { label: "Node.js", className: "left-[-14%] bottom-[22%]", delay: 1.2 },
  { label: "Spring Boot", className: "right-[-8%] bottom-[8%]", delay: 1.8 },
];

const IDLE_TILT = { x: 6, y: -10 };

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(IDLE_TILT);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: IDLE_TILT.x + py * -16, y: IDLE_TILT.y + px * 20 });
  }

  function handleMouseLeave() {
    setTilt(IDLE_TILT);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-surface"
      style={{ perspective: "1600px" }}
    >
      {/* animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-light/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-20 md:flex-row md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Available for new opportunities
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Abdullah Aziz
          </h1>

          <p className="mt-4 bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Software Engineer &mdash; MERN &amp; Java Full-Stack Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:mx-0">
            BS Software Engineering graduate from Air University, Islamabad,
            with hands-on experience across the MERN stack, Java &amp; Spring
            Boot, building scalable CRMs, enterprise software, and REST APIs
            with a strong focus on clean architecture and performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 md:mx-0">
            <div>
              <dt className="text-2xl font-bold text-foreground">2+</dt>
              <dd className="text-xs font-medium text-muted">
                Years Experience
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">4</dt>
              <dd className="text-xs font-medium text-muted">
                Companies Worked With
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">6+</dt>
              <dd className="text-xs font-medium text-muted">
                Projects Delivered
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex-shrink-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* oversized ambient halo so the photo blends into the page instead of sitting on top of it */}
          <motion.div
            className="pointer-events-none absolute -inset-16 rounded-full bg-gradient-to-br from-accent/40 via-accent-light/25 to-transparent blur-[70px]"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {badges.map((badge) => (
                <motion.span
                  key={badge.label}
                  className={`pointer-events-none absolute z-20 rounded-full border border-white/10 bg-surface/70 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg shadow-black/30 backdrop-blur-md ${badge.className}`}
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  }}
                >
                  {badge.label}
                </motion.span>
              ))}

              <div
                className="relative h-full w-full transition-transform duration-150 ease-out"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-accent/30"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 72%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 72%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/abdullah-aziz.png"
                    alt="Abdullah Aziz"
                    fill
                    sizes="(min-width: 768px) 22rem, 16rem"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/40 via-transparent to-accent-light/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
