
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var chain;
var stone;
var ground;
var boy;
var mango1, mango2, mango3, mango4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1 = new Mango(600,350,60,60);
    mango2 = new Mango(700,380,60,60);
    mango3 = new Mango(500,340,60,60);
    mango4 = new Mango(620,280,60,60);
    tree = new Tree1(600,450,400,420);
    ground = new Ground(600,650,1300,10);
    stone = new Stone1(50,400,60,60);
    boy = new Player(300,600,160,180);
   
    slingshot = new SlingShot(stone.body,{x:200, y:520});
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  boy.display();
  stone.display();
  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
 
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:250,y:550})
    slingshot.attach(stone.body); 
   
  }
}
function detectCollision(Lstone,Lmango){
  mangoBodyPosition = Lmango.body.position
  stoneBodyPosition = Lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r)
   {
     Matter.body.setStatic(Lmango.body,false);
   }

}


