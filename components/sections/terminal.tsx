export default function Terminal() {
  return (
    <section className="terminal-section" id="lab">
      <div className="terminal-header">SYSTEM_CONSOLE.EXE</div>
      <div className="terminal-row">
        <span className="prompt">{"roshan@dev:~$"}</span>
        <span className="command">neofetch --stack</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"> Loading developer profile..."}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  OS:        Fullstack Developer"}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  Frontend:  React / Next.js / TanStack Start"}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  Styling:   Tailwind CSS"}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  Backend:   Hono / Express / tRPC"}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  Mobile:    React Native"}</span>
      </div>
      <div className="terminal-row">
        <span className="output">{"  Language:  TypeScript / Java"}</span>
      </div>
      <div className="terminal-row" style={{ marginTop: "10px" }}>
        <span className="prompt">{"roshan@dev:~$"}</span>
        <span className="command">cat workflow.txt</span>
      </div>
      <div className="terminal-row">
        <span className="output" style={{ color: "var(--accent-retro)" }}>
          {"  1. Design & prototype the UI"}
        </span>
      </div>
      <div className="terminal-row">
        <span className="output" style={{ color: "var(--accent-retro)" }}>
          {"  2. Build type-safe APIs with tRPC / Hono"}
        </span>
      </div>
      <div className="terminal-row">
        <span className="output" style={{ color: "var(--accent-retro)" }}>
          {"  3. Ship to production"}
        </span>
      </div>
      <div className="terminal-row" style={{ marginTop: "10px" }}>
        <span className="prompt">{"roshan@dev:~$"}</span>
        <span className="command">echo $STATUS</span>
      </div>
      <div className="terminal-row">
        <span className="output" style={{ color: "#00ff00" }}>
          {"> Open to work — let's build something together "}
          <span className="cursor-blink">_</span>
        </span>
      </div>
    </section>
  );
}
