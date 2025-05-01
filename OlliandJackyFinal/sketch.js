 let splash, run, fork, cave, cavenp, uwin, ulose,foxrun, bearrun, path, forest; ///images
  
  
  let stage0 = true;
  let stage1 = false;
  let stage2 = false;
  let stage3 = false;
  let stage4 = false;
  let stage5 = false;
  let stage6 = false;
 let stage7 = false;
 let stage8 = false;



function setup() {
  createCanvas(960, 540);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw(){
 // noCursor();
 //////// //make dead fish cursor
  if (stage0){
    splashscreen();
  } //////close 0
  
  else if (stage1){
  running();
} ////close 1
  else if (stage2){
    path();
  }
  else if (stage3){
    forest();
  }
  else if (stage4){
    cavenp();
  }
  else if (stage5){
    fork();
  }
  else if (stage6){
    cave();
  }
  else if(stage7){
    uwin();
  }
  else if(stage8){
    ulose();
  }
  
  
  
  
  
  if (stage0 == true){
    splashscreen();
  }
  if (stage1 == true){
    running();
  }
  if (stage2 == true){
    patho();
  }
  if (stage3 == true){
    forestt();
  }
  if (stage4 == true){
    cavenpp();
  }
  if (stage5 == true){
    forkk();
  }
  if (stage6 == true){
    cavee();
  }
  if (stage7 == true){
    win();
  }
  if (stage8 == true){
    lose();
  }
  
  
  
  
  
} ///////close draw
function splashscreen(){
 // background(0,0,0); //black
  image (splash, 480, 275, 960, 540);
    image(foxrun, 260, 260, 150, 150)
      image(bearrun, 300, 50, 170, 170)
  fill (255,0,0); //red
  textSize(60);
  textFont(font);
  text("Run fox Run", width/2, 200)
  fill ("yellow"); 
  textSize(15);
  rect (width/2, 270, 225, 50);
   fill(255,0,0);
  text("PRESS  ENTER  TO  BEGIN", width/2, 275)
 
} ////////close splash
function running(){
 
  image (run, 480, 275, 960, 540);
     fill ("yellow");
  rect (width/2, 200, 210, 75); 
    fill (255,0,0); //red
  textSize(60);
  textFont(font);
  text("RUN", width/2, 220)
   textSize(15);
  textFont(font);
  text("PRESS 1 TO", width/2, 180)

  image (foxrun, 630, 170, 300, 300);
    rotate (200);
  image (bearrun, -300, -370, 400, 400);


  /////// close run
}/////// close run

function patho(){
    image (path, 480, 275, 960, 540);
     fill ("yellow");
  rect (800, 200, 210, 75); 
    fill (255,0,0); //red
  textSize(60);
  textFont(font);
  text("path", 800, 220)
   textSize(15);
  textFont(font);
  text("PRESS P FOR", 800, 180)
       fill ("yellow");
  rect (200, 200, 210, 75); 
    fill (255,0,0); //red
  textSize(60);
  textFont(font);
  text("FOREST", 200, 220)
   textSize(15);
  textFont(font);
  text("PRESS F FOR", 200, 180)

 image (foxrun, 480, 370, 300, 300);
    rotate (30);
 image (bearrun, 540, -400, 400, 400);

}
function forestt(){
    image (forest, 480, 275, 960, 540);
     fill ("yellow");
  rect (800, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("stayinforest", 805, 220)
   textSize(15);
  textFont(font);
  text("PRESS s FOR", 800, 180)
       fill ("yellow");
  rect (200, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("back 2 path", 200, 220)
   textSize(15);
  textFont(font);
  text("PRESS b FOR", 200, 180)

 image (foxrun, 620, 270, 200, 200);
    //rotate (180);
 image (bearrun, 630, -100, 300, 300);

  
}
function forkk(){
      image (fork, 480, 275, 960, 540);
     fill ("yellow");
  rect (800, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("right", 805, 220)
   textSize(15);
  textFont(font);
  text("PRESS R FOR", 800, 180)
       fill ("yellow");
  rect (200, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("left", 200, 220)
   textSize(15);
  textFont(font);
  text("PRESS L FOR", 200, 180)
translate(width/2, height/2);
      rotate(180);
 image (foxrun, -20, -170, 300, 300);
  
}
function cavee(){
        image (cave, 480, 275, 960, 540);
     fill ("yellow");
  rect (800, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("keep runnin", 805, 220)
   textSize(15);
  textFont(font);
  text("PRESS k FOR", 800, 180)
       fill ("yellow");
  rect (200, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("enter cave", 200, 220)
   textSize(15);
  textFont(font);
  text("PRESS e FOR", 200, 180)
translate(width/2, height/2);
      rotate(180);
 image (foxrun, 35, -200, 200, 200);
  
}

function cavenpp(){
  image (cavenp, 480, 275, 960, 540);
     fill ("yellow");
  rect (800, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("keep runnin", 805, 220)
   textSize(15);
  textFont(font);
  text("PRESS k FOR", 800, 180)
       fill ("yellow");
  rect (200, 200, 270, 75); 
    fill (255,0,0); //red
  textSize(40);
  textFont(font);
  text("enter cave", 200, 220)
   textSize(15);
  textFont(font);
  text("PRESS e FOR", 200, 180)
translate(width/2, height/2);
      rotate(180);
 image (foxrun, 35, -200, 200, 200);
  
  
}


function win(){
    background (255,235,59);
  image(dance, width/2, 330, 400, 400)
  
   fill(255, 0, 0);
  rect (width/2, 100, 250, 50);
    fill (255, 235, 59)
  textSize(60);
  textFont(font);
  text("UR  SAFE", width/2, 120)
 
} ////// close win
function lose(){
  background (255, 0, 0);
  image(dead, width/2, 330, 400, 400)
     fill(255, 235, 59); 
  rect (width/2, 100, 250, 50);
    fill (255, 0, 0)
  textSize(60);
  textFont(font);
  text("U  DIED", width/2, 120)
} /////close lose

  if(stage0){
    splashscreen();
     image(splash, 960,450, 480, 270);
    image(foxrun, 30,30, 300, 300)
    if (stage1){
      running();
       image(run, 960,450, 480, 270);
    }
    if (stage2){
      path();
      image (path, 960, 450, 480, 270);
      
      
    }
  }
function keyPressed(){

  if (key == '1'){
      stage2 = true;
      stage1 = false;
    } 
  else if (key =='p'){
    stage5 = true;
     stage2 = false
  }

  else if (key =='f'){
    stage3 = true;
    stage2 = false
  }
  else if (key =='l'){
    stage6 = true;
    stage5 = false;
}
  else if (key =='r'){
    stage6 = true;
    stage5 = false;
    }
  else if (key == 'k'){
    stage8 = true;
    stage6 = false;
    stage4 = false;
  }
    else if (key == 'e'){
    stage7 = true;
    stage6 = false;
      stage4 = false;
  }
    else if (key == 'b'){
    stage5 = true;
    stage3 = false;
  }
    else if (key == 's'){
    stage4 = true;
    stage3 = false;
  }
   else if (keyCode == ENTER){
  stage1 = true;
}

}
//  if (mousePressed == true){
//    stage = 1;
//  }
//} //////close game



 function preload(){
  splash = loadImage ('splashscreen.2.JPG');
  run = loadImage ('runnin.JPG');
  fork = loadImage ('forkk.JPG');
  cave = loadImage ('cavep.JPG');
   cavenp = loadImage ('cavenp.JPG');
   path = loadImage ('path.JPG');
   forest = loadImage ('forest.JPG');
  uwin = loadImage ('youwin.png');
  ulose = loadImage('youdied.png');
   font = loadFont ('ARCADECLASSIC.TTF');
   foxrun = loadImage ('Fox_Run.gif');
   bearrun = loadImage ('bearrun.gif');
   dead = loadImage ('Fox_Death.gif');
  dance = loadImage ('Fox_Dance.gif');
 }