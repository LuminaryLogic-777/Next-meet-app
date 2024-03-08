const { useState, useEffect, useRef } = require("react")

export default function usePeer(){
    const [peer, setPeer]=useState(null);
    const [myId,setMyId]=useState('');
    const isPeerSet=useRef(false);

    useEffect(()=>{
        if(isPeerSet.current) return;
        isPeerSet.current=true;
        (async function peerInit(){
            const myPeer = new (await import('peerjs')).default();
            setPeer(myPeer);

            myPeer.on('open',(id)=>{
                console.log(`Your peer id is ${id}`);
            })
        })()
    },[])
    return{
        peer,
        myId
    }
}

