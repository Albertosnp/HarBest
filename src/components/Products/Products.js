import { Link } from "react-router-dom";
import { ArticleItem } from "ArticleItem/ArticleItem";
import { Product } from "Product/Product";
import ProductsStyled from "./Products.styled";

export const Products = ({ products, setCurrentPage }) => {
  const navigate = useNavigate();

  const [actives, setActives] = useState(true);

  const handleFilterActive = () => {
    setActives(!actives);
    setCurrentPage(0);
  };

  return (
    <ProductsStyled className="products">
      <div className="products__buttons">
        {actives ? (
          <button
            className="products__buttons--filter"
            onClick={handleFilterActive}
          >
            Activos
          </button>
        ) : (
          <button
            className="products__buttons--filter"
            onClick={handleFilterActive}
          >
            Inactivos
          </button>
        )}
        <button
          className="products__buttons--create"
          onClick={() => navigate("/form")}
        >
          Crear nuevo producto
        </button>
      </div>
      <section className="products__section">
        {products &&
          products?.map((product) => (
            <ArticleItem
              className="products__section__item"
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
    </ProductsStyled>
  )
}
