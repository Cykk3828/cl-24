const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground,log1,pig1,box3,box4,pig2,box5,bird;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
 
 world=engine.world;
 box2=new Box(1000,320,70,70);
 box1=new Box(800,320,70,70);
 ground=new Ground(600,390,1200,20);
log1=new Log(900,300,200,PI/2);
pig1=new Pig(900,320);
box3=new Box(1000,230,70,70);
box4=new Box(800,230,70,70);
pig2=new Pig(900,230);
box5=new Box(900,140,70,70);

bird=new Bird(300,100);
console.log(log1);
}

function draw() {
  background("black");
Engine.update(engine);
   ground.display();
   pig1.display();
     
box2.display();
  box1.display();
  box3.display();
  box4.display();
  pig2.display();
  box5.display();
  bird.display();
  log1.display()
}