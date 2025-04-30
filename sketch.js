function setup() {
  createCanvas(1080, 1500);
  imageMode (CENTER);
  rectMode (CENTER);
  textAlign (CENTER);
  
}

function draw() {
  background(255, 0, 0);
  image (splash, width/2, 100, 400, 200);
  image (run, width/2, 400, 400, 200);
  image (fork, width/2, 600, 400, 200);
  image (cave, width/2, 800, 400, 200);
  image (uwin, width/2, 1000, 400, 200);
    fill ("yellow");
  
  
  textSize(25);
  rect (width/2, 1200, 225, 50);
   fill(255,0,0);
  text("YOU WIN!", width/2, 1200)
  
  
  
}

function preload(){
  splash = loadImage ('splashscreenn.png');
  run = loadImage ('run.png');
  fork = loadImage ('fork.png');
  cave = loadImage ('cave.png');
  uwin = loadImage ('youwin.png');
 }
