import "../styles/globals.scss";
import { ModalProvider } from "../contexts/ModalContext";
import Modal from "../components/Modal/Modal";
import { CommerceProvider } from "../contexts/CommerceContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CommerceProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <Modal />
      </ModalProvider>
    </CommerceProvider>
  );
}
