import { createContext, useContext, useEffect, useState } from "react";
import commerce from "../lib/commerce";

const CommerceContext = createContext();

export function useCommerce() {
  return useContext(CommerceContext);
}

export function CommerceProvider({ children }) {
  const [products, setProducts] = useState({});
  const [merchants, setMerchants] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const merchants = await commerce.merchants.about();
      const { data: categories } = await commerce.categories.list();
      const { data: products } = await commerce.products.list();

      setMerchants(merchants);
      setCategories(categories);
      setProducts(products);
    })();
  }, []);

  const value = {
    products,
    merchants,
    categories,
  };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
}
