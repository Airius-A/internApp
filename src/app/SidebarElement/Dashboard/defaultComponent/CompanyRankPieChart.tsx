import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["S", "A", "B", "C"],
  datasets: [
    {
      label: "# Level Ratio",
      data: [2, 5, 10, 16],
      backgroundColor: [
        "rgb(255, 238, 0)",
        "rgb(54, 163, 235)",
        "rgb(255, 207, 86)",
        "rgb(75, 192, 192)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "grey",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Company rank ratio",
      align: "start",
      font: {
        size: 15,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || "";
          const value = context.raw || 0;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
};

export const CompanyRankPieChart = () => <Pie data={data} options={options} />;
