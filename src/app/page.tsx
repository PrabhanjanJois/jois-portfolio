import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Ticker from "@/sections/Ticker";
import AlgoTrade from "@/sections/AlgoTrade";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Credentials from "@/sections/Credentials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <AlgoTrade />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
