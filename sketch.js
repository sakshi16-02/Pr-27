
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	bob1PositionX=width/2;
	bob1PositionY=height/4+200;

	bob1=new Bob(bob1PositionX-bobDiameter*2,bob1PositionY,bobDiameter);
	bob2=new Bob(bob1PositionX-bobDiameter,bob1PositionY,bobDiameter);
	bob3=new Bob(bob1PositionX,bob1PositionY,bobDiameter);
	bob4=new Bob(bob1PositionX+bobDiameter,bob1PositionY,bobDiameter);
	bob5=new Bob(bob1PositionX+bobDiameter*2,bob1PositionY,bobDiameter);

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter,0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-45});

	}
}



