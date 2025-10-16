const data = "assets/videogames_long.csv"; 

// BAR CHART
function createBarChart(containerId) {
  const barSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Global Sales by Platform and Genre",
    "data": { "url": "assets/videogames_long.csv", "format": { "type": "csv" } },
    "params": [
      {
        "name": "genreSelector",
        "select": { "type": "point", "fields": ["genre"], "on": "click", "clear": "dblclick" },
        "bind": "legend"
      }
    ],
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
      "x": {
        "field": "platform",
        "type": "nominal",
        "sort": { "field": "global_sales", "op": "sum", "order": "descending" },
        // styling 
        "axis": {
          "title": "Platform",
          "titleFont": "Inter Tight",
          "titleFontSize": 32,
          "titleFontWeight": "bold",
          "titleColor": "#555",
          "titlePadding": 30,    
          "labelFont": "Courier Prime",
          "labelFontSize": 28,
          "labelColor": "#555",
          "labelAngle": 0
        },
      },
      "y": { 
        "aggregate": "sum", 
        "field": "global_sales", 
        "type": "quantitative", 
         // styling 
        "axis": {
          "title": "Total Global Sales (millions)",
          "titleFont": "Inter Tight",
          "titleFontSize": 32,
          "titleFontWeight": "bold",
          "titleColor": "#555",
          "titlePadding": 30,    
          "labelFont": "Courier Prime",
          "labelFontSize": 28,
          "labelColor": "#555",
          "labelAngle": 0
        }
      },

      "color": {
        "field": "genre",
        "type": "nominal",
        "title": "Genre",
        "scale": { "range": ["#4379AB","#96CCEB","#FF8900","#FFBC71","#3DA443","#76D472","#BA9900","#F7CD4B","#249A95","#77BEB6","#F14A54","#FF9797","#7B706E"] },
        // styling
        "legend": {
          "titleFont": "Inter Tight",
          "titleFontSize": 30,
          "titleColor": "#444",
          "labelFont": "Inter Tight",
          "labelFontSize": 30,
          "labelColor": "#555"
        }
      },

      "opacity": { 
        "condition": { "param": "genreSelector", 
            "value": 1 }, "value": 0.2 },

      "tooltip": [
        { "field": "genre", "title": "Genre of Game", "type": "nominal" },
        { "field": "platform", "title": "Platform", "type": "nominal" },
        { "aggregate": "sum", "field": "global_sales", "title": "Total Sales (millions)" }
      ]
    },
    "width": 3400,
    "height": 1200,
    "autosize": { "type": "fit-x", "resize": true, "contains": "padding" },
    "title": {
      //styling
      "text": "Global Sales by Platform and Genre",
      "subtitle": "Click a genre in the legend or on the bar chart to highlight it. Double-click to reset. Hover on genres to get the total global sales for each platform and genre.",
      "font": "Inter Tight",
      "fontSize": 40,
      "fontWeight": "bold",
      "subtitleFont": "Inter Tight",
      "subtitleFontSize": 32,   
      "subtitleFontWeight": "normal",
      "subtitleColor": "#666",
      "color": "#333"
    }
  };

  vegaEmbed(`#${containerId}`, barSpec, { renderer: "svg", actions: false });
}


