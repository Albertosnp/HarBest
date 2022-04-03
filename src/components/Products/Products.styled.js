import styled from "styled-components";

const ProductsStyled = styled.section`
  .products {
    &__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;

      &--filter {
        margin: 0 10px;
        border: none;
        background-color: orange;
        border-radius: 5px;
        padding: 8px 20px;
        cursor: pointer;
        color: white;
        &:hover {
          outline: none;
          background-color: #ffc107;
          transition: all 0.3s ease;
        }
      }
      &--create {
        border: none;
        background-color: orange;
        border-radius: 5px;
        padding: 8px 20px;
        cursor: pointer;
        color: white;
        &:hover {
          outline: none;
          background-color: #ffc107;
          transition: all 0.3s ease;
        }
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      & a {
        text-decoration: none;
        color: black;
      }
      &__item {
        margin: 5px 10px;
        padding: 5px 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f0f0f0;
        &:hover {
          transition: all 0.3s ease;
          background-color: #cccc;
          box-shadow: 0px 0px 5px #000000;
          /* scale: 1.1; */
        }
      }
    }
  }
`;

export default ProductsStyled;