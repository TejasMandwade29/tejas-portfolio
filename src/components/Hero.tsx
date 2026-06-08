"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Download, ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-accent/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass border-accent/20">
            <Image
              src="/assets/tejas_image.jpg"
              alt="Tejas Mandwade"
              fill
              className="object-cover object-top grayscale hover:grayscale-[30%] transition-all duration-700 scale-[1.05] group-hover:scale-100"
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

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Tejas <span className="text-accent">Mandwade</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">
            Python Developer | AI/ML Enthusiast
          </motion.p>

          <motion.p variants={itemVariants} className="max-w-xl text-foreground/60 leading-relaxed mb-8">
            I enjoy turning ideas into software that people can actually use. From backend systems and APIs to AI-powered applications, I like building solutions that are practical, scalable, and impactful. My projects reflect my interest in combining Python, machine learning, and modern development tools to solve real-world challenges.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:gap-3"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="flex items-center gap-2">
              <a 
                href="/assets/resume.jpg" 
                target="_blank"
                className="inline-flex items-center gap-2 glass px-4 py-3 rounded-xl font-medium hover:bg-white/5 transition-colors"
              >
                <FileText className="w-4 h-4 text-accent" />
                View Resume
              </a>
              <a 
                href="/assets/resume.jpg" 
                download
                className="p-3 glass rounded-xl hover:bg-white/5 transition-colors"
                title="Download Resume"
              >
                <Download className="w-4 h-4 text-accent" />
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
