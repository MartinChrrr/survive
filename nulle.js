var listObstacles = [];
var time;
var player;
var obstacle1;
var minimalDistance;
var d;
var s;
var puntos;
var lose = false;
var i = 1;

function setup(){
    createCanvas(640, 480);
    player = new Player();
  obstacle1 = new Obstacle();
  listObstacles.push(obstacle1);
  
}
function draw() {
    background(220);
    for(let i = 0; i < listObstacles.length; i++) {
        testCollision(listObstacles[i]);
        listObstacles[i].Display();
    }
    player.Display();
    //obstacle1.Display();
    //score();
    if(i % 60 == 0) {
        let obstacle = new Obstacle();
        listObstacles.push(obstacle);
    }
    score();
    i++;
    if(lose) {
        noLoop();
    }
}

function testCollision(ob) {
    //Prend en paramètre un objet obstacle.
    minimalDistance = player.rayon + ob.rayon;
    d = dist(player.posX,player.posY, ob.posX, ob.posY) ; //check coordonées de l'obstacle en paramètre par rapport au player
    if (d <= minimalDistance) {
        fill('red');
        lose = true;
    }
    
}

function score() {
    //affiche le temps ou le score si perdu
    s = millis()/ 1000;
    fill('red');
    if(!lose) {
        
        puntos = s;
        text(`${round(s)}`,320, 420,80);
      
    } 
    if (lose) {
        textAlign(CENTER, CENTER);
        textSize(25);
        text(`Score: ${round(puntos)}`, 320, 240);
    }
}

class Obstacle {
    constructor (){
        this.posX = random(5, 630);
        this.posY = random(5, 450);
        this.h_v = round(random(0,1));
        this.direction = 1;
        this.rayon = 3;


    }


    Display() {
        //fonction display appelée dans le draw
        fill('red');
        this.HOrV(this.h_v);
        circle(this.posX, this.posY, this.rayon * 2);
    }
    HOrV(int) {
        // check si l'obstacle va verticalement ou horizontalement et appelle la fonction du mouvement
        if(int == 0) {
            this.obstacleMoveHorizontal();
        }
        if(int== 1 ) {
            this.obstacleMoveVerical();
        }
    }
    obstacleMoveVerical() {
        //mouvement vertical de l'obstacle
        console.log("test");
        if(this.posY <= 3) {
            this.direction = 1;
        } 
        if (this.posY >= 477) {
            this.direction = -1;
        }
    
        this.posY += this.direction * 5;
    }

    obstacleMoveHorizontal() {
        //mouvement horizontal de l'obstacle
        console.log("test");
        if(this.posX <= 3) {
            this.direction = 1;
        } 
        if (this.posX >= 637) {
            this.direction = -1;
        }
    
        this.posX += this.direction * 5;
    }
}


class Player {

  constructor() {
    this.posX = 320;
    this.posY = 240;
    this.rayon = 25;

  }

    TestOutOfScreen() {
        //check si le player est dans les limites du canvas et renvoi un feedback rouge s'il touche une paroi
        if(this.posX <= 25) {
            this.posX = 25;
            fill('red');
            stroke('red');
            strokeWeight(5);
            line(0,0,0, 480);
            stroke(0);
            strokeWeight(1);   
        }
        if (this.posX >= 615) {
            fill('red');
            this.posX= 615;
            stroke('red');
            strokeWeight(5);
            line(640,0,640, 480);
            stroke(0);
            strokeWeight(1);
        }
        if(this.posY <= 25) {
            fill('red');
            this.posY = 25;
            stroke('red');
            strokeWeight(5);
            line(0,0,640, 0);
            stroke(0);
            strokeWeight(1);
        }
        if (this.posY >= 455) {
            fill('red');
            this.posY= 455;
            stroke('red');
            strokeWeight(5);
            line(0,480,640, 480);
            stroke(0);
            strokeWeight(1);
        }
    }

    UpdatePositionCercle() {
        //Gère les inputs pour le déplacement du cercle
        if(keyIsDown(DOWN_ARROW)) {
            this.posY += 5;
        }
        if(keyIsDown(UP_ARROW)) {
            this.posY -= 5;
        }
        if(keyIsDown(LEFT_ARROW)) {
            this.posX -= 5;
        }
        if(keyIsDown(RIGHT_ARROW)) {
            this.posX += 5;
        }
    }

    Display() {
       
        fill("white");
        this.UpdatePositionCercle();
        this.TestOutOfScreen();
        if(lose) {
            fill('red');
        }
        circle(this.posX, this.posY, this.rayon * 2);
    }
}
