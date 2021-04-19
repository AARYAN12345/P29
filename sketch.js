
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6
var ground,platform
var hex, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(800, 305, 300, 30);

    box1 = new Box(700,320,70,70);
    box2 = new Box(820,320,70,70);
    box3 = new Box(930,320,70,70);
    box4 = new Box(720,240,70,70);
    box5 = new Box(910,240,70,70);
    box6 = new Box (820,120,70,70)
    hex = new Hex (200,50,50)
    slingShot = new SlingShot(hex.body,{x:200,y:15  0});
}

function draw(){
    background(128);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();


    box3.display();
    box4.display();


    box5.display();
    box6.display()
    hex.display("purple",3);
    platform.display();

    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(hex.body)
    }
}