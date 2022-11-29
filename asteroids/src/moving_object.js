
class MovingObject {
    constructor(moHash) {
    this.pos = moHash.pos
    this.vel = moHash.vel
    this.radius = moHash.radius
    this.color = moHash.color
    }
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        100,
        35,
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}





module.exports = MovingObject;