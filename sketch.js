var posX = 300;
var posY = 300;
var posObstacleX = 100;
var posObstacleY = 100;
var speed = 5;
var direction = 1;
var rayonPlayer = 13;
var rayonObstacle = 3;
var minimalDistance;
var d;
var s;
var puntos;
var lose = false;

function setup(){
    createCanvas(640, 480);
}

function draw(){
    background(220);
    updatePositionCercle();
    testOutOfScreen();
    fill('white');
    testCollision();
    
    circle(posX, posY, rayonPlayer * 2);
    score();
    fill('red');
    //obstacleMoveHorizontal();
    obstacleMoveVerical();
    circle(posObstacleX, posObstacleY, rayonObstacle * 2);

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

function obstacleMoveHorizontal() {
  
    if(posObstacleX <= 3) {
        direction = 1;
    } 
    if (posObstacleX >= 637) {
        direction = -1;
    }

    posObstacleX = posObstacleX + direction * speed;
}

function obstacleMoveVerical() {
  
    if(posObstacleY <= 3) {
        direction = 1;
    } 
    if (posObstacleY >= 477) {
        direction = -1;
    }

    posObstacleY = posObstacleY + direction * speed;
}

// ressources
// https://p5js.org/examples/motion-circle-collision.html
function testCollision() {
    minimalDistance = rayonPlayer - rayonObstacle;
    d = dist(posObstacleX,posObstacleY, posX, posY) ;
    if (d <= minimalDistance) {
        fill('red');
        lose = true;
    }
    
}

function score() {
    s = millis()/ 1000;
    fill('red');
    if(!lose) {
        
        puntos = s;
        text(`${round(s)}`,320, 420,80);
    } 
    if (lose) {
        text(`Score: ${round(puntos)}`, 320, 250, 70);
    }
}