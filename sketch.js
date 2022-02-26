const stepSize = 10;
const r = 4;
let curN = 1;
let stepIndex = 0;
let stepLenght = 1;
let rotateIndex = 1;
let x = 0;
let y = 0;

function setup() {
  createCanvas(500, 500);
  background(220);

}

function draw() {
  translate(width / 2, height / 2)
  fill(255);

  if (isPrime(curN)) {
    circle(x, y, r);
  }

  switch (rotateIndex % 4) {
    case 1:
      line(x, y, x + stepSize, y)
      x += stepSize;
      break
    case 2:
      line(x, y, x, y - stepSize)
      y -= stepSize;
      break
    case 3:
      line(x, y, x - stepSize, y)
      x -= stepSize;
      break
    case 0:
      line(x, y, x, y + stepSize)
      y += stepSize;
      break
  }



  stepIndex++;
  curN++;
  if (stepIndex == stepLenght) {
    stepIndex = 0;
    rotateIndex++;
    if (rotateIndex % 2 == 1) {
      stepLenght += 1;
    }
  }

  if (curN == 2401) {
    noLoop()
  }
}



function isPrime(n) {
  for (let i = 2; i <= sqrt(n); i++) {
    if (n % i == 0) {
      return false
    }
  }

  return n > 1
}