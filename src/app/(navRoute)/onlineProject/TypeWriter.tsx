"use client";

import Typewriter from "typewriter-effect";

export default function MyTypewriter() {
  return (
    <h1 className=" font-bold flex gap-x-3 text-lg">
      <span className="text-black">I develop with </span>{" "}
      <span className="text-blue-500">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("React")
              .pauseFor(2000)
              .deleteAll()
              .typeString("JavScript")
              .pauseFor(2000)
              .deleteAll()
              .typeString("TypeScript")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Next.js")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Nest.js")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Python")
              .pauseFor(2000)
              .deleteAll()
              .typeString("React Native")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
            delay: 120,       // vitesse d’écriture
            deleteSpeed: 100,  // vitesse suppression
          }}
        />
      </span>
    </h1>
  );
}
