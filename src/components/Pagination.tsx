import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`mx-1 ${
              currentPage === index + 1 ? 'font-bold' : ''
            }`}
          >
            <button
              className="px-3 py-1 rounded-md border"
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
