// components/TrendInsights.jsx
'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from 'recharts';

const trendData = [
  { year: '2020', interest: 20 },
  { year: '2021', interest: 45 },
  { year: '2022', interest: 75 },
  { year: '2023', interest: 110 },
  { year: '2024', interest: 160 },
];

const sectorGrowth = [
  { sector: 'AI in EdTech', growth: 150 },
  { sector: 'HealthTech', growth: 180 },
  { sector: 'ClimateTech', growth: 120 },
  { sector: 'FinTech', growth: 90 },
];

const marketShare = [
  { name: 'AI Chatbots', value: 30 },
  { name: 'AI Music', value: 25 },
  { name: 'AI Writing', value: 20 },
  { name: 'AI Gaming', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#12EAB5', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const TrendInsights = () => {
  return (
    <div className='px-[7vw] pb-10'>
    <section className="mt-10 text-white">
      <h2 data-aos="fade-up" className="text-xl font-bold mb-4 text-center text-[#12EAB5]">
        📊 Market Trend Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Line Chart */}
        <div data-aos="zoom-in"
        data-aos-delay="00" className="bg-[#11141b] p-4 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">📈 Search Interest Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="year" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="interest" stroke="#12EAB5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div data-aos="zoom-in" className="bg-[#11141b] p-4 rounded-2xl shadow-lg">
        
          <h3 className="text-lg font-semibold mb-2">📊 Top Growing Sectors</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sectorGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="sector" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="growth" fill="#12EAB5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div data-aos="zoom-in" className="bg-[#11141b] p-4 rounded-2xl shadow-lg col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">🥧 Market Share of AI Applications</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketShare}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
              >
                {marketShare.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TrendInsights;
