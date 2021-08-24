import Link from "next/link";
import { useModal } from "../../contexts/ModalContext";

import style from "./HamburgerModal.module.scss";

export default function HamburgerModal() {
  const { isResponsiveModalOpen, setIsResponsiveModalOpen } = useModal();

  return (
    <div
      className={`${style.hamburger_container} ${
        isResponsiveModalOpen ? style.active : ""
      }`}
    >
      <div className={style.links}>
        <ul onClick={() => setIsResponsiveModalOpen(false)}>
          <li>
            <Link href="/collections/mens">
              <a>Mens</a>
            </Link>
          </li>

          <li>
            <Link href="/collections/womens">
              <a>Womens</a>
            </Link>
          </li>
          <li>
            <Link href="/collections/goods">
              <a>Goods</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
