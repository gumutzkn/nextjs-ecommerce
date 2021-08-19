import navStyles from "./Navbar.module.scss";
import Link from "next/link";
import { useModal } from "../../contexts/ModalContext";

export default function Navbar() {
  const { setIsOpen, openModal } = useModal();

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.links}>
        <ul>
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
      <div className={navStyles.logo}>
        <Link href="/">
          <a>P&C</a>
        </Link>
      </div>
      <div className={navStyles.cart} onClick={openModal}>
        <div className={navStyles.shopping_icon}></div>
        <span>
          Cart <span className={navStyles.quantity}>(0)</span>
        </span>
      </div>
    </nav>
  );
}
