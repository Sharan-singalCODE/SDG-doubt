//This is a project by sharan singal , His motto is to revive the classic game on free arcade.com known as fill it so today;s generation knows what 
//is the meaning of arcade


var  bat1, bat2, bat3
var score, round, gameState;

var playerGroup
var pltr
var edges
var plrpos
var RgtEdge
var BtmEdge

var Boundry
function setup() {
  var canvas =createCanvas(800,400);
   edges = createEdgeSprites()
 RgtEdge = createSprite(790,400,10,800)
BtmEdge = createSprite(400,400,800,10)
pltr = createSprite(200,400,2,2)
playerGroup = new Group();
 bat1 = createSprite(100,200,20,20)
 bat2 = createSprite(200,200,20,20)
 bat3 = createSprite(150,200,20,20)

 bat1.shapeColor="red"
 
}

function draw() {
  background('cyan');

  
 pltr1 = createSprite(pltr.x,pltr.y,2,2)
 
  keyPressed()
if(isTouching(pltr1,RgtEdge)&&isTouching(pltr1,BtmEdge)){

  fill('green')
     beginShape()
     vertex(pltr.x,pltr.y)
     vertex()
     endShape()
}
 
  drawSprites();
}

function keyPressed(){

  if (keyCode === 38){
   pltr.velocityY = -3
   pltr.velocityX =0
  } 
  if (keyCode === 40){
    pltr.velocityY = 3
    pltr.velocityX = 0
  
  } 
    if (keyCode === 39){
     pltr.velocityX = 3
     pltr.velocityY = 0
  }
    if (keyCode === 37){
    pltr.velocityX = -3
    pltr.velocityY = 0
  }
  
}