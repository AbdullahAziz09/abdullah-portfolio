export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turning ideas into working products
          </h2>
        </div>

        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted">
            I&apos;m a Software Engineer with hands-on experience in the MERN
            stack, Java, Spring Boot, React.js, and CRM development. I&apos;m
            skilled in designing scalable web applications, enterprise
            software, REST APIs, and Lead Management Systems, with a strong
            focus on clean architecture and performance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            My work spans a complete Real Estate CRM built at Reality21
            (lead management, sales pipeline, JWT auth &amp; RBAC), custom CMS
            platforms for business and events (Ishraqia, CMM &amp; Co.),
            corporate websites (Reality21 Consultants), and internal systems
            like a clinic management platform for GIK Dental Aesthetic and a
            gym management system. I enjoy owning a project end-to-end &mdash;
            planning the architecture, building it, and making sure it
            actually solves the problem it was built for.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-foreground">
                Education
              </p>
              <p className="mt-1 text-sm text-muted">
                BS Software Engineering
                <br />
                Air University, Islamabad
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-foreground">
                Experience
              </p>
              <p className="mt-1 text-sm text-muted">
                2+ Years
                <br />
                Full-Stack Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
