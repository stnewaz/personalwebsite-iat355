// creating the visualization

function createVisualization(containerId){

  const data = [400, 500, 300, 450, 200, 600, 300];
  const categories= ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const width = 800;
  const height = 300;
  const barWidth = 30;
  const gap = 10;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width + 50); // give a margin
  svg.setAttribute("height", height);

   // random hex color 
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

    // empty array list
    const bars = []; 

    data.forEach((value, i) => {
    const y = i * (barWidth + gap); // spacing out the bars evenly

    // --- Bar ---
    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", 90); // offsetting it so that the labels fit
    bar.setAttribute("y", y); 
    bar.setAttribute("width", value);
    bar.setAttribute("height", barWidth);
    bar.setAttribute("fill", "teal");
    bars.push(bar); // adding bar values to bars 
    svg.appendChild(bar);

    // adding category names to each bar
    const catLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    catLabel.setAttribute("x", 70); // offset so the labels fit
    catLabel.setAttribute("y", y + barWidth / 2 + 4); // center
    catLabel.setAttribute("text-anchor", "end"); // align text to the right
    catLabel.textContent = categories[i];
    svg.appendChild(catLabel);

    // adding the value of the bars in hours
    const valueLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valueLabel.setAttribute("x", value + 100); // just after bar end
    valueLabel.setAttribute("y", y + barWidth / 2 + 4);
    valueLabel.textContent = value/100 + " hours"; // convert to hours 
    svg.appendChild(valueLabel);
  });

  
    svg.addEventListener("click", () => {
        const newColor = getRandomColor(); // generate once
        bars.forEach(bar => bar.setAttribute("fill", newColor));
    });

  document.getElementById(containerId).appendChild(svg);
}


// creating the fun svg art
function createCreativeArt(containerId) {
  const width = 300;
  const height = 300;
  
  // creating the frame 
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  // creating the red dot
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const cx = width/2;
  const cy = height/2;
  const r = 25;

  circle.setAttribute("cx", cx-5);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "red");

  // green flag

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const rectWidth = 200;
  const rectHeight = 120;

  rect.setAttribute("x", cx - rectWidth / 2);
  rect.setAttribute("y", cy - rectHeight / 2);
  rect.setAttribute("width", rectWidth);
  rect.setAttribute("height", rectHeight);
  rect.setAttribute("fill", "darkgreen");

  // flag pole
  const pole = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  pole.setAttribute("x", cx-rectWidth/2);       // left side of SVG
  pole.setAttribute("y", cy - rectHeight / 2);       // start a bit from top
  pole.setAttribute("width", 10);   // thickness of pole
  pole.setAttribute("height", 300); // tall pole
  pole.setAttribute("fill", "saddlebrown");

  svg.appendChild(pole)
  svg.appendChild(rect);
  svg.appendChild(circle);

  document.getElementById(containerId).appendChild(svg);
}

// call functions 
createVisualization("creativeVisualization");
createCreativeArt("creativeArt");