
var fixrect,movingrect;
var r1,r2;
var r3,r4;

function setup() {
  createCanvas(1200,800);
  fixrect=createSprite(600, 400, 50, 80);
  movingrect=createSprite(400, 200, 80, 30);
  fixrect.debug = true
  movingrect.debug = true
  r1 = createSprite(0,100,50,50)
  r2 = createSprite(1000,100,50,50)
  r1.velocityX = 7;
  r2.velocityX = -7;
  r1.shapeColor = "blue"
  r2.shapeColor = "blue"
  r3=createSprite(100,400,50,50)
  r4=createSprite(1000,400,40,40)

}

function draw() {
  background(255,255,255); 

movingrect.x=mouseX
movingrect.y = mouseY

if(isTouching(movingrect,r4)){
  movingrect.shapeColor = "red"
  r4.shapeColor = "red"
}else{
  movingrect.shapeColor = "green"
  r4.shapeColor = "green"
}

bounceOff(r1,r2);



  drawSprites();
}


