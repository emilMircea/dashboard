const data = canvas => {
  const ctx = canvas.getContext("2d");
  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
  gradientStroke.addColorStop(0.2, "rgba(72,72,176,0.0)");
  gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Units Sold",
        borderColor: "#2bffe2",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#2bffe2",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        backgroundColor: gradientStroke,
        borderWidth: 2,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
      }
    ]
  };
};

export default data;
