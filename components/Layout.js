import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
