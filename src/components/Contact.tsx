"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/TejasMandwade29",
      icon: Github,
      username: "TejasMandwade29",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejas-mandwade",
      icon: Linkedin,
      username: "tejas-mandwade",
    },
  ];

  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse duration-[8000ms] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 select-none">Let&apos;s build something <span className="text-accent">exceptional</span>.</h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-md leading-snug">
              Available for Software Engineer, Backend Developer and AI Engineer opportunities.
            </p>
            
            <a 
              href="mailto:mandawadeteju@gmail.com" 
              className="inline-flex items-center gap-4 group"
            >
              <div className="p-4 rounded-2xl bg-accent text-accent-foreground transition-transform motion-safe:group-hover:scale-105">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent">Email Me</p>
                <p className="text-xl font-bold group-hover:underline decoration-accent underline-offset-4 transition-all">
                  mandawadeteju@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="flex flex-col justify-end gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="glass p-6 rounded-2xl border-white/5 hover:border-accent/20 transition-all group flex items-center justify-between motion-safe:hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-foreground/80 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-foreground/40">{link.name}</p>
                      <p className="font-semibold text-foreground/80">{link.username}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-white/5 text-foreground/40 text-sm">
              <p>© {new Date().getFullYear()} Tejas Mandwade</p>
              <p>Built with Next.js & Tailwind</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
