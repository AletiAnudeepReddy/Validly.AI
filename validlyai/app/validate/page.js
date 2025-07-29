// app/validate-idea/page.tsx or page.jsx

'use client';
import { useRef, useState, useEffect } from 'react';
import { useScroll } from '@/contex/ScrollContext';

import StartupForm from '@/components/StartupForm';
import SWOTAnalysis from '@/components/SWOTAnalysis';
import CompetitorResearch from '@/components/CompetitorResearch';
import TrendInsights from '@/components/TrendInsights';
import SWOTCharts from '@/components/SWOTCharts';
//import Dashboard from '@/components/Dashboard';

export default function ValidateIdeaPage() {
  const { setScrollTo } = useScroll();
  const swotRef = useRef(null);
  const compRef = useRef(null);
  const insightsRef = useRef(null);
  const [ideaData, setIdeaData] = useState(null);
  const [competitorData, setCompetitorData] = useState(null);
  useEffect(() => {
    setScrollTo({
      swot: () => swotRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      competitors: () => compRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      insights: () => insightsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    });
  }, [setScrollTo]);
  //const [trendData, setTrendData] = useState(null);


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
          //setTrendData(trend);
        }}
      />

      {ideaData && (
        <div ref={swotRef}>
        
          <SWOTAnalysis idea={ideaData} />
          <SWOTCharts idea={ideaData} />
        </div>
      )}
      {/*<CompetitorResearch idea={ideaData} />
          <TrendInsights idea={ideaData} />*/}
      {competitorData && (
          <div ref={compRef} className="pt-2">
            <CompetitorResearch competitors={competitorData} />
            <div ref={insightsRef} className="pt-2">
              <TrendInsights />
            </div>
          </div>
        )}
      {/*{trendData && (
        <TrendInsights trend={trendData} />
      )}*/}


    </div>
  );
}
