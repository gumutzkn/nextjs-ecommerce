import "../styles/globals.scss";
import { ModalProvider } from "../context/ModalContext";
import Modal from "../components/Modal/Modal";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <Modal />
    </ModalProvider>
  );
}

export default MyApp;
