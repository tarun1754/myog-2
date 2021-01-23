const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane,planeimg;
var wallimg,wallupimg;
var score=0;
var wallGroup,wallupGroup;
function preload(){
	planeimg=loadImage("images/plane.png");
	wallimg=loadImage("images/wall.png");
	wallupimg=loadImage("images/wall2.png");
}

function setup() {
	createCanvas(800, 700);
	plane=createSprite(100,350,10,10);
	plane.addImage(planeimg);
	plane.scale=3;
	engine = Engine.create();
	world = engine.world;
	wallGroup=new Group();
	wallupGroup=new Group();
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(wallGroup.isTouching(wallupGroup)){
	wallupGroup.destroyEach();
	wallGroup.destroyEach();
  }
  if(keyDown(UP_ARROW)){
	plane.velocityY=-2;
  }
  if(keyDown(DOWN_ARROW)){
	plane.velocityY=2;
  }
  drawSprites();
  spawnwall();
  spawnupwall();
}
function spawnwall(){
if(frameCount%Math.round(random(300,500))===0){
var wall=createSprite(700,480,30,30);
wall.addImage(wallimg);
wall.scale=5;
wall.velocityX=-2;
wall.lifetime=850;
wallGroup.add(wall);
}
}
function spawnupwall(){
	if(frameCount%Math.round(random(200,400))===0){
	var upwall=createSprite(700,160,30,30);
	upwall.addImage(wallupimg);
	upwall.scale=4;
	upwall.velocityX=-2;
	upwall.lifetime=850;
	wallupGroup.add(upwall);
	}
	}


