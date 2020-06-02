var fixedRectangle 
  var movingRectangle 
function setup() {
  createCanvas(800,400);
   fixedRectangle = createSprite(400, 200, 50, 50);
   fixedRectangle.shapeColor = "blue"

   movingRectangle = createSprite(400, 200, 50, 50);
   movingRectangle.shapeColor = "blue"
}

function draw() { 
  background(255,255,255);  
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  if (movingRectangle.x - fixedRectangle.x <= (movingRectangle.width/2 + fixedRectangle.width/2)
  && fixedRectangle.x - movingRectangle.x <= (movingRectangle.width/2 + fixedRectangle.width/2)
  && fixedRectangle.y - movingRectangle.y <= (movingRectangle.height/2 + fixedRectangle.height/2)
  && movingRectangle.y - fixedRectangle.y <= (movingRectangle.height/2 + fixedRectangle.height/2)

  ){
fixedRectangle.shapeColor = "red"
movingRectangle.shapeColor = "red"
  }
  else {
    fixedRectangle.shapeColor = "blue"
movingRectangle.shapeColor = "blue"
  }
 
  drawSprites();
}