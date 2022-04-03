import styled from "styled-components";

const PaginationStyled = styled.section`

  .pagination {
    position: absolute;
    top: 500px;

    &__button {
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
`;

export default PaginationStyled;