function gameEngine() {
  this.init = function () {
    console.log("[DEBUG] Engine Started");
  };
}

engine = new gameEngine();

$(document).ready(function () {
  engine.init();
});
