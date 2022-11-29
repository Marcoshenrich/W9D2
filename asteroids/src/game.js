export default class Asteroids {
    constructor(canvas, mo) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.registerEvents();
        // this.restart();
        this.mo = mo;
    }
    play(){
        this.mo.draw(this.ctx)
        this.mo.move(this.ctx)
    }
    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.play()
        requestAnimationFrame(this.animate.bind(this))
    }
}
