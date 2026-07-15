"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, CheckCircle2, X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Github } from "@/components/Icons";

const projects = [
  {
    badge: "Clinical Intelligence",
    title: "VitalFlow",
    description: "An AI-powered clinical intelligence platform predicting 41 medical conditions from 132 structured symptoms with Explainable AI and multimodal diagnostics.",
    highlights: [
      "Calibrated Random Forest model predicting <strong>41 medical conditions</strong> from <strong>132 structured symptoms</strong>",
      "Explainable AI (XAI) module showing diagnostic symptom weights for transparency",
      "Clinical Risk Engine bypassing ML inference for critical symptoms to recommend immediate emergency care",
      "Groq Whisper and Llama 3 Vision multimodal inputs generating automated medical report PDFs",
      "SQLite-logged diagnostic history for secure clinical audit logs"
    ],
    techStack: ["Python", "Scikit-learn", "Groq API", "Gradio", "SQLite", "fpdf2"],
    images: [
      {
        path: "/assets/vitalflow-screenshots/main_page.png",
        caption: "Main Dashboard - Clinical intake interface for symptom checker and diagnostic entry."
      },
      {
        path: "/assets/vitalflow-screenshots/Medical report.png",
        caption: "Automated Diagnostic Report - Comprehensive PDF summary detailing condition risk and symptom weights."
      },
      {
        path: "/assets/vitalflow-screenshots/Voice_assesment.png",
        caption: "Multimodal Voice Assistant - Live voice-to-text recording screen using Groq Whisper API."
      },
      {
        path: "/assets/vitalflow-screenshots/dashboard page.png",
        caption: "History & Logs - Secure SQLite-backed log dashboard displaying past clinical intake records."
      },
      {
        path: "/assets/vitalflow-screenshots/page 2.png",
        caption: "Visual Diagnosis - Document analysis using Llama 3 Vision API to process diagnostic reports."
      }
    ],
    github: "https://github.com/TejasMandwade29/VitalFlow",
    live: "https://tejud29-vitalflow.hf.space",
    sihBadge: "Presented at Smart India Hackathon (SIH) 2025"
  },
  {
    badge: "AI Recruitment",
    title: "HireMind",
    description: "An offline, privacy-first recruitment intelligence platform processing and ranking 100,000+ candidates locally using semantic models.",
    highlights: [
      "Semantic similarity search processing <strong>100,000+</strong> candidate profiles locally",
      "5-signal ranking engine scoring Role Fit, Skills, Hiring Intent, Growth, and Stability",
      "Sentence Transformers (all-MiniLM-L6-v2) for local embedding calculations without API costs",
      "Data validation pipeline identifying and filtering <strong>18,899</strong> suspicious profiles",
      "Recruiter-ready <strong>Top 100</strong> shortlist generated on an interactive Streamlit dashboard"
    ],
    techStack: ["Python", "Streamlit", "Sentence Transformers", "Pandas", "NumPy", "Pytest"],
    images: [
      {
        path: "/assets/hiremind-screenshots/main_page.png",
        caption: "Recruiter Dashboard - End-to-end candidate screening, semantic ranking, and AI-powered shortlist management."
      },
      {
        path: "/assets/hiremind-screenshots/compare_hub.png",
        caption: "Candidate Comparison - Compare candidates with detailed side-by-side score breakdowns."
      },
      {
        path: "/assets/hiremind-screenshots/AI Recruiter Verdict.png",
        caption: "AI Recruiter Verdict - Detailed profile match explanation and final AI verdict."
      },
      {
        path: "/assets/hiremind-screenshots/score_visualizer.png",
        caption: "Score Breakdowns - Visual graphs dissecting matching scores across all 5 evaluation signals."
      },
      {
        path: "/assets/hiremind-screenshots/profile_screenshot.png",
        caption: "Candidate Profile - Semantic detail view highlighting candidate skills match."
      }
    ],
    github: "https://github.com/TejasMandwade29/HireMind-AI-Recruiter",
    live: "https://hiremind-ai-recruiter-mgsfrpwq46m6jibkj7bs6v.streamlit.app/"
  },
  {
    badge: "Agentic AI",
    title: "Full-Stack Agentic AI Platform",
    description: "Full-stack multi-model AI assistant powered by LangGraph agents, real-time web search, and voice interactions.",
    highlights: [
      "LangGraph ReAct agent workflow designed with tool-augmented autonomous reasoning",
      "FastAPI REST backend supporting tool integrations, multi-chat session persistence, and streaming",
      "Real-time web search integration via Tavily API for fresh, contextual query responses",
      "Multi-chat session management allowing parallel chats, context saving, and active session switches",
      "Speech-to-text integration using OpenAI Whisper API and interactive Streamlit UI"
    ],
    techStack: ["FastAPI", "Streamlit", "LangGraph", "LangChain", "Groq", "OpenAI", "Tavily"],
    images: [
      {
        path: "/assets/agentic-ai-screenshots/main_page.png",
        caption: "Agentic Workspace - Chat interface with agent selector, LLM parameters, and live chat sessions."
      },
      {
        path: "/assets/agentic-ai-screenshots/ai-personas.png",
        caption: "Agent Personas - Configuration pane containing system instructions for customized agent behaviors."
      },
      {
        path: "/assets/agentic-ai-screenshots/multi-chat-sessions.png",
        caption: "Multi-Chat Management - Sidebar organizing past conversations and active tool execution states."
      }
    ],
    github: "https://github.com/TejasMandwade29/agentic-ai-chatbot-platform",
    live: "https://agentic-ai-chatbot-platform-u4fo8jctflxz3nkbe3knyh.streamlit.app",
  }
];

