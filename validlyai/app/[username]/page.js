'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaRocket, FaChartPie, FaRegLightbulb } from 'react-icons/fa';
import { IoAnalyticsSharp } from 'react-icons/io5';

export default function DashboardPage() {
  const params = useParams();
  const username = params.username;

  const [recentIdeas, setRecentIdeas] = useState([]);

  useEffect(() => {
    // Dummy fetch simulation - replace with real backend API later
    const dummyIdeas = [
      { id: 1, title: 'AI Music App', status: 'Analyzed', date: '2025-07-24' },
      { id: 2, title: 'Smart Irrigation System', status: 'In Progress', date: '2025-07-22' },
    ];
    setRecentIdeas(dummyIdeas);
  }, []);

  return (
    <div className="min-h-screen md:px-[10vw] p-6 bg-[#0C0F15] text-gray-100 py-8">
      {/* Welcome Header */}
      <h1 data-aos="zoom-out"
        data-aos-delay="100" className="text-2xl font-bold text-center mb-2">
        👋 Welcome back, <span className="text-[#12EAB5]">{username}</span>!
      </h1>
      <p data-aos="zoom-in"
        data-aos-delay="100" className="text-gray-400 text-center mb-6">Here is your startup validation dashboard</p>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 text-gray-200 sm:grid-cols-3 gap-6 my-8 mb-8">
        <div data-aos="fade-left"
        data-aos-delay="300" className="bg-[#10151D] p-4 rounded-xl shadow border border-[#1e293b] hover:shadow-[0_0_20px_#12EAB5aa] hover:border-[#12EAB5] transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <FaRocket className="text-[#12EAB5] text-2xl" />
            <h2 className="text-lg font-semibold">Ideas Submitted</h2>
          </div>
          <p className="text-3xl font-bold text-center">12</p>
        </div>

        <div data-aos="zoom-in"
        data-aos-delay="300" className="bg-[#10151D] p-4 rounded-xl shadow border border-[#1e293b] hover:shadow-[0_0_20px_#12EAB5aa] hover:border-[#12EAB5] transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <IoAnalyticsSharp className="text-[#12EAB5] text-2xl" />
            <h2 className="text-lg font-semibold">Validated</h2>
          </div>
          <p className="text-3xl font-bold text-center">8</p>
        </div>

        <div data-aos="fade-right"
        data-aos-delay="300" className="bg-[#10151D] p-4 rounded-xl shadow border border-[#1e293b] hover:shadow-[0_0_20px_#12EAB5aa] hover:border-[#12EAB5] transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <FaChartPie className="text-[#12EAB5] text-2xl" />
            <h2 className="text-lg font-semibold">Insights Available</h2>
          </div>
          <p className="text-3xl font-bold text-center">5</p>
        </div>
      </div>

      {/* Recent Ideas Section */}
      <div>
        <h2 data-aos="fade-left"
        data-aos-delay="300" className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaRegLightbulb className="text-yellow-400" /> Recent Ideas
        </h2>

        {recentIdeas.length === 0 ? (
          <p data-aos="fade-up"
        data-aos-delay="300" className="text-gray-400">You haven't submitted any startup ideas yet.</p>
        ) : (
          <div className="space-y-4">
            {recentIdeas.map((idea) => (
              <div data-aos="zoom-in"
        data-aos-delay="300"
                key={idea.id}
                className="bg-[#10151D] p-4 rounded-xl border border-[#1e293b] hover:shadow-[0_0_20px_#12EAB5aa] hover:border-[#12EAB5] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{idea.title}</h3>
                    <p className="text-sm text-gray-400">
                      Status: <span className="text-white">{idea.status}</span> • {idea.date}
                    </p>
                  </div>
                  <Link
                    href={`/validate/${idea.id}`}
                    className="text-[#12EAB5] text-sm hover:underline"
                  >
                    View Insights →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
