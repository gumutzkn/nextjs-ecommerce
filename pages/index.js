import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home({ merchant, products, categories }) {
  const router = useRouter();
  const pushOnClick = (target) => {
    router.push(`/collections/${target}`);
  };

  return (
    <>
      <Navbar />
      <section className={styles.categories}>
        <div className={styles.category} onClick={() => pushOnClick("mens")}>
          <h1>Mens</h1>
          <img src="/images/mens_block_summer_1080x.jpg" alt="mens" />
        </div>
        <div className={styles.category} onClick={() => pushOnClick("womens")}>
          <h1>Womens</h1>
          <img src="/images/womens_block_summer_1080x.jpg" alt="womens" />
        </div>
      </section>
    </>
  );
}
