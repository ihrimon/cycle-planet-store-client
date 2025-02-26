import { MoveRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

const Banner = ({ title, breadcrumbs = [] }: BannerProps) => {
  return (
    <div className='bg-slate-900'>
      <div className='bg-slate-900 max-w-[1280px] mx-auto relative w-full h-64'>
        <div className='py-[80px]'>
          <h1 className='text-4xl md:text-6xl font-bold'>{title}</h1>
          <nav className='flex items-center space-x-2 text-sm font-medium mb-4 text-gray-300'>
            <Link
              to='/'
              className='flex items-center hover:text-white transition-colors duration-200'
            >
              Home
            </Link>
            {breadcrumbs.map((item) => (
              <React.Fragment key={item.label}>
                <MoveRight className='h-4 w-4 text-gray-400' />
                {item.href ? (
                  <Link
                    to={item.href}
                    className='hover:text-white transition-colors duration-200'
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className='text-white'>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
        <h1 className='absolute right-8 bottom-[-1.25rem] text-[100px] md:text-[200px] font-bold opacity-5 select-none'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
