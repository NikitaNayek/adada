
var zenitsukaimage,tanjiroimage,nezukoimage;
var zenitsu,tanjiro,nezuko,background1,backgroundimg;


function preload(){

zenitsukaimage= loadAnimation("nameitasimages/Zpic1.png","nameitasimages/Zpic2.png","nameitasimages/Zpic3.png","nameitasimages/Zpic4.png","nameitasimages/Zpic5.png","nameitasimages/Zpic6.png");

tanjiroimage= loadAnimation("nameitasimages/Tpic1.png","nameitasimages/Tpic2.png","nameitasimages/Tpic3.png","nameitasimages/Tpic4.png","nameitasimages/Tpic5.png","nameitasimages/Tpic6.png","nameitasimages/Tpic7.png","nameitasimages/Tpic8.png");

nezukoimage= loadAnimation("nameitasimages/Npic1.png","nameitasimages/Npic2.png","nameitasimages/Npic3.png","nameitasimages/Npic4.png","nameitasimages/Npic5.png","nameitasimages/Npic6.png","nameitasimages/Npic7.png","nameitasimages/Npic8.png");

backgroundimg= loadImage("nameitasimages/citybackground.jpg")





}
function setup() {
  createCanvas(1800,800);
  zenitsu= createSprite(400, 700, 50, 50);
  zenitsu.addAnimation("gif",zenitsukaimage);
  zenitsu.scale= 0.5;

  tanjiro= createSprite(200, 700, 50, 50);
  tanjiro.addAnimation("gif",tanjiroimage);
  tanjiro.scale= 0.5;

  nezuko= createSprite(600, 700, 50, 50);
  nezuko.addAnimation("gif",nezukoimage);
  nezuko.scale= 0.5;
   edges=createEdgeSprites();
  background= createSprite(1800,400);
  background.scale= 2;
  background.addImage("bg",backgroundimg);
  background.depth= nezuko.depth;
  background.depth= tanjiro.depth;
  background.depth= zenitsu.depth;
  nezuko.depth= nezuko.depth+1;
  tanjiro.depth= tanjiro. depth+1;
  zenitsu.depth= zenitsu. depth+1;
}

function draw() {
  //background(0);  

  background.velocityX = -3 

  if (background.x < 0){
    background.x = background.width/2;
  }

  if(keyDown("space"))
  {
    zenitsu.velocityY=-10;
  }

  zenitsu.velocityY=zenitsu.velocityY+1;
 zenitsu.collide(edges[3]);
  drawSprites();
}

