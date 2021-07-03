var lava = createSprite(200,25,400,50);
lava.shapeColor = "Orange";

var alien1 = createSprite(50,100);
alien1.setAnimation("alien 3");
alien1.scale = 1;

var alien2 = createSprite(350,100);
alien2.setAnimation("alien 3");
alien2.scale = 1;

var boundary1 = createSprite(200,150,150,5);
boundary1.shapeColor = "Orange";

var alien3 = createSprite(50,200);
alien3.setAnimation("alien 1");
alien3.scale = 0.5;

var alien4 = createSprite(125,200);
alien4.setAnimation("alien 2");
alien4.scale = 0.5;

var alien5 = createSprite(275,200);
alien5.setAnimation("alien 2");
alien5.scale = 0.5;

var alien6 = createSprite(350,200);
alien6.setAnimation("alien 1");
alien6.scale = 0.5;

var boundary2 = createSprite(85,200,5,400);
boundary2.shapeColor = "Orange";

var alien7 = createSprite(50,300);
alien7.setAnimation("alien 1");
alien7.scale = 0.5;

var alien8 = createSprite(125,300);
alien8.setAnimation("alien 2");
alien8.scale = 0.5;

var alien9 = createSprite(275,300);
alien9.setAnimation("alien 2");
alien9.scale = 0.5;

var alien10 = createSprite(350,300);
alien10.setAnimation("alien 1");
alien10.scale = 0.5;

var boundary3 = createSprite(310,200,5,400);
boundary3.shapeColor = "Orange";

var ship = createSprite(200,375);
ship.setAnimation("SpaceShip");
ship.scale = 0.1;

var girl = createSprite(200,100);
girl.setAnimation("kid kidnapped");
girl.scale = 0.2;

var score = 0;

serve();

function draw() {
  background("blue");
  
if (keyDown("up")) {
    ship.y = ship.y-6;
  }
   
if (keyDown("down")) {
    ship.y = ship.y+6;
  }

if (keyDown("left")) {
     ship.x = ship.x-6;
   }

if (keyDown("right")) {
     ship.x = ship.x+6;
}

createEdgeSprites();
boundary1.bounceOff(edges);
alien1.bounceOff(edges);
alien2.bounceOff(edges);
alien3.bounceOff(edges);
alien4.bounceOff(edges);
alien5.bounceOff(edges);
alien6.bounceOff(edges);
alien7.bounceOff(edges);
alien8.bounceOff(edges);
alien9.bounceOff(edges);
alien10.bounceOff(edges);
ship.bounceOff(edges);
alien4.bounceOff(boundary2);
alien4.bounceOff(boundary3);
alien5.bounceOff(boundary2);
alien5.bounceOff(boundary3);
alien8.bounceOff(boundary2);
alien8.bounceOff(boundary3);
alien9.bounceOff(boundary2);
alien9.bounceOff(boundary3);


if (ship.isTouching(boundary1) ||
    ship.isTouching(alien1) ||
    ship.isTouching(alien2) ||
    ship.isTouching(alien3) ||
    ship.isTouching(alien4) ||
    ship.isTouching(alien5) ||
    ship.isTouching(alien6) ||
    ship.isTouching(alien7) ||
    ship.isTouching(alien8) ||
    ship.isTouching(alien9) ||
    ship.isTouching(alien10) ||
    ship.isTouching(lava))
    {
      reset();
      serve();
      score = score+1;
       }

fill("White");
text("Failed = "+score,175,65);

if (ship.isTouching(girl)) {
  stroke(0);
  fill("White");
  text("The Kid Is Safe",160,200);
  text("You Win",175,225);
  
  alien1.setVelocity(0,0);
  alien2.setVelocity(0,0);
  alien3.setVelocity(0,0);
  alien4.setVelocity(0,0);
  alien5.setVelocity(0,0);
  alien6.setVelocity(0,0);
  alien7.setVelocity(0,0);
  alien8.setVelocity(0,0);
  alien9.setVelocity(0,0);
  alien10.setVelocity(0,0);
  boundary1.setVelocity(0,0);
  ship.setVelocity(0,0);
  serve();
  
}

 drawSprites();
}

function reset(){
  ship.x = 200;
  ship.y = 375;
  alien1.x = 50;
  alien1.y = 100;
  alien2.x = 350;
  alien2.y = 100;
  alien3.x = 50;
  alien3.y = 200;
  alien4.x = 125;
  alien4.y = 200;
  alien5.x = 275;
  alien5.y = 200;
  alien6.x = 350;
  alien6.y = 200;
  alien7.x = 50;
  alien7.y = 300;
  alien8.x = 125;
  alien8.y = 300;
  alien9.x = 275;
  alien9.y = 300;
  alien10.x = 350;
  alien10.y = 300;
}

function serve(){
alien1.velocityX = 3;
alien2.velocityX = -3;
boundary1.velocityX = 3;
alien3.velocityY = 3;
alien4.velocityX = 3;
alien5.velocityX = -3;
alien6.velocityY = 3;
alien7.velocityY = -3;
alien8.velocityX = 3;
alien9.velocityX = -3;
alien10.velocityY = -3;
}