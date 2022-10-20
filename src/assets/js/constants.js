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

var roomFurnitures = {
  1: [
    { type: "tapeDrive", l: 23, b: 8 },
    { type: "tapeDrive", l: 26, b: 8 },
    { type: "tapeDrive", l: 29, b: 8 },
    { type: "computer", l: 32, b: 8 },
    { type: "desk", l: 23, b: 14 },
    { type: "typewriter", l: 31, b: 14 },
  ],
  2: [
    { type: "typewriter", l: 2, b: 11 },
    { type: "typewriter", l: 34, b: 23 },
  ],
  3: [
    { type: "cupboard", l: 32, b: 5 },
    { type: "fridge", l: 34, b: 11 },
    { type: "desk", l: 32, b: 17 },
  ],
  4: [],
  5: [
    { type: "desk", l: 14, b: 11 },
    { type: "candy", l: 22, b: 11 },
  ],
  6: [
    { type: "chest", l: 4, b: 17 },
    { type: "bin", l: 30, b: 17 },
    { type: "basin", l: 31, b: 17 },
    { type: "bath", l: 1, b: 23 },
    { type: "bin", l: 35, b: 23 },
    { type: "toilet", l: 36, b: 23 },
  ],
  7: [
    { type: "loudspeaker", l: 8, b: 5 },
    { type: "stereoSystem", l: 13, b: 5 },
    { type: "sofa", l: 19, b: 11 },
    { type: "lamp", l: 25, b: 11 },
    { type: "loudspeaker", l: 37, b: 11 },
  ],
  8: [
    { type: "desk", l: 5, b: 11 },
    { type: "typewriter", l: 13, b: 11 },
    { type: "tapeDrive", l: 35, b: 17 },
    { type: "jukebox", l: 2, b: 23 },
    { type: "piano", l: 26, b: 23 },
  ],
  9: [
    { type: "loudspeaker", l: 2, b: 5 },
    { type: "stereoSystem", l: 9, b: 5 },
    { type: "loudspeaker", l: 17, b: 5 },
    { type: "bookcase", l: 35, b: 11 },
    { type: "bookcase", l: 6, b: 17 },
    { type: "desk", l: 30, b: 23 },
  ],
  10: [
    { type: "tapeDrive", l: 7, b: 11 },
    { type: "typewriter", l: 31, b: 11 },
    { type: "piano", l: 7, b: 17 },
    { type: "desk", l: 9, b: 23 },
  ],
  11: [
    { type: "cupboard", l: 6, b: 5 },
    { type: "fridge", l: 13, b: 5 },
    { type: "candy", l: 24, b: 5 },
  ],
  12: [
    { type: "desk", l: 17, b: 5 },
    { type: "computer", l: 25, b: 5 },
    { type: "piano", l: 5, b: 11 },
    { type: "jukebox", l: 30, b: 11 },
    { type: "tapeDrive", l: 14, b: 17 },
    { type: "tapeDrive", l: 17, b: 17 },
    { type: "candy", l: 19, b: 23 },
  ],
  13: [
    { type: "bed", l: 28, b: 11 },
    { type: "chest", l: 6, b: 17 },
    { type: "candy", l: 2, b: 23 },
  ],
  14: [
    { type: "typewriter", l: 2, b: 5 },
    { type: "tapeDrive", l: 30, b: 5 },
    { type: "piano", l: 15, b: 8 },
  ],
  15: [
    { type: "piano", l: 19, b: 11 },
    { type: "computer", l: 25, b: 11 },
    { type: "typewriter", l: 16, b: 17 },
    { type: "jukebox", l: 30, b: 17 },
    { type: "jukebox", l: 33, b: 17 },
  ],
  16: [
    { type: "bed", l: 27, b: 3 },
    { type: "chest", l: 30, b: 13 },
    { type: "fireplace", l: 21, b: 18 },
  ],
  17: [
    { type: "bookcase", l: 26, b: 11 },
    { type: "bookcase", l: 17, b: 17 },
    { type: "chairWithLamp", l: 22, b: 17 },
    { type: "bookcase", l: 11, b: 23 },
  ],
  18: [
    { type: "bath", l: 1, b: 23 },
    { type: "basin", l: 17, b: 23 },
    { type: "bin", l: 21, b: 23 },
    { type: "toilet", l: 36, b: 23 },
  ],
  19: [
    { type: "jukebox", l: 5, b: 3 },
    { type: "tapeDrive", l: 36, b: 5 },
    { type: "piano", l: 30, b: 11 },
    { type: "desk", l: 26, b: 23 },
  ],
  20: [
    { type: "bed", l: 8, b: 11 },
    { type: "chest", l: 10, b: 17 },
    { type: "exit", l: 9, b: 23 },
  ],
  21: [
    { type: "desk", l: 25, b: 17 },
    { type: "computer", l: 33, b: 17 },
    { type: "piano", l: 14, b: 23 },
    { type: "typewriter", l: 20, b: 23 },
    { type: "typewriter", l: 24, b: 23 },
    { type: "typewriter", l: 28, b: 23 },
  ],
  22: [
    { type: "tapeDrive", l: 30, b: 5 },
    { type: "tapeDrive", l: 30, b: 11 },
    { type: "tapeDrive", l: 6, b: 12 },
    { type: "tapeDrive", l: 30, b: 16 },
    { type: "tapeDrive", l: 6, b: 17 },
  ],
  23: [
    { type: "sofa", l: 11, b: 23 },
    { type: "fireplace", l: 18, b: 23 },
    { type: "chairWithLamp", l: 28, b: 23 },
  ],
  24: [
    { type: "fireplace", l: 15, b: 5 },
    { type: "chairWithLamp", l: 25, b: 5 },
  ],
  25: [
    { type: "chairWithLamp", l: 32, b: 5 },
    { type: "desk", l: 12, b: 11 },
    { type: "bookcase", l: 25, b: 11 },
  ],
  26: [
    { type: "jukebox", l: 2, b: 11 },
    { type: "jukebox", l: 2, b: 17 },
    { type: "jukebox", l: 2, b: 23 },
    { type: "jukebox", l: 13, b: 11 },
    { type: "jukebox", l: 13, b: 17 },
    { type: "jukebox", l: 13, b: 23 },
    { type: "jukebox", l: 25, b: 11 },
    { type: "jukebox", l: 25, b: 17 },
    { type: "jukebox", l: 25, b: 23 },
  ],
  27: [
    { type: "bookcase", l: 3, b: 4 },
    { type: "chest", l: 19, b: 6 },
    { type: "bed", l: 30, b: 8 },
    { type: "lamp", l: 36, b: 8 },
    { type: "bookcase", l: 29, b: 14 },
  ],
  28: [
    { type: "tapeDrive", l: 29, b: 20 },
    { type: "tapeDrive", l: 32, b: 20 },
    { type: "tapeDrive", l: 35, b: 20 },
    { type: "typewriter", l: 4, b: 23 },
  ],
  29: [
    { type: "candy", l: 2, b: 4 },
    { type: "piano", l: 31, b: 5 },
    { type: "tapeDrive", l: 28, b: 11 },
    { type: "tapeDrive", l: 31, b: 11 },
    { type: "jukebox", l: 34, b: 11 },
    { type: "desk", l: 25, b: 17 },
    { type: "computer", l: 32, b: 17 },
  ],
  30: [
    { type: "desk", l: 10, b: 12 },
    { type: "bookcase", l: 11, b: 18 },
    { type: "bookcase", l: 24, b: 18 },
    { type: "sofa", l: 12, b: 23 },
    { type: "chairWithLamp", l: 23, b: 23 },
  ],
  31: [],
  32: [],
};

