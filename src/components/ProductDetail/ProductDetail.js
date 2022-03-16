import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  //Peticion api o sacar ese id de redux
  
  
  return (
    <div className="product">
      <h1>Producto: {id}</h1>
    </div>
  );
};
