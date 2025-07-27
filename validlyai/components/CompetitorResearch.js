'use client';
import { useEffect } from 'react';
import { FaStar, FaGlobe, FaRocket, FaExclamationTriangle } from 'react-icons/fa';

export default function CompetitorResearch({ competitors }) {
  useEffect(() => {
    // You can optionally log or process competitors here
  }, [competitors]);

  if (!competitors || competitors.length === 0) {
    return (
      <div className='px-[7vw] pb-10'>
        <p className="text-gray-400 text-sm text-center mt-10">
          No competitor data available.
        </p>
      </div>
    );
  }

  return (
    <div className='px-[7vw] pb-10'>
      <section
        className="mt-5 max-w-7xl bg-[#10151D] p-6 rounded-2xl shadow-xl border border-[#1E293B]"
      >
        <h2 data-aos="fade-down" data-aos-delay="100"
          className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <FaRocket className="text-[#12EAB5]" /> Competitor Research
        </h2>

        <p data-aos="zoom-out" data-aos-delay="100"
          className="text-sm text-gray-300 mb-6">
          We have found similar platforms in the market. Here is how they compare.
        </p>

        <div className="space-y-4">
          {competitors.map((comp, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay="100"
              className="relative bg-gradient-to-br from-[#10131a] to-[#0c0f15] p-5 rounded-xl border-2 border-[#1a1f2b] shadow-md hover:shadow-[0_0_20px_#12EAB5aa] hover:border-[#12EAB5] transition-all duration-300"
            >
              {/* Visit button at top-right */}
              <a
                href={comp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-[#12EAB5] text-sm hover:underline flex items-center gap-1"
              >
                <FaGlobe className="text-base" /> Visit
              </a>

              <div className="grid grid-cols-4 gap-6 items-start">
                {/* Column 1: Name + Focus */}
                <div>
                  <h3 className="text-lg font-bold text-[#12EAB5]">{comp.name}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    <span className="font-medium text-white">Focus:</span> {comp.focus}
                  </p>
                </div>

                {/* Column 2: Strengths */}
                <div>
                  <p className="text-white font-semibold flex items-center gap-1 mb-1">
                    <FaStar className="text-yellow-400" /> Strengths
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-0.5">
                    {comp.strengths?.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Weaknesses */}
                <div>
                  <p className="text-white font-semibold flex items-center gap-1 mb-1">
                    <FaExclamationTriangle className="text-red-400" /> Weaknesses
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-0.5">
                    {comp.weaknesses?.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: empty */}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center italic">
          *Data shown is AI-generated and subject to real-time updates in future.
        </p>
      </section>
    </div>
  );
}
