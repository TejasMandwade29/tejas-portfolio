"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, Briefcase, Award } from "lucide-react";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const certificatePath = "/assets/certificates/techsaksham-certificate.jpeg";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const supportTags = ["Microsoft", "SAP", "AICTE", "Edunet Foundation"];

  return (
    <>
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Internship <span className="text-accent">Experience</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-accent rounded-full" 
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center glass p-8 md:p-12 rounded-3xl border-white/5 hover:border-accent/20 transition-all duration-500">
            {/* Left Side - 60% */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[60%] flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6 self-start">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">AI Intern</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-2 text-foreground">
                Edunet Foundation <span className="text-foreground/60 text-xl font-medium block mt-1">(TechSaksham Program)</span>
              </h3>
              
              <p className="text-accent text-sm font-bold tracking-wider mb-6">
                Feb 2025 &ndash; Mar 2025
              </p>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Completed an AI internship under the TechSaksham initiative supported by Microsoft, SAP, and AICTE, gaining practical experience in Machine Learning, Artificial Intelligence, and real-world AI applications.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {supportTags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-md glass border-white/10 text-foreground/80 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Side - 40% */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-[40%] flex justify-center lg:justify-end"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative flex flex-col items-center justify-center gap-4 p-10 w-full max-w-sm rounded-2xl glass border-white/10 hover:border-accent/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Award className="w-16 h-16 text-accent/80 group-hover:text-accent transition-colors" />
                <span className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  Certificate
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/90 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Expanded Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden glass border-white/10 shadow-2xl flex items-center justify-center bg-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={certificatePath}
                alt="TechSaksham Internship Certificate"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Fixed Download Button Inside Modal */}
            <a
              href={certificatePath}
              download="TechSaksham_Certificate_Tejas_Mandwade.jpeg"
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-8 right-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-transform hover:scale-105 shadow-xl z-10"
            >
              <Download className="w-5 h-5" />
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
