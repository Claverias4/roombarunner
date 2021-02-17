var shortID = require('shortid');
var Vector3 = require('./Vector3.js');

module.exports = class Player {
    constructor() {
        this.username = 'Default_Player';
        this.id = shortID.generate();
        this.lobby = 0;
        this.position = new Vector3();
        this.rotation = new Number(0);
        this.barrelRotation = new Number(0);
        this.health = new Number(2);
        this.isDead = false;
        this.respawnTicket = Number(0);
        this.respawnTime = Number(0);
    }

    displayerPlayerInformation() {
        let player = this;
        return '(' + player.username + ':' + player.id + ')';
    }

    respawnCounter() {
        this.respawnTicket = this.respawnTicket + 1;

        if (this.respawnTicket >= 10) {
            this.respawnTicket = new Number(0);
            this.respawnTime = this.respawnTime + 1;

            // Three seconds to respond time
            if (this.respawnTime >= 3) {
                console.log('Respawning player id: ' + this.id);
                this.isDead = false;
                this.respawnTicket = new Number(0);
                this.respawnTime = new Number(0);
                this.health = new Number(2);
                this.position = new Vector3(0,0,0);   // Here the position to respawn

                return true;
            }

            return false;
        }
        
    }

    dealDamage(amount = Number) {
        // Adjust healt when player getting damage
        this.health = this.health - amount;

        // Check if is dead
        if (this.health <= 0) {
            this.isDead = true;
            this.respawnTicket = new Number(0);
            this.respawnTime = new Number(0);
        }

        return this.isDead;
    }
}