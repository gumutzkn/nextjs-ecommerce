import Layout from "../../../components/Layout";
import commerce from "../../../lib/commerce";
import style from "../../../styles/slug.module.scss";
import { useRouter } from "next/router";
import parse from "html-react-parser";

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
  if (!product) return null;

  return (
    <Layout>
      <main className={style.product__container}>
        <div
          className={style.product_img}
          style={{
            backgroundImage: `url(${product.assets[1].url})`,
          }}
        ></div>
        <div className={style.product_details}>
          <h1 className={style.product_details_header}>{product.name}</h1>
          <span className={style.price}>
            {product.price.formatted_with_symbol}
          </span>

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
            {parse(product.description)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
