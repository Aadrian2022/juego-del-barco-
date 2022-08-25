var seaImg;

function preload(){
seaImg = loadImage ("sea.png");
seaImg = creatSprite (200, 200, 10, 10);
shipImg1 = loadAnimation 
spriteName.addImage(seaImg);
shipImg2 = loadAnimation;
shipImg3 = loadAnimation;
shipImg4 = loadAnimation;

}

function setup(){
  createCanvas(400,400);
  if (sea.x <0) {
    sea.x = sea.width/2;
  }

  
}
   

   
function draw () {
  background("blue");
 drawprite();
}