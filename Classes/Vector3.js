module.exports = class Vector3 {
    constructor(x = 0.0, y = 0.0, z = 0.0){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    Normalized() {
        var mag = this.Magnitude();
        return new Vector3(this.x / mag, this.y / mag, this.z / mag);
    }

    Distance(otherVect = Vector3){
        var direction = new Vector3();
        direction.x = otherVect.x - this.x;
        direction.y = otherVect.y - this.y;
        direction.z = otherVect.z - this.z;

        return direction.Magnitude();
    }

    ConsoleOutput() {
        return '(' + this.x + ',' + this.y + ',' + this.z + ')';
    }
}
