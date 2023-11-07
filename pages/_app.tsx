import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Quicksand } from "next/font/google";
import type { AppProps } from "next/app";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import Contact from "./contact";
import Head from 'next/head'
import LogoIcon from "@/public/Assets/pages/logo.png";
import Image from "next/image";

const inter = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
         <link rel="icon" href="/Assets/pages/logo.png" sizes="any" />
      </Head>
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
