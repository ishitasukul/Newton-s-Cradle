
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter= bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground= new Ground (400,100,600,60);
	bob1= new Bob (160,550);
	bob2= new Bob (284,550);
	bob3= new Bob (408,550);
	bob4= new Bob (532,550);
	bob5= new Bob (656,550);
	

	 rope1= new Rope (bob1.body,ground.body);
	 rope2= new Rope(bob2.body,ground.body);
	 rope3= new Rope(bob3.body,ground.body);
	 rope4= new Rope(bob4.body,ground.body);
	 rope5= new Rope(bob5.body,ground.body);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

  bob1.depth= rope1.depth;
  bob1.depth= bob1.depth+1;
  bob2.depth= rope2.depth;
  bob2.depth= bob2.depth+1;

  bob3.depth= rope3.depth;
  bob3.depth= bob3.depth+1;

  bob4.depth= rope4.depth;
  bob4.depth= bob4.depth+1;

  bob5.depth= rope5.depth;
  bob5.depth= bob5.depth+1;


  ground.display();
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

  keyPressed();
  
  drawSprites();
 
}



function keyPressed(){
	if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(bob1.body,bob1.body.position, {x:15, y:15});
	}
  
}