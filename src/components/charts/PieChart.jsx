import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({}) => {
  const data = {
    series: [12, 19, 3, 5, 2, 3],
    options: {
      colors: [
        "#75D6FF",
        "#75FFFF",
        "#AA75FF",
        "#FF7BF2",
        "#FFC46A",
        "#FF8E5D",
      ],
      labels: [
        "Flexi Cap Fund 32.19%",
        "Small Cap Fund 26.40%",
        "ELSS 26.04%",
        "Index Fund 12.03%",
        "Sectoral Fund 26.40%",
        "Large & Mid Cap Fund 12.03%",
      ],
    },
  };

  return (
    <React.Fragment>
      <Chart
        options={data.options}
        height={140}
        series={data.series}
        type="pie"
        width={600}
      />
    </React.Fragment>
  );
};

export default PieChart;
