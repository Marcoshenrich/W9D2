
class MovingObject {
    constructor(moHash) {
    this.pos = moHash.pos
    this.vel = moHash.vel
    this.radius = moHash.radius
    this.color = moHash.color
    }
}

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
})

module.exports = MovingObject;