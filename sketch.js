const Engine = Matter.Engine 
const Bodies = Matter.Bodies
const World = Matter.World

var engine,world,ground;



function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options = {
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,options)
  World.add(world,ground)
  box1=new Box(500,200)
  box2=new Box(500,200)
  box3=new Box(500,200)
  box4=new Box(500,200)
  box5=new Box(500,200)
  box6=new Box(500,200)
  box7=new Box(500,200)
  box8=new Box(500,200)

  

  var optionsBall={

    density:1,frictionAir:0.005

  }
  ball=Bodies.circle(300,250,80/2,optionsBall)
  World.add(world,ball)
  rope=new Rope(ball.body,{
    x:400,y:50
  })
}

function draw() {

  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,80,80)
  rope.display()




}