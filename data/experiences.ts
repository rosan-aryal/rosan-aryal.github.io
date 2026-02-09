import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    codename: "EXPERIENCE_ALPHA",
    title: "Fullstack Developer",
    excerpt: "Developed production web applications at Nep Tech Pal Pvt. Ltd.",
    description:
      "Engineered 5 production web apps (Loksewa Tayari App, AI Photocraft, Webhookify, KMC Website, Bloggie) using React/Next.js and Node.js, serving 5,000+ monthly active users with 95%+ mobile responsiveness scores. Implemented process improvements and automation solutions, resulting in 15% increase in productivity.",
    image:
      "https://neptechpal.com.np/_next/image?url=%2FOrginal_Logo.png&w=640&q=100",
    imageAlt: "Fullstack Development",
    tags: ["FULLSTACK", "WEB_APP"],
    techStack: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    status: "COMPLETED",
    year: 2025,
    duration: "Feb 2025 - March 2026",
    company: "Nep Tech Pal Pvt. Ltd.",
    link: "",
  },
  {
    id: "2",
    codename: "EXPERIENCE_BETA",
    title: "Frontend Developer Intern",
    excerpt:
      "Implemented responsive UI/UX designs at Websoft Technology Nepal Pvt. Ltd.",
    description:
      "Implemented responsive UI/UX designs achieving 90+ Google PageSpeed scores and seamless experiences across all devices using React.js and Tailwind CSS. Integrated third-party APIs for lead capture automation, reducing manual data entry time by 3 hours weekly.",
    image: "https://websoftnepal.com.np/img/logo/websoft.png",
    imageAlt: "Frontend Internship",
    tags: ["FRONTEND", "UI_UX"],
    techStack: ["React.js", "Tailwind CSS"],
    status: "COMPLETED",
    year: 2024,
    duration: "Jan 2024 - May 2024",
    company: "Websoft Technology Nepal Pvt. Ltd.",
    link: "",
  },
];
