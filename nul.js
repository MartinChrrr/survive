function Obstacle() {
    this.posX = random(5, 630);
    this.posY = random(5, 450);
    this.h_v = random(0,1);
    this.direction = 1;
    this.speed = 5;
    this.rayon = 3;
    this.touche = false;
    let d;
    let minimalDistance;

    this.dessiner = function() {
        fill('red');
        circle(this.posX, this.posY, this.rayon * 2);
    }
    this.HOrV = function(int) {
        if(int == 0) {
            this.obstacleMoveHorizontal(this.posY);
        }
        if(int== 1 ) {
            this.obstacleMoveVerical(this.posX);
        }
    }
    this.obstacleMoveVerical = function(posObstacleY) {
  
        if(posObstacleY <= 3) {
            this.direction = 1;
        } 
        if (posObstacleY >= 477) {
            this.direction = -1;
        }
    
        posObstacleY = posObstacleY + direction * speed;
    }

    this.obstacleMoveHorizontal = function(posObstacleX) {
  
        if(posObstacleX <= 3) {
            this.direction = 1;
        } 
        if (posObstacleX >= 637) {
            this.direction = -1;
        }
    
        posObstacleX = posObstacleX + this.direction * this.speed;
    }

    this.checkCollision = function(other){
        minimalDistance = this.rayon + other.rayon;
        d = dist(this.posX, this.posY, other.posX, other.posY);
        if(d <= minimalDistance) {
            this.touche = true;
        }
    }
}

function Player() {
    this.posX = 320;
    this.posY = 240;
    this.rayon = 25;
    this.points;
    this.s;
    this.lose = false;

    this.testOutOfScreen = function() {
        if(this.posX <= 25) {
            this.posX = 25;
            stroke('red');
            strokeWeight(10);
        }
        if (this.posX >= 615) {
            this.posX= 615;
        }
        if(this.posY <= 25) {
            this.posY = 25;
        }
        if (this.posY >= 455) {
            this.posY= 455;
        }
    }

    this.updatePositionCercle = function() {
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

    this.score = function() {
        this.s = millis()/ 1000;
        fill('red');
        if(!this.lose) {
            
            puntos = s;
            text(`${round(s)}`,320, 420,80);
        } 
        if (this.lose) {
            text(`Score: ${round(this.points)}`, 320, 250, 70);
        }
    }

    this.checkLoose = function (list) {
        for (let i = 0; i <= list.length; i++) {
            if(list[i].touche) {
                this.lose = true;
            }
        }
    }
}