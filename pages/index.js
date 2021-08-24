import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const { push } = useRouter();

  const pushOnClick = (target) => push(`/collections/${target}`);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
