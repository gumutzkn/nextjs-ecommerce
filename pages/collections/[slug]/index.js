import Layout from "../../../components/Layout";
import commerce from "../../../lib/commerce";
import HeroContainer from "../../../components/HeroContainer";
import Features from "../../../components/Features";
import Category from "../../../components/Category/Category";
import Purpose from "../../../components/Purpose";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function Collection({ category, products }) {
  if (!category && !products) return null;
  return (
    <Layout>
      <HeroContainer title={category.name} type={category.slug} />
      <Features />
      <Category title={category.name} products={products} />

      <Purpose />
    </Layout>
  );
}
