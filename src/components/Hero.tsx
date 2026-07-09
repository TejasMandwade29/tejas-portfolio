"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FileText, Download, ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] -z-10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="relative group select-none"
        >
          <div className="absolute -inset-1 bg-accent/40 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass border-accent/20">
            <Image
              src="/assets/tejas_image.jpg"
              alt="Tejas Mandwade"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover object-top grayscale hover:grayscale-[30%] transition-all duration-700 scale-[1.03] group-hover:scale-100"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-accent/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-accent tracking-wider uppercase">Open for new opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 select-none">
            Tejas <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-emerald-400">Mandwade</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground font-semibold mb-6 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 justify-center md:justify-start">
            <span>Python-focused Software Engineer</span>
            <span className="hidden sm:inline text-accent/40">|</span>
            <span>Backend Developer</span>
            <span className="hidden sm:inline text-accent/40">|</span>
            <span>AI Engineer</span>
          </motion.p>

          <motion.p variants={itemVariants} className="max-w-2xl text-foreground/80 leading-snug md:text-lg mb-8">
            I&apos;m a Python-focused Software Engineer passionate about building backend systems and AI-powered applications. I enjoy solving real-world problems through scalable software, machine learning, and modern AI technologies, with hands-on experience developing projects in healthcare, recruitment, and agentic AI.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
            </a>
            
            <div className="flex items-center gap-1 glass p-1 rounded-xl border-white/10">
              <a 
                href="/assets/Tejas%20Mandwade%20resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors"
              >
                <FileText className="w-4 h-4 text-accent" />
                Resume (PDF)
              </a>
              <span className="w-px h-6 bg-white/10" />
              <a 
                href="/assets/Tejas%20Mandwade%20resume.docx" 
                download
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-foreground/60 hover:text-accent transition-colors"
                title="Download Word Format"
              >
                <Download className="w-3.5 h-3.5" />
                Word
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6">
            <a 
              href="https://github.com/TejasMandwade29" 
              target="_blank" 
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tejas-mandwade" 
              target="_blank" 
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mandawadeteju@gmail.com" 
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
