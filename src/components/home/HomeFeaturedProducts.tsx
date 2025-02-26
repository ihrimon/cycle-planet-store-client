import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react';
import ProductCard from './ProductCard';
import HomeProductCard from './HomeProductCard';
import Container from '../shared/Container';

const products = [
  {
    name: 'Local Organic Green Broccoli',
    image: '../../../public/1.png',
    weight: '500 gm',
    price: 10.0,
    originalPrice: 12.0,
    rating: 4,
  },
  {
    name: 'Fresh Organic Pomegranate',
    image: '../../../public/2.png',
    weight: '500 gm',
    price: 11.0,
    originalPrice: 13.0,
    rating: 4.5,
  },
  {
    name: 'Organic Green Avocado',
    image: '../../../public/3.png',
    weight: '500 gm',
    price: 10.5,
    originalPrice: 12.5,
    rating: 4,
  },
  {
    name: 'Fresh Packaged Red Tomato',
    image: '../../../public/4.png',
    weight: '1000 gm',
    price: 18.55,
    originalPrice: 20.99,
    rating: 4,
  },
  {
    name: 'Local Organic Sweet Potato',
    image: '../../../public/5.png',
    weight: '500 gm',
    price: 18.0,
    originalPrice: 20.0,
    rating: 4.5,
  },
  {
    name: 'Fresh Red Bell Pepper',
    image: '../../../public/6.png',
    weight: '250 gm',
    price: 8.99,
    originalPrice: 10.99,
    rating: 4,
  },
  {
    name: 'Organic Baby Carrots',
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=300&h=300',
    weight: '500 gm',
    price: 7.5,
    originalPrice: 9.0,
    rating: 4.5,
  },
  {
    name: 'Fresh Green Asparagus',
    image:
      'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=300&h=300',
    weight: '250 gm',
    price: 12.99,
    originalPrice: 14.99,
    rating: 4,
  },
  {
    name: 'Organic Baby Carrots',
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=300&h=300',
    weight: '500 gm',
    price: 7.5,
    originalPrice: 9.0,
    rating: 4.5,
  },
  {
    name: 'Fresh Green Asparagus',
    image:
      'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=300&h=300',
    weight: '250 gm',
    price: 12.99,
    originalPrice: 14.99,
    rating: 4,
  },
];

const PRODUCTS_PER_PAGE = 4;
const DRAG_THRESHOLD = 50; // Minimum drag distance to trigger page change

const HomeFeaturedProducts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const distance = x - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(dragDistance) >= DRAG_THRESHOLD) {
      if (dragDistance > 0) {
        handlePrevPage();
      } else {
        handleNextPage();
      }
    }
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const visibleProducts = products.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  );

  return (
    <Container>
      <div className='mx-auto flex flex-col justify-between'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h2 className='text-3xl font-semibold'>
              Featured <span className='text-primary text-4xl'>Products</span>
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              Discover our handpicked selection of top-rated eco-friendly items.
              Limited-time offers and exclusive deals await!
            </p>
          </div>
          <div className='flex gap-3'>
            <button
              onClick={handlePrevPage}
              className='p-2  hover:border-green-600 hover:bg-green-500 hover:text-white hover:rounded-full transition-colors'
              aria-label='Previous page'
            >
              <MoveLeft />
            </button>
            <button
              onClick={handleNextPage}
              className='p-2 border-gray-200 hover:bg-green-500 hover:text-white hover:rounded-full hover:border-green-600 transition-colors'
              aria-label='Next page'
            >
              <MoveRight />
            </button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none transition-transform duration-300 ease-out ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            transform: isDragging
              ? `translateX(${dragDistance}px)`
              : 'translateX(0)',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {visibleProducts.map((product, index) => (
            <HomeProductCard key={`${currentPage}-${index}`} {...product} />
          ))}
        </div>
        <div className='flex justify-center mt-6'>
          <div className='flex gap-2'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? 'bg-primary w-[60px]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeFeaturedProducts;
