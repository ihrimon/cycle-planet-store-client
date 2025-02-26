import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFetchAllProductsQuery } from '@/redux/features/product/productApi';
import { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

interface ProductGridProps {
  isGridView: boolean;
  onViewChange: (isGrid: boolean) => void;
  onSortChange: (value: string) => void;
}

const ProductGrid = ({
  isGridView,
  onViewChange,
  onSortChange,
}: ProductGridProps) => {
  const {
    data: productsData,
    isLoading,
    isFetching,
  } = useFetchAllProductsQuery(undefined);
  const products = productsData?.data?.result || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if(isLoading) <div>Loading...</div>

  return (
    <div className='flex-1'>
      <div className='flex justify-between items-center mb-6'>
        <p className='text-sm text-muted-foreground'>
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, products.length)} of{' '}
          {products.length} results
        </p>
        <div className='flex items-center gap-4'>
          <Select onValueChange={onSortChange} defaultValue='default'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='default'>Default sorting</SelectItem>
              <SelectItem value='price-low'>Price: Low to High</SelectItem>
              <SelectItem value='price-high'>Price: High to Low</SelectItem>
              <SelectItem value='rating'>Rating</SelectItem>
            </SelectContent>
          </Select>
          <div className='flex gap-2'>
            <Button
              variant={isGridView ? 'default' : 'outline'}
              size='icon'
              onClick={() => onViewChange(true)}
            >
              <LayoutGrid className='h-4 w-4' />
            </Button>
            <Button
              variant={!isGridView ? 'default' : 'outline'}
              size='icon'
              onClick={() => onViewChange(false)}
            >
              <List className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
      <div
        className={
          isGridView
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'
            : 'space-y-4'
        }
      >
        {paginatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* Pagination */}
      <div className='flex justify-center mt-6 gap-2'>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className='text-sm text-muted-foreground'>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;