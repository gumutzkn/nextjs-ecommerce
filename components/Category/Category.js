import collectionStyle from "../../styles/Collections.module.scss";
import Product from "../Product/Product";

export default function Category({ title }) {
  return (
    <section className={collectionStyle.category}>
      <h1 className={collectionStyle.category_header}>{title}</h1>
      <div className={collectionStyle.products}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}
