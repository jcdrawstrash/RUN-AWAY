function setup() {
  createCanvas(1080, 1080);
  imageMode (CENTER);
  rectMode (CENTER);
  textAlign (CENTER);
  
}

function draw() {
  background(255, 0, 0);
  image (splash, width/2, 100, 400, 200);
  image (run, width/2, 300, 400, 200);
  image (fork, width/2, 500, 400, 200);
  image (cave, width/2, 700, 400, 200);
  image (uwin, width/2, 900, 400, 200);
    fill ("yellow");
  
  
  textSize(25);
  rect (width/2, 1050, 225, 50);
   fill(255,0,0);
  text("YOU WIN!", width/2, 1050)
  
  
  
}

function preload(){
  splash = loadImage ('splashscreenn.png');
  run = loadImage ('run.png');
  fork = loadImage ('fork.png');
  cave = loadImage ('cave.png');
  uwin = loadImage ('youwin.png');
 }
