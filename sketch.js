const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var floor;
var box1, box2, box3, box4;
var pig1, pig2;
var log1, log2, log3;

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;
    floor = new ground(600, 790, 1200, 20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 270);
    log1 = new Log(810, 300, 300, PI/2);
    log2 = new Log(760, 200, 150, PI/7);
    log3 = new Log(900, 200, 150, -PI/7);
    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);

}

function draw(){
    background(0);
    Engine.update(engine);
        floor.display();
        box2.display();
    box1.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    log3.display();
}
