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
var h_v;

var socket;

function setup(){
    createCanvas(640, 480);
    h_v = round(random(0,2));

    socket = io.connect('http://localhost:3000');
}

function draw(){
    background(220);
    
    testCollision();
    score();

    fill('white');
    updatePositionCercle();
    testOutOfScreen();
   
    circle(posX, posY, rayonPlayer * 2);
    
    fill('red');
    if(h_v == 1) {
        obstacleMoveHorizontal();
    } else {
        obstacleMoveVerical();
    }
    
    
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
        fill('red');
        stroke('red');
        strokeWeight(5);
        line(0,0,0, 480);
        noStroke();
        
    }
    if (posX >= 615) {
        fill('red');
        posX= 615;
        stroke('red');
        strokeWeight(5);
        line(640,0,640, 480);
        noStroke();
    }
    if(posY <= 25) {
        fill('red');
        posY = 25;
        stroke('red');
        strokeWeight(5);
        line(0,0,640, 0);
        noStroke();
    }
    if (posY >= 455) {
        fill('red');
        posY= 455;
        stroke('red');
        strokeWeight(5);
        line(0,480,640, 480);
        noStroke();
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
    minimalDistance = rayonPlayer + rayonObstacle;
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