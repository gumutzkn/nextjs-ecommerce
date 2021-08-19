import collectionStyle from "../../styles/Collections.module.scss";
import Product from "../Product/Product";

export default function Category({ title, products }) {
  if (!products) return null;
  return (
    <section className={collectionStyle.category}>
      <h1 className={collectionStyle.category_header}>{title}</h1>
      <div className={collectionStyle.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
