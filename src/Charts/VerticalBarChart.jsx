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

function BarChart({ data = { labels: [], datasets: [] } , height = 110 }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white" // Set legend labels color to white
        }

      },
      title: {
        display: true,
        // text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // Display vertical grid lines
          color: "rgba(0, 0, 0, 0.1)" // Color for vertical grid lines
        },
        ticks: {
          color: "white" // Set x-axis labels color to white
        }
      },
      y: {
        grid: {
          display: true, // Display horizontal grid lines
          color: "rgba(0, 0, 0, 0.1)" // Color for horizontal grid lines
        },
        ticks: {
          color: "white" // Set y-axis labels color to white
        }
      }
    }
  };

  return <Bar options={options} data={data} height={height}/>;
}

export default BarChart;
