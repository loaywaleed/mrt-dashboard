import socket from "./socket.js";

/* Blinking Signals Constants */
const OFF = 0;
const RIGHT = 1;
const LEFT = 2;
const ON = 3;

/* Voltage, Current, Cruising Range */
socket.on("vi_range", (data) => {
  document.getElementById("voltage").innerText = data.voltage + " V";
  document.getElementById("current").innerText = data.current + " A";
  document.getElementById("range").innerText = data.range + " KM";
});

/* Blinking Signals */
socket.on("blinkers", (data) => {
  const blinker_signal = data.blinkers;
  let arrowLeft = document.getElementById("arrow-left");
  let arrowRight = document.getElementById("arrow-right");
  switch (blinker_signal) {
    case OFF:
      arrowLeft.classList.add("stop-blinking");
      arrowRight.classList.add("stop-blinking");
      break;
    case RIGHT:
      arrowLeft.classList.add("stop-blinking");
      arrowRight.classList.remove("stop-blinking");
      break;
    case LEFT:
      arrowLeft.classList.remove("stop-blinking");
      arrowRight.classList.add("stop-blinking");
      break;
    case ON:
      arrowLeft.classList.remove("stop-blinking");
      arrowRight.classList.remove("stop-blinking");
      break;
    default:
      throw new Error("Invalid blinker signal");
  }
});

/* Battery temperature */
socket.on("battery_temperature", (data) => {
  const temperature_view = document.getElementById("temperature");
  temperature_view.innerText = data.temperature + " °C";
});
