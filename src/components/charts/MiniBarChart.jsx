"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function MiniBarChart({ values = [20, 40, 30, 35, 45] }) {
  const data = {
    labels: ['', '', '', '', ''],
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgba(99, 102, 241, 0.3)',
          'rgba(99, 102, 241, 0.4)',
          'rgba(99, 102, 241, 0.5)',
          'rgba(99, 102, 241, 0.6)',
          'rgba(99, 102, 241, 0.8)',
        ],
        borderRadius: 4,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  };

  return (
    <div className="h-[48px] w-[60px]">
      <Bar data={data} options={options} />
    </div>
  );
}