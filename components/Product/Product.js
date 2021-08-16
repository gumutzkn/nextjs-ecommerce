import collectionStyle from "../../styles/Collections.module.scss";

export default function Product({ name, price }) {
  return (
    <div className={collectionStyle.product}>
      <div className={collectionStyle.product__top}>
        <span className={collectionStyle.text}>New</span>
      </div>
      <div className={collectionStyle.product__bottom}>
        <h3 className={collectionStyle.productname}>Palm Signet Ring</h3>
        <span className={collectionStyle.price}>£70</span>
      </div>
    </div>
  );
}
