import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductDescription from './ProductDescription';
import Specification from './Specification';
import AddReviews from './AddReviews';

// interface ProductDetailsProps {
//   weight: string;
//   dimensions: string;
// }

// const ProductDetails = ({ weight, dimensions }: ProductDetailsProps) => (
//   <div className='space-y-4'>
//     <div className='grid grid-cols-2 border-b py-4'>
//       <div className='font-medium'>Weight</div>
//       <div className='text-gray-600'>{weight}</div>
//     </div>
//     <div className='grid grid-cols-2 border-b py-4'>
//       <div className='font-medium'>Dimensions</div>
//       <div className='text-gray-600'>{dimensions}</div>
//     </div>
//   </div>
// );

const ProductTabs = () => {
  return (
    <div className='border'>
      <Tabs defaultValue='description' className='w-full max-w-3xl mx-auto'>
        <TabsList className='grid w-full grid-cols-3 mb-8'>
          <TabsTrigger
            value='description'
            className='py-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500'
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value='specification'
            className='py-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500'
          >
            Specification
          </TabsTrigger>
          <TabsTrigger
            value='reviews'
            className='py-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500'
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
