function Game() {
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
