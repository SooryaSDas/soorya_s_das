"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "12+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16">
        
        {/* LEFT - Stats */}
        <div className="space-y-12">
          <p className="text-gray-500 tracking-[0.3em] text-xs uppercase">
         About Me
          </p>

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              {/* Vertical line */}
              <div className="w-px h-12 bg-gray-700"></div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base leading-relaxed"
        >
          <p>
            I&apos;m a passionate software developer with{" "}
            <span className="text-white">3+ years</span> of experience building
            modern web applications. I specialize in{" "}
            <span className="text-white">React</span> and{" "}
            <span className="text-white">Next.js</span> ecosystems, crafting
            performant, accessible, and visually compelling digital experiences.
          </p>

          <p className="mt-6">
            From pixel-perfect frontends to robust backend integrations with{" "}
            <span className="text-white">MongoDB</span>,{" "}
            <span className="text-white">Firebase</span>, and{" "}
            <span className="text-white">Prisma</span> — I bring ideas to life
            with clean code and thoughtful architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}