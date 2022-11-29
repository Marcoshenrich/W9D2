import Game from "./game";
import Util from "./utils";

let canvas = document.getElementById("game-canvas")

// Util.inherits(Asteroid, MovingObject)
const g = new Game(canvas);
g.animate();





// const ctx = can.getContext("2d")

// const mo = new MovingObject({
//     pos: [60, 60],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// })
