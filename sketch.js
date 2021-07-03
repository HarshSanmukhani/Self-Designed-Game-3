var gameState = 0;
var moved = false;

var canvas, edges, backgroundImg;

var security, system, code;

var spaceShip, spaceShipImg;
var meteor, meteorImg;
var aesteroid, aesteroidImg;
var meteorGroup;
var aesteroidGroup;
var inWall;

var planet, planetImg;
var planet1, planet1Img;
var part1, part2, part3, part4, part5;

function preload(){
    //preload the files
    backgroundImg = loadImage("Sprites/space.jpg");
    spaceShipImg = loadImage("Sprites/spaceShip.png");
    meteorImg = loadImage("Sprites/meteor.png");
    aesteroidImg = loadImage("Sprites/aestroid.png");
    planetImg = loadImage("Sprites/planet.png");
    planet1Img = loadImage("Sprites/planet1.png");
    part1 = loadImage("Sprites/Part 1.png");
    part2 = loadImage("Sprites/Part 2.png");
    part3 = loadImage("Sprites/Part 3.png");
    part4 = loadImage("Sprites/Part 4.png");
    part5 = loadImage("Sprites/Part 5.png");

    //create the groups
    meteorGroup = createGroup();
    aesteroidGroup = createGroup();
}

function setup(){
    //create the canvas
    canvas = createCanvas(innerWidth, windowHeight-5);

    /*
        //create the System and Security object
        security = new Security();
        system = new System();
    */
    /*
    if(!moved){
        //crteate the space ship
        spaceShip = createSprite(width/2-500, height/2-200);
        spaceShip.addImage("spaceShip", spaceShipImg);
        spaceShip.scale = 0.25;
        spaceShip.visible = true;
        spaceShip.debug = false;
        spaceShip.setCollider("circle", 0, 0, 250);
    }
    */

    
    if(!moved){
        planet = createSprite(width/2-450, height/2);
        planet.addImage("Planet", planetImg);

        planet1 = createSprite(width/2+425, height/2);
        planet1.addImage("Planet1", planet1Img);
    }
    
}

function draw(){
    //create the background
    background(backgroundImg);
    
    /*
    //make the space craft move side ways
    if(!moved){
        spaceShip.x = spaceShip.x + random(-1,1);

        spaceShip.velocityX = 0.1;
        spaceShip.velocityY = 0.1;

        if(keyDown(RIGHT_ARROW)){
            spaceShip.x = spaceShip.x+1.5;
        }
        if(keyDown(UP_ARROW)){
            spaceShip.y = spaceShip.y-1.5;
        }
        if(keyDown(DOWN_ARROW)){
            spaceShip.y = spaceShip.y+1.5;
        }

        //call the spawnObstacles function in draw function
        spawnObstacles();

        //add the text
        fill("white");
        textSize(20);
        text("Press The Arrow Keys To Move!!", width/2-175, height/2-225);
        text("Protect The Space Ship From Meteroids And Aesteroids!!", width/2-295, height/2-200);
        text("If You Crash With An Obstacle, You Will Be Out!!", width/2-235, height/2-175);
        text("Cross The Path To The Right Side And Win!!", width/2-230, height/2-150)

        inWall = createSprite(width/2+560, height-300, 20, windowHeight);
        inWall.visible = false;
    }

    if(spaceShip.collide(meteorGroup) || spaceShip.collide(aesteroidGroup)){
        spaceShip.destroy();
        meteorGroup.destroyEach();
        aesteroidGroup.destroyEach();

        moved = true;
    }
    */
    /*
    //call the clues function in draw
    clues();

    //makes the security display
    security.display();
    */

    
    if(!moved){
        fill("white");
        textSize(25);
        text("You Lost!! Do Not Worry!!", width/2-100, height/2-200);
        text("There Are Two Planets!! Enter The Planet And Start Playing Mini-Games!!", width/2-350, height/2-170);
        text("Play The Mini-Games And Repair The Space Ship!!", width/2-240, height/2-140);
    }
    

    //makes the sprites visible
    drawSprites();

    //call the keypressed function in draw
    keyPressed();
}

function spawnObstacles(){
    if(frameCount % 80 === 0){
        meteor = createSprite(random(width-500, width-50), random(150, 50));
        meteor.addImage("meteor", meteorImg);
        meteor.scale = 0.25;
    
        meteor.velocityX = -2;
        meteor.velocityY = 2;

        meteor.lifetime = 300;

        meteorGroup.add(meteor);
    }

    if(frameCount % 80 === 0){
        aesteroid = createSprite(random(width-500, width-50), random(height-150, height-50));
        aesteroid.addImage("aesteroid", aesteroidImg);
        aesteroid.scale = 0.15;
    
        aesteroid.velocityX = -2;
        aesteroid.velocityY = -2;

        aesteroid.lifetime = 300;

        aesteroidGroup.add(aesteroid);
    }
}


function keyPressed(){
    //In The Planet 1
    if(keyCode === 13){
        planet.visible = false;
        planet1.visible = false;

        moved = true;

        Planet1();
    }
    else if(keyCode === 27){
        planet.visible = true;
        planet1.visible = true;

        moved = false;
    }
}
