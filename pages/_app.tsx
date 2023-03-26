import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} bg-gray-dark h-full flex justify-center`}
    >
      <Component {...pageProps} />
    </main>
  );
}
