var data = [
    {
        x: ['Plastic'],
        y: [20],
        type: 'bar',
        hoverinfo: 'none',
        width: 0.1,
        name: 'Plastic', // Assign a unique name to each item
        marker: {
            color: 'rgba(255, 99, 132, 0.6)', // Adjust color if needed
            line: {
                color: 'rgb(255, 99, 132)',
                width: 1
            }
        }
    },
    {
        x: ['Metal'],
        y: [14],
        type: 'bar',
        hoverinfo: 'none',
        width: 0.1,
        name: 'Metal',
        marker: {
            color: 'rgba(255, 99, 132, 0.6)', // Adjust color if needed
            line: {
                color: 'rgb(255, 99, 132)',
                width: 1
            }
        }
    },
    {
        x: ['Paper'],
        y: [23],
        type: 'bar',
        hoverinfo: 'none',
        width: 0.1,
        name: 'Paper',
        marker: {
            color: 'rgba(255, 99, 132, 0.6)', // Adjust color if needed
            line: {
                color: 'rgb(255, 99, 132)',
                width: 1
            }
        }
    }
];

// Initial chart setup
function initializeChart() {
    const plasticInput = document.querySelector('.item[data-type="Plastic"] .rang-input');
    const metalInput = document.querySelector('.item[data-type="Metal"] .rang-input');
    const paperInput = document.querySelector('.item[data-type="Paper"] .rang-input');

    updateValue(plasticInput, 'Plastic');
    updateValue(metalInput, 'Metal');
    updateValue(paperInput, 'Paper');
}

initializeChart();

// Update the Plotly chart based on input values
function updateValue(input, itemType) {
    const rangeValueSpan = input.parentNode.querySelector('.range-value');
    rangeValueSpan.textContent = "%" + input.value;

    // Get the current value of the input range
    const inputValue = parseFloat(input.value);

    // Update the corresponding bar in the Plotly chart
    updateChart(itemType, inputValue);
}

// Recreate the entire Plotly chart with new values
function updateChart(itemType, value) {
    // Find the index of the item in the data array
    let itemIndex = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === itemType) {
            itemIndex = i;
            break;
        }
    }

    // If the item is found, update its value in the chart
    if (itemIndex !== -1) {
        // Update the y value of the corresponding item
        data[itemIndex].y = [value];

        // Remove the existing chart
        Plotly.purge('chart_area');

        // Create a new chart with updated data
        Plotly.newPlot('chart_area', data, layout, config);
    }
}

// Initial Plotly chart setup
var layout = {
    showlegend: false,
    yaxis: {
        range: [0, 100],
        tickvals: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            tickfont: {
            color: '#fff'
        }
    },
     xaxis: {
        tickfont: {
            color: 'rgb(255, 255, 255)' // Change the color here
        }
    },
    hovermode: 'y',
    bargap: 0.05, 
    bargroupgap: 0,
    width: 700,
    height: 400,
    paper_bgcolor: 'rgba(173, 216, 230, 0.5)', // Light Blue with 50% transparency
    plot_bgcolor: 'rgba(0,0,0,0)',
    boxshadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' // Simple shadow with offset and blur
};

var config = {
    displayModeBar: false,
    scrollZoom: false,
    modeBarButtonsToRemove: [
        "zoom2d", "pan2d", "select2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d",
        "hoverClosestCartesian", "hoverCompareCartesian",
        "zoom3d", "pan3d", "resetCameraDefault3d", "resetCameraLastSave3d", "hoverClosest3d",
        "orbitRotation", "tableRotation",
        "zoomInGeo", "zoomOutGeo", "resetGeo", "hoverClosestGeo",
        "toImage",
        "sendDataToCloud",
        "hoverClosestGl2d",
        "hoverClosestPie",
        "toggleHover",
        "resetViews",
        "toggleSpikelines",
        "resetViewMapbox"
    ],  // Disable various interactions
    modeBar: false,
    displaylogo: false,
    modeBarButtons: [[]],
};

Plotly.newPlot('chart_area', data, layout, config);











// // Initial chart setup
// function initializeChart() {
//     const plasticInput = document.querySelector('.item[data-type="Plastic"] .rang-input');
//     const metalInput = document.querySelector('.item[data-type="Metal"] .rang-input');
//     const paperInput = document.querySelector('.item[data-type="Paper"] .rang-input');

//     updateValue(plasticInput, 'Plastic');
//     updateValue(metalInput, 'Metal');
//     updateValue(paperInput, 'Paper');
// }

// initializeChart();

