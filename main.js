createCanvas()

    circle(30, 30, 20);
describe('A white circle with black outline in the middle of a gray canvas.');




function setup() {
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 320);
    //capture.hide();
  }

 
  function setup() {
    // Create the canvas
    createCanvas(720, 400);
    background(200);
  
    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(300, 100, 320, 100, 310, 80);
  
    // A design for a simple flower
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }
  