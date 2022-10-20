function rnd(rndLimit) {
  return Math.floor(Math.random() * rndLimit) + 1;
}

function hasLeftDoor(roomId) {
  if (roomDoors[roomId].indexOf(1) !== -1) {
    return 1;
  } else if (roomDoors[roomId].indexOf(4) !== -1) {
    return 4;
  }

  return false;
}

function hasRightDoor(roomId) {
  if (roomDoors[roomId].indexOf(2) !== -1) {
    return 2;
  } else if (roomDoors[roomId].indexOf(3) !== -1) {
    return 3;
  }

  return false;
}

var maps = [
  // 0
  {
    rooms: {
      0: [27, 0, 28, 10, 0, 11],
      1: [25, 18, 13, 29, 30, 0],
      2: [20, 2, 0, 0, 0, 0],
      3: [0, 0, 5, 14, 0, 0],
      4: [3, 4, 26, 21, 12, 6],
      5: [16, 19, 32, 0, 22, 7],
      6: [8, 0, 1, 23, 0, 24],
      7: [9, 0, 15, 0, 0, 17],
      8: [0, 0, 0, 0, 0, 31],
    },
  },
];

var roomDoors = [
  [0],
  [3],
  [2, 4],
  [1, 3],
  [1, 2],
  [2, 4],
  [1],
  [2, 4],
  [1, 2],
  [2, 4],
  [2],
  [3],
  [4],
  [1, 3],
  [3, 4],
  [1, 2],
  [3, 4],
  [1, 3],
  [2],
  [4],
  [1, 2],
  [1],
  [1, 3],
  [1],
  [3, 4],
  [4],
  [1],
  [3],
  [2],
  [3, 4],
  [2],
  [4],
  [3],
];
