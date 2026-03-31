"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "PG Diploma in IT Networking and Cloud Computing",
    institution: "NSQF",
    period: "2020 — 2022",
    description:
      "Focused on software engineering, data structures, and web technologies.",
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

export default function EducationSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-gray-400 mb-16"
      >
        EDUCATION
      </motion.h2>

      <div className="relative">
        {/* Animated Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-4 top-0 w-px bg-gray-700"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {education.map((edu, index) => (
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
                  <GraduationCap size={16} />
                </motion.div>
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border border-gray-700 p-6 md:p-8 transition duration-300 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-400 mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
