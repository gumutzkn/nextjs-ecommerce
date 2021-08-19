import Layout from "../../../components/Layout";
import commerce from "../../../lib/commerce";
import style from "../../../styles/slug.module.scss";
import parse from "html-react-parser";
import { useCartDispatch } from "../../../contexts/CommerceContext";
import { Helmet } from "react-helmet";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        slug: product.categories[0].slug,
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function Product({ product }) {
  const { setCart } = useCartDispatch();
  console.log(product);

  function addToCart() {
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));
  }

  return (
    <Layout>
      <main className={style.product__container}>
        <div
          className={style.product_img}
          style={{
            backgroundImage: `url(${product.assets[1].url})`,
          }}
        />
        <div className={style.product_details}>
          <h1 className={style.product_details_header}>{product.name}</h1>
          <span className={style.price}>
            {product.price.formatted_with_symbol}
          </span>

          <div className={style.features}>
            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_1}`}
              />
              <p>15% Off First Order</p>
            </div>

            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_2}`}
              />
              <p>30 Day Returns</p>
            </div>

            <div className={style.feature}>
              <div
                className={`${style.feature__img} ${style.feature__img_3}`}
              />
              <p>Worldwide Shipping</p>
            </div>
          </div>

          <div className={style.button__container}>
            <button className={style.add_btn} onClick={addToCart}>
              Add to Cart
            </button>
          </div>

          <div className={style.details}>
            <h3>Details</h3>
            {parse(product.description)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
