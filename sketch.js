const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world,polygonImg,polygon

function preload() {
polygonImg = loadImage("polygon.png");

}

function setup(){
canvas = createCanvas(800,400);
engine = Engine.create();
world = engine.world;

ground= new Ground(580,380,800,10);    
//top
box1= new Box(480,275,30,40);
//second line
box2= new Box(450,315,30,40);
box3= new Box(480,315,30,40);
box4= new Box(510,315,30,40);
//last line
box5= new Box(420,355,30,40);
box6= new Box(450,355,30,40);
box7= new Box(480,355,30,40);
box8= new Box(510,355,30,40);
box9= new Box(540,355,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot=new SlingShot(this.polygon,{x:100,y:200});

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40)

}

function draw(){

background("white");
Engine.update(engine);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
slingshot.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition( polygon.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
