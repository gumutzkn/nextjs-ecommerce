import { ModalProvider } from "../contexts/ModalContext";
import Modal from "../components/Modal/Modal";
import { CartProvider } from "../contexts/CommerceContext";
import HamburgerModal from "../components/HamburgerModal/HamburgerModal";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <HamburgerModal />
        <Modal />
      </ModalProvider>
    </CartProvider>
  );
}
