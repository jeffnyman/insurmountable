function Game() {
  this.mapId = maps.length - 1; // there are 8 different layouts (and passwords)
  this.map = maps[this.mapId]; // elevator system and rooms

  this.generateNewGame = function () {
    this.generateRooms();
  };

  this.generateRooms = function () {
    this.rooms = {};

    for (var i = 1; i <= 32; i++) {
      this.rooms[i] = new Room(i);
      this.rooms[i].init();
    }
  };
}
