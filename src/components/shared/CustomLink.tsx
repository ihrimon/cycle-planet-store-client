import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface CustomLinkProps {
  product: { _id: string }; 
  children: ReactNode;
}

const CustomLink = ({ product, children }: CustomLinkProps) => {
  return (
    <Link
      to={`/shop/product-details/${product._id}`}
      state={{ product }}
      className='text-orange-500'
    >
      {children}
    </Link>
  );
};

export default CustomLink;
