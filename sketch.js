function setup() {
  createCanvas(1600, 900);
  background("grey")

  DagensNyhed();
  TidOgDato();

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


}

