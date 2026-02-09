import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Marquee from "@/components/sections/marquee";
import Skills from "@/components/sections/skills";
import Terminal from "@/components/sections/terminal";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <About />
        <Projects />
      </div>
      <Marquee />
      <div className="container">
        <Skills />
        <Terminal />
        <Contact />
      </div>
    </>
  );
}
