const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1,ground2,ground3
var engine, world
var polygen
var gameState



function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
    world = engine.world;
    gameState="onSling"


  polygen=new Polygen(200,300,30,20)
  ground1=new Ground(500,750,1000,20)
  ground2=new Ground(400,600,250,20)
  ground3=new Ground(700,400,250,20)
  box1=new Box(340,600,40,50)
  box2=new Box(360,590,40,50)
  box3=new Box(350,590,40,50)
  box4=new Box(370,500,40,50)
  box5=new Box(400,500,40,50)
  box6=new Box(387,450,40,50)
  box7=new Box(700,370,40,50)
  box8=new Box(740,370,40,50)
  box9=new Box(350,600,40,50)
  box10=new Box(275,620,40,50)
  box11=new Box(285,620,40,50)
  box12=new Box(295,620,40,50)
  
  
  slingShot = new SlingShot(polygen.body,{x:200,y:300});



}

function draw() {
  background(100); 
  Engine.update(engine); 
  ground1.display();
  ground2.display();
  ground3.display();
  polygen.display();
  slingShot.display();
   //fill(200)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  
}

function mouseDragged(){
  if (gameState !="launched"){
  Matter.Body.setPosition(polygen.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState="launched"
}

