"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function MiniBarChart({ values }) {
  const data = {
    labels: values.map(() => ""),
    datasets: [
      {
        data: values,
        backgroundColor: "rgba(99, 102, 241, 1)",

        // 🔴 THESE GO HERE — DATASET LEVEL
        barThickness: 6,
        borderRadius: 3,
        categoryPercentage: 1.0,
        barPercentage: 0.9,
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
    <div className="h-[32px] w-[80px]">
      <Bar data={data} options={options} />
    </div>
  );
}
