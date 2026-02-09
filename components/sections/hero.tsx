import Link from "next/link";
import WindowFrame from "@/components/ui/window-frame";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p style={{ color: "var(--accent-retro)", marginBottom: "10px" }}>
          {"[ SYSTEM ONLINE — ROSHAN ARYAL ]"}
        </p>
        <h1>
          Fullstack <span>Developer</span>
        </h1>
        <p>
          Building performant web and mobile applications with React, Next.js,
          and modern backend technologies. From frontend pixels to backend
          APIs — I ship the full stack.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="#projects" className="btn-retro">
            VIEW PROJECTS
          </Link>
          <a
            href="/Roshan Aryal CV.pdf"
            download
            className="btn-outline-retro"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      <WindowFrame title="PORTRAIT_01.JPG">
        <img
          src="/me.jpg"
          alt="Roshan Aryal"
          className="hero-image"
        />
      </WindowFrame>
    </section>
  );
}
