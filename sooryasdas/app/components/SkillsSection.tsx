"use client";

import { motion } from "framer-motion";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "MongoDB",
    "Prisma",
    "Firebase",
    "REST APIs",
  ],
  tools: ["Git", "Frappe", "Nunjucks", "Cloudinary", "Vercel"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-gray-400 mb-10"
      >
         SKILLS
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Frontend */}
        <div>
          <h3 className="text-lg mb-4 border-b border-gray-700 pb-2">
            FRONTEND
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.frontend.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="border border-gray-600 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg mb-4 border-b border-gray-700 pb-2">
            BACKEND & DB
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.backend.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="border border-gray-600 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg mb-4 border-b border-gray-700 pb-2">
            TOOLS & OTHERS
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.tools.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="border border-gray-600 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

