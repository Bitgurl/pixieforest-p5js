let pixPic;
let treePic;
let sprkPic;
let savePic;
let trashPic;
let forestGame;
let c;

function preload() {
  pixPic = loadImage("pix.png");
  treePic = loadImage("pixtree.png");
  sprkPic = loadImage("sprkldust.png");
  savePic = loadImage("saveButton.png");
  trashPic= loadImage("delete.png");
  forestGame = pixPic;

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(230, 230, 250);




}

function draw() {

  c = constrain(mouseX, 275, windowWidth);




  //buttons
  image(pixPic, 80, 80, 100, 100);
  image(treePic, 90, 200, 100, 100);
  image(sprkPic, 95, 320, 100, 100);
  image(savePic, 80, 400, 50, 50);  image(trashPic,180,398,50,50);

  //set to draw tree

  if (mouseIsPressed == true && mouseX > 0 && mouseX < 130 && mouseY > 180 && mouseY < 200) {
    forestGame = treePic;
  }

  //set to draw pixie

  if (mouseIsPressed == true && mouseX > 0 && mouseX < 130 && mouseY > 60 && mouseY < 80) {
    forestGame = pixPic;
  }

  //set to draw sparkles

  if (mouseIsPressed == true && mouseX > 0 && mouseX < 130 && mouseY > 258 && mouseY < 375) {
    forestGame = sprkPic;
  }

  if (mouseIsPressed == true) {
    image(forestGame, c, mouseY, 100, 100);
  }


}


//clear button
function mousePressed(){
  if (mouseIsPressed== true && mouseX > 170 && mouseX<190 && mouseY > 375 && mouseY<475){ background(230, 230, 250)}
  






//draw save button 
   
  if (mouseIsPressed == true && mouseX > 0 && mouseX < 90 && mouseY > 325 && mouseY < 450) {
    saveCanvas("pixieDrawing", "jpg");

  }



}