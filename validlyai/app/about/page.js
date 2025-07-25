'use client';
import React from 'react';
import { Lightbulb, BarChart3, Globe, Users, Save, Search } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0C0F15] text-white px-6 py-12 md:px-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 data-aos="zoom-out" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-[#12EAB5]">About Validly.ai</h1>
          <p data-aos="zoom-in" data-aos-delay="100" className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Validate your startup idea in minutes. Powered by AI, Validly helps you uncover your idea's strengths, market trends, competitors, and more — all in one click.
          </p>
        </section>

        {/* Why it matters */}
        <div className='flex md:justify-between border-t border-[#253445]  pt-7 flex-col md:flex-row items-center md:gap-50 gap-10'>
        <section data-aos="fade-right" data-aos-delay="100" className="space-y-4 w-[50%]">
          <h2 className="text-2xl font-semibold text-[#12EAB5]">🌍 Why Validly.ai Matters</h2>
          <p className="text-gray-400 text-lg">
            9 out of 10 startups fail. Most founders skip the idea validation stage or spend weeks collecting feedback. Validly makes it instant, smart, and actionable using cutting-edge AI models. It’s like having a research assistant, analyst, and startup mentor — all rolled into one.
          </p>
        </section>

        {/* Who it's for */}
        <section data-aos="fade-left" data-aos-delay="100" className="space-y-4 w-[50%]">
          <h2 className="text-2xl font-semibold text-[#12EAB5]">🎯 Who Is It For?</h2>
          <ul className="list-disc list-inside text-gray-400 text-lg space-y-2">
            <li>📌 First-time founders validating new ideas</li>
            <li>📌 Product teams analyzing new features</li>
            <li>📌 Investors screening startup pitches</li>
            <li>📌 Students working on entrepreneurial projects</li>
            <li>📌 Hackathon participants validating quickly</li>
          </ul>
        </section>
        </div>

        {/* Features grid */}
        <section className="space-y-6">
          <h2 data-aos="fade-down" data-aos-delay="100" className="text-2xl text-center font-semibold text-[#12EAB5]">🚀 Key Features</h2>
          <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8 text-[#12EAB5]" />}
              title="AI-Powered SWOT"
              desc="Get instant Strengths, Weaknesses, Opportunities, and Threats based on your idea using GPT-4."
            />
            <FeatureCard
              icon={<Search className="h-8 w-8 text-[#12EAB5]" />}
              title="Competitor Discovery"
              desc="Find similar ideas on Product Hunt, Crunchbase, and get summarized insights automatically."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-[#12EAB5]" />}
              title="Market Trends"
              desc="See what’s trending in your domain using Google Trends, clustering, and NLP techniques."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-[#12EAB5]" />}
              title="Community Feedback"
              desc="Rate and review other ideas, get feedback on yours, and engage with a community of builders."
            />
            <FeatureCard
              icon={<Save className="h-8 w-8 text-[#12EAB5]" />}
              title="Save & Revisit"
              desc="Save your idea validation results and revisit or edit them later as you iterate your concept."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-[#12EAB5]" />}
              title="Global AI Backend"
              desc="Built using GPT-4, spaCy, sklearn, and modern stacks — giving you speed, accuracy, and scalability."
            />
          </div>
        </section>

        {/* How it works */}
        <div className='flex md:justify-between flex-col md:flex-row items-center gap-10'>
        <section data-aos="fade-right" data-aos-delay="100" className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#12EAB5]">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside text-gray-300 text-lg space-y-2">
            <li>Enter your startup idea in a simple form</li>
            <li>Our backend uses GPT-4 + NLP tools to analyze it</li>
            <li>We generate a SWOT report and show similar ideas</li>
            <li>Get market trends and feedback in seconds</li>
            <li>Save it, improve it, and come back anytime</li>
          </ol>
        </section>

        {/* Tech Stack */}
        <section data-aos="fade-left" data-aos-delay="100" className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#12EAB5]">🛠️ Built With</h2>
          <ul className="list-disc list-inside text-gray-400 text-lg space-y-2">
            <li>Next.js 15 (App Router)</li>
            <li>TailwindCSS for UI</li>
            <li>GPT-4 via OpenAI API</li>
            <li>Python: spaCy, sklearn for NLP & clustering</li>
            <li>Google Trends API</li>
            <li>MongoDB for storage</li>
          </ul>
        </section>
        </div>
        {/* Contact */}
        <section className="space-y-4 flex flex-col items-center border-t border-[#1E2A37] pt-10">
          <h2 data-aos="zoom-out" data-aos-delay="100" className="text-2xl font-semibold text-[#12EAB5]">📬 Contact & Support</h2>
          <p data-aos="zoom-in" data-aos-delay="100" className="text-gray-400">Have questions, ideas, or bugs to report? We’d love to hear from you!</p>
          <ul className="text-gray-300 space-y-2 flex flex-col items-center justify-center">
            <li data-aos="fade-left" data-aos-delay="100"><span className="font-medium text-white">Email:</span> support@validly.ai</li>
            <li data-aos="fade-right" data-aos-delay="200"><span className="font-medium text-white">Twitter:</span> <a href="https://twitter.com/validlyai" className="text-[#12EAB5] hover:underline">@validlyai</a></li>
            <li data-aos="fade-left" data-aos-delay="300"><span className="font-medium text-white">GitHub:</span> <a href="https://github.com/validly-ai" className="text-[#12EAB5] hover:underline">validly-ai</a></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center pt-5 border-t border-[#1E2A37] ">
          <h3 className="text-xl text-white font-semibold mb-2">Ready to validate your next big idea?</h3>
          <a href="/validate" className="inline-block bg-[#12EAB5] text-[#10151D] px-6 py-3 rounded-lg font-semibold hover:bg-teal-400 transition">
            Try Validly Now
          </a>
        </section>

      </div>
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-[#10151D]/99 p-6 rounded-xl shadow-md hover:shadow-lg transition border border-[#2D3748]">
      <div className="flex items-center space-x-4 mb-4">
        {icon}
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
