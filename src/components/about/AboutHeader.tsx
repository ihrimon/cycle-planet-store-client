// import { Link } from 'react-router-dom';

// const AboutHeader = () => {
//   return (
//     <div className='relative w-full h-[300px] bg-[#E5F6FF] overflow-hidden'>
//       <div className='absolute right-0 bottom-0'>
//         <img
//           src='/lovable-uploads/a13c425d-2d11-43d0-9b8d-e694c77d44c0.png'
//           alt='Bicycle'
//           className='w-[600px] object-contain transform translate-y-16'
//         />
//       </div>
      // <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16'>
      //   <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
      //     About Us
      //   </h1>
      //   <nav className='flex' aria-label='Breadcrumb'>
      //     <ol className='flex items-center space-x-2'>
      //       <li>
      //         <Link to='/' className='text-gray-600 hover:text-gray-900'>
      //           Home
      //         </Link>
      //       </li>
      //       <li>
      //         <span className='text-gray-400 mx-2'>/</span>
      //       </li>
      //       <li className='text-gray-400'>About Us</li>
      //     </ol>
      //   </nav>
      // </div>
//     </div>
//   );
// };
// export default AboutHeader;

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  backgroundImage: string;
  className?: string;
}

const Banner: FC<BannerProps> = ({ title, backgroundImage, className }) => {
  return (
    <div
      className={cn(
        'relative w-full h-64 md:h-96 flex items-center justify-center text-white text-3xl font-bold',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/80 to-transparent'></div>

      {/* Title */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          About Us
        </h1>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='flex items-center space-x-2'>
            <li>
              <Link to='/' className='text-gray-600 hover:text-gray-900'>
                Home
              </Link>
            </li>
            <li>
              <span className='text-gray-400 mx-2'>/</span>
            </li>
            <li className='text-gray-400'>About Us</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
