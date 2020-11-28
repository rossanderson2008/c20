var fixedRect, movingRect;
var r1,r2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);

  fixedRect.shapeColor = "purple"
  movingRect.shapeColor = "purple"
  r1 = createSprite(100,0,50,50)
  r2 = createSprite(100,400,40,30)
  r1.shapeColor = "blue"
  r2.shapeColor = "yellow"
  r1.velocityY = 5
  r2.velocityY = -5
}

function draw() {
  background(0);  

movingRect.x = mouseX;
movingRect.y = mouseY;

//25 mr
//25 fr
//50

if (r1.x - r2.x < r2r2.width/2 + r1.width/2
  && r2.x - r1.x < r2r2.width/2 + r1.width/2) {
    r1.velocityX = r1.velocityX * (-1);
r2.velocityX = r2.velocityX * (-1);
}
if (r1.y - r2r2.y < r2r2.height/2 + r1r1.height/2
  && r2r2.y - r1r1.y < r2r2.height/2 + r1r1.height/2){
    r1r1.velocityY = r1r1.velocityY * (-1);
    r2r2.velocityY = r2r2.velocityY * (-1);
}


console.log(movingRect.x - fixedRect.x)
if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2&&
  fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor = "aqua"
  movingRect.shapeColor = "aqua"

}else{
  fixedRect.shapeColor = "purple"
  movingRect.shapeColor = "purple"
}
  drawSprites();
}