
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,100,50,rgb(245,181,23));
	bob2 = new Bob(300,100,50,rgb(253,117,91));
	bob3 = new Bob(400,100,50,rgb(7,153,218));
	bob4 = new Bob(500,100,50,rgb(253,117,91));
	bob5 = new Bob(600,100,50,rgb(245,181,23));

	rope1 = new Rope(bob1.body,{x:200,y:5});
	rope2 = new Rope(bob2.body,{x:300,y:5});
	rope3 = new Rope(bob3.body,{x:400,y:5});
	rope4 = new Rope(bob4.body,{x:500,y:5});
	rope5 = new Rope(bob5.body,{x:600,y:5});
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}