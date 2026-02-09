import type React from "react";
import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { RetroToastContainer } from "@/components/ui/retro-toast";

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

const siteUrl = "https://roshanaryal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roshan Aryal — Fullstack Developer",
    template: "%s | Roshan Aryal",
  },
  description:
    "Fullstack developer specializing in React, Next.js, TanStack Start, tRPC, React Native, Hono, and Express. Building performant web and mobile applications.",
  keywords: [
    "Roshan Aryal",
    "Fullstack Developer",
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
    "Web Developer",
    "Mobile Developer",
    "Nepal",
  ],
  authors: [{ name: "Roshan Aryal", url: siteUrl }],
  creator: "Roshan Aryal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Roshan Aryal",
    title: "Roshan Aryal — Fullstack Developer",
    description:
      "Fullstack developer specializing in React, Next.js, tRPC, React Native, and modern backend technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Aryal — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Aryal — Fullstack Developer",
    description:
      "Fullstack developer specializing in React, Next.js, tRPC, React Native, and modern backend technologies.",
    images: ["/og-image.png"],
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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Aryal",
  url: siteUrl,
  jobTitle: "Fullstack Developer",
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
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
