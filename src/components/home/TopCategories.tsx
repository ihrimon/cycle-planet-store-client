import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';

const categories = [
  'All',
  'City',
  'Electric',
  'Gravel',
  'Kids',
  'Mountain',
  'Road',
];

const products = [
  {
    id: 1,
    title: 'City Commuter',
    category: 'Enduro',
    image: '../../../public/1.png',
    originalPrice: '$21,599.00 USD',
    salePrice: '$ 14,599.00 USD',
    isNew: true,
    type: 'Mountain',
  },
  {
    id: 2,
    title: 'Urban Explorer',
    category: 'Enduro',
    image: '../../../public/1.png',
    originalPrice: '$21,599.00 USD',
    salePrice: '$ 14,599.00 USD',
    type: 'City',
  },
  {
    id: 3,
    title: 'Urban Wanderer',
    category: 'Enduro',
    image: '../../../public/1.png',
    originalPrice: '$21,599.00 USD',
    salePrice: '$ 14,599.00 USD',
    isNew: true,
    type: 'Road',
  },
  {
    id: 3,
    title: 'Urban Wanderer',
    category: 'Enduro',
    image: '../../../public/1.png',
    originalPrice: '$21,599.00 USD',
    salePrice: '$ 14,599.00 USD',
    isNew: true,
    type: 'Electric',
  },
];

const TopCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.type === selectedCategory
  );

  return (
    <div className='py-8'>
      <div className='mx-auto max-w-7xl'>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
