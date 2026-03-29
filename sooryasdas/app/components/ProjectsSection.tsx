"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Next.js, Prisma, and MongoDB. Features include authentication, payment processing, and admin dashboard.",
    tech: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates using Firebase. Drag-and-drop interface with role-based access control.",
    tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    featured: true,
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

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-gray-400 mb-16"
      >
         PROJECTS
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="border border-gray-700 p-6 md:p-8 relative transition duration-300 hover:border-gray-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
          >
            {/* Featured Tag */}
            {project.featured && (
              <span className="absolute top-6 right-6 text-xs border border-gray-600 px-3 py-1 text-gray-400">
                FEATURED
              </span>
            )}

            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 px-3 py-1 text-xs border border-gray-600"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Icons */}
            <div className="absolute bottom-6 right-6 flex gap-4 text-gray-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                target="_blank"
              >
                <Globe size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                target="_blank"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
