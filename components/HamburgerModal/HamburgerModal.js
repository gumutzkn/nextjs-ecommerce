import Link from "next/link";
import { useModal } from "../../contexts/ModalContext";

import style from "./HamburgerModal.module.scss";

export default function HamburgerModal() {
  const { isResponsiveModalOpen, setIsResponsiveModalOpen } = useModal();

  function closeModal() {
    setIsResponsiveModalOpen(false);
  }

  return (
    <div
      className={`${style.hamburger_container} ${
        isResponsiveModalOpen ? style.active : ""
      }`}
    >
      <div className={style.links}>
        <ul>
          <li>
            <Link href="/">
              <a onClick={closeModal}>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/collections/mens">
              <a onClick={closeModal}>Mens</a>
            </Link>
          </li>

          <li>
            <Link href="/collections/womens">
              <a onClick={closeModal}>Womens</a>
            </Link>
          </li>
          <li>
            <Link href="/collections/goods">
              <a onClick={closeModal}>Goods</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
