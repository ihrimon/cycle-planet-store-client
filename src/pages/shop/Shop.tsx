import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import Banner from '@/components/shared/Banner';
import Container from '@/components/shared/Container';
import ProductGrid from '@/components/shop/ProductGrid';

const Shop = () => {
  const [isGridView, setIsGridView] = useState(true);
  const { toast } = useToast();

  const handleSortChange = (value: string) => {
    toast({
      title: 'Sorting updated',
      description: `Products sorted by ${value}`,
    });
  };
  return (
    <div>
      <Banner
        title='Shop'
        breadcrumbs={[{ label: 'Shop', href: '/shop' }]}
      />
      <Container>
        <div className='flex gap-12'>
          <FilterSidebar />
          <ProductGrid
              isGridView={isGridView}
              onViewChange={setIsGridView}
              onSortChange={handleSortChange}
            />
        </div>
      </Container>
    </div>
  );
};

export default Shop;




