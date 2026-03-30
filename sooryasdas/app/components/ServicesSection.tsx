"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Plug,
  Gauge,
  Server,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Building fast, scalable web applications with modern frameworks and best practices.",
  },
  {
    icon: Layout,
    title: "UI Implementation",
    desc: "Translating designs into pixel-perfect, responsive interfaces with clean code.",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Connecting front-end applications with RESTful and GraphQL APIs seamlessly.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Improving load times, Core Web Vitals, and overall app performance.",
  },
  {
    icon: Server,
    title: "Backend Services",
    desc: "Designing server-side logic, databases, and cloud infrastructure.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Ensuring flawless experiences across every device and screen size.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      
      {/* Title */}
      <p className="text-gray-500 tracking-[0.3em] text-xs uppercase mb-12">
        Services
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="border border-gray-800  p-6 bg-[#0a0a0a] hover:border-gray-600 transition"
            >
              {/* Icon */}
              <Icon className="w-6 h-6 text-gray-400 mb-4" />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}