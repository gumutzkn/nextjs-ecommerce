import collectionStyle from "../../styles/Collections.module.scss";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const { push } = useRouter();

  if (!product) return <div>Waiting...</div>;
  // product.assets[0].url

  const handleRoute = () => {
    push(`/collections/${product.categories[0].slug}/${product.permalink}`);
  };

  return (
    <div className={collectionStyle.product} onClick={handleRoute}>
      <div
        className={collectionStyle.product__top}
        style={{
          backgroundImage: `url(${product.assets[0].url})`,
        }}
      >
        <span className={collectionStyle.text}>New</span>
      </div>
      <div className={collectionStyle.product__bottom}>
        <h3 className={collectionStyle.productname}>{product.name}</h3>
        <span className={collectionStyle.price}>
          {product.price.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
}
