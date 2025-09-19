"use client";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Engineer",
          "Web Developer",
          "Mobile Developer",
          "Freelance Developer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;


