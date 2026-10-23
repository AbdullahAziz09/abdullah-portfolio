export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  category: string;
};

export const projects: Project[] = [
  {
    name: "Ishraqia",
    tagline: "Digital Invitations Platform & CMS",
    description:
      "Built a complete CMS from the ground up for creating and managing digital invitations — covering template management, RSVP handling, and a full admin dashboard for clients to run their own events without touching code.",
    tech: ["Next.js", "Node.js", "MongoDB", "Admin Dashboard", "CMS"],
    link: "https://ishraqia.com",
    category: "CMS Platform",
  },
  {
    name: "CMM & Co.",
    tagline: "Law Firm Website & CMS",
    description:
      "Developed a custom CMS and website for an Islamabad-based law firm, with a built-in blogging engine so the firm's team can publish legal updates and articles independently, plus structured practice-area pages.",
    tech: ["Next.js", "CMS", "Blogging Engine", "SEO"],
    link: "https://cmmandco.com",
    category: "CMS Platform",
  },
  {
    name: "Reality21 Consultants",
    tagline: "Corporate Business Website",
    description:
      "Designed and built the corporate website for Reality21 Consultants — a clean, content-driven site presenting their services, portfolio, and consulting offerings to clients.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    link: "https://reality21consultants.com",
    category: "Corporate Website",
  },
  {
    name: "R21 CRM",
    tagline: "Real Estate CRM — Full-Stack Build",
    description:
      "Built a complete Real Estate CRM for Reality21 end-to-end, with Lead Management, Customer Management, Sales Pipeline, and Follow-up modules. Implemented JWT authentication, Role-Based Access Control (RBAC), and optimized MongoDB queries for performance at scale.",
    tech: ["MERN Stack", "REST APIs", "JWT & RBAC", "MongoDB"],
    category: "Internal Software",
  },
  {
    name: "GIK Dental Aesthetic",
    tagline: "Clinic Management & Booking System",
    description:
      "Built a management system for a dental & aesthetic clinic, featuring online patient appointment booking, schedule management, and an admin panel for staff to track bookings in real time.",
    tech: ["Appointment Booking", "Admin Panel", "Full-Stack"],
    category: "Management System",
  },
  {
    name: "Gym Management System",
    tagline: "Membership & Operations Platform",
    description:
      "Developed a gym management system to handle memberships, class/trainer scheduling, and day-to-day front-desk operations through an easy-to-use admin interface.",
    tech: ["Membership System", "Scheduling", "Admin Panel"],
    category: "Management System",
  },
];
