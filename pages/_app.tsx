import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Quicksand } from "next/font/google";
import type { AppProps } from "next/app";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import Contact from "./contact";

const inter = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <div>
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
