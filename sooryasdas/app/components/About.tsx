"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "45+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
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
            <span className="text-white">3+ years of experience</span>
            building modern, scalable web applications. As a self-learner, I
            continuously explore new technologies, experiment with new ideas,
            and improve my skills through real-world projects and hands-on
            experience.
          </p>

          <p className="mt-6">
            I specialize in the{" "}
            <span className="text-white">React and Next.js </span> ecosystem,
            where I focus on creating performant, accessible, and visually
            engaging user experiences. I enjoy transforming complex problems
            into simple, elegant solutions while maintaining clean and
            maintainable code.
          </p>

          <p className="mt-6">
            Beyond the frontend, I have experience working with backend
            technologies such as
            <span className="text-white"> MongoDB</span>,{" "}
            <span className="text-white">Firebase</span>, and{" "}
            <span className="text-white">Prisma</span>, allowing me to build
            complete, end-to-end applications. I pay strong attention to
            performance, scalability, and user-centric design in every project I
            work on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
