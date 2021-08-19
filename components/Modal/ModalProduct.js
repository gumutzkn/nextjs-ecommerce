import modal from "./Modal.module.scss";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../contexts/CommerceContext";

export default function ModalProduct({ product }) {
  const { id, media, quantity, price, product_name } = product;

  const { setCart } = useCartDispatch();

  function handleUpdateCart({ cart }) {
    setCart(cart);
  }

  function removeItem() {
    commerce.cart.remove(id).then(handleUpdateCart);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      commerce.cart
        .update(id, { quantity: quantity - 1 })
        .then(handleUpdateCart);
    } else {
      removeItem();
    }
  }

  function incrementQuantity() {
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);
  }

  return (
    <div className={modal.product}>
      <div
        className={modal.product__img}
        style={{
          backgroundImage: `url(${media.source})`,
        }}
      />
      <div className={modal.product__details}>
        <div className={modal.product__details_header}>
          <span>{product_name}</span>
          <div className={modal.color_container}>
            <span>
              Colour: <span className={modal.color}>Black</span>
            </span>
          </div>
        </div>
        <div className={modal.buttons}>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div className={modal.product__price}>
        <div className={modal.price}>{price.formatted_with_symbol}</div>
        <button className={modal.remove} onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
}
