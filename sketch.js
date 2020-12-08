var Matter;

const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var ground;
var division1;
var world,engine;

function setup() {
  createCanvas(480,800);
 
  world = engine.world;
  engine = Engine.create();
  ground = new Ground(400,460,800,20);
  division1 = new Division(80,600,20,400);
}

function draw() {
  background(255,255,255);  
  ground.display();
  division1.display();
  drawSprites();
}