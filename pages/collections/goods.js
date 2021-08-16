import Layout from "../../components/Layout";
import Category from "../../components/Category/Category";
import HeroContainer from "../../components/HeroContainer";
import Features from "../../components/Features";
import Purpose from "../../components/Purpose";

export default function Goods() {
  return (
    <Layout>
      <HeroContainer title={"Goods"} type={"goods"} />
      <Features />
      <Category title={"Goods"} />
      <Category title={"Headwear"} />

      <Purpose />
    </Layout>
  );
}
