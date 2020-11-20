
var monkey , monkey_running, bananas;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score, background0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  monkey=createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
  monkey.scale=.1;
  
  background0=createSprite(400, 350, 900, 10);
  background0.velocityX=-4;
 
  bananaGroup=new Group();
  
}


function draw() {
background(220);
   background0.x=background0.width/2;
  monkey.collide(background0);
  if(keyDown("space")&&monkey.y>314){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+.5;
  
  
  
  bananas();
 drawSprites(); 
}

function bananas(){
  if(World.frameCount%80===0){
    banana=createSprite(600, Math.round(random(130, 230)), 20, 20);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=.1
    
    bananaGroup.add(banana);
  }
  
  
}





