const { Board, Led, Sensor } = require("johnny-five");
const loudness = require("loudness");
const brightness = require("brightness");
const board = new Board();

board.on("ready", () => {
  const volMeter = new Sensor({ pin: "A3", threshold: 5 });
  const brightMeter = new Sensor({ pin: "A5", threshold: 5 });

  volMeter.on("change", (data) => {
    const val = volMeter.scaleTo(0, 100);
    loudness.setVolume(val);
  });

  brightMeter.on("change", (data) => {
    console.log(volMeter.fscaleTo(0, 1));
    brightness.set(volMeter.fscaleTo(0, 1));
  });
});

// This is super simple
