var fixedRect,movingRect;
var diamond,crystal;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(700, 200, 100, 50);
 movingRect.shapeColor = "turquoise";
 movingRect.velocityX = -3;

 fixedRect = createSprite(100,200,50,50);
 fixedRect.shapeColor = "green";
 fixedRect.velocityX = 3;

 diamond = createSprite(200,200,50,50);
 diamond.shapeColor = "white";
 
 crystal = createSprite(300,100,50,50);
 crystal.shapeColor = "purple";

}

function draw() {
  background(0); 
 diamond.x = mouseX;
 diamond.y = mouseY;
 //console.log( movingRect.width/2+fixedRect.width/2);

 //calls the isTouching function
 if(isTouching(diamond,crystal)){
  diamond.shapeColor = "purple";
  crystal.shapeColor = "white";
 }else {
   diamond.shapeColor = "white";
   crystal.shapeColor = "purple";
 }

 bounceOff(movingRect,fixedRect);
  drawSprites();
}

