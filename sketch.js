
let img;

function preload() {
  img = loadImage("mad.png");
}



function setup() {
  createCanvas(1600, 900);
  background("grey")


  DagensNyhed();
  TidOgDato();
  Billede();

  function DagensNyhed(){
    fill(65, 65, 65);
    rect(0,0, 1600, 100);
    fill("white");
    textSize(50);
    text("Nyhed: Galla starter snart, køb billetter nu!", 20, 60);
  }

  function TidOgDato(){
    fill(65, 65, 65)
    rect(0,800,1600,100)
    fill("white");
    textSize(50);
    text(day() + "/" + month() + "/" + year(), 20, 870);
    text(hour() + ":" + minute() + ":" + second(), 700, 870);
  }


  function Billede(){
    image(img, 0, 100, 1600, 700);
    console.log("hello :)")
  }

}

