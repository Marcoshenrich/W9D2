const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

let can = document.getElementById("game-canvas")
console.log(can)
const ctx = can.getContext("2d")

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
})

mo.draw(ctx)
