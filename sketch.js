
var platform1, box1, polygon;
var engine, world;
var score = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload (){
polygonimg = loadImage("polygon.png");


}

function setup(){
    createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

    platform1 = new Ground(550,500,270,20);
    box1 = new Box(460,480,30,40);
    box2 = new Box(490,480,30,40);
    box3 = new Box(520,480,30,40);
    box4 = new Box(550,480,30,40);
    box5 = new Box(580,480,30,40);
    box6 = new Box(610,480,30,40);
    box7 = new Box(640,480,30,40);
    box8 = new Box(490,430,30,40);
    box9 = new Box(520,430,30,40);
    box10 = new Box(550,430,30,40);
    box11 = new Box(580,430,30,40);
    box12 = new Box(610,430,30,40);
    box13 = new Box(520,390,30,40);
    box14 = new Box(550,390,30,40);
    box15 = new Box(580,390,30,40);
    box16 = new Box(550,350,30,40);

    var options = {
        restitution:1,
        density:2,
        friction:2
    }
    polygon = Bodies.circle(50,200,20,options);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});  
    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(0);
    textSize(30);
    fill ("yellow")
    text("Score: "+score,1050,40);
    drawSprites();
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)
    platform1.display();
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

    
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon);
    }
}

