import Header from "../Components/Header";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "../Components/Footer";
import { useState } from "react";
import ModalMenu from "../Components/ModalMenu";
function MyApp({ Component, pageProps }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Component {...pageProps} />
      <Footer />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default MyApp;
