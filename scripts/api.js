const socket = io("http://localhost:5000/");

// Listen for 'message' event from the server
socket.on('message', () => {
    console.log('Received message from server');
});