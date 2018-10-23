const monthlySalesData = canvas => {
  const ctx = canvas.getContext("2d");
  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
  gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  return {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Sold this month",
        borderColor: "#3596ff",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#3596ff",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        backgroundColor: gradientStroke,
        borderWidth: 2,
        suggestedMin: 100,
        suggestedMax: 500,
        data: [152, 150, 148, 180]
      }
    ]
  };
};

export default monthlySalesData;
