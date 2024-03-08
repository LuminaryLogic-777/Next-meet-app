import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
    } else {
      alert("Please enter a valid room ID.");
    }
  };

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome to Next Meet
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter room ID"
            className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
            value={roomId}
            onChange={(e) => setRoomId(e?.target?.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg w-full mt-4 transition-colors duration-300 ease-in-out"
            onClick={joinRoom}
          >
            Join room
          </button>
        </div>
        <div className="flex items-center justify-center text-gray-500 mb-4">
          OR
        </div>
        <button
          onClick={createAndJoin}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg w-full transition-colors duration-300 ease-in-out"
        >
          Create room
        </button>
      </div>
    </div>
  );
}
