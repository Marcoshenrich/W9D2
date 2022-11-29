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
            asteroid.draw(this.ctx)
            asteroid.move(this.ctx)
        }
    }

    asteroidPrinter() {
        let astArr = []
        
        
        for (let i = 0; i < 5; i++) {
            let moHash = {}
            let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]
            let vel = [Math.floor((Math.random() * 60) - 30), Math.floor((Math.random() * 60) - 30)]
            moHash["vel"] = vel
            moHash["pos"] = pos
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
