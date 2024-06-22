const socket = io("http://localhost:5000/");

// Listen for 'message' event from the server
socket.on('message', () => {
    console.log('Received message from server');
});


socket.on('vi_range', (data) => {
    console.log('current, voltage, range data received', data);
    console.log(data)
    document.getElementById("voltage").innerText = data.voltage + ' V';
    document.getElementById("current").innerText = data.current + ' A';
});