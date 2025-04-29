
let img;
let img2;

function preload() {
  img = loadImage("mad.png");
  img2 = loadImage("Fest.png");
}



function setup() {
  createCanvas(1600, 900);
  background("grey")


  DagensNyhed();
  TidOgDato();
  Billede();

  //Laver baren oppe i toppen, til visnin af dagens nyhed
  function DagensNyhed(){
    fill(65, 65, 65);
    rect(0,0, 1600, 100);
    fill("white");
    textSize(50);
    text("Nyhed: Galla starter snart, køb billetter nu!", 20, 60);
  }

  //laver baren nede i bunden, til visning af tid og dato
  function TidOgDato(){
    fill(65, 65, 65)
    rect(0,800,1600,100)
    fill("white");
    textSize(50);
    text(day() + "/" + month() + "/" + year(), 20, 870);
    text(hour() + ":" + minute() + ":" + second(), 700, 870);
  }

  //Viser billede i midten af skærmen
  function Billede(){
    image(img2, 0, 100, 1600, 700);
    delaytime(20);
    image(img, 0, 100, 1600, 700);
    console.log("hello :)")
  }

}

