import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Quicksand } from "next/font/google";
import type { AppProps } from "next/app";

import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";

const inter = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <div
        style={{
          width: "100%",
          display: "inline-block",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <Component {...pageProps} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
