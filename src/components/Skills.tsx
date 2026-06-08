"use client";

import { motion } from "framer-motion";
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
    skills: ["Scikit-Learn", "Pandas", "Random Forest", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Generative AI",
    description: "Developing LLM-powered applications using LangChain, LangGraph, and agentic workflows.",
    icon: Cpu,
    skills: ["LangChain", "LangGraph", "LLM Integration", "Prompt Engineering", "Agentic Workflows"],
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
    skills: ["Streamlit", "Gradio", "HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    description: "Using modern development and deployment tools to build and deliver applications.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & <span className="text-accent">Technologies</span></h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-accent/30 transition-all group hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shrink-0">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold leading-tight">{category.title}</h3>
              </div>
              
              <p className="text-sm text-foreground/60 mb-8 leading-relaxed">
                {category.description}
              </p>

              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
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
