
let img;
let img2;
let currentImage;
let imageTimer;
const switchInterval = 5000; // Time in milliseconds between image changes

function preload() {
  img = loadImage("mad.png");
  img2 = loadImage("Fest.png");
}

function setup() {
  createCanvas(1600, 900);
  background("grey");

  currentImage = img2; // Start with img2 initially
  startImageCycle();

  DagensNyhed();
  TidOgDato();
}

function draw() {
  background("grey"); // Keep the background redrawing to clear the previous image
  image(currentImage, 0, 100, 1600, 700);

  DagensNyhed();
  TidOgDato();
}

//Laver baren oppe i toppen, til visnin af dagens nyhed
function DagensNyhed() {
  fill(65, 65, 65);
  let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
  gradiant.addColorStop(0, color(255, 0, 0));
  gradiant.addColorStop(1, color(0, 0, 255));
  rect(0, 0, 1600, 100);
  fill("white");
  textSize(50);
  text("Nyhed: Galla starter snart, køb billetter nu!", 20, 60);
}

//laver baren nede i bunden, til visning af tid og dato
function TidOgDato() {
  fill(65, 65, 65);
  rect(0, 800, 1600, 100);
  fill("white");
  textSize(50);
  text(day() + "/" + month() + "/" + year(), 20, 870);
  text(hour() + ":" + minute() + ":" + second(), 700, 870);
}

// Function to switch between the two images
function cycleImage() {
  if (currentImage === img) {
    currentImage = img2;
  } else {
    currentImage = img;
  }
}

// Function to start the image cycling at a fixed interval
function startImageCycle() {
  imageTimer = setInterval(cycleImage, switchInterval);
}

// You might want a function to stop the cycling if needed
function stopImageCycle() {
  clearInterval(imageTimer);
}

