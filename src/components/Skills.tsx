"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  Database, 
  Code, 
  BrainCircuit, 
  Cpu, 
  Layout, 
  Wrench,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    description: "Building predictive systems using supervised learning, feature engineering, and model evaluation techniques.",
    icon: BrainCircuit,
    skills: ["Scikit-Learn", "Pandas", "Random Forest", "Feature Engineering", "Model Evaluation", "Model Calibration", "XAI"],
  },
  {
    title: "Generative AI",
    description: "Developing LLM-powered applications using LangChain, LangGraph, and agentic workflows.",
    icon: Cpu,
    skills: ["LangChain", "LangGraph", "LLM Integration", "Prompt Engineering", "Agentic Workflows", "Sentence Transformers", "NLP"],
  },
  {
    title: "Programming",
    description: "Writing clean and efficient code for backend systems, automation, and AI applications.",
    icon: Code,
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Backend Development",
    description: "Designing APIs, databases, and scalable backend services using modern Python frameworks.",
    icon: Database,
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "SQLite", "API Integration"],
  },
  {
    title: "Frontend & UI",
    description: "Building interactive interfaces for AI applications and developer-focused tools.",
    icon: Layout,
    skills: ["Streamlit", "Gradio", "HTML", "CSS", "Hugging Face Spaces"],
  },
  {
    title: "Tools & Platforms",
    description: "Using modern development and deployment tools to build and deliver applications.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Render", "OpenAI", "Tavily", "Groq API"],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 select-none"
          >
            Skills & <span className="text-accent">Technologies</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-accent rounded-full mx-auto" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-accent/20 transition-all duration-300 group motion-safe:hover:-translate-y-1.5 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-transparent transition-all duration-500 shrink-0">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white select-none">{category.title}</h3>
              </div>
              
              <p className="text-sm text-foreground/80 mb-8 leading-snug">
                {category.description}
              </p>

              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-auto select-none">
                {category.skills.map((skill, sIndex) => (
                  <li 
                    key={sIndex} 
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium leading-none">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
