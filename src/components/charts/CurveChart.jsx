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

export default function CurveChart({
  color,
  values,
  variant = "soft", // soft | sharp | thin
}) {
  const isSharp = variant === "sharp";
  const isThin = variant === "thin";

  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: values,
        fill: false,
        backgroundColor: 'transparent',
        borderColor: color.replace('0.3', '1').replace('0.5', '1'),
        borderWidth: isThin ? 1.5 : 2,
        tension: isSharp ? 0 : 0.4,
        pointRadius: 0,
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
