const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var hammer1;
var ruber1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,200,50,50);
    box2 = new Box(340,100,50,100);
    ground = new Ground(600,height,1200,20)
    hammer1= new hammer(200,200);

    ruber1= new ruber(300,300,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    hammer1.display();
    ruber1.display();
}