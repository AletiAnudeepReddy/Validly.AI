"use client";
import React, { useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

Chart.register(...registerables);

// Sample Data (Replace with dynamic data later)
const sampleTrendData = {
  agriculture: [41, 41, 37, 37, 35],
  connecting: [29, 27, 27, 28, 26],
  farmers: [47, 47, 49, 53, 55],
  dates: ["2025-04-28", "2025-04-29", "2025-04-30", "2025-05-01", "2025-05-02"],
};

const relatedQueries = {
  agriculture: [
    { query: "what is agriculture", value: 100 },
    { query: "agriculture university", value: 95 },
    { query: "ai in agriculture", value: 12 },
  ],
  connecting: [
    { query: "wifi not connecting", value: 100 },
    { query: "connecting flight", value: 77 },
    { query: "connecting technology people trychitter", value: 700 },
  ],
  farmers: [
    { query: "farmers market", value: 100 },
    { query: "warren county farmers fair", value: 950 },
    { query: "the farmers dog", value: 110 },
  ],
};

export default function MarketTrends() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // --- Line Chart Data ---
  const lineChartData = {
    labels: sampleTrendData.dates,
    datasets: [
      {
        label: "Agriculture",
        data: sampleTrendData.agriculture,
        borderColor: "#4ECDC4",
        backgroundColor: "#4ECDC4",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Connecting",
        data: sampleTrendData.connecting,
        borderColor: "#FF6B6B",
        backgroundColor: "#FF6B6B",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Farmers",
        data: sampleTrendData.farmers,
        borderColor: "#FFD93D",
        backgroundColor: "#FFD93D",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ccc", // axis text
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
      y: {
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
    },
  };

  // --- Pie Chart Data ---
  const totalByKeyword = Object.entries(sampleTrendData)
    .filter(([key]) => key !== "dates")
    .map(([_, values]) => values.reduce((sum, v) => sum + v, 0));

  const pieChartData = {
    labels: Object.keys(sampleTrendData).filter((k) => k !== "dates"),
    datasets: [
      {
        data: totalByKeyword,
        backgroundColor: ["#4ECDC4", "#FF6B6B", "#FFD93D"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ccc",
        },
      },
    },
  };

  return (
    <div className="bg-[#0C0F15] min-h-screen py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl font-bold text-center text-[#12EAB5] mb-12"
          data-aos="fade-down"
        >
          📊 Market Trend Insights
        </h2>

        {/* --- Line Chart --- */}
        {/* --- Charts Row --- */}
        <div
          className="flex flex-col md:flex-row gap-8 mt-8"
          data-aos="fade-up"
        >
          {/* --- Line Chart --- */}
          <div className="flex-1 bg-[#10151D] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl text-center mb-4 text-[#12EAB5] font-semibold">
              📈 Interest Over Time
            </h3>
            <Line data={lineChartData} options={chartOptions} />
          </div>

          {/* --- Pie Chart --- */}
          <div className="flex-1 bg-[#10151D] p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl text-[#12EAB5] mb-4 font-semibold text-center">
              🥧 Keyword Share
            </h3>
            <div className="w-full flex items-center justify-center h-[300px]">
              <Pie data={pieChartData} options={pieOptions} />
            </div>
          </div>
        </div>

        {/* --- Related Queries --- */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {Object.entries(relatedQueries).map(([keyword, queries], idx) => (
            <div
              key={keyword}
              className="bg-[#10151D] p-6 rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-2xl font-semibold text-[#12EAB5] mb-4 capitalize">
                🔍 Related to {keyword}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {queries.map((q, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-[#333] pb-1"
                  >
                    <span>{q.query}</span>
                    <span className="text-[#12EAB5] font-medium">{q.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
