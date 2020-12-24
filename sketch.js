
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg,bgImage

function preload(){
  bgImage=loadImage("jungle.jpg");
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("stone.png");
 
}



function setup() {
  // createCanvas(600, 600);
  


  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
  bg=createSprite(200,200,20,20);
  bg.addImage(bgImage);
 bg.velocityX=-3;
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  
  background(255);
  
  if(bg.x<0){
    bg.x=200;
    
  }
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+2;
  }
 switch(score){
   case 4:monkey.scale=0.12;
     break;
  case 8:monkey.scale=0.14;
    break;
  case 16:monkey.scale=0.18;
    break;
    case 20:monkey.scale=0.22;
    break;
 } 
    if(obstaclesGroup.isTouching(monkey)){
       monkey.scale=0.8;
    
    
    }
  
 
  
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}
