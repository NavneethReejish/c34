
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground,wrekingBall;


function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(800, 400);
  
  ground = new Ground(400,390,810,20)

  block1 = new Wall(525,355) 
  block2 = new Wall(575,355)
  block3 = new Wall(625,355)
  block4 = new Wall(675,355)

  block5 = new Wall(525,305)
  block6 = new Wall(575,305)
  block7 = new Wall(625,305)
  block8 = new Wall(675,305)

  block9 = new Wall(525,255)
  block10 = new Wall(575,255)
  block11 = new Wall(625,255)
  block12 = new Wall(675,255)

  block13 = new Wall(525,205)
  block14 = new Wall(575,205)
  block15 = new Wall(625,205)
  block16 = new Wall(675,205)

  wrekingBall = new Stone(300,200,30);
  
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground.display();

  wrekingBall.display();


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    
}

  
