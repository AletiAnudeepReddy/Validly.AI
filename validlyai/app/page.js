"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0F15] text-white px-6 py-16 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 data-aos="zoom-out"
          data-aos-delay="200" className="text-4xl sm:text-5xl font-bold leading-tight">
          Discover If <span className="text-[#12EAB5]">Your Startup Idea</span> Has Real Potential
        </h1>
        <p data-aos="zoom-in"
          data-aos-delay="200" className="mt-4 text-lg text-gray-300 ">
          <span className="text-[#12EAB5] font-semibold">Validly.AI</span> is your AI-powered validation partner —
          scanning Product Hunt, Crunchbase, and Google Trends to uncover demand, uniqueness, and success signals.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex gap-4 mt-8">
      <Link href={"/validate"}>
        <button data-aos="fade-right"
          data-aos-delay="300" className="bg-[#12EAB5] hover:scale-105 text-black px-6 py-3 rounded hover:opacity-90 transition font-medium">
          Validate My Idea
        </button>
        </Link>
        <Link href={"/about"}>
        <button data-aos="fade-left"
          data-aos-delay="300" className="border hover:scale-105 border-[#12EAB5] px-6 py-3 rounded text-[#12EAB5] hover:bg-[#12EAB5]/10 transition font-medium">
          How It Works
        </button>
        </Link>
      </div>

      {/* Why Validly.AI Section */}
      <section className="max-w-5xl w-full mt-18 grid sm:grid-cols-2 gap-8 px-2 text-gray-300">
        <Card
          icon="🤖"
          title="Let AI do the research"
          desc="We scan Product Hunt, Crunchbase, and others — so you don’t have to. Smart summaries, fast results."
        />
        <Card
          icon="📊"
          title="Track real-time trends"
          desc="Understand what people are searching for with Google Trends and fresh market data."
        />
        <Card
          icon="🧠"
          title="Uncover patterns"
          desc="Automatically cluster and group ideas to reveal gaps and emerging opportunities."
        />
        <Card
          icon="⚡"
          title="Instant validation"
          desc="No waitlists. No opinions. Just real, data-driven feedback within seconds."
        />
      </section>

      {/* Footer Line */}
      <p data-aos=""
          data-aos-delay="200" className="mt-16 text-sm text-gray-500">
        🚀 Trusted by 1200+ early-stage founders in 2025
      </p>
    </main>
  );
}

// Reusable Card Component
function Card({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#10151D]/99 p-6 rounded-xl border-[0.5px] border-[#12EAB540]/60 hover:shadow-[0_0_20px_#12EAB540] transition hover:scale-[1.02]"
    >
      <div data-aos="zoom-in"
          data-aos-delay="200" className="text-3xl mb-3">{icon}</div>
      <h3 data-aos="zoom-out"
          data-aos-delay="200" className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p data-aos="fade-down"
          data-aos-delay="200" className="text-gray-400">{desc}</p>
    </motion.div>
  );
}
