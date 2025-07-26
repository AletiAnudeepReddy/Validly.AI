'use client';
import { Lightbulb, ShieldAlert, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SWOTAnalysis({ idea }) {
  // Mocked example – you can replace this with actual API response
  const swotData = {
    strengths: [
      'Unique delivery model for college campuses',
      'Low-cost implementation using existing resources'
    ],
    weaknesses: [
      'Limited scalability beyond campuses',
      'Dependency on campus permissions'
    ],
    opportunities: [
      'Growing demand for hyper-local services',
      'Integration with college meal plans and clubs'
    ],
    threats: [
      'Competition from food giants like Zomato/Swiggy',
      'Strict food safety regulations'
    ]
  };

  const swotCards = [
    {
      title: 'Strengths',
      icon: <Lightbulb className="text-green-400 w-6 h-6" />,
      points: swotData.strengths,
      color: 'border-green-400'
    },
    {
      title: 'Weaknesses',
      icon: <ShieldAlert className="text-yellow-400 w-6 h-6" />,
      points: swotData.weaknesses,
      color: 'border-yellow-400'
    },
    {
      title: 'Opportunities',
      icon: <TrendingUp className="text-blue-400 w-6 h-6" />,
      points: swotData.opportunities,
      color: 'border-blue-400'
    },
    {
      title: 'Threats',
      icon: <AlertTriangle className="text-red-400 w-6 h-6" />,
      points: swotData.threats,
      color: 'border-red-400'
    }
  ];

  return (
    <div className='px-[7vw]'>
    <section className="mt-10  pb-10 text-white max-w-7xl">
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-xl font-semibold mb-6 text-center text-white"
      >
        🤖 AI-Generated <span className='text-[#12EAB5]'>SWOT</span> Analysis
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {swotCards.map((card, index) => (
          <div
          data-aos="zoom-in"
          data-aos-delay="00"
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 border-l-4 ${card.color} rounded-xl bg-[#10151D] shadow-md`}
          >
            <div className="flex items-center gap-2 mb-2">
              {card.icon}
              <h3 className="text-lg font-bold">{card.title}</h3>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {card.points.map((point, i) => (
                <li key={i} className="mb-1">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
