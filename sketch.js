const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;
var  ball;
var rope;
var score=0;
var bg="white"

function preload() {
  getTime();
  }

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground1=new Ground(600,500,400,20);
  ground2=new Ground(1100,350,300,20);
  box1=new Box(1100,315,50,50)
  box2=new Box(1150,315,50,50)
  box3=new Box(1050,315,50,50)
  box4=new Box(1000,315,50,50)
  box5=new Box(1025,265,50,50)
  box6=new Box(1075,265,50,50)
  box7=new Box(1125,265,50,50)
  box8=new Box(1050,215,50,50)
  box9=new Box(1100,215,50,50)
  box10=new Box(1075,165,50,50)
  box11=new Box(650,465,50,50)
  box12=new Box(600,465,50,50)
  box13=new Box(550,465,50,50)
  box14=new Box(500,465,50,50)
  box15=new Box(700,465,50,50)
  box16=new Box(450,465,50,50)
  box17=new Box(750,465,50,50)
  box18=new Box(520,415,50,50)
  box19=new Box(570,415,50,50)
  box20=new Box(620,415,50,50)
  box21=new Box(670,415,50,50) 
  box22=new Box(540,365,50,50)
  box23=new Box(590,365,50,50)
  box24=new Box(640,365,50,50)
  box25=new Box(560,315,50,50)
  box26=new Box(610,315,50,50)
  box27=new Box(585,265,50,50)
  ball=new Ball(100,400,30)
  rope=new Rope(ball.body,{x:100,y:400})

  Engine.run(engine);


  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  textSize(35);
  fill("black");
  text("Score: "+score,300,50);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  ball.display();
  rope.display();


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();

  

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly();
  
  
}
function keyPressed(){
  if(keyCode===32){
  rope.attach(ball.body)
  }
}

async function getTime(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  var dateTime=responseJSON.datetime;
  var hour=dateTime.slice(11,13);
  console.log(hour);
  if(hour>=06&&hour<=18){
  bg="white"
  }
  else{
  bg="black";
  }
  console.log(bg)
}