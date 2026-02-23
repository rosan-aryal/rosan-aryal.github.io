import type React from "react";
import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { RetroToastContainer } from "@/components/ui/retro-toast";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";

const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
const _syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const siteUrl = "https://rosan-aryal.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roshan Aryal — Fullstack Developer | React, Next.js, TypeScript",
    template: "%s | Roshan Aryal",
  },
  description:
    "Roshan Aryal is a fullstack developer from Nepal specializing in React, Next.js, TanStack Start, tRPC, React Native, Hono, and Express. Building performant web and mobile applications.",
  keywords: [
    "Roshan Aryal",
    "Roshan Aryal developer",
    "Roshan Aryal portfolio",
    "Fullstack Developer",
    "Fullstack Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "TanStack Start",
    "tRPC",
    "Tailwind CSS",
    "React Native Developer",
    "Hono",
    "Express",
    "Java",
    "TypeScript",
    "Web Developer Nepal",
    "Mobile Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Nepal",
    "Portfolio",
  ],
  authors: [{ name: "Roshan Aryal", url: siteUrl }],
  creator: "Roshan Aryal",
  publisher: "Roshan Aryal",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Roshan Aryal — Fullstack Developer",
    title: "Roshan Aryal — Fullstack Developer | React, Next.js, TypeScript",
    description:
      "Fullstack developer from Nepal specializing in React, Next.js, tRPC, React Native, and modern backend technologies. View projects and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Aryal — Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Aryal — Fullstack Developer",
    description:
      "Fullstack developer from Nepal specializing in React, Next.js, tRPC, React Native, and modern backend technologies.",
    images: ["/og-image.png"],
    creator: "@roshanaryal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
  },
};

const activeProjects = projects.filter((p) => p.status !== "ARCHIVED");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Roshan Aryal",
      description:
        "Fullstack developer portfolio showcasing web and mobile applications built with React, Next.js, and modern technologies.",
      publisher: { "@id": `${siteUrl}#person` },
      inLanguage: "en-US",
    },

    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: "Roshan Aryal — Fullstack Developer",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${siteUrl}#person` },
      mainEntity: { "@id": `${siteUrl}#person` },
      description:
        "Portfolio of Roshan Aryal — a fullstack developer from Nepal building performant web and mobile applications with React, Next.js, and modern backend technologies.",
      inLanguage: "en-US",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Roshan Aryal",
      givenName: "Roshan",
      familyName: "Aryal",
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        "@id": `${siteUrl}#image`,
        url: `${siteUrl}me.jpg`,
        contentUrl: `${siteUrl}me.jpg`,
        caption: "Roshan Aryal — Fullstack Developer",
      },
      jobTitle: "Fullstack Developer",
      description:
        "Fullstack developer from Nepal specializing in React, Next.js, TanStack Start, tRPC, React Native, Hono, and Express. Building performant web and mobile applications.",
      email: "roshanaryal.dev@gmail.com",
      knowsAbout: [
        "React",
        "Next.js",
        "TanStack Start",
        "tRPC",
        "Tailwind CSS",
        "React Native",
        "Hono",
        "Express",
        "Java",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Drizzle ORM",
        "Prisma",
      ],
      knowsLanguage: ["English", "Nepali"],
      nationality: {
        "@type": "Country",
        name: "Nepal",
      },
      sameAs: [
        "https://www.linkedin.com/in/rosanaryal/",
        "https://github.com/rosan_aryal",
        "https://www.facebook.com/roshaan.aryal",
        "https://www.instagram.com/roshanaryal__/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Nep Tech Pal Pvt. Ltd.",
      },
      alumniOf: {
        "@type": "Organization",
        name: "Websoft Technology Nepal Pvt. Ltd.",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Fullstack Developer",
        occupationalCategory: "15-1252.00",
        skills:
          "React, Next.js, TypeScript, Node.js, tRPC, React Native, Tailwind CSS, PostgreSQL, MongoDB, Docker",
      },
      mainEntityOfPage: { "@id": `${siteUrl}#webpage` },
    },

    {
      "@type": "ItemList",
      "@id": `${siteUrl}#portfolio`,
      name: "Portfolio Projects",
      description:
        "Web and mobile applications built by Roshan Aryal using modern technologies.",
      numberOfItems: activeProjects.length,
      itemListElement: activeProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: project.link,
          ...(project.image ? { image: project.image } : {}),
          dateCreated: `${project.year}`,
          creator: { "@id": `${siteUrl}#person` },
          keywords: project.techStack.join(", "),
          inLanguage: "en-US",
        },
      })),
    },

    ...experiences.map((exp) => ({
      "@type": "OrganizationRole",
      "@id": `${siteUrl}#experience-${exp.id}`,
      roleName: exp.title,
      startDate: exp.duration.split(" - ")[0],
      endDate: exp.duration.split(" - ")[1],
      description: exp.description,
      memberOf: {
        "@type": "Organization",
        name: exp.company,
      },
    })),

    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${_spaceMono.variable} ${_syne.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <RetroToastContainer />
      </body>
    </html>
  );
}
