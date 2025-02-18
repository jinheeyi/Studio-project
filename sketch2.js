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
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;

      let waveOffset = waveAmplitude * sin(frameCount * waveSpeed + (i + j) * 0.3);

      push();
      translate(x, y + waveOffset);  // Apply wave motion to Y position
      rectMode(CENTER);
      square(0, 0, spacing * 0.8);
      pop();
    }
  }
}