import styled from "styled-components";

const HomeStyled = styled.div`
  display: grid;
  place-items: center;
  justify-items: center;
  margin-top: 4rem;

  position: absolute;
  left: 50px;
  right: 50px;
  
  .home {
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
      }
      &--create {
        border: none;
        background-color: orange;
        border-radius: 5px;
        padding: 8px 20px;
        cursor: pointer;
        color: white;
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
      &--item {
        
        margin: 5px 10px;
        padding: 5px 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f0f0f0;
        &:hover {
          transition: all 0.5s ease;
          background-color: #cccc;
          box-shadow: 0px 0px 10px #cedede;
          scale: 1.1;
        }
      }
    }

    &__pagination {
      position: absolute;
      top: 500px;
    

      &__button {
        border: none;
        background-color: orange;
        border-radius: 5px;
        padding: 8px 20px;
        cursor: pointer;
        color: white;
      }
    }
  }

`;

export default HomeStyled;
