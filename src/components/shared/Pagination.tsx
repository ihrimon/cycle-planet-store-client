import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Pagination = ({ totalItems, itemsPerPage = 12, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className='flex items-center justify-center gap-2 mt-6'>
      <Button
        variant='outline'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      <span className='px-4 py-2 bg-muted rounded-md'>
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant='outline'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
