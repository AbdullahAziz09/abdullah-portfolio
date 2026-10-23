const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database & Tools",
    skills: [
      "MongoDB",
      "MySQL",
      "Git & GitHub",
      "Postman",
      "Swagger",
      "OOP",
      "Agile",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technologies I Work With
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm font-medium text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
