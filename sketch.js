var laser1 = createSprite(210, 110, 30, 5);
laser1.shapeColor = red;
var laser2 = createSprite(260, 260, 30, 5);
laser2.shapeColor = red;
var laser3 = createSprite(130, 265, 20, 5);
laser3.shapeColor = red;
var score = 0;
var prize3 = createSprite(15, 120, 10, 10);
prize3.shapeColor = yellow;
var prize2 = createSprite(360, 120, 10, 10);
prize2.shapeColor = yellow;
var prize1 = createSprite(160, 120, 10, 10);
prize1.shapeColor = yellow;
var trophy = createSprite(380, 380, 20, 20);
trophy.shapeColor = yellow;
var sophia = createSprite(10, 10, 15, 15);
var car1 = createSprite(88, 30, 10, 57);
var car2 = createSprite(30, 50, 60, 10);
var car3 = createSprite(30, 100, 75, 10);
var car4 = createSprite(135, 100, 65, 10);
var car5 = createSprite(120, 70, 10, 57);
var car6 = createSprite(180, 26, 10, 52);
var car7 = createSprite(180, 80, 130, 10);
var car8 = createSprite(240, 55, 10, 60);
var car9 = createSprite(290, 30, 100, 10);
var car10 = createSprite(370, 95, 100, 10);
var car11 = createSprite(325, 200, 10, 200);
var car12 = createSprite(250, 140, 50, 10);
var car13 = createSprite(230, 230, 10, 190);
var car14 = createSprite(315, 330, 180, 10);
var car15 = createSprite(270, 350, 10, 30);
var car16 = createSprite(170, 360, 200, 10);
var car17 = createSprite(40, 210, 10, 210);
var car18 = createSprite(120, 310, 150, 10);
var car19 = createSprite(190, 200, 10, 230);
var car20 = createSprite(85, 240, 10, 150);
var car21 = createSprite(135, 180, 10, 165);
var car22 = createSprite(320, 380, 10, 45);
sophia.shapeColor = blue;
laser1.velocityX = 5;
laser1.velocityY = 0;
laser2.velocityX = 4;
laser2.velocityY = 0;
laser3.velocityX = 3;
laser3.velocityY = 0;
function draw() {
  createEdgeSprites();
  background(orange);
  textSize(15);
  text(Sophia, 5, 30);
  text(Trophy, 350, 355);
  drawSprites();
  if (sophia.isTouching(edges)) {
    sophia.bounce(edges);
  }
  if (keyDown(UP_ARROW)) {
    sophia.y = sophia.y - 3;
  }
  if (keyDown(DOWN_ARROW)) {
    sophia.y = sophia.y + 3;
  }
  if (keyDown(LEFT_ARROW)) {
    sophia.x = sophia.x - 3;
  }
  if (keyDown(RIGHT_ARROW)) {
    sophia.x = sophia.x + 3;
  }
  if (sophia.isTouching(car1)sophia.isTouching(car2)sophia.isTouching(car3)sophia.isTouching(car4)sophia.isTouching(car5)sophia.isTouching(car6)sophia.isTouching(car7)sophia.isTouching(car8)sophia.isTouching(car9)sophia.isTouching(car10)sophia.isTouching(car11))  {
    sophia.x = 15;
    sophia.y = 15;
    prize1.visible = true;
    prize1.x = 160;
    prize1.y = 120;
    prize2.visible = true;
    prize2.x = 360;
    prize2.y = 120;
    prize3.visible = true;
    prize3.x = 15;
    prize3.y = 120;
    score = 0;
  }
  if (sophia.isTouching(car12)sophia.isTouching(car13)sophia.isTouching(car14)sophia.isTouching(car15)sophia.isTouching(car16)sophia.isTouching(car17)sophia.isTouching(car18)sophia.isTouching(car19)sophia.isTouching(car20)sophia.isTouching(car21)sophia.isTouching(car22))  {
    sophia.x = 15;
    sophia.y = 15;
    prize1.visible = true;
    prize1.x = 160;
    prize1.y = 120;
    prize2.visible = true;
    prize2.x = 360;
    prize2.y = 120;
    prize3.visible = true;
    prize3.x = 15;
    prize3.y = 120;
    score = 0;
  }
  text((Score  + score)  + 3, 280, 15);
  if (sophia.isTouching(trophy)) {
    sophia.visible = false;
    sophia.x = 400;
    sophia.y = 400;
  laser1.setVelocity(0, 0);
  laser2.setVelocity(0, 0);
  laser3.setVelocity(0, 0);
    fill(yellow);
    textSize(50);
    textFont(Arial);
    text(YOU WIN, 100, 200);
  }
  if (sophia.isTouching(prize1)) {
    prize1.visible = false;
    prize1.x = 140;
    prize1.y = 90;
    score = score + 1;
  }
  if (sophia.isTouching(prize2)) {
    prize2.visible = false;
    prize2.x = 140;
    prize2.y = 90;
    score = score + 1;
  }
  if (sophia.isTouching(prize3)) {
    prize3.visible = false;
    prize3.x = 140;
    prize3.y = 90;
    score = score + 1;
  }
  if (laser1.isTouching(car19)  laser1.isTouching(car11)) {
    laser1.bounceOff(car19);
    laser1.bounceOff(car11);
  }
  if (laser2.isTouching(car13)  laser2.isTouching(car11)) {
    laser2.bounceOff(car13);
    laser2.bounceOff(car11);
  }
  if (laser3.isTouching(car19)  laser3.isTouching(car20)) {
    laser3.bounceOff(car19);
    laser3.bounceOff(car20);
  }
  if (sophia.isTouching(laser1)  sophia.isTouching(laser2)  sophia.isTouching(laser3)) {
    sophia.x = 15;
    sophia.y = 15;
    prize1.visible = true;
    prize1.x = 160;
    prize1.y = 120;
    prize2.visible = true;
    prize2.x = 360;
    prize2.y = 120;
    prize3.visible = true;
    prize3.x = 15;
    prize3.y = 120;
    score = 0;
  }

}
