"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Hero from "@/components/layout/Hero";
import AboutMe from "@/components/layout/About";
import Services from "@/components/layout/Services";
import ProjectsList from "@/components/layout/ProjectsList";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
    </div>
  );
}
