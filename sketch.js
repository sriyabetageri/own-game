
var dog, dogImage;

var monster1,monsterimage;

var fairy1,fairy1image;
var fairy2,fairy2image;

var backgroundImg;

var ci1,ci2,ci3,i4,ci5,ci6,ci7,ci8,ci9,
ci10,ci11,ci12,ci13,ci14,ci15,
ci16,ci17,ci18,ci19,ci20,ci21,ci22 ,ci23,ci24,ci25;

var cardboard1,cardboard2,cardboard3, cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,
cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,
cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,
cardboard25;

var edges;


function preload(){
  dogImage = loadImage("pug.png");

  fairy1image = loadImage("fairy.png")

  monsterimage = loadImage("monster.png")

  backgroundImg = loadImage("sand.jpg")

  ci1 = loadImage("hb.png")
 
    }
  
function setup() {
  createCanvas(600,600);

  monster1 = createSprite(247,360,50,50);
  monster1.addImage(monsterimage)

  monster1.scale = 0.1
  
  dog = createSprite(49, 116, 50, 50);
  dog.addImage(dogImage)

  dog.scale = 0.2
  

  cardboard1 = createSprite(70,170,100,20);
  cardboard1.shapeColor = "brown"

  cardboard2 = createSprite(200,100,20,800);
  cardboard2.shapeColor = "brown"

  cardboard3 = createSprite(120,250,150,20);
  cardboard3.shapeColor = "brown"

  cardboard4 = createSprite(70,350,150,20);
  cardboard4.shapeColor = "brown"

  cardboard5 = createSprite(120,450,150,20);
  cardboard5.shapeColor = "brown"

  cardboard6 = createSprite(90,570,20,100);
  cardboard6.shapeColor = "brown"

  cardboard7 = createSprite(350,460,20,800);
  cardboard7.shapeColor = "brown"




  fairy1 = createSprite(280,202,50,50)
fairy1.addImage(fairy1image);
fairy1.scale = 0.15


  
}



function draw() {
  background(backgroundImg);  

  fill("black")
  text(mouseX+" : " + mouseY,mouseX,mouseY);

  

if(keyDown("RIGHT_ARROW")){
dog.x = dog.x + 2; 
}

if(keyDown("LEFT_ARROW")){
  dog.x = dog.x - 2; 
  }

  if(keyDown("UP_ARROW")){
    dog.y = dog.y - 2; 
    }

  if(keyDown("DOWN_ARROW")){
      dog.y = dog.y + 2; 
      }

      

dog.collide(cardboard1);
dog.collide(cardboard2);
dog.collide(cardboard3);
dog.collide(cardboard4);

edges = createEdgeSprites();



  drawSprites();
}