function Room(roomNumber) {
  this.roomNumber = roomNumber; // id number (1-32)
  this.y = 1; // elevator level (1-6)

  this.init = function () {
    console.log("[DEBUG] Init Room");
    // Rooms are part of levels and will have
    // elevator connections.
    for (var i = 0; i < 9; i++) {
      var r = game.map.rooms[i];
      var level = r.indexOf(this.roomNumber);

      if (level !== -1) {
        this.y = level;
        break;
      }
    }
  };
}
