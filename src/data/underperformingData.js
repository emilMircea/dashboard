const underperformingData = canvas => {
  const ctx = canvas.getContext("2d");
  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, "rgba(248,29,80,0.2)");
  gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //red colors
  return {
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
    datasets: [
      {
        label: "Underperforming this month",
        borderColor: "#ff208e",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#ff208e",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        backgroundColor: gradientStroke,
        borderWidth: 2,
        suggestedMin: 100,
        suggestedMax: 500,
        data: [1, 2, 0, 1, 3]
      }
    ]
  };
};

export default underperformingData;
