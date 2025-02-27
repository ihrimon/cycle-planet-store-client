import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductDescription from './ProductDescription';
import Specification from './Specification';
import AddReviews from './AddReviews';

const ProductTabs = () => {
  return (
    <div className='border'>
      <Tabs defaultValue='description' className='w-full max-w-3xl mx-auto'>
        <TabsList className='grid w-full grid-cols-3 mb-8'>
          <TabsTrigger
            value='description'
            className='py-2 data-[state=active]:border-primary data-[state=active]:text-primary'
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value='specification'
            className='py-2 data-[state=active]:border-primary data-[state=active]:text-primary'
          >
            Specification
          </TabsTrigger>
          <TabsTrigger
            value='reviews'
            className='py-2 data-[state=active]:border-primary data-[state=active]:text-primary'
          >
            Reviews (12)
          </TabsTrigger>
        </TabsList>
        <TabsContent value='description' className='mt-6'>
          <div className='prose max-w-none'>
            <ProductDescription />
          </div>
        </TabsContent>
        <TabsContent value='specification' className='mt-6'>
          <Specification />
        </TabsContent>
        <TabsContent value='reviews' className='mt-6'>
          <AddReviews />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
