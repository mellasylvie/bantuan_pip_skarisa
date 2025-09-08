var lineChart = document.getElementById("lineChart").getContext("2d"),
barChart = document.getElementById("barChart").getContext("2d"),
pieChart = document.getElementById("pieChart").getContext("2d"),
pieChart2 = document.getElementById("pieChart2").getContext("2d"),
doughnutChart1 = document
  .getElementById("doughnutChart1")
  .getContext("2d"),
  doughnutChart2 = document
  .getElementById("doughnutChart2")
  .getContext("2d"),
  doughnutChart3 = document
  .getElementById("doughnutChart3")
  .getContext("2d"),

  doughnutChart5 = document
  .getElementById("doughnutChart5")
  .getContext("2d"),
radarChart = document.getElementById("radarChart").getContext("2d"),
bubbleChart = document.getElementById("bubbleChart").getContext("2d"),
multipleLineChart = document
  .getElementById("multipleLineChart")
  .getContext("2d"),
multipleBarChart = document
  .getElementById("multipleBarChart")
  .getContext("2d"),
htmlLegendsChart = document
  .getElementById("htmlLegendsChart")
  .getContext("2d");

var myLineChart = new Chart(lineChart, {
type: "line",
data: {
  labels: [
    "RPL",
    "TSM",
    "T. Logistik",
  ],
  datasets: [
    {
      label: "Statistik Konsentrasi Keahlian",
      borderColor: "#1d7af3",
      pointBorderColor: "#FFF",
      pointBackgroundColor: "#1d7af3",
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      backgroundColor: "transparent",
      fill: true,
      borderWidth: 2,
      data: [
        245, 189, 234
      ],
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
    labels: {
      padding: 10,
      fontColor: "#1d7af3",
    },
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  layout: {
    padding: { left: 15, right: 15, top: 15, bottom: 15 },
  },
},
});

var myBarChart = new Chart(barChart, {
type: "bar",
data: {
  labels: [
    "X RPL",
    "X TSM",
    "X TL",
    "XI RPL",
    "XI TSM",
    "XI TL",
    "XII RRPL",
    "XII TSM",
    "XII TL",
  ],
  datasets: [
    {
      label: "Jumlah Peserta Didik Perkelas",
      backgroundColor: "rgb(23, 125, 255)",
      borderColor: "rgb(23, 125, 255)",
      data: [34, 28, 36, 25, 20, 30, 31, 33, 29,],
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
},
});

var myPieChart = new Chart(pieChart, {
type: "pie",
data: {
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ["#1d7af3", "#f3545d"],
      borderWidth: 0,
    },
  ],
  labels: ["LAKI-LAKI", "PEREMPUAN"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
    labels: {
      fontColor: "rgb(154, 154, 154)",
      fontSize: 11,
      usePointStyle: true,
      padding: 20,
    },
  },
  pieceLabel: {
    render: "percentage",
    fontColor: "white",
    fontSize: 14,
  },
  tooltips: false,
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
    },
  },
},
});

var myPieChart2 = new Chart(pieChart2, {
type: "pie",
data: {
  datasets: [
    {
      data: [50, 35, 15],
      backgroundColor: ["#1d7af3", "#f3545d", "#fdaf4b"],
      borderWidth: 0,
    },
  ],
  labels: ["New Visitors", "Subscribers", "Active Users"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
    labels: {
      fontColor: "rgb(154, 154, 154)",
      fontSize: 11,
      usePointStyle: true,
      padding: 20,
    },
  },
  pieceLabel: {
    render: "percentage",
    fontColor: "white",
    fontSize: 14,
  },
  tooltips: false,
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
    },
  },
},
});

var myDoughnutChart1 = new Chart(doughnutChart1, {
type: "doughnut",
data: {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
},
});
var myDoughnutChart2 = new Chart(doughnutChart2, {
type: "doughnut",
data: {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
},
});
var myDoughnutChart3 = new Chart(doughnutChart3, {
type: "doughnut",
data: {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
},
});
var myDoughnutChart4 = new Chart(doughnutChart4, {
type: "doughnut",
data: {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
},
});

var myDoughnutChart5 = new Chart(doughnutChart5, {
type: "doughnut",
data: {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
},
});

