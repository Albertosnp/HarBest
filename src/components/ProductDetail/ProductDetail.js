import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useFilterProductForId } from "../../hooks/useFilterProductForId";
import { setProductAPI } from "../../services/setProduct.service";
import { setProductAction } from "../../store/reducers/productsStore";
import { Form } from "../Form/Form";
import { Product } from "../Product/Product";
import ProductDetailStyled from "./ProductDetail.styled";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const { product, loading } = useFilterProductForId({ id });

  const handlerClick = () => {
    setShowEditForm(!showEditForm);
  };

  const handleModifyProduct = (product) => {
    const apiFetch = async () => {
      const { _id, name, price, description, active } = product;
      const objectToSend = {
        _id,
        name,
        price,
        active,
        description,
      };
      try {
        await setProductAPI(objectToSend);
      } catch (error) {
        console.log({ error });
      }
    };
    dispatch(setProductAction(product));
    apiFetch();
  };

  return (
    <ProductDetailStyled className="productDetail">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="productDetail__mainBlock">
          <div className="productDetail__mainBlock__item">
            <Product {...product} />
          </div>
          <Link to="/">
            <button
              className="productDetail__mainBlock__button"
              children="Volver"
            />
          </Link>
          {!showEditForm ? (
            <button
              className="productDetail__mainBlock__button"
              onClick={handlerClick}
              children="Editar"
            />
          ) : (
            <button
              className="productDetail__mainBlock__button"
              onClick={handlerClick}
              children="Ocultar"
            />
          )}
        </div>
      )}
      <div className="productDetail__secondBlock">
        {showEditForm && (
          <>
            <Form product={product} onSubmitModel={handleModifyProduct} />
          </>
        )}
      </div>
    </ProductDetailStyled>
  );
};
