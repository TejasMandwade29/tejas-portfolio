import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
}
