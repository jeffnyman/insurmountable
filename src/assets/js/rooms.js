function Room(roomNumber) {
  this.roomNumber = roomNumber; // id number (1-32)

  this.init = function () {
    console.log("[DEBUG] Init Room");
  };
}
