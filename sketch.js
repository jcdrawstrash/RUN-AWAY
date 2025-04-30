function setup() {
  createCanvas(1080, 1080);
  imageMode (CENTER);
  rectMode (CENTER);
  textAlign (CENTER);
  
}

function draw() {
  background(255, 0, 0);
  image (splash, width/2, 100, 500, 300);
  image (run, width/2, 400, 500, 300);
  image (fork, width/2, 600, 500, 300);
  image (cave, width/2, 800, 500, 300);
  image (uwin, width/2, 1000, 500, 300);
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
