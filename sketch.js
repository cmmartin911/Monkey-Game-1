
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  ground = createSprite(200,335,600,10);
  
  survivalTime = 0;
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");

  spawnBannana();
  
  spawnObstacles();
  
  jump();
  
  survivalTime = Math.ceil(frameCount/frameRate());
  textSize(20);
  text("Survival Time : " + survivalTime, 125, 50);
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnBannana(){
  if(frameCount % 80 === 0){
    var p = Math.round(random(120,200));
    bannana = createSprite(400,p,10,10);
    bannana.addImage(bananaImage);
    bannana.scale = 0.1;
    bannana.velocityX = -7
    bannana.lifetime = 70;
  
    FoodGroup.add(bannana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,315,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }
}

function jump(){
  if(keyDown("space") && monkey.y >= 260){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
}




