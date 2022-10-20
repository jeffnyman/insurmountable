function gameEngine() {
  this.init = function () {
    console.log("[DEBUG] Engine Started");

    engine.validateCapabilities(function () {
      engine.initEngine();
    });
  };

  this.initEngine = function () {
    console.log("[DEBUG] Initialize Engine");
  };

  this.validateCapabilities = function (good, bad) {
    console.log("[DEBUG] Validating Requirements");

    var allGood = true;

    var c = document.createElement("canvas");
    if (!(c.getContext && c.getContext("2d"))) {
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
