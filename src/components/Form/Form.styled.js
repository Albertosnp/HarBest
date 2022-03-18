import styled from "styled-components";

const FormStyled = styled.div`
  display: grid;
  place-content: center;
  margin-top: 2rem;
  .form {
    &__box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      width: 100%;
      padding: 50px;

      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      .form__input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;

        &:focus {
          outline: none;
        }
      }
      .form__label {
        width: 100%;
        font-weight: bold;
        padding: 5px 10px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        border-radius: 5px;
        
      }

      .form__button {
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: orange;
        color: white;
        cursor: pointer;

        &:hover {
          outline: none;
          background-color: #ffc107;
          transition: all 0.3s ease;
        }
      }
    }
  }
  /* .form {
    &__box {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      margin-top: 20px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
  } */
`;

export default FormStyled;
