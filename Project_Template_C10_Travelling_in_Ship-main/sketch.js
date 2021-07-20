var seaImage;     
var shipImage1;
var sea;
var ship;

function preload(){
  seaImage = loadImage("sea.png");
 shipImage1 = loadAnimation("ship-1.png", "ship-2.png");
 shipImage2 = loadAnimation("ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -3;
  sea.scale = 0.3;

  ship = createSprite(120,200,30,30);
  ship.addAnimation("jumpingShip", shipImage1);
  ship.scale = 0.25;


}

function draw() {
  background("blue");

  sea.velocityX = -3;
  if(sea.x < 0){
    sea.x = sea.width/2;
     if(keyDown("space")) {
      ship.addAnimation("jumpingShip", shipImage2);
     }
  }

  drawSprites();
}