export default function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProjectIdx(null);
      } else if (e.key === "ArrowLeft" && activeProjectIdx !== null) {
        handlePrevImage();
      } else if (e.key === "ArrowRight" && activeProjectIdx !== null) {
        handleNextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProjectIdx, activeImageIdx]);

  useEffect(() => {
    if (activeProjectIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeProjectIdx]);

  const handlePrevImage = () => {
    if (activeProjectIdx === null) return;
    const project = projects[activeProjectIdx];
    setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
  };

  const handleNextImage = () => {
    if (activeProjectIdx === null) return;
    const project = projects[activeProjectIdx];
    setActiveImageIdx((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <motion.h2 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 select-none"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-accent rounded-full" 
            />
            <p className="mt-6 text-foreground/80 text-center max-w-2xl leading-snug">
              Flagship AI systems built with a focus on reliability, transparency, and autonomous reasoning.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                >
                  {/* Image Section - 60% */}
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                    className="w-full lg:w-[60%] relative group cursor-pointer"
                    onClick={() => {
                      setActiveProjectIdx(index);
                      setActiveImageIdx(0);
                    }}
                  >
                    <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass border-white/10 w-full bg-card/30">
                      <Image
                        src={project.images[0].path}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      {/* Play/View Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="glass px-5 py-3 rounded-xl border-white/20 font-medium text-sm flex items-center gap-2">
                          <span>View Gallery</span>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-accent/20 text-accent font-bold">
                            {project.images.length} Images
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section - 40% */}
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" as const, delay: shouldReduceMotion ? 0 : 0.15 }}
                    className="w-full lg:w-[40%] flex flex-col"
                  >
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">
                          {project.badge}
                        </span>
                      </div>
                      
                      {project.sihBadge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                            {project.sihBadge}
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground select-none">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-foreground/80 mb-3 leading-snug">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {project.highlights.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-2.5 text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, tIndex) => (
                        <motion.span 
                          key={tIndex} 
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: shouldReduceMotion ? 0 : 0.08 + (tIndex * 0.02), duration: 0.2 }}
                          className="text-xs font-medium px-2.5 py-1 rounded-md glass border-white/10 text-foreground/80 hover:text-accent hover:border-accent/30 transition-all motion-safe:hover:scale-105 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a 
                        href={project.live} 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 motion-safe:hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.live.includes("youtube.com") || project.live.includes("youtu.be") ? "Video Demo" : "Live Demo"}
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank"
                        className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/10 motion-safe:hover:scale-[1.02]"
                      >
                        <Github className="w-4 h-4" />
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

      {/* Image Modal Lightbox with Carousel */}
      <AnimatePresence>
        {activeProjectIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveProjectIdx(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setActiveProjectIdx(null);
              }}
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div className="relative w-full max-w-5xl flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
              
              {/* Main Expanded Image Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden glass border-white/10 shadow-2xl flex items-center justify-center bg-black/60 group/modal"
              >
                <Image
                  src={projects[activeProjectIdx].images[activeImageIdx].path}
                  alt={projects[activeProjectIdx].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 p-3 rounded-full bg-black/40 hover:bg-accent hover:text-accent-foreground border border-white/10 text-white transition-all opacity-0 group-hover/modal:opacity-100 focus:opacity-100"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 p-3 rounded-full bg-black/40 hover:bg-accent hover:text-accent-foreground border border-white/10 text-white transition-all opacity-0 group-hover/modal:opacity-100 focus:opacity-100"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Caption & Image Progress */}
              <div className="w-full text-center max-w-3xl">
                <p className="text-foreground/90 font-medium text-base md:text-lg mb-2">
                  {projects[activeProjectIdx].images[activeImageIdx].caption}
                </p>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Image {activeImageIdx + 1} of {projects[activeProjectIdx].images.length}
                </span>
              </div>

              {/* Thumbnails Row */}
              <div className="flex gap-2.5 overflow-x-auto max-w-full px-4 py-2 select-none">
                {projects[activeProjectIdx].images.map((img, imgIdx) => (
                  <button
                    key={imgIdx}
                    onClick={() => setActiveImageIdx(imgIdx)}
                    className={`relative w-20 md:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIdx === imgIdx ? 'border-accent scale-105' : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.path}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
