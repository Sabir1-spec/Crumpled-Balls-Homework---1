
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 200, 20);

	ground = new Ground(400, 650, 800, 20);

	bottomGround = new Ground(600, 633, 200, 15);

	leftGround = new Ground(500, 590, 15, 100);

	rightGround = new Ground(700, 590, 15, 100);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  ground.display();

  bottomGround.display();

  leftGround.display();

  rightGround.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {


	  Matter.Body.applyForce(paper.body,paper.body.position,{x: 85, y: -85})


	}
}


