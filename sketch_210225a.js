const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;

let cols02, rows02;
let scl02 = 40;
let w02 = 1600;
let h02 = 1200;



function setup() {
   createCanvas(400, 400, WEBGL);
   
   c1 = color(255, 204, 36);
   c2 = color(255, 36, 117);
   c3 = color(255, 18, 216);
   
   b1 = color(1,0, 2);
   b2 = color(0,18, 26);
   b3 = color(101, 104, 106);

   t1 = color(224, 245, 255);
   t2 = color(187, 220, 234);
   t3 = color(100, 100, 200);

   cols02 = w02 / scl02;
   rows02 = h02 / scl02;
   
}


function draw() {
  
  push();
  translate(0, height * -0.3, width * -2);
  setGradient(-width*2, height * -2 , width * 4, height * 4, b1, b2, b3, Y_AXIS);
  pop();
  
  
  push();
  translate(-800, height * 0.4, height * -2);
  rotateX(radians(90));
  for (let y = 0; y < rows02 - 1; y++) {
        for (let x = 0; x < cols02; x++) {
        fill(b1);
        stroke(t1);
        rect(x*scl02, y*scl02, scl02, scl02);
        }
    }
  pop();

  stroke(t2);
  line(0, -height/2, 0, height*2)
  
  save("20210225.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}




