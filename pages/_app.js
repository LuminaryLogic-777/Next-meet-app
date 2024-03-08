import "@/styles/globals.css";
import { Suspense } from 'react';
import { SocketProvider } from "@/context/socket";

export default function App({ Component, pageProps }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </Suspense>
  );
}
