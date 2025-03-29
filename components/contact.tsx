"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""); // Using environment variable for security
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "moakshkakar@gmail.com",
    };

    // Send email using EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Using environment variable for service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Using environment variable for template ID
      templateParams
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      setIsSubmitting(false);
      setError("Failed to send your message. Please try again later.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            GET IN <span className="text-[#FF5252]">TOUCH</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF5252] text-white rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:+919560511269"
                    className="font-medium hover:text-[#FF5252] transition-colors"
                  >
                    +91 9560511269
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF5252] text-white rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:moakshkakar@gmail.com"
                    className="font-medium hover:text-[#FF5252] transition-colors"
                  >
                    moakshkakar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF5252] text-white rounded-lg">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/moaksh-kakkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#FF5252] transition-colors"
                  >
                    linkedin.com/moaksh-kakkar
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF5252] text-white rounded-lg">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/Moaksh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#FF5252] transition-colors"
                  >
                    github.com/Moaksh
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#FF5252] text-white font-bold rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center space-x-2 w-full"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-100 text-green-800 rounded-md text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-100 text-red-800 rounded-md text-center"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="mt-20 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ by Moaksh Kakkar  <br />  © {new Date().getFullYear() } All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
