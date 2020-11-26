var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {

// creating monkey
monkey = createSprite(60,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1

// creating ground
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
  
}


function draw() {
  background(225)
    
  if (ground.x < 0){
      ground.x = ground.width/2;
  }

  if(keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -10;
 }

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

  food();
  obstacles();

  drawSprites() 
  
  //    writing code for survival time   
  stroke("black");
  textSize(18);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,220,30);

}

function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(100, 200))
    banana.addImage("image" ,bananaImage)
    banana.velocityX = -5
    banana.lifetime = 130
    banana.scale = 0.08
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,320,10,40)
    obstacle.addImage("image" ,obstacleImage)
    obstacle.velocityX = -5;
    obstacle.scale = 0.2;
    obstacle.lifetime = 120;
    // obstacleGroup.add(obstacle);
  }
}





