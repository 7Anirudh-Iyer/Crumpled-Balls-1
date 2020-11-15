const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var bp
var ball
var binn,bin1,bin2
var ran
var bat
var b
var w1,w2,w3

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground=new Box(0,windowHeight/1.2,100000,10)
    ran=new Ground(0,windowHeight/1.2+10,PI/2)

    bp=new ball1(windowWidth/4,0)
    binn=new Boxy(windowWidth/1.1,windowHeight/1.39,10,100)
    bin1=new Boxy(windowWidth/1.5,windowHeight/1.39,10,100)
    bin2=new Boxy(windowWidth/1.27,windowHeight/1.25,windowWidth/4,10)

    w1=new Boxy(windowWidth,windowHeight/2,20,10000)
    w2=new Boxy(0,windowHeight/2,20,10000)

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display()
    bp.display()
    binn.display()
    bin1.display()
    ran.display()
    bin2.display() 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bp.Paper1,bp.Paper1.position,{x:18,y:-25})
    }
}

