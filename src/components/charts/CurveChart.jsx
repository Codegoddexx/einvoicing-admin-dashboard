"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

export default function CurveChart({ color = 'rgba(255, 255, 255, 0.5)', values = [10, 20, 15, 25, 20, 30, 25] }) {
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: values,
        fill: true,
        backgroundColor: color,
        borderColor: color.replace('0.5', '0.8'),
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
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
    <div className="h-[48px] w-[90px]">
      <Line data={data} options={options} />
    </div>
  );
}