var myRadarChart = new Chart(radarChart, {
type: "radar",
data: {
  labels: ["Running", "Swimming", "Eating", "Cycling", "Jumping"],
  datasets: [
    {
      data: [20, 10, 30, 2, 30],
      borderColor: "#1d7af3",
      backgroundColor: "rgba(29, 122, 243, 0.25)",
      pointBackgroundColor: "#1d7af3",
      pointHoverRadius: 4,
      pointRadius: 3,
      label: "Team 1",
    },
    {
      data: [10, 20, 15, 30, 22],
      borderColor: "#716aca",
      backgroundColor: "rgba(113, 106, 202, 0.25)",
      pointBackgroundColor: "#716aca",
      pointHoverRadius: 4,
      pointRadius: 3,
      label: "Team 2",
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
},
});

var myBubbleChart = new Chart(bubbleChart, {
type: "bubble",
data: {
  datasets: [
    {
      label: "Car",
      data: [
        { x: 25, y: 17, r: 25 },
        { x: 30, y: 25, r: 28 },
        { x: 35, y: 30, r: 8 },
      ],
      backgroundColor: "#716aca",
    },
    {
      label: "Motorcycles",
      data: [
        { x: 10, y: 17, r: 20 },
        { x: 30, y: 10, r: 7 },
        { x: 35, y: 20, r: 10 },
      ],
      backgroundColor: "#1d7af3",
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
},
});

var myMultipleLineChart = new Chart(multipleLineChart, {
type: "line",
data: {
  labels: [
    "RPL",
    "TSM",
    "Teknik Logistik",
  ],
  datasets: [
    {
      label: "RPL",
      borderColor: "#1d7af3",
      pointBorderColor: "#FFF",
      pointBackgroundColor: "#1d7af3",
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      backgroundColor: "transparent",
      fill: true,
      borderWidth: 2,
      data: [30, 45, 45,],
    },
    {
      label: "TSM",
      borderColor: "#59d05d",
      pointBorderColor: "#FFF",
      pointBackgroundColor: "#59d05d",
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      backgroundColor: "transparent",
      fill: true,
      borderWidth: 2,
      data: [10, 20, 55,],
    },
    {
      label: "T. Logistik",
      borderColor: "#f3545d",
      pointBorderColor: "#FFF",
      pointBackgroundColor: "#f3545d",
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      backgroundColor: "transparent",
      fill: true,
      borderWidth: 2,
      data: [10, 30, 58,],
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "top",
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  layout: {
    padding: { left: 15, right: 15, top: 15, bottom: 15 },
  },
},
});

var myMultipleBarChart = new Chart(multipleBarChart, {
type: "bar",
data: {
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
    "Dec",
  ],
  datasets: [
    {
      label: "First time visitors",
      backgroundColor: "#59d05d",
      borderColor: "#59d05d",
      data: [95, 100, 112, 101, 144, 159, 178, 156, 188, 190, 210, 245],
    },
    {
      label: "Visitors",
      backgroundColor: "#fdaf4b",
      borderColor: "#fdaf4b",
      data: [
        145, 256, 244, 233, 210, 279, 287, 253, 287, 299, 312, 356,
      ],
    },
    {
      label: "Pageview",
      backgroundColor: "#177dff",
      borderColor: "#177dff",
      data: [
        185, 279, 273, 287, 234, 312, 322, 286, 301, 320, 346, 399,
      ],
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  title: {
    display: true,
    text: "Traffic Stats",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
},
});

 Chart with HTML Legends

var gradientStroke = htmlLegendsChart.createLinearGradient(
500,
0,
100,
0
);
gradientStroke.addColorStop(0, "#177dff");
gradientStroke.addColorStop(1, "#80b6f4");

var gradientFill = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(23, 125, 255, 0.7)");
gradientFill.addColorStop(1, "rgba(128, 182, 244, 0.3)");

var gradientStroke2 = htmlLegendsChart.createLinearGradient(
500,
0,
100,
0
);
gradientStroke2.addColorStop(0, "#f3545d");
gradientStroke2.addColorStop(1, "#ff8990");

var gradientFill2 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
gradientFill2.addColorStop(0, "rgba(243, 84, 93, 0.7)");
gradientFill2.addColorStop(1, "rgba(255, 137, 144, 0.3)");

var gradientStroke3 = htmlLegendsChart.createLinearGradient(
500,
0,
100,
0
);
gradientStroke3.addColorStop(0, "#fdaf4b");
gradientStroke3.addColorStop(1, "#ffc478");

var gradientFill3 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
gradientFill3.addColorStop(0, "rgba(253, 175, 75, 0.7)");
gradientFill3.addColorStop(1, "rgba(255, 196, 120, 0.3)");

var myHtmlLegendsChart = new Chart(htmlLegendsChart, {
type: "line",
data: {
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
    "Dec",
  ],
  datasets: [
    {
      label: "Subscribers",
      borderColor: gradientStroke2,
      pointBackgroundColor: gradientStroke2,
      pointRadius: 0,
      backgroundColor: gradientFill2,
      legendColor: "#f3545d",
      fill: true,
      borderWidth: 1,
      data: [
        154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374,
      ],
    },
    {
      label: "New Visitors",
      borderColor: gradientStroke3,
      pointBackgroundColor: gradientStroke3,
      pointRadius: 0,
      backgroundColor: gradientFill3,
      legendColor: "#fdaf4b",
      fill: true,
      borderWidth: 1,
      data: [
        256, 230, 245, 287, 240, 250, 230, 295, 331, 431, 456, 521,
      ],
    },
    {
      label: "Active Users",
      borderColor: gradientStroke,
      pointBackgroundColor: gradientStroke,
      pointRadius: 0,
      backgroundColor: gradientFill,
      legendColor: "#177dff",
      fill: true,
      borderWidth: 1,
      data: [
        542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900,
      ],
    },
  ],
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  layout: {
    padding: { left: 15, right: 15, top: 15, bottom: 15 },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "500",
          beginAtZero: false,
          maxTicksLimit: 5,
          padding: 20,
        },
        gridLines: {
          drawTicks: false,
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "500",
        },
      },
    ],
  },
  legendCallback: function (chart) {
    var text = [];
    text.push('<ul class="' + chart.id + '-legend html-legend">');
    for (var i = 0; i < chart.data.datasets.length; i++) {
      text.push(
        '<li><span style="background-color:' +
          chart.data.datasets[i].legendColor +
          '"></span>'
      );
      if (chart.data.datasets[i].label) {
        text.push(chart.data.datasets[i].label);
      }
      text.push("</li>");
    }
    text.push("</ul>");
    return text.join("");
  },
},
});

var myLegendContainer = document.getElementById("myChartLegend");

// generate HTML legend
myLegendContainer.innerHTML = myHtmlLegendsChart.generateLegend();

// bind onClick event to all LI-tags of the legend
var legendItems = myLegendContainer.getElementsByTagName("li");
for (var i = 0; i < legendItems.length; i += 1) {
legendItems[i].addEventListener("click", legendClickCallback, false);
}