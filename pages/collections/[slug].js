import Layout from "../../components/Layout";
import style from "../../styles/slug.module.scss";

export default function Product() {
  return (
    <Layout>
      <main className={style.product__container}>
        <div className={style.product_img}></div>
        <div className={style.product_details}>
          <h1 className={style.product_details_header}>
            Hard Times 5 Panel Cap
          </h1>
          <span className={style.price}>£30</span>

          <div className={style.features}>
            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_1}`}
              ></div>
              <p>15% Off First Order</p>
            </div>

            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_2}`}
              ></div>
              <p>30 Day Returns</p>
            </div>

            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_3}`}
              ></div>
              <p>Worldwide Shipping</p>
            </div>
          </div>

          <div className={style.button__container}>
            <button className={style.add_btn}>Add to Cart</button>
          </div>

          <div className={style.details}>
            <h3>Details</h3>

            <ul>
              <li>100% cotton twill</li>
              <li>Washed</li>
              <li>Embroidered design to front</li>
              <li>Embroidered P&Co on reverse</li>
              <li>Adjustable plastic snapback</li>
              <li>5 panel construction</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
