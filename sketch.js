function setup() {
  createCanvas(1600, 900);
  background("grey")

  DagensNyhed();
  TidOgDato();
  Billede();

  function DagensNyhed(){
    fill("blue");
    rect(0,0, 1600, 100);
    fill("black");
    textSize(50);
    text("Nyhed: Galla starter snart, køb billetter nu!", 20, 60);
  }

  function TidOgDato(){
    fill("blue")
    rect(0,800,1600,100)
    fill("black");
    textSize(50);
    text(day() + "/" + month() + "/" + year(), 20, 870);
    text(hour() + ":" + minute() + ":" + second(), 700, 870);
  }


  function Billede(){
    let img = loadImage("https://static.vecteezy.com/system/resources/thumbnails/048/736/805/small_2x/man-celebrating-success-with-arms-raised-showing-triumph-and-joy-png.png");
    image(img, 0, 100, 1600, 700);
  }

}

