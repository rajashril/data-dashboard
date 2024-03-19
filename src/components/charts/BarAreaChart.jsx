import React from "react";
import Chart from "react-apexcharts";

const BarAreaChart = ({}) => {
  const data = {
    series: [
      {
        data: [
          {
            x: "Oil & Gas 32.19%",
            y: 218,
          },
          {
            x: "Private Bank 26.04%",
            y: 149,
          },
          {
            x: "Pharmaceuticals 26.40%",
            y: 184,
          },
          {
            x: "Construction 12.03%",
            y: 55,
          },
          {
            x: "Power Generation 26.40%",
            y: 84,
          },
          {
            x: "Other 12.03%",
            y: 31,
          },
        ],
      },
    ],
    options: {
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
        show: true,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      colors: [
        "#75D6FF",
        "#75FFFF",
        "#AA75FF",
        "#FF7BF2",
        "#FFC46A",
        "#FF8E5D",
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Chart
        options={data.options}
        height={140}
        series={data.series}
        type="treemap"
        width={400}
      />
    </React.Fragment>
  );
};

export default BarAreaChart;
