"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dream Vision Homes",
    description:
      "Developed a modern real estate platform with seamless NWMLS API integration for live property listings. Built an automated property synchronization system, stored listing data in MongoDB, and enabled real-time property updates to deliver accurate and up-to-date property information.",
    tech: ["Next.js", "MongoDB", "NWMLS API", "Tailwind CSS"],
    image: "/dv.png",
    live: "https://www.dreamvisionhomes.com",
    github: "#",
  },
  {
    title: "Transvex Logistics",
    description:
      "Developed a shipment tracking platform using Next.js by integrating 5+ third-party logistics vendor APIs into a unified tracking system. Implemented real-time shipment tracking, automated shipment status synchronization, and a responsive interface for seamless tracking across multiple logistics providers.",
    tech: ["Next.js", "JavaScript", "REST APIs", "Tailwind CSS"],
    image: "/transvex.png",
    live: "https://www.thetransvex.com",
    github: "#",
  },
  {
  title: "Mohini Performing Arts",
  description:
    "Built a production-ready web application using Next.js, Payload CMS, and MongoDB. Developed a custom admin dashboard for dynamic content management, enabling seamless frontend-backend integration and an intuitive content publishing workflow.",
  tech: ["Next.js", "Payload CMS", "MongoDB", "Tailwind CSS"],
  image: "/mohini.png",
  live: "https://www.mohiniperformingarts.org",
  github: "#",
},
{
  title: "Vision Nursery",
  description:
    "Developed a fully responsive website using React.js with engaging CSS animations and a mobile-first approach. Focused on delivering a smooth user experience, optimized performance, and intuitive navigation across all devices.",
  tech: ["React.js", "JavaScript", "CSS Animations", "Responsive Design"],
  image: "/vision.png",
  live: "https://www.visionnursery.com",
  github: "#",
},
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-16">PROJECTS</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className="border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center p-8">
              {/* Left */}
              <div>
                <h3 className="text-3xl font-semibold mb-5">{project.title}</h3>

                <p className="text-gray-400 leading-8">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex gap-5 mt-5 text-gray-400">
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    href={project.live}
                    target="_blank"
                  >
                    <Globe size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { Globe, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-stack e-commerce application built with Next.js, Prisma, and MongoDB. Features include authentication, payment processing, and admin dashboard.",
//     tech: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
//     featured: true,
//   },
//   {
//     title: "Task Management App",
//     description:
//       "A collaborative project management tool with real-time updates using Firebase. Drag-and-drop interface with role-based access control.",
//     tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
//     featured: true,
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="bg-black text-white py-20 px-6 md:px-20">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-sm tracking-widest text-gray-400 mb-16"
//       >
//          PROJECTS
//       </motion.h2>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="space-y-10"
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             variants={item}
//             whileHover={{ scale: 1.01 }}
//             className="border border-gray-700 p-6 md:p-8 relative transition duration-300 hover:border-gray-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
//           >
//             {/* Featured Tag */}
//             {project.featured && (
//               <span className="absolute top-6 right-6 text-xs border border-gray-600 px-3 py-1 text-gray-400">
//                 FEATURED
//               </span>
//             )}

//             <h3 className="text-2xl font-semibold mb-4">
//               {project.title}
//             </h3>

//             <p className="text-gray-400 leading-relaxed max-w-2xl">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-3 mt-6">
//               {project.tech.map((tech) => (
//                 <motion.span
//                   key={tech}
//                   whileHover={{ scale: 1.1 }}
//                   className="bg-gray-800 px-3 py-1 text-xs border border-gray-600"
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </div>

//             {/* Icons */}
//             <div className="absolute bottom-6 right-6 flex gap-4 text-gray-400">
//               <motion.a
//                 whileHover={{ scale: 1.2 }}
//                 href="#"
//                 target="_blank"
//               >
//                 <Globe size={18} />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.2 }}
//                 href="#"
//                 target="_blank"
//               >
//                 <ExternalLink size={18} />
//               </motion.a>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
