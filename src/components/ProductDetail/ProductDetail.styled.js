import styled from "styled-components";

const ProductDetailStyled = styled.div`
  margin-top: 4rem;
  /* position: absolute;
  left: 30%;
  right: 30%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .productDetail {
    &__mainBlock__item {
      margin: 10px 0;
      padding: 10px 25px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #f0f0f0;
      box-shadow: 0px 0px 5px #000000;
    }

    &__mainBlock__button {
      border: none;
      background-color: orange;
      border-radius: 5px;
      padding: 8px 25px;
      cursor: pointer;
      color: white;
      margin: 10px 10px 10px 0;
      &:hover {
        outline: none;
        background-color: #ffc107;
        transition: all 0.3s ease;
      }

      &--delete {
        background-color: red;
        border: none;
        border-radius: 5px;
        padding: 8px 25px;
        cursor: pointer;
        color: white;
        margin: 10px 10px 10px 0;
      }
    }
  }
`;

export default ProductDetailStyled;
