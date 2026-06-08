"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, CheckCircle2, X } from "lucide-react";
import { Github } from "@/components/Icons";

const projects = [
  {
    badge: "Healthcare AI",
    title: "AI Doctor 2.0",
    description: "AI-powered healthcare assistant combining machine learning, explainable AI, and safety-first medical triage.",
    highlights: [
      "Disease Prediction using Machine Learning",
      "Explainable AI (XAI) Analysis",
      "Voice-Based Symptom Input",
      "PDF Health Report Generation",
      "Emergency Safety Routing"
    ],
    capabilityBadges: ["Machine Learning", "Explainable AI", "Voice Support", "PDF Reporting", "Healthcare AI"],
    techStack: ["Python", "Scikit-Learn", "Gradio", "Groq", "SQLite", "Pandas"],
    image: "/assets/ai-doctor-1.png",
    github: "https://github.com/TejasMandwade29/AI_DOC_2.0",
    live: "https://huggingface.co/spaces/tejuD29/AI-Doctor-2.0",
  },
  {
    badge: "Agentic AI",
    title: "Agentic AI Chatbot Platform",
    description: "Full-stack multi-model AI assistant powered by LangGraph agents, web search, and voice AI.",
    highlights: [
      "LangGraph ReAct Agents",
      "Multi-Model LLM Support",
      "Real-Time Web Search",
      "Voice-to-Text via Whisper",
      "Multi-Chat Session Management"
    ],
    capabilityBadges: ["LangGraph", "Multi-Model", "Web Search", "Voice AI", "FastAPI"],
    techStack: ["FastAPI", "Streamlit", "LangGraph", "LangChain", "Groq", "OpenAI", "Tavily"],
    image: "/assets/agentic-1.png",
    github: "https://github.com/TejasMandwade29/agentic-ai-chatbot-platform",
    live: "https://agentic-ai-chatbot-platform-u4fo8jctflxz3nkbe3knyh.streamlit.app",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <>
      <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-accent rounded-full" 
          />
          <p className="mt-6 text-foreground/60 text-center max-w-2xl">
            Flagship AI systems built with a focus on reliability, transparency, and autonomous reasoning.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Section - 60% */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-[60%] relative group cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass border-white/10 w-full bg-card/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Content Section - 40% */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-[40%] flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <ul className="space-y-3">
                      {project.highlights.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech, tIndex) => (
                      <motion.span 
                        key={tIndex} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (tIndex * 0.1), duration: 0.3 }}
                        className="text-xs font-medium px-3 py-1.5 rounded-md glass border-white/10 text-foreground/80 hover:text-accent hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={project.live} 
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank"
                      className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/10 hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
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
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden glass border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded Project View"
                fill
                className="object-contain bg-black/40"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
