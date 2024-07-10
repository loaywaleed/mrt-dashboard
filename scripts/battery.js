import socket from "./socket.js";

const root = document.querySelector(":root");
const indicator = document.querySelector(".battery");

let batteryLevel = 90;

socket.on("soc", (data) => {
  batteryLevel = data.soc;
  monitor(batteryLevel);
});

const monitor = (battery) => {
  const percent = Math.floor(battery);
  const color = `hsl(${percent}, 100%, 40%)`;
  root.style.setProperty("--color", color);
  root.style.setProperty("--width", `${percent}px`);
  indicator.innerHTML = `${percent}%`;
};

monitor(batteryLevel);
