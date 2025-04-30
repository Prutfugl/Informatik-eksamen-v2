let img;
let img2;
let img3;
let currentImage;
let nextImage;
let imageTimer;
let fadeAlpha = 255; // Start fully opaque for the initial image
let fadingOut = false;
const switchInterval = 20000; // Time in milliseconds between image changes
const fadeDuration = 200; // Duration of each fade step in milliseconds

function preload() {
  img = loadImage("mad.png");
  img2 = loadImage("Fest.png");
  img3 =loadImage("Fest_2.png");
}

function setup() {
  createCanvas(1600, 900);
  background("White");

  currentImage = img2; // Start with img2 initially
  nextImage = img;     // Set the next image
  startImageCycle();

  DagensNyhed();
  TidOgDato();
}

function draw() {
  background("White");

  // Apply fade effect
  tint(255, fadeAlpha);
  image(currentImage, 0, 100, 1600, 700);
  noTint();

  DagensNyhed();
  TidOgDato();

  if (fadingOut) {
    fadeAlpha -= 5; // Fade out
    if (fadeAlpha <= 0) {
      fadingOut = false;
      currentImage = nextImage;
      fadeAlpha = 0; // Reset alpha for fade in
    }
  } else {
    if (fadeAlpha < 255) {
      fadeAlpha += 5; // Fade in
    }
  }
}

//Laver baren oppe i toppen, til visnin af dagens nyhed
function DagensNyhed() {
  fill(65, 65, 65);
  let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
  gradiant.addColorStop(0, color(10, 50, 195));
  gradiant.addColorStop(1, color(0, 159, 254));
  drawingContext.fillStyle = gradiant;
  rect(0, 0, 1600, 100);
  fill("white");
  textSize(50);
  text("Dagens Nyheder: | 12:20 på studietorvet. | Brandøvelse kl 14:20, føl ", 20, 60);
}

//laver baren nede i bunden, til visning af tid og dato
function TidOgDato() {
  fill(65, 65, 65);
  let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
  gradiant.addColorStop(0, color(10, 50, 195));
  gradiant.addColorStop(1, color(0, 159, 254));
  drawingContext.fillStyle = gradiant;
  rect(0, 800, 1600, 100);
  fill("white");
  textSize(50);
  text(day() + "/" + month() + "/" + year(), 20, 870);
  text(hour() + ":" + minute() + ":" + second(), 700, 870);
  text("11:35-12:05", 1300, 870);
}

// Function to initiate the image switch and fade out
function cycleImage() {
  fadingOut = true;
  if (currentImage === img) {
    nextImage = img2;
  } else if (currentImage === img2) {
    nextImage = img3;
  } else{
    nextImage = img;
  }
}

// Function to start the image cycling at a fixed interval
function startImageCycle() {
  imageTimer = setInterval(cycleImage, switchInterval);
}