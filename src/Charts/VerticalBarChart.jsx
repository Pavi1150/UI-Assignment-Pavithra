import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data = { labels: [], datasets: [] }, height = 110 }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white"
        }

      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)"
        },
        ticks: {
          color: "white"
        }
      },
      y: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)"
        },
        ticks: {
          color: "white"
        }
      }
    }
  };

  return <Bar options={options} data={data} height={height} />;
}

export default BarChart;
