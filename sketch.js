var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog=loadImage("../images/dogImg.png");
  happyDog=loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  Dog=createSprite(250,250,20,20);
  Dog.addImage(dog);
  Dog.scale=0.25;
 // HappyDog=createSprite(250,250,20,20);
  //HappyDog.addAnimation(happyDog);

  database = firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(dog);

}
  drawSprites();
  stroke("red");
  fill("red");
  textSize(15);
  text("Press the up arrow key to feed the dog", 200, 50);
  text("Food Remaining: " + foodS, 190, 100);

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x==0){
    x=0;
  }
  else{
    x=x-1;
  }
  
database.ref('/').update({
  Food:x
})
}



