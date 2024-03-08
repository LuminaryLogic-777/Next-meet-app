// Importing the Server class from the socket.io library
import { Server } from "socket.io";

// Define the SocketHandler function which will be invoked for each request to the API route
const SocketHandler = (req, res) => {
    // Log a message indicating that the API route has been called
    console.log("Called API");

    // Check if the Socket.IO server instance is already present on the response socket
    if (res.socket.server.io) {
        // If the Socket.IO server instance is already present, log a message indicating that it's already running
        console.log("Socket is already running");
    } else {
        // If the Socket.IO server instance is not present, create a new instance
        const io = new Server(res.socket.server);

        // Store the Socket.IO server instance on the response socket for future reference
        res.socket.server.io = io;

        // Set up event listener for client connections
        io.on('connection', (socket) => {
            // Log a message when a client connects to the server
            console.log('Server is connected');
        });
    }

    // End the response to complete the API request
    res.end();
}

// Export the SocketHandler function as the default export of this module
export default SocketHandler;
