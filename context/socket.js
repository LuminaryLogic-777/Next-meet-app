const { useState, useEffect, createContext, useContext } = require("react");
const { io } = require("socket.io-client");

// Creating a context for the socket connection
const SocketContext = createContext(null);

// Custom hook to access the socket instance from the context
export const useSocket = () => {
    // Accessing the socket from the context
    const socket = useContext(SocketContext);
    return socket;
}

// Component to provide the socket connection to its children
export const SocketProvider = ({ children }) => {

    // State to store the socket instance
    const [socket, setSocket] = useState(null);

    // Effect hook to establish a socket connection when the component mounts
    useEffect(() => {
        // Creating a new socket connection
        const connection = io();
        console.log(connection);
        // Setting the socket instance to the state
        setSocket(connection);
        
        // Cleanup function to close the socket connection when the component unmounts
        return () => {
            connection.disconnect();
        };
    }, []);

    socket?.on('connect_error', async(err)=>{
        console.log("Connection error on socket server",err)
        await fetch('/api/socket')
    })

    // Providing the socket instance to its children through context
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
