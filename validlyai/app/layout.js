"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import LoadingOverlay from "@/components/LoadingOverlay";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 700); // Simulate delay for smooth effect
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          {loading && <LoadingOverlay />}
          <Navbar />
          {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