// // Update the Plotly chart based on input values
// function updateValue(input, itemType) {
//     const rangeValueSpan = input.parentNode.querySelector('.range-value');
//     rangeValueSpan.textContent = "%" + input.value;

//     // Get the current value of the input range
//     const inputValue = parseFloat(input.value);

//     // Update the corresponding bar in the Plotly chart
//     updateChart(itemType, inputValue);
// }

// // Update the Plotly chart with new values
// function updateChart(itemType, value) {
//     // Find the index of the item in the data array
//     let itemIndex = -1;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].name === itemType) {
//             itemIndex = i;
//             break;
//         }
//     }

//     // If the item is found, update its value in the chart
//     if (itemIndex !== -1) {
//         data[itemIndex].y = [value];
//         Plotly.update('chart_area', data);
//     }
// }


// // Initial Plotly chart setup
// var data = [
//     {
//         x: ['Plastic'],
//         y: [20],
//         type: 'bar',
//         hoverinfo: 'none',
//         width: 0.1,
//         name: 'Plastic' // Assign a unique name to each item
//     },
//     {
//         x: ['Metal'],
//         y: [14],
//         type: 'bar',
//         hoverinfo: 'none',
//         width: 0.1,
//         name: 'Metal'
//     },
//     {
//         x: ['Paper'],
//         y: [23],
//         type: 'bar',
//         hoverinfo: 'none',
//         width: 0.1,
//         name: 'Paper'
//     }
// ];

// var layout = {
//     showlegend: false,
//     yaxis: {
//         range: [0, 100],
//         tickvals: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//     },
//     bargroupgap: 0,
//     width: 700,
//     height: 400
// };

// var config = {
//     displayModeBar: false
// };

// Plotly.newPlot('chart_area', data, layout, config);




























// // function updateValue(input) {
// //     const rangeValueSpan = input.parentNode.querySelector('.range-value');
// //     rangeValueSpan.textContent = "%" + input.value;
// //     updateChart();
// // }
// // function updateChart() {
// //     // Get the current values of the input ranges
// //     const plasticValue = parseFloat(document.querySelector('.item[data-type="Plastic"] .rang-input').value);
// //     const metalValue = parseFloat(document.querySelector('.item[data-type="Metal"] .rang-input').value);
// //     const paperValue = parseFloat(document.querySelector('.item[data-type="Paper"] .rang-input').value);

// //     // Update the y values of the Plotly chart
// //     var newData = [
// //         {
// //             x: ['Plastic', 'Metal', 'Paper'],
// //             y: [plasticValue, metalValue, paperValue],
// //             type: 'bar',
// //             hoverinfo: 'none',
// //             width: 0.1
// //         }
// //     ];

// //     // Update the Plotly chart with the new data
// //     Plotly.update('chart_area', newData);
// // }
// // // Initial chart setup
// // function initializeChart() {
// //     const plasticInput = document.querySelector('.item[data-type="Plastic"] .rang-input');
// //     const metalInput = document.querySelector('.item[data-type="Metal"] .rang-input');
// //     const paperInput = document.querySelector('.item[data-type="Paper"] .rang-input');

// //     updateValue(plasticInput);
// //     updateValue(metalInput);
// //     updateValue(paperInput);
// // }

// // initializeChart();





// // // var myCanvas = document.getElementById("chart_area");
// // var data = [
// //     {
// //         x: ['Plastic', 'Metal', 'Paper'],
// //         y: [20, 14, 23],
// //         type: 'bar',
// //         hoverinfo: 'none',
// //         width: 0.1
// //     }
// // ];
// // var layout = {
// //     showlegend: false,
// //     yaxis: {
// //         range: [0, 100],
// //         tickvals: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// //     },
// //     bargroupgap: 0,
// //     width: 700,
// //     height: 400
// // };

// // var config = {
// //     displayModeBar: false
// // };

