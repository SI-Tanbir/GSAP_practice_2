"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    // ✅ Vertical Motion with Fade In/Out
    gsap.from(textRef.current.children, {
      y:50 ,          // Moves text down by 50px
      opacity: 0,         // Fades out
      duration: 1,
      stagger:-0.5        // Animation duration
      // ease: "power2.inOut", // Smooth easing
      // repeat: -1,         // Infinite loop
               // Moves back up and fades in
    });

  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white text-center">
      <div ref={textRef} className="text-5xl font-bold absolute">

    <h2>Welcome to My Portfolio</h2>
    <h2>Welcome to My Portfolio</h2>
    <h2>Welcome to My Portfolio</h2>
    <h2>Welcome to My Portfolio</h2>
      </div>
    </div>
  );
}
