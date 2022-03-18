import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductAPI } from "../../services/addProduct.service";
import { addProductAction } from "../../store/reducers/productsStore";
import { Form } from "../Form/Form";
import NewProductPageStyled from "./NewProductPage.styled";

export const NewProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

 const handleUploadNewProduct = (product) => {
  const apiFetch = async () => {
    const { name, price, description, active, SKU } = product;
    const objectToSend = {
      name,
      price,
      active,
      description,
      SKU,
    };
    try {
      await addProductAPI(objectToSend);
    } catch (error) {
      console.log({ error });
    }
  };
  dispatch(addProductAction(product));
  apiFetch();
  navigate("/")
 };
 
  return (
    <NewProductPageStyled>
      <h2>Alta nuevo producto</h2>
      <Form onSubmitModel={handleUploadNewProduct} newProduct={true}/>
    </NewProductPageStyled>
  );
};