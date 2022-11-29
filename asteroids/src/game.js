import Asteroid from "./asteroid";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.registerEvents();
        // this.restart();
        this.asteroids = this.asteroidPrinter()
    }

    play(){
        for (let i = 0; i < this.asteroids.length; i++) {
            let asteroid = this.asteroids[i]
            if (asteroid.pos[0] > this.canvas.width){
                asteroid.pos[0] = 0
            }
            if (asteroid.pos[1] > this.canvas.height){
                asteroid.pos[1] = 0
            }
            asteroid.draw(this.ctx)
            asteroid.move(this.ctx)
        }
    }

    asteroidPrinter() {
        let astArr = []
        let colorarr = ["lightsalmon", "magenta", "cyan", "chrimson", "papayawhip", "lightgreen", "hotpink", "aqua"]


        for (let i = 0; i < 10000; i++) {
            let color = colorarr[Math.floor(Math.random() * 7)]
            let moHash = {}
            let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]
            let vel = [Math.floor((Math.random() * 20) - 10), Math.floor((Math.random() * 20) - 10)]
            moHash["vel"] = vel
            moHash["pos"] = pos
            moHash["color"] = color
            astArr.push(new Asteroid(moHash))
        }
        return astArr
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.play()
        requestAnimationFrame(this.animate.bind(this))
    }
}

export default Game;
