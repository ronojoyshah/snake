const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snake,snakeImg,snakeImg2,snakeImg3,snakeImg4,apple1,appleImg;
var score=0,gameState=1;
var box1,box5,box4,box3,box2;

function preload() {
    backgroundImg = loadImage("images/background.png");
    snakeImg = loadImage("images/snake2.png");
    snakeImg2 = loadImage("images/snake1.png");
    snakeImg3 = loadImage("images/snake3.png");
    snakeImg4 = loadImage("images/snake4.png");
    appleImg = loadImage("images/apple.png");
}



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = createSprite(100,320,30,30);
    box2=createSprite(random(0,400),random(0,400),30,30);
    box3=createSprite(random(0,400),random(0,400),30,30);
    box4=createSprite(random(0,400),random(0,400),30,30);
    box5=createSprite(random(0,400),random(0,400),30,30);
    apple1 =createSprite(100,200,25,25);
    snake = createSprite(200,20,35,30);
    apple1.addImage("apple",appleImg);
    apple1.scale=0.05;
    snake.addImage("snake",snakeImg);
    snake.scale=0.10;
    box1.shapeColor="green";
    box1.shapeColor="green";
    box3.shapeColor="green";
    box2.shapeColor="green";
    box4.shapeColor="green";
    box5.shapeColor="green";
}

function draw() {
  background(backgroundImg);
  box1.display();
  if(gameState===1){
  if(keyDown(UP_ARROW)){
    snake.velocityY=-2;
    snake.velocityX=0;
  }
  if(keyDown(DOWN_ARROW)){
    snake.velocityY=2;
    snake.velocityX=0;
  }
  if(keyDown(LEFT_ARROW)){
    snake.velocityX=-2;
    snake.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    snake.velocityX=2;
    snake.velocityY=0;
  }
  if(snake.isTouching(apple1)){
    apple1.x=random(0,400);
    apple1.y=random(0,400);
    var box=createSprite(random(0,400),random(0,400),30,30);
    box.shapeColor="green";
        score=score+1;
    
  }
  
  text("score "+score,350,50)
}
  if(snake.isTouching(box1)){
    snake.velocityY=0;
    snake.velocityX=0;
    
    textSize(25);
    text("Press space to restart",100,100);
    text("GameOver",100,200);
    text(score,350,50);
    gameState=0;
  }
  if(snake.collide(box2)){
    snake.velocityY=0;
    snake.velocityX=0;
    
    textSize(25);
    text("Press space to restart",100,100);
    text("GameOver",100,200);
    text(score,350,50);
    gameState=0;
  }
  if(snake.isTouching(box3)){
    snake.velocityY=0;
    snake.velocityX=0;
    
    textSize(25);
    text("Press space to restart",100,100);
    text("GameOver",100,200);
    text(score,350,50);
    gameState=0;
  }
  if(snake.isTouching(box4)){
    snake.velocityY=0;
    snake.velocityX=0;
    
    textSize(25);
    text("Press space to restart",100,100);
    text("GameOver",100,200);
    text(score,350,50);
    gameState=0;
  }
  if(snake.isTouching(box5)){
    snake.velocityY=0;
    snake.velocityX=0;
    
    textSize(25);
    text("Press space to restart",100,100);
    text("GameOver",100,200);
    text(score,350,50);
    gameState=0;
  }
  if(score===11){
    textSize(30);
    text("YOU WIN",100,200);
  }
  if(keyDown("space")){
   gameState=1; 
   snake.x=200;
   snake.y=20;
   score=0;
  }


  drawSprites();
  
}
