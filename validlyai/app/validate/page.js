// app/validate-idea/page.tsx or page.jsx

'use client';
import { useState } from 'react';
import StartupForm from '@/components/StartupForm';
import SWOTAnalysis from '@/components/SWOTAnalysis';
import CompetitorResearch from '@/components/CompetitorResearch';
import TrendInsights from '@/components/TrendInsights';
import SWOTCharts from '@/components/SWOTCharts';
//import Dashboard from '@/components/Dashboard';

export default function ValidateIdeaPage() {
  const [ideaData, setIdeaData] = useState(null);
  const [competitorData, setCompetitorData] = useState(null);

  return (
    <div className="min-h-screen px-6 pt-6 bg-[#0C0F15]">
      <section className="text-center mb-6">
        <h1 data-aos="zoom-out"
                data-aos-delay="200" className="text-2xl font-bold  mb-2 text-white">
          🚀 Validate <span className='text-[#12EAB5]'>Your Startup</span> Idea
        </h1>
        <p data-aos="zoom-in"
          data-aos-delay="200" className="text-md text-gray-300">
          Get instant SWOT, Competitor Research, and Market Trends backed by AI
        </p>
      </section>

      <StartupForm
  onSubmit={({ swot, competitors }) => {
    setIdeaData(swot);
    setCompetitorData(competitors);
  }}
/>

      {ideaData && (
        <>
          <SWOTAnalysis idea={ideaData} />
          <SWOTCharts idea={ideaData} />
        </>
      )}
      {/*<CompetitorResearch idea={ideaData} />
          <TrendInsights idea={ideaData} />*/}
      {competitorData && (
  <CompetitorResearch competitors={competitorData} />
)}


    </div>
  );
}
