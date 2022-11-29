import MovingObject from "./moving_object";

class Asteroid extends MovingObject {
    constructor(moHash) {
        super(moHash)
        //pass in rand vel
        // pass ranom pos

        this.color = "blue"
        this.radius = 10

    }

}

export default Asteroid;



// let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]
// let vel = [Math.floor((Math.random() * 60) - 30), Math.floor((Math.random() * 60) - 30)]
// moHash["vel"] = vel
// moHash["pos"] = pos