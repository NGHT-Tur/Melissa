var casinha 
function setup() {
  createCanvas(1000,1000);
  casinha = createSprite (500, 500, 50, 50);
}

function draw() 
{
  background("violet");
  if (keyDown("right")) {
    casinha.position.x += 5
  } if (keyDown("left")) {
    casinha.position.x -= 5
  }
drawSprites();
}




