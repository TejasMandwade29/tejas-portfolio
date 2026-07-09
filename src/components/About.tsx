"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { User, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const coreAreas = [
    "Python",
    "Backend Development",
    "FastAPI",
    "REST APIs",
    "SQL & PostgreSQL",
    "API Integration",
    "NLP & LLM Applications",
    "Cloud Deployment",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white/[0.01] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side - 60% */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[60%]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <User className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground select-none">
              About <span className="text-accent">Me</span>
            </h2>
            
            <div className="space-y-6 text-foreground/95 leading-snug text-base md:text-lg max-w-2xl mb-12">
              <p>
                I&apos;m a Python-focused Software Engineer passionate about building production-grade backend systems and AI-powered applications. I enjoy solving real-world problems by combining software engineering with scalable APIs, intelligent automation, and modern AI technologies.
              </p>
              <p>
                My recent work includes <strong>VitalFlow</strong>, an AI-powered clinical intelligence platform, <strong>HireMind</strong>, an offline recruitment intelligence system, and an <strong>Agentic AI Platform</strong> built with modern LLM frameworks. Through these projects, I&apos;ve gained hands-on experience designing end-to-end applications that emphasize scalability, explainability, and practical impact.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Core Areas</h3>
              <div className="flex flex-wrap gap-3">
                {coreAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : index * 0.04 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/10 hover:border-accent/30 hover:text-accent transition-all cursor-default group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" />
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - 40% */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="w-full lg:w-[40%] pt-2 lg:pt-16"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border-white/5 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                <Image 
                  src="/assets/College_logo.jpg" 
                  alt="GFGOCE Logo" 
                  width={110} 
                  height={110} 
                  className="object-contain"
                />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-3">Education</h3>
                <h4 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
                  B.Tech in Computer Engineering
                </h4>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    GF&apos;s Godavari College of Engineering, Jalgaon
                  </p>
                  <p className="text-foreground/60 text-sm mt-5">
                    Expected Graduation: 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
