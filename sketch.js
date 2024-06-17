var posX = 300;
var posY = 300;

function setup(){
    createCanvas(640, 480);
}

function draw(){
    background(220);
    updatePositionCercle();
    testOutOfScreen();
    circle(posX, posY, 25);
}

function updatePositionCercle() {
    if(keyIsDown(DOWN_ARROW)) {
        posY += 5;
    }
    if(keyIsDown(UP_ARROW)) {
        posY -= 5;
    }
    if(keyIsDown(LEFT_ARROW)) {
        posX -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        posX += 5;
    }
}

function testOutOfScreen() {
    if(posX <= 25) {
        posX = 25;
        stroke('red');
        strokeWeight(10);
    }
    if (posX >= 615) {
        posX= 615;
    }
    if(posY <= 25) {
        posY = 25;
    }
    if (posY >= 455) {
        posY= 455;
    }
}
