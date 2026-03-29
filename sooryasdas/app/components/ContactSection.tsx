"use client";

import { motion } from "framer-motion";
import { Mail, User, Globe } from "lucide-react";
export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-gray-400 mb-16"
      >
         CONTACT
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s work <br /> together.
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate or just say hello.
          </p>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3 hover:text-white transition">
              <Mail size={18} /> Email
            </div>
            <div className="flex items-center gap-3 hover:text-white transition">
              <Globe size={18} /> GitHub
            </div>
            <div className="flex items-center gap-3 hover:text-white transition">
              <User size={18} /> LinkedIn
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
          />

          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-200 text-black py-4 font-medium flex items-center justify-center gap-2 hover:bg-white transition"
          >
            Send message →
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
