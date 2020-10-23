var car
var wall,speed,weight
function setup() {
  createCanvas(800,200);
   car = createSprite(100,100,30,30);
   wall = createSprite(680,100,20,height/2);
   speed=random(1,9)
   weight=random(500,1200)
}


function draw() {
  background(0);  
if(keyDown("space")){
car.velocityX=speed;
}
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation = (0.5*weight*speed*speed)/22500
  if(deformation>180){
    car.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
}

  drawSprites();
}