function Furniture(roomId, type, l, b) {
  this.roomId = roomId; // which room is the furniture in
  this.type = type; // furniture type (e.g. bookcase, toilet, fireplace)
  this.l = l; // left coordinate (0-39)
  this.b = b; // bottom coordinate (0-24)

  this.init = function () {
    var fp = furnitureProperties[this.type];
    this.searchTime = fp.s; // search time in pixels
  };
}
