const displayTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = hours + ':' + minutes;
    document.getElementById('time').innerHTML = timeString;
    document.getElementById('ampm').innerHTML = ampm;
}
displayTime(); // Display time when page loads
setInterval(displayTime, 60000); // Update time every minute