"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Your Company",
    period: "2022 — Present",
    description:
      "Building modern web applications using React, Next.js, and Tailwind CSS. Working with MongoDB and Prisma for database management. Implementing cloud solutions with Firebase and Cloudinary.",
    tech: ["React/Next.js", "MongoDB", "Firebase"],
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "2021 — 2022",
    description:
      "Developed responsive web interfaces with HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver features using Frappe framework and Nunjucks templating.",
    tech: ["Frappe", "Nunjucks", "JavaScript"],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-gray-400 mb-16"
      >
        EXPERIENCE
      </motion.h2>

      <div className="relative">
        {/* Animated Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-4 top-0 w-[1px] bg-gray-700"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-12"
            >
              {/* Icon with pulse */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-2 w-8 h-8 border border-gray-600 flex items-center justify-center bg-black"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Briefcase size={16} />
                </motion.div>
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border border-gray-700 p-6 md:p-8 transition duration-300 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {exp.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gray-800 px-3 py-1 text-xs border border-gray-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
