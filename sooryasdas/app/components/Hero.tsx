"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "UI Designer",
  "Creative Coder",
  "Tech Explorer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto change text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black relative">
      <div className="max-w-6xl w-full">
        
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="w-12 h-px bg-gray-500 mb-4"></div>

          <p className="text-gray-500 tracking-[0.3em] text-xs uppercase">
            Hello, I&apos;m
          </p>

          <h2 className="text-white text-lg sm:text-xl mt-2 font-medium">
            SOORYA S DAS
          </h2>
        </motion.div>

        {/* Animated Role */}
        <div className="h-[60px] sm:h-[80px] md:h-[120px] lg:h-[150px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[index]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-[32px] sm:text-[50px] md:text-[80px] lg:text-[110px] font-bold text-gray-200 leading-none"
            >
              {roles[index]}
              <span className="text-gray-500">.</span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
        >
          Crafting modern web experiences with{" "}
          <span className="text-white">React</span>,{" "}
          <span className="text-white">Next.js</span>, and tools that make ideas
          come alive.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="bg-gray-200 text-black px-6 py-3 text-sm tracking-wide hover:bg-white transition"
          >
            Get in touch →
          </a>

          <a
            href="#projects"
            className="border border-gray-700 px-6 py-3 text-sm text-gray-300 hover:text-white hover:border-gray-400 transition"
          >
            View work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 1,
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}