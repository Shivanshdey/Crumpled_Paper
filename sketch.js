
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paper_img;


function preload(){
paper_image=loadImage("paper.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper=new paper(100,600,10);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//paper=new paper(300,400,50,50)

	
	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();

  paper.display();

}
function keyPressed(){
	if(keyCode==UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15 ,y:-15})	
}
}
