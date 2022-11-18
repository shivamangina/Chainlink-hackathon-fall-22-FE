import React from "react";
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
import { faker } from "@faker-js/faker";
import { ethers } from "ethers";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

const LineChart = ({ transactions }) => {
  const chartLabels = [];
  const chartData = [];
  transactions.map((item) => {
    if (item) {
      chartLabels.push(item.paymentTime);
      chartData.push(ethers.utils.formatUnits(item.amount, 0));
    }
  });
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Dataset 1",
        data: chartData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="px-12 sm:px-12 lg:px-12">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
