"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X, Download, Shield, Award, ArrowRight } from "lucide-react";

export default function Leadership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const certificatePath = "/assets/Leadership_experience/SIH 2025 Certification as a leader.jpg";
  const teamPhotoPath = "/assets/Leadership_experience/Leadership_experience_image.jpeg";

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

  return (
    <>
      <section id="leadership" className="py-24 px-6 relative bg-white/[0.01]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 select-none"
            >
              Leadership <span className="text-accent">Experience</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-accent rounded-full" 
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Side: Team Photo - 50% */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[50%] relative group"
            >
              <div className="absolute -inset-2 bg-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border-white/10 w-full bg-card/30">
                <Image
                  src={teamPhotoPath}
                  alt="StackOverthrow Team Photo at Smart India Hackathon (SIH) 2025"
                  fill
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 glass px-4 py-2 rounded-xl border-white/10 text-xs text-foreground/80 font-medium select-none">
                  Team &quot;StackOverthrow&quot; presenting VitalFlow at SIH 2025
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content & Certificate Trigger - 50% */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
              className="w-full lg:w-[50%] flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6 self-start">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Team Lead</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-foreground leading-tight select-none">
                Smart India Hackathon (SIH) 2025
              </h3>
              
              <p className="text-accent text-sm font-bold tracking-wider mb-6 select-none">
                National Level Hackathon
              </p>

              <div className="text-base md:text-lg text-foreground/90 mb-8 leading-snug space-y-4">
                <p>
                  Led a 5-member development team called <strong>&quot;StackOverthrow&quot;</strong> to present <strong>VitalFlow</strong> (our AI-powered clinical intelligence platform) at the inter-college level of Smart India Hackathon (SIH) 2025.
                </p>
                <p>
                  As team lead, coordinated technical alignment across backend, machine learning, and frontend layers, ensuring a successful end-to-end presentation and live system demonstration of the diagnostic and explainable AI capabilities under high pressure.
                </p>
              </div>

              {/* Flex Grid for Certificate Trigger & See Project */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-4">
                {/* Certificate Trigger Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 flex items-center justify-between gap-4 p-4 rounded-xl glass border-white/10 hover:border-accent/40 transition-all motion-safe:hover:scale-[1.02] text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">SIH 2025 Certificate</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-accent transition-all group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
                </button>

                {/* Direct project cross-link */}
                <a 
                  href="#projects" 
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-white/10 hover:border-accent/30 glass px-6 py-4 rounded-xl font-semibold transition-all hover:bg-white/5 motion-safe:hover:scale-[1.02]"
                >
                  See VitalFlow Project
                  <ArrowRight className="w-4 h-4 text-accent" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox for Leader Certificate */}
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
                alt="Tejas Mandwade SIH 2025 Team Leader Certificate"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Download Button inside Lightbox */}
            <a
              href={certificatePath}
              download="SIH_2025_Leader_Certificate_Tejas_Mandwade.jpg"
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
