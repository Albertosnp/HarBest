import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useFilterProductForId } from "../../hooks/useFilterProductForId";
import { setProductAPI } from "../../services/setProduct.service";
import { setProductAction } from "../../store/reducers/productsStore";
import { Form } from "../Form/Form";
import { Product } from "../Product/Product";

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
    <div className="productDetail">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <Product {...product} />
        </div>
      )}
      <div>
        {!showEditForm && <button onClick={handlerClick}>Editar</button>}
        {showEditForm && (
          <>
            <button onClick={handlerClick}>Ocultar</button>
            <Form product={product} onSubmitModel={handleModifyProduct} />
          </>
        )}
      </div>
      <Link to="/"><button children="Volver"/></Link>
      
    </div>
  );
};
