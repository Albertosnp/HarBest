import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem } from "../components/ListItem/ListItem";
import { Product } from "../components/Product/Product";
import { getProductsAction } from "../store/reducers/productsStore";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsStore.products);
  const [loading, setLoading] = useState(true);
  const [actives, setActives] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!loading) setLoading(true);

    dispatch(getProductsAction({ page: currentPage, active: actives }));
    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, [currentPage, dispatch, actives]);

  useEffect(() => {
    dispatch(getProductsAction({}));
  }, [dispatch]);

  const handlePageChange = (page) => {
    if (currentPage + page <= -1) return;
    if (currentPage + page >= 4) return;
    setCurrentPage((prev) => prev + page);
  };

  const handleFilterActive = () => {
    setActives(!actives);
  };

  return (
    <div>
      <h1>Productos</h1>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          { actives ? (
            <button onClick={handleFilterActive}>Activos</button>
          ) : (
            <button onClick={handleFilterActive}>Inactivos</button>
          )}
          <ul>
            {products &&
              products?.map((product) => (
                <ListItem
                  key={product._id}
                  children={
                    <Link
                      key={product._id}
                      to={`/${product._id}`}
                      children={<Product {...product} />}
                    />
                  }
                />
              ))}
          </ul>
        </div>
      )}
      <section>
        <button onClick={() => handlePageChange(-1)}>Prev</button>
        {currentPage + 1}
        <button onClick={() => handlePageChange(1)}>Next</button>
      </section>
    </div>
  );
};
