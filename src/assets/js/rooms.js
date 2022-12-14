function Room(roomNumber) {
  this.roomNumber = roomNumber; // id number (1-32)
  this.y = 1; // elevator level (1-6)
  this.elevatorLeft = 0; // left side elevator number (1-8 or 0 if not)
  this.elevatorRight = 0; // right side elevator number (1-8 or 0 if not)
  this.furnitures = []; // array of oFurniture objects

  this.init = function () {
    console.log("[DEBUG] Init Room");

    // Rooms are part of levels and will have
    // elevator connections.
    for (var i = 0; i < 9; i++) {
      var r = game.map.rooms[i];
      var level = r.indexOf(this.roomNumber);

      if (level !== -1) {
        this.y = level;

        if (hasLeftDoor(this.roomNumber)) {
          this.elevatorLeft = i;
        }

        if (hasRightDoor(this.roomNumber)) {
          this.elevatorRight = i + 1;
        }

        break;
      }
    }

    // Set the room furniture.
    for (var j = 0; j < roomFurnitures[this.roomNumber].length; j++) {
      var f = roomFurnitures[this.roomNumber][j];
      this.furnitures[j] = new Furniture(this.roomNumber, f.type, f.l, f.b);
      this.furnitures[j].init();
    }
  };
}
