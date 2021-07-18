
function preload(){
sea_img = loadImage("sea.png")
sea = createSprite(200,200,20,20)
sea.addAnimation("img",sea_img)
sea.scale = 0.25
ship_ani = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
ship = createSprite(160,170,20,20)
ship.addAnimation("ani",ship_ani)
ship.scale= 0.3

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 drawSprites();
 sea.velocityX=5
 if(sea.x>520){
sea.x = sea.width/2
 }
}