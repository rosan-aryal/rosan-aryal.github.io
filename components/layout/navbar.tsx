"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
        <Link href={"/"} className="logo">
          <Image src={"/logo.png"} alt="Logo" width={48} height={48} />
        </Link>
        <nav className="nav-links">
          <Link href="#about">ABOUT</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#lab">LAB</Link>
          <Link href="#skills">SKILLS</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="#about" onClick={closeMenu}>ABOUT</Link>
          <Link href="#projects" onClick={closeMenu}>PROJECTS</Link>
          <Link href="#lab" onClick={closeMenu}>LAB</Link>
          <Link href="#skills" onClick={closeMenu}>SKILLS</Link>
          <Link href="#contact" onClick={closeMenu}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
