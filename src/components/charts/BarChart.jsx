import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({}) => {
  const data = {
    optionsBar: {
      chart: {
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        dropShadow: {
          enabled: true,
        },
      },
      colors: [
        "#75D6FF",
        "#75FFFF",
        "#AA75FF",
        "#FF7BF2",
        "#FFC46A",
        "#FF8E5D",
      ],
      stroke: {
        width: 0,
      },
      xaxis: {
        categories: [""],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.35,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 1,
          stops: [90, 0, 100],
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "right",
      },
    },
    seriesBar: [
      {
        name: "Equity",
        data: [31],
      },
      {
        name: "Bonds",
        data: [23],
      },
      {
        name: "Gold",
        data: [22],
      },
      {
        name: "Govt. Securities",
        data: [13],
      },
      {
        name: "Bond 2",
        data: [6],
      },
      {
        name: "Bond 3",
        data: [5],
      },
    ],
  };

  return (
    <React.Fragment>
      <Chart
        options={data.optionsBar}
        height={140}
        series={data.seriesBar}
        type="bar"
        width={400}
      />
    </React.Fragment>
  );
};

export default BarChart;
