import { useSocket } from "@/context/socket";
import { useEffect } from "react";

export default function Home() {
  const socket=useSocket();

  useEffect(()=>{
    socket?.on("connect",()=>{
      console.log("id",socket.id);
    })
  },[socket]);
  
  return (
    <h>Welcome</h>
  );
}
