function gameEngine() {
  this.init = function () {
    console.log("[DEBUG] Engine Started");

    engine.validateCapabilities(function () {
      engine.initEngine();
    });
  };

  this.initEngine = function () {
    console.log("[DEBUG] Initialize Engine");

    this.viewport = $("#viewport").first();
    this.canvas = document.getElementById("viewport").getContext("2d");

    window.animFrame = window.requestAnimationFrame;

    this.animation();
  };

  this.animation = function () {
    console.log("[DEBUG] Animation");
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

engine = new gameEngine();

$(document).ready(function () {
  engine.init();
});
