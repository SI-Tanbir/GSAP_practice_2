"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const boxContainerRef = useRef(null);

  useEffect(() => {
    // ✅ Select all boxes inside the container
    const boxes = boxContainerRef.current.children;

    // ✅ GSAP Animation with Stagger & Random Colors
    gsap.from(boxes, {
      y: 50, // Moves each box down by 50px initially
      opacity: 0, // Fades in
      duration: 1,
      stagger: {
        amount: 4, // All boxes animate within 2 seconds
        from: "random", // Boxes appear in a random order
      },
      ease: "power2.out",
    });

    // ✅ Random Color Assignment
    Array.from(boxes).forEach((box) => {
      box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`; // Generates random colors
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white text-center">
      <div ref={boxContainerRef} className="grid grid-cols-12 gap-4">
        {/* ✅ Mapping 30 Boxes */}
        {Array.from({ length: 84 }).map((_, index) => (
          <div key={index} className="w-16 h-16 rounded-md shadow-lg"></div>
        ))}
      </div>
    </div>
  );
}
