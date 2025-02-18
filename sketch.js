let cols = 10;  
let rows = 10;  
let squareSize = 40; 
let time = 0; 

function setup() {
  createCanvas(500, 500);
  noFill(); 
  rectMode(CENTER);
}

function draw() {
  background(255); 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareSize + squareSize / 2;
      let y = j * squareSize + squareSize / 2;

      // wave motion
      let waveY = sin(time + i * 0.5) * 20;
      
      // distortions
      let randomSize = squareSize - random(5, 15); 
      let angle = random(-PI / 36, PI / 36); //rotation
      let xOffset = random(-2, 2); // x-axis shift
      let yOffset = random(-2, 2); // y-axis shift

      push();
      translate(x + xOffset, y + waveY + yOffset);
      rotate(angle);
      strokeWeight(random(0.5, 2)); // line thickness
      rect(0, 0, randomSize, randomSize);
      pop();
    }
  }

  time += 0.01; 
}