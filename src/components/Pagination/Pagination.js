import PaginationStyled from "./Pagination.styled";

export const Pagination = ({ totalCount, currentPage, setCurrentPage }) => {

  const handlePageChange = (page) => {
    if (totalCount <= page) return;
    if (currentPage + page <= -1) return;
    if (currentPage + page >= totalCount / 4) return;
    setCurrentPage((prev) => prev + page);
  };

  return (
    <PaginationStyled className="pagination">
      <button
        className="pagination__button"
        onClick={() => handlePageChange(-1)}
      >
        Anterior
      </button>
      | {currentPage + 1} |
      <button
        className="pagination__button"
        onClick={() => handlePageChange(1)}
      >
        Siguiente
      </button>
    </PaginationStyled>
  )
}
