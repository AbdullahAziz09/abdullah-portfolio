const timeline = [
  {
    period: "Sep 2025 — Present",
    title: "Software Engineer",
    company: "Reality21",
    points: [
      "Developed a complete Real Estate CRM with Lead Management, Customer Management, Sales Pipeline, and Follow-up modules.",
      "Built secure REST APIs and integrated frontend with backend services.",
      "Implemented JWT Authentication, Role-Based Access Control (RBAC), and user management.",
      "Optimized MongoDB queries to improve application performance and scalability.",
      "Worked directly with stakeholders to gather requirements and deliver production-ready solutions.",
    ],
  },
  {
    period: "May 2025 — Sep 2025",
    title: "Software Engineering Intern",
    company: "Volmatica",
    points: [
      "Developed enterprise applications using Java, Spring Boot, React.js, and JVM technologies.",
      "Designed and consumed REST APIs for frontend-backend integration.",
      "Resolved production issues and optimized existing application modules.",
      "Collaborated with senior developers using Git in an Agile development environment.",
    ],
  },
  {
    period: "Jul 2024 — Sep 2024",
    title: "Software Engineer",
    company: "Nayatel",
    points: [
      "Developed scalable web applications for internal business operations.",
      "Optimized backend services and improved application performance.",
      "Performed testing, debugging, and deployment of software solutions.",
      "Worked collaboratively within Agile software development teams.",
    ],
  },
  {
    period: "Jul 2023 — Sep 2023",
    title: "MERN Stack Developer Intern",
    company: "The TekSol",
    points: [
      "Developed responsive user interfaces using React.js.",
      "Built REST APIs with Node.js, Express.js, and MongoDB.",
      "Implemented CRUD operations and integrated backend services.",
      "Worked with Git while collaborating on real-world development projects.",
    ],
  },
  {
    period: "2021 — 2025",
    title: "BS Software Engineering",
    company: "Air University, Islamabad",
    points: [
      "Completed a Bachelor's degree in Software Engineering, building a strong foundation in software design, data structures, and web development.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Journey So Far
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          {timeline.map((item, i) => (
            <div key={item.title + item.company} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {timeline.length - i}
                </div>
                {i !== timeline.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-2">
                <p className="text-sm font-semibold text-accent">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-muted">{item.company}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
