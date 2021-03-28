var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  car1= createSprite(200, 200, 50, 80);
  car2= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  car1.velocity=
if(car1.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 )
  {movingRect.shapeColor="yellow";
  fixedRect.shapeColor="yellow";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
