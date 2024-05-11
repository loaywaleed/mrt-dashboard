const root = document.querySelector(':root');
const indicator = document.querySelector('.battery');

const monitor = (battery) => {
  const percent = Math.floor(battery);
  const color = `hsl(${percent}, 100%, 40%)`;
  console.log(color)
  root.style.setProperty('--color', color);
  root.style.setProperty('--width', `${percent}px`);
  indicator.innerHTML = `${percent}%`; 
}

const batteryLevel = 40

monitor(batteryLevel);