import modal from "./Modal.module.scss";
import { useModal } from "../../contexts/ModalContext";
import { useEffect, useRef } from "react";
import { useCartState } from "../../contexts/CommerceContext";
import ModalProduct from "./ModalProduct";
import { useRouter } from "next/router";

export default function Modal() {
  const { push } = useRouter();
  const ref = useRef();
  const { isOpen, closeModal } = useModal();
  const {
    line_items,
    total_items,
    subtotal,
    hosted_checkout_url,
  } = useCartState();

  const isTransformed = isOpen ? `${modal.modal_transform}` : "";
  const isEmpty = line_items.length === 0;

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
      {isEmpty ? (
        <div className={modal.modal__header}>
          <span>Your Cart Is Empty</span>
          <div className={modal.cross} onClick={closeModal}>
            X
          </div>
        </div>
      ) : (
        <>
          <div className={modal.modal__header}>
            <span>{total_items} items in your cart</span>
            <div className={modal.cross} onClick={closeModal}>
              X
            </div>
          </div>
          <div className={modal.products}>
            {/*Product Start*/}
            {line_items.map((product) => (
              <ModalProduct key={product.product_id} product={product} />
            ))}
            {/*Product End*/}
          </div>

          <div className={modal.quantity_container}>
            <div className={modal.quantity}>
              <div>TOTAL</div>
              <div>{subtotal.formatted_with_symbol}</div>
            </div>
            <div className={modal.buttons}>
              <button
                className={`${modal.btn} ${modal.btn_checkout}`}
                onClick={() => push(`${hosted_checkout_url}`)}
              >
                Checkout
              </button>
              <button
                className={`${modal.btn} ${modal.btn_continue}`}
                onClick={closeModal}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
