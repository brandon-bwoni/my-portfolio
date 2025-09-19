
import {Hero} from "../components/layout/Hero";
import {About} from "../components/layout/About";
import {Services} from "../components/layout/Services";
import {Contact} from "../components/layout/Contact";

export default function Home() {
  return (
    <div className="px-16">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
