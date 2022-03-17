import styled from "styled-components";

const FormStyled = styled.div`
  display: grid;
  .form {
    &__box {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      margin-top: 20px;
      border: solid 1px;
    }
  }
`;

export default FormStyled;
