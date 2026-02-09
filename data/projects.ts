import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    codename: "PROJECT_ALPHA",
    title: "16Aana Homes",
    excerpt:
      "A real estate portal for buying, selling, and renting properties in Nepal.",
    description:
      "Designed a real estate portal for buying, selling, and renting properties in Nepal, with rewards programs and low-commission home loan integrations. Included blogs on market tips and FAQs to guide investors and buyers, fostering transparency and client trust in areas like Pokhara.",
    image: "https://16aanahomes.com/images/16aana.svg",
    imageAlt: "Real Estate Portal",
    tags: ["WEB_DESIGN", "FULLSTACK", "UI_UX"],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express.js"],
    status: "COMPLETED",
    year: 2025,
    link: "https://16aanahomes.com",
  },
  {
    id: "2",
    codename: "PROJECT_BETA",
    title: "Loksewa Tayari App",
    excerpt: "An all-in-one offline app for Lok Sewa exam preparation.",
    description:
      "Developed an all-in-one offline app for Lok Sewa exam prep, including mock tests, study notes, and current affairs tailored for Nepali government job aspirants. Integrated categorized general knowledge quizzes and subjective materials to enable efficient, ad-free preparation with flexible subscription plans.",
    image:
      "https://th.bing.com/th/id/OIP.JiUtUwqZsuGFHt3XCEudVwHaGr?w=170&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    imageAlt: "Exam Preparation App",
    tags: ["WEB_DESIGN", "FRONTEND"],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    status: "COMPLETED",
    year: 2025,
    link: "https://loksewatayariapp.com",
  },
  {
    id: "3",
    codename: "PROJECT_GAMMA",
    title: "Webhookify",
    excerpt:
      "An instant webhook tool for developers with real-time logging and integrations.",
    description:
      "Engineered an instant webhook tool for developers, enabling real-time logging, payload inspection, and integrations with GitHub, Stripe, Discord, Slack, and more. Added AI-filtered notifications across Telegram, Discord, and mobile for critical events, ensuring 99.99% uptime and spam reduction for SaaS users.",
    image: "https://webhookify.app/logo-1.png",
    imageAlt: "Developer Tool",
    tags: ["DEV_TOOL", "AI", "FRONTEND"],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "COMPLETED",
    year: 2025,
    link: "https://webhookify.app",
  },
  {
    id: "4",
    codename: "PROJECT_DELTA",
    title: "AI Photocraft",
    excerpt: "An AI-driven photo editing platform with privacy features.",
    description:
      "Built an AI-driven photo editing platform offering free daily tools like face swapping, 4K upscaling, and cartoonization for creators and everyday users. Emphasized privacy with automatic photo deletion and premium features such as outfit changes, ensuring fast, secure, and high-quality edits.",
    image: "https://aiphotocraft.com/images/newLogo.svg",
    imageAlt: "AI Photo Editor",
    tags: ["WEB_DESIGN", "AI", "FRONTEND"],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    status: "COMPLETED",
    year: 2025,
    link: "",
  },
  {
    id: "5",
    codename: "PROJECT_EPSILON",
    title: "Kalika Multiple Campus",
    excerpt:
      "A website showcasing educational programs and facilities for Kalika Multiple Campus.",
    description:
      "Created a website for Kalika Multiple Campus, highlighting QAA-certified programs like the first Master's in Rural Development in Gandaki province. Showcased scholarships, modern facilities, and support for economically disadvantaged students to promote accessible quality education in Nepal.",
    image: "https://kmcpokhara.edu.np/_next/image?url=%2Fqaa.jpeg&w=256&q=75",
    imageAlt: "Campus Website",
    tags: ["EDUCATIONAL", "FRONTEND", "WEB_DESIGN"],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "COMPLETED",
    year: 2025,
    link: "",
  },
  {
    id: "6",
    codename: "PROJECT_ZETA",
    title: "Sacred Valley Treks",
    excerpt:
      "A trekking agency website focused on Nepal's destinations and itineraries.",
    description:
      "Developed a trekking agency site focused on Nepal's trekking destinations, detailing itineraries and booking options. Integrated user-friendly features like maps and forms to enhance navigation and reservations for trekkers.",
    image: "",
    imageAlt: "Trekking Website",
    tags: ["WEB_DESIGN", "FRONTEND", "INACTIVE"],
    techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    status: "ARCHIVED",
    year: 2024,
    link: "",
  },
  {
    id: "7",
    codename: "PROJECT_ETA",
    title: "Bodhidham ",
    excerpt:
      "A website for yoga retreats and spiritual wellness center in Nepal.",
    description:
      "Developing a comprehensive website for Bodhidham Yoga Retreats & Spiritual Wellness Center, featuring retreat schedules, booking systems, wellness program details, and resources for spiritual growth. Incorporating responsive design for seamless user experience across devices, with integrations for payments and user registrations.",
    image:
      "https://bodhidham.raiserank.com.np/_next/image?url=%2Fimages%2Flogo.webp&w=96&q=75",
    imageAlt: "Yoga Retreat Center",
    tags: ["WEB_DESIGN", "UI_UX", "FULLSTACK"],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    status: "IN_PROGRESS",
    year: 2026,
    link: "https://bodhidham.raiserank.com.np",
  },
  {
    id: "8",
    codename: "PROJECT_THETA",
    title: "Bloggie - Blog API Service",
    excerpt:
      "A modern blog platform with REST API for content management and delivery.",
    description:
      "Developed Bloggie, a developer-centric blog platform that simplifies content publishing and API integration. It allows users to create projects, publish blogs via an intuitive editor, and serve content through well-documented REST APIs. Key features include simple API key authentication, predictable JSON responses, global CDN delivery for fast performance, and real-time analytics for content optimization. The platform supports seamless integration with any tech stack, making it ideal for scalable web or mobile applications.",
    image: "",
    imageAlt: "Blog Platform",
    tags: ["WEB_DESIGN", "API", "FRONTEND"],
    techStack: ["Node.js", "Express.js", "TypeScript", "Tailwind CSS", "tRPC"],
    status: "IN_PROGRESS",
    year: 2025,
    link: "https://blogapiservice.com",
  },
];
