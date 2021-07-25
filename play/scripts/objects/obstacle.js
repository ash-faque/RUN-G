// OBSTACLE CLASS
class Obstacle {
    constructor (x, y, w, h, vx, vy){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = vx
        this.vy = vy
    };
    draw = () => {
        c.drawImage(ASSETS.poison.image, this.x, (this.y - this.h), this.w, this.h)
    };
    update = () => {
        this.x -= this.vx
        this.draw()
    };
    doCollide = () => {
        return ((RUNG.x + RUNG.w) > this.x &&
                RUNG.x < (this.x + this.w) &&
                (RUNG.y + RUNG.h) > this.y &&
                RUNG.y < (this.y + this.h))
    }
};

// GENERATE OBSTECLE
const obstacleGen = () => {
    if ((STEP % 400) === 0) OBSTECLES.push(new Obstacle(cw + 100, ch - GROUND.h, 40, 40, 5, 0))
};