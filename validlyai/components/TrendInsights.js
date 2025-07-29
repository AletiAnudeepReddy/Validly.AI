"use client";
import React, { useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

Chart.register(...registerables);

// Sample Data (Replace with dynamic data later)
const sampleTrendData = {
  campuseats: [45, 50, 52, 60, 65],
  hostelFood: [30, 34, 38, 40, 42],
  foodDelivery: [60, 64, 66, 70, 75],
  liveTracking: [25, 28, 29, 32, 35],
  walletSupport: [18, 22, 24, 26, 30],
  dates: ["2025-07-24", "2025-07-25", "2025-07-26", "2025-07-27", "2025-07-28"],
};

const relatedQueries = {
  campuseats: [
    { query: "campus food delivery app", value: 100 },
    { query: "CampusEats startup idea", value: 85 },
    { query: "campus food delivery india", value: 70 },
    { query: "campus eats delivery system", value: 60 },
    { query: "college food order app", value: 50 },
  ],
  hostelFood: [
    { query: "hostel food problems", value: 95 },
    { query: "best food delivery in hostels", value: 87 },
    { query: "order food hostel students", value: 74 },
    { query: "hostel food waiting time", value: 60 },
    { query: "skip hostel food queue", value: 55 },
  ],
  foodDelivery: [
    { query: "food delivery startups", value: 98 },
    { query: "swiggy for colleges", value: 90 },
    { query: "college food delivery india", value: 82 },
    { query: "zomato vs swiggy in campus", value: 75 },
    { query: "student delivery services", value: 65 },
  ],
  liveTracking: [
    { query: "food delivery live tracking", value: 80 },
    { query: "track food in college", value: 68 },
    { query: "uber eats live track", value: 60 },
    { query: "gps tracking in food delivery", value: 55 },
    { query: "map integration for food delivery", value: 48 },
  ],
  walletSupport: [
    { query: "in-app wallet for students", value: 72 },
    { query: "wallet payment for hostel food", value: 64 },
    { query: "upi and wallet integration", value: 59 },
    { query: "student discount wallet", value: 50 },
    { query: "college wallet food app", value: 45 },
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
      label: "CampusEats",
      data: sampleTrendData.campuseats,
      borderColor: "#6C5CE7",        // Purple-ish
      backgroundColor: "#6C5CE7",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Hostel Food",
      data: sampleTrendData.hostelFood,
      borderColor: "#00B894",        // Green-teal
      backgroundColor: "#00B894",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Food Delivery",
      data: sampleTrendData.foodDelivery,
      borderColor: "#0984E3",        // Blue
      backgroundColor: "#0984E3",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Live Tracking",
      data: sampleTrendData.liveTracking,
      borderColor: "#E17055",        // Orange
      backgroundColor: "#E17055",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Wallet Support",
      data: sampleTrendData.walletSupport,
      borderColor: "#D63031",        // Red
      backgroundColor: "#D63031",
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
              🥧 Insights
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
