import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "components/Pagination/Pagination";
import { getProductsAction } from "store/reducers/productsStore";
import HomeStyled from "./Home.styled";

export const Home = () => {
  const dispatch = useDispatch();
  const { products, totalCount } = useSelector((state) => state.productsStore);

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

  return (
    <HomeStyled className="home">
      <h1>Productos HarBest</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Products products={products} setCurrentPage={setCurrentPage} />
          <Pagination totalCount={totalCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </HomeStyled>
  );
};