/*
	Furniture properties:
	x, y: coordinates;
	w, h: dimensions;
	s: search time (in pixels)
	r: colors need to replace by room
*/

var furnitureProperties = {
  tapeDrive: {
    x: 0,
    y: 544,
    w: 22,
    h: 28,
    s: 22,
    r: { 12: { 14: 10 }, 19: { 14: 8 }, 22: { 14: 8 }, 29: { 14: 10 } },
  },
  desk: {
    x: 22,
    y: 544,
    w: 56,
    h: 24,
    s: 64,
    r: {
      3: { 1: 7, 14: 12 },
      9: { 1: 15, 14: 9 },
      12: { 14: 10 },
      19: { 14: 8 },
      21: { 14: 15 },
      29: { 14: 10 },
      30: { 1: 13 },
    },
  },
  computer: { x: 78, y: 544, w: 16, h: 22, s: 20, r: {} },
  typewriter: {
    x: 94,
    y: 544,
    w: 24,
    h: 20,
    s: 22,
    r: { 2: { 14: 8 }, 21: { 14: 15 } },
  },
  bin: { x: 94, y: 564, w: 6, h: 7, s: 15, r: { 18: { 8: 14 } } },
  cupboard: { x: 118, y: 544, w: 46, h: 24, s: 62, r: { 11: { 7: 1 } } },
  bed: { x: 116, y: 568, w: 48, h: 11, s: 36, r: { 16: { 9: 2 } } },
  fridge: { x: 164, y: 544, w: 24, h: 32, s: 50, r: { 11: { 7: 1 } } },
  candy: {
    x: 188,
    y: 544,
    w: 32,
    h: 31,
    s: 26,
    r: { 5: { 10: 14 }, 11: { 10: 12 }, 13: { 10: 9 } },
  },
  chest: {
    x: 220,
    y: 544,
    w: 20,
    h: 21,
    s: 47,
    r: { 6: { 9: 10, 1: 8 }, 16: { 1: 15, 9: 2 }, 27: { 1: 15 } },
  },
  basin: { x: 240, y: 544, w: 30, h: 32, s: 36, r: { 18: { 8: 14, 10: 12 } } },
  bath: { x: 270, y: 544, w: 48, h: 32, s: 8, r: { 18: { 8: 14, 10: 12 } } },
  toilet: { x: 318, y: 544, w: 24, h: 16, s: 15, r: { 18: { 8: 14, 10: 12 } } },
  loudspeaker: { x: 318, y: 560, w: 14, h: 16, s: 8, r: {} },
  stereoSystem: { x: 342, y: 544, w: 15, h: 20, s: 15, r: {} },
  sofa: {
    x: 332,
    y: 565,
    w: 42,
    h: 16,
    s: 40,
    r: { 7: { 12: 15 }, 23: { 14: 2 }, 30: { 12: 13 } },
  },
  jukebox: {
    x: 357,
    y: 544,
    w: 16,
    h: 21,
    s: 15,
    r: { 12: { 14: 10 }, 19: { 14: 8 }, 26: { 14: 5, 1: 13 }, 29: { 14: 10 } },
  },
  lamp: { x: 373, y: 544, w: 15, h: 21, s: 8, r: {} },
  piano: {
    x: 388,
    y: 544,
    w: 40,
    h: 30,
    s: 8,
    r: { 12: { 14: 10 }, 19: { 14: 8 }, 21: { 14: 15 }, 29: { 14: 10 } },
  },
  bookcase: {
    x: 428,
    y: 544,
    w: 24,
    h: 37,
    s: 64,
    r: { 17: { 15: 14 }, 25: { 9: 14, 12: 1 }, 30: { 9: 14, 15: 13 } },
  },
  exit: { x: 452, y: 544, w: 44, h: 39, s: 0, r: {} },
  fireplace: { x: 496, y: 544, w: 70, h: 28, s: 55, r: { 16: { 12: 15 } } },
  chairWithLamp: {
    x: 566,
    y: 544,
    w: 22,
    h: 32,
    s: 26,
    r: { 17: { 12: 14 }, 25: { 12: 1 }, 30: { 12: 13 } },
  },
};
