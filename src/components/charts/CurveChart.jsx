"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export default function CurveChart({
  color = 'rgba(255, 255, 255, 0.5)',
  values = [10, 20, 15, 25, 20, 30, 25],
  variant = "soft",
}) {
  const isSharp = variant === "sharp";
  const isThin = variant === "thin";

  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: values,
        fill: false,
        backgroundColor: color,
        borderColor: color.replace('0.3', '0.8').replace('0.5', '0.8'),
        borderWidth: isThin ? 2 : 3,
        tension: isSharp ? 0 : 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: color.replace('0.3', '1').replace('0.5', '1'),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 8,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: (context) => '$' + context.parsed.y,
        },
      },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
        border: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="h-[48px] w-[90px]">
      <Line data={data} options={options} />
    </div>
  );
}