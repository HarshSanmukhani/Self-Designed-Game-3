function Planet1(){
var Thief = createSprite(15,385,30,30);
Thief.shapeColor = "Black";

Thief.velocityX = 0;
Thief.velocityY = 0;

var Diamond_Box = createSprite(385,15,30,30);
Diamond_Box.shapeColor = "Blue";

var Laser1 = createSprite(100,200,200,5);
Laser1.shapeColor = "red";

Laser1.velocityX = 0;
Laser1.velocityY = -2;

var Laser2 = createSprite(300,200,200,5);
Laser2.shapeColor = "red";

Laser2.velocityX = 0;
Laser2.velocityY = 2;

var Laser3 = createSprite(180,100,5,200);
Laser3.shapeColor = "red";

Laser3.velocityX = 2;
Laser3.velocityY = 0;

var Laser4 = createSprite(180,300,5,200);
Laser4.shapeColor = "red";

Laser4.velocityX = -2;
Laser4.velocityY = 0;

function draw() {
 background("LightGrey");
  
if (keyDown("up")) {
  Thief.velocityX = 0;
  Thief.velocityY = -4;
}

if (keyDown("down")) {
  Thief.velocityX = 0;
  Thief.velocityY = 4;
}

if (keyDown("left")) {
  Thief.velocityX = -4;
  Thief.velocityY = 0;
}

if (keyDown("right")) {
  Thief.velocityX = 4;
  Thief.velocityY = 0;
}

if (Laser1.isTouching(Thief) || Laser2.isTouching(Thief) || Laser3.isTouching(Thief) || Laser4.isTouching(Thief)) {
  stroke(0);
  fill(0);
  textSize(25);
  text("Thief Is Caught",120,200);
  Laser1.setVelocity(0,0);
  Laser2.setVelocity(0,0);
  Laser3.setVelocity(0,0);
  Laser4.setVelocity(0,0);
  Thief.setVelocity(0,0);
}

if (Thief.isTouching(Diamond_Box)) {
  stroke(0);
  fill(0);
  textSize(25);
  text("Thief Got The Diamond Box",50,200);
  Laser1.setVelocity(0,0);
  Laser2.setVelocity(0,0);
  Laser3.setVelocity(0,0);
  Laser4.setVelocity(0,0);
  Thief.setVelocity(0,0);
}


  createEdgeSprites();
  Thief.bounceOff(edges);
  
  Laser1.bounceOff(topEdge);
  Laser1.bounceOff(bottomEdge);

  Laser2.bounceOff(topEdge);
  Laser2.bounceOff(bottomEdge);
  
  Laser3.bounceOff(rightEdge);
  Laser3.bounceOff(leftEdge);

  Laser4.bounceOff(rightEdge);
  Laser4.bounceOff(leftEdge);
  
  Diamond_Box.bounceOff(edges);

  Laser2.bounce(Diamond_Box);

  Laser3.bounce(Diamond_Box);
  
  drawSprites();
}
}