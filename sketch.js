let draft, ready;

function preload() {
  ready = loadImage(
    "assets/gift2.jpg"
  );

  draft = loadImage(
    "assets/gift1_1.jpg"
  );
}

var canvas;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(0);
  noCursor();
  cursor(20, 20);
ready.resize(windowWidth, windowHeight);
  image(ready, 0, 0, windowWidth, windowHeight);

  image(draft, 0, 0, windowWidth, windowHeight);
}

function draw() {

  copy(ready, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);
  
}

