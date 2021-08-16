import Layout from "../../components/Layout";
import collectionStyle from "../../styles/Collections.module.scss";
import HeroContainer from "../../components/HeroContainer";
import Features from "../../components/Features";
import Purpose from "../../components/Purpose";
import Category from "../../components/Category/Category";

export default function Index() {
  return (
    <Layout>
      <HeroContainer title={"Womens"} type={"womens"} />
      <Features />
      <Category title={"T-shirts"} />
      <Category title={"Outerwear"} />
      <Purpose />
    </Layout>
  );
}
