import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollMarquee from "@/components/ScrollMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import LoadingGate from "./loading-gate";

export default function Page() {
  return (
    <>
      <LoadingGate />
      <Navbar />
      <main>
        <Hero />
        <ScrollMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </>
  );
}
