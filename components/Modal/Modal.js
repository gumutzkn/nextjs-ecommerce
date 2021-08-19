import modal from "./Modal.module.scss";
import { useModal } from "../../contexts/ModalContext";
import { useEffect, useRef } from "react";

export default function Modal() {
  const ref = useRef();
  const { isOpen, closeModal } = useModal();

  const isTransformed = isOpen ? `${modal.modal_transform}` : "";

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className={`${modal.modal} ${isTransformed}`} ref={ref}>
      <div className={modal.modal__header}>
        <span>2 items in your cart</span>
        <div className={modal.cross} onClick={closeModal}>
          X
        </div>
      </div>
      <div className={modal.products}>
        <div className={modal.product}>
          <div className={modal.product__img}></div>
          <div className={modal.product__details}>
            <div className={modal.product__details_header}>
              <span>Hard Times 5 Panel Cap</span>
              <div className={modal.color_container}>
                <span>
                  Colour: <span className={modal.color}>Black</span>
                </span>
              </div>
            </div>
            <div className={modal.buttons}>
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
          </div>
          <div className={modal.product__price}>
            <div className={modal.price}>£30.00</div>
            <button className={modal.remove}>Remove</button>
          </div>
        </div>
      </div>

      <div className={modal.quantity_container}>
        <div className={modal.price}>
          <div>Order Value</div>
          <div>£30.00</div>
        </div>
        <div className={modal.quantity}>
          <div>TOTAL</div>
          <div>£60.00</div>
        </div>
        <div className={modal.buttons}>
          <button className={`${modal.btn} ${modal.btn_checkout}`}>
            Checkout
          </button>
          <button className={`${modal.btn} ${modal.btn_continue}`}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
