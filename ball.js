class Ball{
    constructor(x, y, width, height, speed){
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = "white";
        this.direction = 90 * 3.1416 / 180;
    }
    move(){
        this.x += Math.cos(this.direction) * this.speed;
        this.y -= Math.sin(this.direction) * this.speed;
        this.checkCollision();
    }
    draw () {
        createRect(this.x, this.y, this.width, this.height, "white")
    }
    checkCollision = () => {
        if (ball.x < 5){
            ball.x = 5;
            ball.direction = 3.1416 - ball.direction;
        } else if (ball.x > 485){
            ball.x = 485;
            ball.direction = 3.1416 - ball.direction;
        } else if (ball.y > 485){
            //lost ball
            lives --;
            ball.x = 250;
            ball.y = 460;
            breaker.x = 210;
            active = false;
        } else if (ball.y < 5){
            ball.y = 5;
            ball.direction = 2 * 3.1416- ball.direction;
        }
        if (ball.y >= 460 && ball.y <= 480 && ball.x > breaker.x && ball.x < breaker.x + breaker.width){
            ball.direction = (((ball.x + ball.width / 2) - (breaker.x + breaker.width / 2)  - 50) / -30);
        }
    }
    increaseSpeed = () =>{
        if (this.speed < 15){
            this.speed+= .05;
        }
    }
}