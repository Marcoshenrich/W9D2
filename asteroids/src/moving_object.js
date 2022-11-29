
class MovingObject {
    constructor(moHash) {
    this.pos = moHash.pos
    this.vel = moHash.vel
    this.radius = moHash.radius
    this.color = moHash.color
    }
}

MovingObject.prototype.move = function(ctx){
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}

module.exports = MovingObject;
