import ProductStyled from "./Product.styled";

export const Product = ({ name, description, price }) => {
 
  return (
    <ProductStyled className="product">
      <h2 className="product__title">{name}</h2>
      <p className="product__description">{description}</p>
      <p className="product__precio">Precio: {price}€</p>
    </ProductStyled>
  );
};