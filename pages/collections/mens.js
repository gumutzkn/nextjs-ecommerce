import Layout from "../../components/Layout";
import collectionStyle from "../../styles/Collections.module.scss";
import Category from "../../components/Category/Category";
import HeroContainer from "../../components/HeroContainer";
import Features from "../../components/Features";
import Purpose from "../../components/Purpose";

export default function Index() {
  return (
    <Layout>
      <HeroContainer title={"Mens"} type={"mens"} />
      <Features />
      <Category title={"Watches"} />
      <Category title={"T-shirt"} />

      <Purpose />
    </Layout>
  );
}
