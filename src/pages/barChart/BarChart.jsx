import { useState, useEffect } from "react";
import Chart from "chart.js/auto";

function BarChart() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetch("/sales")
      .then((response) => response.json())
      .then((data) => setSalesData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (salesData.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: salesData.map((item) => item.name),
          datasets: [
            {
              label: "Sales",
              data: salesData.map((item) => item.sales),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [salesData]);

  return (
    <div className="BarChart">
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default BarChart;
