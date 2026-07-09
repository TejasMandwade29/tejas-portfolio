"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X, Download, Award, Search, ChevronDown, ChevronUp } from "lucide-react";

const certs = [
  {
    title: "AI Intern Certificate of Internship",
    issuer: "Edunet Foundation (TechSaksham Program)",
    date: "Mar 2025",
    image: "/assets/certificate/techsaksham-certificate.jpeg",
    description: "Supported by Microsoft, SAP, and AICTE. Completed an AI Internship focused on Machine Learning and healthcare diagnostic models."
  },
  {
    title: "Introduction to Red Hat OpenShift Applications (DO101)",
    issuer: "Red Hat",
    date: "2024",
    image: "/assets/extracted-certs/image10.jpeg",
    description: "Verification of skills in cloud-native container deployments, container orchestration, and OpenShift clusters."
  },
  {
    title: "Certificate of Completion - Java Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "2024",
    image: "/assets/extracted-certs/image12.jpeg",
    description: "Successfully completed Java programming training and passed the online assessment conducted at Godavari College of Engineering."
  },
  {
    title: "Data Visualisation: Business Insights",
    issuer: "Tata Group (Forage)",
    date: "2024",
    image: "/assets/extracted-certs/image6.jpeg",
    description: "Completed virtual job experience simulation focusing on data visualization, dashboard design, and translating requirements into insights."
  },
  {
    title: "Excel Skills for Business",
    issuer: "Goldman Sachs (Forage)",
    date: "2024",
    image: "/assets/extracted-certs/image8.jpeg",
    description: "Completed virtual job simulation covering advanced Excel, data modeling, financial reporting, and visualization."
  },
  {
    title: "TechSaksham Course Completion - AI & ML",
    issuer: "Microsoft & Edunet Foundation",
    date: "2024",
    image: "/assets/extracted-certs/image13.jpeg",
    description: "Completed comprehensive training on Artificial Intelligence, Python backend integration, and Azure Cognitive Services."
  },
  {
    title: "Scaler Certificate of Excellence (SQL/Python)",
    issuer: "Scaler",
    date: "2024",
    image: "/assets/extracted-certs/image1.jpeg",
    description: "Awarded for outstanding performance in the Scaler learning tracks for SQL database management and advanced Python programming."
  },
  {
    title: "Scaler Certificate of Excellence",
    issuer: "Scaler",
    date: "2024",
    image: "/assets/extracted-certs/image2.jpeg",
    description: "Recognized for completing rigorous learning challenges in backend databases and programming concepts."
  },
  {
    title: "Certificate of Completion",
    issuer: "CodSoft",
    date: "2024",
    image: "/assets/extracted-certs/image3.jpeg",
    description: "Completed a development program building Python-based automation and data processing scripts."
  },
  {
    title: "TCS iON Certificate of Achievement",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "2024",
    image: "/assets/extracted-certs/image7.jpeg",
    description: "Awarded for successfully completing the TCS iON industry prep courses for software developers."
  },
  {
    title: "TCS iON Certificate of Achievement",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "2024",
    image: "/assets/extracted-certs/image9.jpeg",
    description: "Completed Tata Consultancy Services industry-focused skill development courses."
  },
  {
    title: "Academic Event Coordination Certificate",
    issuer: "Godavari College of Engineering (GFGOCE)",
    date: "2024",
    image: "/assets/extracted-certs/image4.jpeg",
    description: "Recognized by IQAC and GFGOCE for coordinating and leading student-led technical events."
  },
  {
    title: "Academic Event Attendance Certificate",
    issuer: "Godavari College of Engineering (GFGOCE)",
    date: "2024",
    image: "/assets/extracted-certs/image5.jpeg",
    description: "Awarded for participating and attending specialized technical workshops at GFGOCE."
  }
];

export default function Certifications() {
  const [selectedCertIdx, setSelectedCertIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const visibleCerts = showAll ? certs : certs.slice(0, 6);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedCertIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCertIdx]);

  return (
    <>
      <section id="certifications" className="py-24 px-6 relative bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 select-none"
            >
              Professional <span className="text-accent">Certifications</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-accent rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.04 }}
                onClick={() => setSelectedCertIdx(index)}
                className="glass p-6 rounded-3xl border-white/5 hover:border-accent/30 motion-safe:hover:scale-[1.02] transition-all group flex flex-col cursor-pointer relative overflow-hidden h-[360px]"
              >
                {/* Image Overlay Preview */}
                <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-black/25">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-accent text-accent-foreground shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2 select-none">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-foreground/65 mb-3">{cert.date}</p>
                  <p className="text-xs text-foreground/80 leading-snug mt-auto">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {certs.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 border border-white/10 hover:border-accent/30 glass px-6 py-3.5 rounded-xl font-semibold transition-all hover:bg-white/5 motion-safe:hover:scale-105"
              >
                {showAll ? "Show Less" : `Show All Certifications (${certs.length})`}
                {showAll ? (
                  <ChevronUp className="w-4 h-4 text-accent" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-accent group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCertIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCertIdx(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/90 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertIdx(null);
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
                src={certs[selectedCertIdx].image}
                alt={certs[selectedCertIdx].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Fixed Download Button Inside Modal */}
            <a
              href={certs[selectedCertIdx].image}
              download={`${certs[selectedCertIdx].title.replace(/\s+/g, '_')}_Tejas_Mandwade.jpeg`}
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
