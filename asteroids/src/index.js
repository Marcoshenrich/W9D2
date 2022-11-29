import Game from "./game";

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

let canvas = document.getElementById("game-canvas")
// const ctx = can.getContext("2d")

const mo = new MovingObject({
    pos: [60, 60],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
})

const g = new Game(canvas, mo);
g.animate();
