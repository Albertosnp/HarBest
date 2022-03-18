import styled from "styled-components";

const ProductStyled = styled.div`
  display: grid;
  padding: 5px;
  .product {
    &__title {
      margin: 0;
      padding: 5px 0 5px 0;
      font-size: 1.1rem;
      font-weight: bold;
    }
    &__description {
      margin: 0;
      
      font-size: 1rem;
    }
    &__precio {
      margin: 0;
      font-size: 1rem;
    }
  }
`;

export default ProductStyled;
