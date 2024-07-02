const root = document.querySelector(":root");
const indicator = document.querySelector(".battery");
const batteryLevel = 90;

const monitor = (battery) => {
  const percent = Math.floor(battery);
  const color = `hsl(${percent}, 100%, 40%)`;
  root.style.setProperty("--color", color);
  root.style.setProperty("--width", `${percent}px`);
  indicator.innerHTML = `${percent}%`;
};

monitor(batteryLevel);
