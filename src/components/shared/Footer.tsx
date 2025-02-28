import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#1a1f2c] dark:text-white/70'>
      <div className='max-w-7xl mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <img
                src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740732680/logo_ca9vrq.png'
                alt='Probike Logo'
              />
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-400'>
                Adress: 3497 Watson Street Camden, NJ 08102
              </p>
              <p className='text-sm text-gray-400'>
                Phone: +(123) 456-789-0123
              </p>
              <p className='text-sm text-gray-400'>Email: info@templaza.com</p>
            </div>
            <div className='flex space-x-4 pt-4'>
              <a href='#' className='hover:text-white transition-colors'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700'>
                  <i className='fab fa-facebook-f'></i>
                </div>
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700'>
                  <i className='fab fa-behance'></i>
                </div>
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700'>
                  <i className='fab fa-linkedin-in'></i>
                </div>
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700'>
                  <i className='fab fa-twitter'></i>
                </div>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-white mb-6 hover:underline'>
              Company
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Our Bikes
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Article & News
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-white mb-6 hover:underline'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Bikes for Rent
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Our Shop
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Top Dealers
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Dealer Register
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Our Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-white mb-6 hover:underline'>
              Help Center
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-white transition-colors'>
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-white mb-6 hover:underline'>
              Opening hours
            </h3>
            <ul className='space-y-3'>
              <li className='flex justify-between'>
                <span>Mon - Fri</span>
                <span>08:00 - 22:00</span>
              </li>
              <li className='flex justify-between'>
                <span>Saturday</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className='flex justify-between'>
                <span>Sunday</span>
                <span>08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm'>
              Copyright © 2025{' '}
              <span className='text-primary hover:underline'>
                Cycle Planet Shop
              </span>
              . All Rights Reserved
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                to='#'
                className='text-sm hover:text-white transition-colors hover:underline'
              >
                Terms & Conditions
              </Link>
              <Link
                to='#'
                className='text-sm hover:text-white transition-colors hover:underline'
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
