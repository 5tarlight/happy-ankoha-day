"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollY(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-[-10] fixed top-0 left-0 overflow-hidden pointer-events-none w-full h-full">
      <div
        className="bg-cover h-full w-full z-[-9]"
        style={{ backgroundImage: "url('/img/bg/bg_lottie.webp')" }}
      />
      <div
        className="z-[-8] fixed top-0 left-0 bg-repeat-y w-full"
        style={{
          backgroundImage: "url('/img/bg/bg_layer1.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center 0",
          transition: "transform 1.2s 0s cubic-bezier(0.075, 0.82, 0.165, 1)",
          willChange: "transform",
          transform: `translateY(${-scrollY * 2}px)`,
        }}
      />
      <div
        className="z-[-7] fixed top-0 left-0 bg-repeat-y w-full"
        style={{
          backgroundImage: "url('/img/bg/bg_layer2.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center 0",
          transition: "transform 1.2s 0s cubic-bezier(0.075, 0.82, 0.165, 1)",
          willChange: "transform",
          transform: `translateY(${-scrollY * 1.5}px)`,
        }}
      />
      <div
        className="z-[-7] fixed top-0 left-0 bg-repeat-y w-full"
        style={{
          backgroundImage: "url('/img/bg/bg_layer3.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center 0",
          transition: "transform 1.2s 0s cubic-bezier(0.075, 0.82, 0.165, 1)",
          willChange: "transform",
          transform: `translateY(${-scrollY}px)`,
        }}
      />
    </div>
  );
}
