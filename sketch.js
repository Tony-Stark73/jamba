
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	box1=new dust(550,485,250,20);
box2=new dust(455,470,20,100);
box3=new dust(645,470,20,100);
  paper1=new Paper(200,200,30,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
box1.display();
box2.display();
box3.display();
paper1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   Matter.Paper.applyForce(box2.body,box2.body.position,{x:85,y:85});
  }



}



