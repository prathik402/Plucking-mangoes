
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
    stone = new Stone1(50,550,60,60);
    boy = new Player(300,600,160,180);
    chain = new Chain(stone.body,boy.body,30,30)
    slingshot = new SlingShot(stone.body,{x:220, y:550});
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  chain.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  boy.display();
  stone.display();
  slingshot.display();
 
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
    Matter.Body.setPosition(stone.body,{x:50,y:550})
    slingshot.attach(stone.body); 
  }
}
function detectCollision(Lstone,Lmango){
  mangoBodyPosition = Lmango.body.position
  stoneBodyPosition = Lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-Lmango.r+Lstone.r)
   {
     Matter.body.setStatic(Lmango.body,false);
   }

}


