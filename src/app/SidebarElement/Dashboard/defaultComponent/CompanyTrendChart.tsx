import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];
const data = {
  labels,
  datasets: [
    {
      label: "Trend of companies",
      data: [10, 12, 12, 15, 17, 17, 18, 20, 21, 22, 23],
      borderColor: "rgb(0, 81, 255)",
      backgroundColor: "rgba(104, 252, 252, 0.2)",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Annual trend in the number of companies",
      align: "start" as const,
      font: {
        size: 15,
      },
    },
  },
};

export const CompanyTrendChart = () => <Line data={data} options={options} />;