// line chart
function createLineChart(containerId) {
  const colors = [
    "#d6336c","#d68533","#c2d633","#65d633","#33d68b","#33d6d6","#338bd6","#6533d6","#d633c2","#d63333",
    "#f18c8c","#f1d18c","#dff18c","#8cf18c","#8cf1d1","#8cd1f1","#8c8cf1","#d18cf1","#f18cf1","#f18caa",
    "#ff6666","#ffb366","#ffff66","#b3ff66","#66ff99","#66ffff","#6699ff","#9966ff","#ff66ff","#ff66b3",
    "#cc0000","#cc6600","#cccc00","#66cc00","#00cc66","#00cccc","#0066cc","#6600cc","#cc00cc","#cc0066",
    "#990000","#994c00","#999900","#4c9900","#00994c"
  ];

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Global Sales Trends Over Time by Genre and Platform",
    "data": { "url": "assets/videogames_long.csv", "format": { "type": "csv" } },
    "params": [
      {
        "name": "categoryParam",
        "value": "genre",
        "bind": { "input": "select", "options": ["genre", "platform"], "name": "Filter by: " }
      },
      {
        "name": "categorySelector",
        "select": { "type": "point", "fields": ["category"], "on": "click", "clear": "dblclick" },
        "bind": "legend"
      }
    ],

    "transform": [{ "calculate": "datum[categoryParam]", "as": "category" }],

    "mark": { "type": "line", "point": true, "tooltip": true },

    "encoding": {
      "x": {
        "field": "year",
        "type": "quantitative",
        "title": "Year of Release",
        "axis": {
          "values": [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020], 
          "format": "d", 
          //styling
          "titleFont": "Inter Tight",
          "titleFontSize": 32,
          "titleFontWeight": "bold",
          "titleColor": "#555",
          "titlePadding": 30,    
          "labelFont": "Courier Prime",
          "labelFontSize": 28,
          "labelColor": "#555",
          "labelAngle": 0
        }
      },

      "y": { 
        "aggregate": "sum", 
        "field": "global_sales", 
        "type": "quantitative", 
        "title": "Total Global Sales (millions)",
        "axis": {
          "titleFont": "Inter Tight",
          "titleFontSize": 32,
          "titleFontWeight": "bold",
          "titleColor": "#555",
          "titlePadding": 30,    
          "labelFont": "Courier Prime",
          "labelFontSize": 28,
          "labelColor": "#555",
          "labelAngle": 0
        }
    },

      "color": { 
        "field": "category", 
        "type": "nominal", 
        "title": "Category", 
        "scale": { "range": colors } ,
        "legend": {
          //styling
          "titleFont": "Inter Tight",
          "titleFontSize": 30,
          "titleFontWeight": "bold",
          "titleColor": "#444",
          "labelFont": "Inter Tight",
          "labelFontSize": 30,
          "labelColor": "#555"
        }
    },
      
    "opacity": { 
        "condition": { "param": "categorySelector", 
            "value": 1 }, "value": 0.2 
        },

      "tooltip": [
        { "field": "year", "type": "quantitative" },
        { "field": "category", "type": "nominal", "title": "Genre or Platform" },
        { "aggregate": "sum", "field": "global_sales", "title": "Sales (millions)" }
      ]
    },
    "width": 3400,
    "height": 1200,
    "autosize": { "type": "fit-x", "resize": true, "contains": "padding" },
    "title": {
      //styling
      "text": "Sales Over Time by Platform and Genre",
      "subtitle": "Click a category in the legend or a line to highlight it. Double-click to reset.",
      "fontSize": 40,
      "fontWeight": "bold",
      "subtitleFont": "Inter Tight",
      "subtitleFontSize": 32,   
      "subtitleFontWeight": "normal",
      "subtitleColor": "#666",
      "color": "#333"
    }
  };

  vegaEmbed(`#${containerId}`, spec, { renderer: "svg", actions: false });
}

function createHeatmap(containerId) {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Regional sales by Platform",
    "data": { "url": "assets/videogames_long.csv", "format": { "type": "csv" } },
    "layer": [
      // Heatmap layer
      {
        "mark": "rect",
        "encoding": {
          "y": { "field": "sales_region",
                 "type": "nominal", 
                 "title": "Region",
                 "axis": {
                  //styling
                    "titleFont": "Inter Tight",
                    "titleFontSize": 32,
                    "titleFontWeight": "bold",
                    "titleColor": "#555",
                    "titlePadding": 30,    
                    "labelFont": "Courier Prime",
                    "labelFontSize": 28,
                    "labelColor": "#555",
                    "labelAngle": 0
                  }
                },

          "x": { "field": "platform", 
                 "type": "nominal", 
                 "title": "Platform",
                 "axis": {
                  //styling
                    "titleFont": "Inter Tight",
                    "titleFontSize": 32,
                    "titleFontWeight": "bold",
                    "titleColor": "#555",
                    "titlePadding": 30,    
                    "labelFont": "Courier Prime",
                    "labelFontSize": 28,
                    "labelColor": "#555",
                    "labelAngle": 0
                  }
                },
          "color": { 
            "aggregate": "sum", 
            "field": "sales_amount", 
            "type": "quantitative",
            "scale": { "scheme": "lightmulti" },
            "title": "Sales",
            "legend": {
              //styling
              "titleFont": "Inter Tight",
              "titleFontSize": 30,
              "titleColor": "#444",
              "labelFont": "Inter Tight",
              "labelFontSize": 30,
              "labelColor": "#555"
              }
          },

          "tooltip": [
            { "field": "platform", "type": "nominal", "title": "Platform" },
            { "field": "sales_region", "type": "nominal", "title": "Region" },
            { "aggregate": "sum", "field": "sales_amount", "type": "quantitative", "title": "Sales (millions)" }
          ]
        }
      },
      // Text label layer
      {
        "mark": { "type": "text" ,
                  "font": "Inter Tight",
                  "fontSize": 22,
                  "fontWeight": "bold",
                  "color": "#444",
           },
        "encoding": {
          "y": { "field": "sales_region",
                 "type": "nominal",
                },
          "x": { "field": "platform", 
                 "type": "nominal" 
                },
          "text": { "aggregate": "sum", 
                    "field": "sales_amount", 
                    "type": "quantitative", 
                    "format": ".1f",
                  }
          }
      }

    ],
    "width": 3400,
    "height": 1200,
    "autosize": { "type": "fit-x", "resize": true, "contains": "padding" },
    "title": {
      //styling
      "text": "Regional sales by Platform",
      "subtitle": "Sum of sales (millions) per platform-region combination",
      "fontSize": 40,
      "fontWeight": "bold",
      "subtitleFont": "Inter Tight",
      "subtitleFontSize": 32,   
      "subtitleFontWeight": "normal",
      "subtitleColor": "#666",
      "color": "#333",
      "titlePadding": 10,
    }
  };

  vegaEmbed(`#${containerId}`, spec, { renderer: "svg", actions: false });
}

