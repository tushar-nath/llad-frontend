import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartRef = useRef(null) as any;

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d") as any;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "",
            data: [4, 8, 15, 12, 6],
            backgroundColor: [
              "#F1FF4C",
              "#0DB3FB",
              "#001376",
              "#9000D4",
              "#DC005C",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            display: false,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default ChartComponent;
