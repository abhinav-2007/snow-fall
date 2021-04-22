const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var t1,t2,t3,t4;
var engine,world,umbrella1;
var backgroundImg;
var drop1=[];
var maxDrops=100;
//var child1;
function preload()
{
	t1=loadImage("images/thunderbolt/1.png")
	t2=loadImage("images/thunderbolt/2.png")
	t3=loadImage("images/thunderbolt/3.png")
	t4=loadImage("images/thunderbolt/4.png")
	backgroundImg = loadImage("images/snow/snow3.jpg");

	

}

function setup() {
	createCanvas(1200, 800);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//umbrella1=new umbrella(250,500);
	//child1=new child(250,500);
	if(frameCount%120===0){
		for(var i=0;i<maxDrops;i++){
			drop1.push(new rain (random(0,800),random(0,500)));
		}
	}




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  rand=Math.round(random(1,4));
  if(frameCount%60===0){
	var thunder=createSprite(random(20,350),random(10,40),10,10);
	  switch(rand){
		  case 1:thunder.addImage(t1);
		  break;
		  case 2:thunder.addImage(t2);
		  break;
		  case 3:thunder.addImage(t3);
		  break;
		  case 4:thunder.addImage(t4);
		  break;
		  default:break;
	  }
	  thunder.lifetime=50;
	  thunder.scale =0.3;
      
  }
  

  //child1.display();
  for(var i=0;i<maxDrops;i++){
	  drop1[i].showdrop();
	  drop1[i].update();

  }
  
  drawSprites();
 
}



