"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

Chart.register(...registerables);

export default function MarketTrends() {
  const params = useParams();
  const idea = decodeURIComponent(params?.idea || "");

  const [trendData, setTrendData] = useState(null);
  const [relatedQueries, setRelatedQueries] = useState({});

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchTrendData = async () => {
      try {
        const res = await fetch("http://localhost:5000/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idea }),
        });

        const data = await res.json();

        setTrendData({
          keywords: data.trendData.keywords,
          dates: data.trendData.dates,
        });

        setRelatedQueries(data.relatedQueries);
      } catch (error) {
        console.error("Error fetching trend data:", error);
      }
    };

    if (idea) {
      fetchTrendData();
    }
  }, [idea]);

  if (!trendData) {
    return (
      <div className="text-white h-screen flex justify-center items-center">
        <p>Loading Market Trends...</p>
      </div>
    );
  }

  // --- Line Chart Data ---
  const lineChartData = {
    labels: trendData.dates,
    datasets: Object.keys(trendData.keywords).map((keyword, idx) => ({
      label: keyword,
      data: trendData.keywords[keyword],
      borderColor: ["#4ECDC4", "#FF6B6B", "#FFD93D", "#9D4EDD", "#00C9A7"][idx % 5],
      backgroundColor: ["#4ECDC4", "#FF6B6B", "#FFD93D", "#9D4EDD", "#00C9A7"][idx % 5],
      fill: false,
      tension: 0.4,
    })),
  };

  // --- Pie Chart Data ---
  const totalByKeyword = Object.entries(trendData.keywords).map(([_, values]) =>
    values.reduce((sum, v) => sum + v, 0)
  );

  const pieChartData = {
    labels: Object.keys(trendData.keywords),
    datasets: [
      {
        data: totalByKeyword,
        backgroundColor: ["#4ECDC4", "#FF6B6B", "#FFD93D", "#9D4EDD", "#00C9A7"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ccc",
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
        <h2 className="text-2xl font-bold text-center text-[#12EAB5] mb-12" data-aos="fade-down">
          📊 Market Trend Insights for: <span className="text-white">{idea}</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mt-8" data-aos="fade-up">
          {/* Line Chart */}
          <div className="flex-1 bg-[#10151D] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl text-center mb-4 text-[#12EAB5] font-semibold">
              📈 Interest Over Time
            </h3>
            <Line data={lineChartData} options={chartOptions} />
          </div>

          {/* Pie Chart */}
          <div className="flex-1 bg-[#10151D] p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl text-[#12EAB5] mb-4 font-semibold text-center">
              🥧 Keyword Share
            </h3>
            <div className="w-full flex items-center justify-center h-[300px]">
              <Pie data={pieChartData} options={pieOptions} />
            </div>
          </div>
        </div>

        {/* Related Queries */}
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
                  <li key={i} className="flex justify-between border-b border-[#333] pb-1">
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
