import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tejas Mandwade | Python Developer & AI/ML Engineer",
  description: "Portfolio of Tejas Mandwade, specializing in AI/ML, Generative AI, and Agentic AI Systems.",
  keywords: ["AI Engineer", "ML Engineer", "Python Developer", "Generative AI", "Agentic AI", "LangGraph", "FastAPI"],
  authors: [{ name: "Tejas Mandwade" }],
  openGraph: {
    title: "Tejas Mandwade | AI/ML Engineer",
    description: "Building intelligent software using Python and modern AI technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative min-h-screen`}
      >
        {/* Ambient background container */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none">
          {/* Gradient Mesh Layer */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full ambient-blob-1 animate-ambient-1 filter blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full ambient-blob-1 animate-ambient-2 filter blur-[80px]" />
          <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] rounded-full ambient-blob-2 animate-ambient-1 filter blur-[100px]" />
          
          {/* Subtle Noise overlay (opacity is ~3.5% as requested) */}
          <div className="absolute inset-0 bg-noise opacity-[0.035]" />
        </div>
        {children}
      </body>
    </html>
  );
}
