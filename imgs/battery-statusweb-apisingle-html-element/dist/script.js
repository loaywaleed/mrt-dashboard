const root = document.querySelector(':root');
const indicator = document.querySelector('.battery');

const monitor = (battery) => {
  const percent = Math.floor(battery);
  const index = Math.floor((percent*0.6)/10);
  const color = `hsl(${percent}, 100%, 40%)`;
  root.style.setProperty('--color', color);
  root.style.setProperty('--width', `${percent}px`);
  indicator.innerHTML = `${percent}%`; 
}



monitor(40);