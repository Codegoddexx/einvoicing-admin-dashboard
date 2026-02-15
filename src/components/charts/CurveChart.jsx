// src/components/charts/CurveChart.jsx
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
  useGradient = false,
  gradientStart = 'rgba(99, 102, 241, 1)',
  gradientEnd = 'rgba(209, 213, 219, 0.5)',
}) {
  const isSharp = variant === "sharp";
  const isThin = variant === "thin";

  // Create gradient function
  const createGradient = (ctx, chartArea) => {
    if (!chartArea) return color;
    
    const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
    gradient.addColorStop(0, gradientStart);
    gradient.addColorStop(1, gradientEnd);
    
    return gradient;
  };

  const data = {
    labels: Array(values.length).fill(''),
    datasets: [
      {
        data: values,
        fill: false,
        borderColor: useGradient ? (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return color;
          return createGradient(ctx, chartArea);
        } : color,
        borderWidth: isThin ? 1.5 : 2.5,
        tension: isSharp ? 0 : 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: gradientStart,
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
          label: (context) => context.parsed.y.toString(),
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