function createNintendoLineChart(containerId) {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Global sales of Nintendo Games by Genre",
    "data": { "url": "assets/videogames_long.csv", "format": { "type": "csv" } },
    "transform": [
      { "filter": "datum.publisher == 'Nintendo'" }
    ],
    "params": [
      {
        "name": "genreSelector",
        "select": { "type": "point", "fields": ["genre"], "on": "click", "clear": "dblclick" },
        "bind": "legend"
      }
    ],
    "mark": { "type": "line", "point": true, "tooltip": true },
    "encoding": {
      "x": {
        "field": "year",
        "type": "quantitative",
        "title": "Year of Release",
        "axis": { 
          "values": [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020], 
          "format": "d", 
          //styling
          "titleFont": "Inter Tight",
          "titleFontSize": 32,
          "titleFontWeight": "bold",
          "titleColor": "#555",
          "titlePadding": 30,    
          "labelFont": "Courier Prime",
          "labelFontSize": 28,
          "labelColor": "#555",        }
      },
      "y": {
        "aggregate": "sum",
        "field": "global_sales",
        "type": "quantitative",
        "title": "Total Global Sales (millions)",
        "axis": {
              //styling
                "titleFont": "Inter Tight",
                "titleFontSize": 32,
                "titleFontWeight": "bold",
                "titleColor": "#555",
                 "titlePadding": 30,    
                "labelFont": "Courier Prime",
                "labelFontSize": 28,
                "labelColor": "#555",
                "labelAngle": 0
              }
      },
      "color": {
        "field": "genre",
        "type": "nominal",
        "title": "Genre",
        "scale": { "scheme": "tableau20" },
        // styling
        "legend": {
          "titleFont": "Inter Tight",
          "titleFontSize": 30,
          "titleFontWeight": "bold",
          "titleColor": "#444",
          "labelFont": "Inter Tight",
          "labelFontSize": 30,
          "labelColor": "#555"
        }
      },
      "opacity": {
        "condition": { "param": "genreSelector", "value": 1 },
        "value": 0.2
      },
      "tooltip": [
        { "field": "year", "type": "quantitative", "title": "Year" },
        { "field": "genre", "type": "nominal", "title": "Genre" },
        { "aggregate": "sum", "field": "global_sales", "title": "Sales (millions)" }
      ]
    },
    "width": 3400,
    "height": 1200,
    "autosize": { "type": "fit-x", "resize": true, "contains": "padding" },
    "title": {
      "text": "Global sales of Nintendo Games Released by Genre (Over Time)",
      "subtitle": "Click a genre in the legend to highlight | Double-click to reset",
      "fontSize": 40,
      "fontWeight": "bold",
      "subtitleFont": "Inter Tight",
      "subtitleFontSize": 32,   
      "subtitleFontWeight": "normal",
      "subtitleColor": "#666",
      "color": "#333",
      "titlePadding": 10
    }
  };

  vegaEmbed(`#${containerId}`, spec, { renderer: "svg", actions: false });
}


// CALL FUNCTIONS
createBarChart("vis");
createLineChart("lineChart");
createHeatmap("heatmap");
createNintendoLineChart("nintendoLineChart");
