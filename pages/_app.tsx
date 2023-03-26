import "@/styles/globals.css";
import { startWebSocket } from "@/utils/webSocket.util";
import { Inter } from "next/font/google";
import { useEffect } from "react";

import type { AppProps } from "next/app";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    startWebSocket();
  }, []);

  return (
    <div
      className={`${inter.variable} bg-gray-dark h-full flex items-center justify-center`}
    >
      <Component {...pageProps} />
    </div>
  );
}
