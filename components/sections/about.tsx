import WindowFrame from "@/components/ui/window-frame";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-terminal">
          <div className="terminal-header">ABOUT_ME.SYS</div>
          <div className="about-content">
            <div className="terminal-row">
              <span className="prompt">{"guest@system:~$"}</span>
              <span className="command">cat about.txt</span>
            </div>
            <div className="about-text">
              <p>
                {"> "}I&apos;m{" "}
                <span style={{ color: "var(--accent-retro)" }}>
                  Roshan Aryal
                </span>
                , a fullstack developer who builds modern web and mobile
                applications.
              </p>
              <p>
                {"> "}I specialize in creating performant, scalable applications
                using cutting-edge technologies. From pixel-perfect frontends to
                robust backend architectures, I handle the full stack.
              </p>
              <p>
                {"> "}My toolkit spans across React ecosystems, server-side
                frameworks, and mobile development — always pushing boundaries
                to deliver exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <WindowFrame title="SYSTEM_INFO.DAT">
            <div className="info-panel">
              <div className="info-row">
                <span className="info-label">NAME:</span>
                <span className="info-value">Roshan Aryal</span>
              </div>
              <div className="info-row">
                <span className="info-label">ROLE:</span>
                <span className="info-value">Fullstack Developer</span>
              </div>
              <div className="info-row">
                <span className="info-label">FOCUS:</span>
                <span className="info-value">Web & Mobile Apps</span>
              </div>
              <div className="info-row">
                <span className="info-label">STATUS:</span>
                <span className="info-value" style={{ color: "#00ff00" }}>
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">STACK:</span>
                <span className="info-value">React / Next.js / Node</span>
              </div>
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
