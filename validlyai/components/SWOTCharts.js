'use client';
import { Radar, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function SWOTCharts({ idea }) {
  if (!idea) return null;

  const categories = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'];
  const dataCounts = [
    idea.strengths.length,
    idea.weaknesses.length,
    idea.opportunities.length,
    idea.threats.length
  ];

  const radarData = {
    labels: categories,
    datasets: [
      {
        label: 'SWOT Distribution',
        data: dataCounts,
        backgroundColor: 'rgba(18, 234, 181, 0.2)',
        borderColor: '#12EAB5',
        pointBackgroundColor: '#12EAB5',
        pointBorderColor: '#fff'
      }
    ]
  };

  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Number of Points',
        data: dataCounts,
        backgroundColor: [
          '#34d399', // green
          '#facc15', // yellow
          '#60a5fa', // blue
          '#f87171'  // red
        ]
      }
    ]
  };

  return (
    <div className="px-[7vw]">
    <div className=' max-w-7xl mt-5 pb-10'>
    <h2 className="text-xl font-semibold mb-6 text-cenr text-white">
        <span className="text-[#12EAB5]">SWOT</span> Charts
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div className="bg-[#10151D] h-120 p-6 rounded-xl shadow-md">
        <h3 className="text-white text-center mb-4 text-lg font-semibold">Radar Chart</h3>
        <Radar data={radarData} />
      </div>
      <div className="bg-[#10151D] h-120 p-6 rounded-xl shadow-md">
        <h3 className="text-white text-center mb-4 text-lg font-semibold">Bar Graph</h3>
        <Bar data={barData} />
      </div>
    </div>
    </div>
    </div>
  );
}
