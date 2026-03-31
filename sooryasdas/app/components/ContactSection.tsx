"use client";

import { motion } from "framer-motion";
import { Mail, User, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
  };
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    // Prepare WhatsApp message
    const text = `Hello, I'm ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

    // Redirect after popup
    setTimeout(() => {
      window.open(`https://wa.me/919526499343?text=${text}`, "_blank");

      // ✅ Close popup
      setSuccess(false);

      // ✅ Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
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
            Let&apos;s work <br /> together.
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out if you&apos;d like to collaborate or just say
            hello.
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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full bg-transparent border border-gray-700 p-4 outline-none focus:border-gray-400 transition"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-200 text-black py-4 font-medium flex items-center justify-center gap-2 hover:bg-white transition"
          >
            Send message →
          </motion.button>
        </motion.form>
      </div>

      {/* ✅ Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black px-8 py-6 rounded-xl text-center shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setSuccess(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h4 className="text-lg font-semibold mb-2">Message Sent 🚀</h4>
          </div>
        </div>
      )}
    </section>
  );
}
