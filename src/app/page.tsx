"use client";

import {Hero} from "../components/layout/Hero";
import {About} from "../components/layout/About";
import {Services} from "../components/layout/Services";
import {Contact} from "../components/layout/Contact";
import { FloatingBubbles } from "@/animations/FloatingBubbles";

export default function Home() {
  return (
    <>
    <div className="relative">
      {/* Floating Bubbles Background - only on home page */}
      <FloatingBubbles />
      
      {/* Main content with higher z-index */}
      <div className="relative z-10 px-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
    </div>
    </>
  );
}