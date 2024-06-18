function Obstacle() {
    this.posX;
    this.posY;
    this.h_v;
    this.direction;
    this.speed = 5;
    this.dessiner = function() {
        fill('red');
        circle(this.posX, this.posY, 6);
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
}