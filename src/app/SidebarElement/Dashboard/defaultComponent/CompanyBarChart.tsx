"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function CompanyBarChart({
  data,
  dimension,
}: {
  data: any[];
  dimension: string;
}) {
  // 聚合数据：按维度统计数量
  const grouped = data.reduce((acc, item) => {
    const key = item[dimension];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: `The number of company (based on ${dimension})`,
        data: Object.values(grouped),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: `Company Bar chart (based on ${dimension})`,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
  };

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // 判断是否是暗色模式

  return (
    <div className="w-full h-[400px]">
      <Bar
        data={chartData}
        style={{ backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff" }}
        options={options}
      />
    </div>
  );
}
