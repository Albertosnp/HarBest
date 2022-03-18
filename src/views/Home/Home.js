import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArticleItem } from "../../components/ArticleItem/ArticleItem";
import { Product } from "../../components/Product/Product";
import { getProductsAction } from "../../store/reducers/productsStore";
import HomeStyled from "./Home.styled";

export const Home = () => {
  const dispatch = useDispatch();
  const { products, totalCount } = useSelector((state) => state.productsStore);
  const navigate = useNavigate();

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
    if (totalCount <= page) return;
    if (currentPage + page <= -1) return;
    if (currentPage + page >= totalCount / 4) return;
    setCurrentPage((prev) => prev + page);
  };

  const handleFilterActive = () => {
    setActives(!actives);
    setCurrentPage(0);
  };

  return (
    <HomeStyled className="home">
      <h1>Productos HarBest</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="home__buttons">
            {actives ? (
              <button
                className="home__buttons--filter"
                onClick={handleFilterActive}
              >
                Activos
              </button>
            ) : (
              <button
                className="home__buttons--filter"
                onClick={handleFilterActive}
              >
                Inactivos
              </button>
            )}
            <button
              className="home__buttons--create"
              onClick={() => navigate("/")}
            >
              Crear nuevo producto
            </button>
          </div>
          <section className="home__section">
            {products &&
              products?.map((product) => (
                <ArticleItem
                  className="home__section__item"
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
          </section>
        </>
      )}
      <section className="home__pagination">
        <button
          className="home__pagination__button"
          onClick={() => handlePageChange(-1)}
        >
          Anterior
        </button>
        | {currentPage + 1} |
        <button
          className="home__pagination__button"
          onClick={() => handlePageChange(1)}
        >
          Siguiente
        </button>
      </section>
    </HomeStyled>
  );
};
