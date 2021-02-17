module.exports = class Connection {
    constructor() {
        this.socket;
        this.player;
        this.server;
        this.lobby;
    }

    // Handles all out io events and where we should route them too to be handled
    createEvents() {
        let connection = this;
        let socket = connection.socket;
        let server = connection.server;
        let player = connection.player;

        socket.on('disconnect', function () {
            server.onDisconnected(connection);
        });

        socket.on('joinGame', function () {
            server.onAttemptToJoinGame(connection);
        });

        socket.on('fireBullet', function (data) {
            connection.lobby.onFireBullet(connection, data);
        });

        socket.on('collisionDestroy', function (data) {
            connection.lobby.onCollisionDestroy(connection, data);
        });

        socket.on('updatePosition', function (data) {
            player.position.x = String(data.position.x);
            player.position.y = String(data.position.y);
            player.position.z = String(data.position.z);

            socket.broadcast.to(connection.lobby.id).emit('updatePosition', player);
        });

        socket.on('updateRotation', function (data) {
            player.rotation = String(data.rotation);
            player.barrelRotation = String(data.barrelRotation);
    
            socket.broadcast.to(connection.lobby.id).emit('updateRotation', player);
        });
    }
}