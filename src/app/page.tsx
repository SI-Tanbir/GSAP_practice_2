"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const boxFromTo = useRef(null);
  const container = useRef(null);
  const staggerBoxes = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Moves between two states (Ping-pong effect)
    gsap.to(boxFromTo.current, {
      x: 200,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });

    // ✅ Stagger Animation (Each box appears in sequence)
    gsap.from(staggerBoxes.current, {
      opacity: 0,
      duration: 1,
      stagger: 0.3, // Each box animates 0.3s after the previous one
    });

  }, []);

  return (
    <div ref={container} className="p-10 h-screen flex flex-col bg-black justify-center items-center gap-10">
      
      {/* Ping-pong Animation */}
      <div ref={boxFromTo} className="border w-40 h-40 rounded-xl bg-yellow-300 flex items-center justify-center">
        .fromTo() → Moves Between Two States
      </div>

      {/* Stagger Animation (Boxes appearing one by one) */}
      <div className="flex gap-5 justify-center items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            ref={(el) => (staggerBoxes.current[index] = el)}
            className="stagger-box border w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center"
          >
            {index + 1}
          </div>
        ))}
      </div>

    </div>
  );
}
