import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="logo">Roshan</div>
        <nav className="nav-links">
          <Link href="#about">ABOUT</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#lab">LAB</Link>
          <Link href="#skills">SKILLS</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
