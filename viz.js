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

  data.forEach((value, i) => {
    const y = i * (barWidth + gap); // spacing out the bars evenly

    // --- Bar ---
    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", 50);
    bar.setAttribute("y", y); 
    bar.setAttribute("width", value);
    bar.setAttribute("height", barWidth);
    bar.setAttribute("fill", "teal");
    svg.appendChild(bar);

    // --- Category Label (left side) ---
    const catLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    catLabel.setAttribute("x", 40); // slightly left of bar start
    catLabel.setAttribute("y", y + barWidth / 2 + 4); // vertically centered
    catLabel.setAttribute("text-anchor", "end"); // align text to the right
    catLabel.setAttribute("font-size", "12");
    catLabel.textContent = categories[i];
    svg.appendChild(catLabel);

    // --- Value Label (at end of bar) ---
    const valueLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valueLabel.setAttribute("x", value + 60); // just after bar end
    valueLabel.setAttribute("y", y + barWidth / 2 + 4);
    valueLabel.setAttribute("font-size", "12");
    valueLabel.setAttribute("fill", "black");
    valueLabel.textContent = value/100 + " hours";
    svg.appendChild(valueLabel);
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
createVisualization("creativeVisualization");
createCreativeArt("creativeArt");