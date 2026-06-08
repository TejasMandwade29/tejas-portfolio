"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  const coreAreas = [
    "Python",
    "Machine Learning",
    "Backend Development",
    "FastAPI",
    "SQL",
    "PostgreSQL",
    "LangGraph",
    "LLM Applications",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[60%]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <User className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              About <span className="text-accent">Me</span>
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg mb-12">
              <p>
                I am a Computer Engineering student focused on building intelligent software systems using Python, Machine Learning, and Backend Technologies. My work includes AI Doctor 2.0 and an Agentic AI Chatbot Platform, where I combine software engineering with modern AI frameworks to create practical and scalable applications.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Core Areas</h3>
              <div className="flex flex-wrap gap-3">
                {coreAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[40%] pt-2 lg:pt-16"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border-white/5 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                <Image 
                  src="/assets/gfgoce-logo.svg" 
                  alt="GFGOCE Logo" 
                  width={110} 
                  height={110} 
                  className="object-contain"
                />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-3">Education</h3>
                <h4 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
                  B.Tech in Computer Engineering
                </h4>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    GF's Godavari College of Engineering, Jalgaon
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
