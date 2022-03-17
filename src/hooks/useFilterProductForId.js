import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFilterProductForId = ({ id }) => {
  const products = useSelector((state) => state.productsStore.products);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;
    if (!loading) setLoading(true);
    
    const product = products.find((product) => product._id === id);
    if (isSubscribed) {
      setProduct(product);
      setLoading(false);
    }
    return () => {
      setLoading(false);
      isSubscribed = false;
    };
  }, [id, products, loading]);

  return { product, loading };
};
