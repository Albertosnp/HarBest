import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../components/Product/Product";
import { getProducts } from "../services/getProducts.service";

export const Home = () => {
  const [products, setProducts] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      try {
        const { list, totalCount } = await getProducts({ page: currentPage });
        if (isSubscribed) {
          setProducts(list);
          setTotalCount(totalCount);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
    return () => {
      isSubscribed = false;
    };
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (currentPage + page <= 0) return;
    if (currentPage + page >= 5) return;
    setCurrentPage(prev => prev + page);
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products &&
          products?.map(({ _id, description, name, price }) => (
            <li key={_id}>
              <Link to={`/${_id}`}>
                <Product description={description} name={name} price={price} />
              </Link>
            </li>
          ))}
      </ul>
      <section>
        <button onClick={() => handlePageChange(-1)}>Prev</button>
        {currentPage}
        <button onClick={() => handlePageChange(1)}>Next</button>
      </section>
    </div>
  );
};
