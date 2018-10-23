const shippingData = canvas => {
  const ctx = canvas.getContext("2d");
  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
  gradientStroke.addColorStop(0.2, "rgba(72,72,176,0.0)");
  gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  return {
    labels: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
    datasets: [
      {
        label: "Shipped per Quarter",
        borderColor: "#f14bcb",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#f14bcb",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        backgroundColor: gradientStroke,
        borderWidth: 2,
        data: [542, 550, 380, 610]
      }
    ]
  };
};

export default shippingData;
