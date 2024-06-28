import socket from "./socket.js";
socket.on("message", () => {
  console.log("Received message from server");
});

/* Blinking Signals Constants */
const OFF = 0;
const RIGHT = 1;
const LEFT = 2;
const ON = 3;

/* Voltage, Current, Cruising Range */
socket.on("vi_range", (data) => {
  console.log("current, voltage, range data received", data);
  document.getElementById("voltage").innerText = data.voltage + " V";
  document.getElementById("current").innerText = data.current + " A";
  document.getElementById("range").innerText = data.range + " ";
});

socket.on("blinkers", (data) => {
  const blinker_signal = data.blinkers;
  console.log("blinker data received", data);
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
      console.log("invalid signal");
      throw new Error("Invalid blinker signal");
  }
});

socket.on("battery_temperature", (data) => {
  const temperature_view = document.getElementById("temperature");
  console.log("battery temperature data received", data);
  temperature_view.innerText = data.temperature + " °C";
});
