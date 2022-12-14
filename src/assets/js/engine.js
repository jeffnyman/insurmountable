function Engine() {
  this.init = function () {
    console.log("[DEBUG] Engine Started");

    engine.validateCapabilities(function () {
      engine.generateNewGame(function () {
        engine.initEngine();
      });
    });
  };

  this.generateNewGame = function (done) {
    game = new Game();
    game.generateNewGame();

    done();
  };

  this.initEngine = function () {
    console.log("[DEBUG] Initialize Engine");

    this.viewport = $("#viewport").first();
    this.canvas = document.getElementById("viewport").getContext("2d");

    this.scanInterval = false;
    this.scanFrameCounter = 0;

    window.animFrame = window.requestAnimationFrame;

    this.animation();
    this.startScan();
  };

  this.animation = function () {
    console.log("[DEBUG] Animation");
  };

  this.startScan = function () {
    console.log("[DEBUG] Start Scan");

    this.scanInterval = setInterval(function () {
      engine.scanRoutine();
    }, 27);
  };

  this.scanRoutine = function () {
    this.scanFrameCounter++;
  };

  this.validateCapabilities = function (good, bad) {
    console.log("[DEBUG] Validating Requirements");

    var allGood = true;

    var c = document.createElement("canvas");
    if (!(c.getContext && c.getContext("2d"))) {
      allGood = false;
    }

    if (!window.requestAnimationFrame) {
      allGood = false;
    }

    if (!allGood) {
      console.log("[ERROR] Capabilities not validated.");
      bad();
    } else {
      good();
    }
  };
}

engine = new Engine();

$(document).ready(function () {
  engine.init();
});