// // Plotly.newPlot('chart_area', data, layout, config);
// // myCanvas.width = 200;
// // myCanvas.height = 500;
// // var ctx = myCanvas.getContext("2d");
// // function drawLine(ctx, startX, startY, endX, endY, color) {
// //     ctx.save();
// //     ctx.strokeStyle = color;
// //     ctx.beginPath();
// //     ctx.moveTo(startX, startY);
// //     ctx.lineTo(endX, endY);
// //     ctx.stroke();
// //     ctx.restore();
// // }
// // function drawBar(
// //     ctx,
// //     upperLeftCornerX,
// //     upperLeftCornerY,
// //     width,
// //     height,
// //     color
// // ) {
// //     ctx.save();
// //     ctx.fillStyle = color;
// //     ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
// //     ctx.restore();
// // }
// // class BarChart {
// //     constructor(options) {
// //         this.options = options;
// //         this.canvas = options.canvas;
// //         this.ctx = this.canvas.getContext("2d");
// //         this.colors = options.colors;
// //         this.titleOptions = options.titleOptions;
// //         this.maxValue = Math.max(...Object.values(this.options.data));
// //     }
// //     drawGridLines() {
// //         var canvasActualHeight = this.canvas.height - this.options.padding * 2;
// //         var canvasActualWidth = this.canvas.width - this.options.padding * 2;
// //         var gridValue = 0;
// //         while (gridValue <= this.maxValue) {
// //             var gridY =
// //                 canvasActualHeight * (1 - gridValue / this.maxValue) +
// //                 this.options.padding;
// //             drawLine(
// //                 this.ctx,
// //                 0,
// //                 gridY,
// //                 this.canvas.width,
// //                 gridY,
// //                 this.options.gridColor
// //             );
// //             drawLine(
// //                 this.ctx,
// //                 15,
// //                 this.options.padding / 2,
// //                 15,
// //                 gridY + this.options.padding / 2,
// //                 this.options.gridColor
// //             );
// //             // Writing grid markers 
// //             this.ctx.save();
// //             this.ctx.fillStyle = this.options.gridColor;
// //             this.ctx.textBaseline = "bottom";
// //             this.ctx.font = "bold 10px Arial";
// //             this.ctx.fillText(gridValue, 0, gridY - 2);
// //             this.ctx.restore();
// //             gridValue += this.options.gridStep;
// //         }
// //     }
// //     drawBars() {
// //         var canvasActualHeight = this.canvas.height - this.options.padding * 2;
// //         var canvasActualWidth = this.canvas.width - this.options.padding * 2;
// //         var barIndex = 0;
// //         var numberOfBars = Object.keys(this.options.data).length;
// //         var barSize = canvasActualWidth / numberOfBars;
// //         var values = Object.values(this.options.data);
// //         for (let val of values) {
// //             var barHeight = Math.round((canvasActualHeight * val) / this.maxValue);
// //             console.log(barHeight);
// //             drawBar(
// //                 this.ctx,
// //                 this.options.padding + barIndex * barSize,
// //                 this.canvas.height - barHeight - this.options.padding,
// //                 barSize,
// //                 barHeight,
// //                 this.colors[barIndex % this.colors.length]
// //             );
// //             barIndex++;
// //         }
// //     }
// //     drawLabel() {
// //         this.ctx.save();
// //         this.ctx.textBaseline = "bottom";
// //         this.ctx.textAlign = this.titleOptions.align;
// //         this.ctx.fillStyle = this.titleOptions.fill;
// //         this.ctx.font = `${this.titleOptions.font.weight} ${this.titleOptions.font.size} ${this.titleOptions.font.family}`;
// //         let xPos = this.canvas.width * 100;
// //         if (this.titleOptions.align == "left") {
// //             xPos = 10;
// //         }
// //         if (this.titleOptions.align == "right") {
// //             xPos = this.canvas.width - 10;
// //         }
// //         this.ctx.fillText(this.options.seriesName, xPos, this.canvas.height);
// //         this.ctx.restore();
// //     }
// //     drawLegend() {
// //         let pIndex = 0;
// //         let legend = document.querySelector("legend[for='chart_area']");
// //         let ul = document.createElement("ul");
// //         legend.append(ul);
// //         for (let ctg of Object.keys(this.options.data)) {
// //             let li = document.createElement("li");
// //             li.style.listStyle = "none";
// //             li.style.borderLeft =
// //                 "20px solid " + this.colors[pIndex % this.colors.length];
// //             li.style.padding = "5px";
// //             li.textContent = ctg;
// //             ul.append(li);
// //             pIndex++;
// //         }
// //     }
// //     draw() {
// //         this.drawGridLines();
// //         this.drawBars();
// //         this.drawLabel();
// //         this.drawLegend();
// //     }
// // }
// // var myBarchart = new BarChart({
// //     canvas: myCanvas,
// //     // seriesName: "Vinyl records",
// //     padding: 40,
// //     gridStep: 5,
// //     gridColor: "black",
// //     data: {
// //         "Plastic": 16,
// //         "Metal": 12,
// //         "Paper": 18,
// //     },
// //     colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
// //     titleOptions: {
// //         align: "center",
// //         fill: "black",
// //         font: {
// //             weight: "bold",
// //             size: "18px",
// //             family: "Lato"
// //         }
// //     }
// // });
// // myBarchart.draw();



















































