"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span>Software Engineer</span>; // Fallback text for SSR
  }

  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Fullstack Developer",
          "AI Engineer",
          "Freelance Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;


