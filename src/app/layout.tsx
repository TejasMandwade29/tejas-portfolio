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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
