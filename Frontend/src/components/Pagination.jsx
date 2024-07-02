import { Pagination } from 'react-bootstrap';
import './Pagination.scss';

//* Componente de paginación
const PaginationComponent = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <Pagination>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => handlePageChange(pageNumber)}>
          {pageNumber}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;