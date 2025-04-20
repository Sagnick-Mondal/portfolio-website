import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TapeSection2 } from "@/sections/Tape2";
import './globals.css';
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="space-y-32">
        <section id="home">
          <HeroSection />
        </section>

        <TapeSection />

        <section id="about">
          <AboutSection />
        </section>

        <TapeSection2 />

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}