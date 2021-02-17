var ServerObject = require('./ServerObject.js');
var Vector3 = require('./Vector3.js');

module.exports = class Bullet extends ServerObject {
    constructor() {
        super();
        this.direccion = new Vector3();
        this.speed = 0.5;
        this.isDestroyed = false;
        this.activator = '';
    }

    onUpdate() {

        let x = Number(this.position.x) + Number(this.direccion.x * this.speed);
        let y = Number(this.position.y) + Number(this.direccion.y * this.speed);
        let z = Number(this.position.z) + Number(this.direccion.z * this.speed);

        this.position.x = String(x);
        this.position.y = String(y);
        this.position.z = String(z);

        return this.isDestroyed;
    }
}