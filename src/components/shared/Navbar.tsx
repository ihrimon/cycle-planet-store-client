import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/redux/hook';
import { currentUser } from '@/redux/features/auth/authSlice';
import { Profile } from '../profile/Profile';
import logo from '../../../public/logo.png';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(currentUser);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='max-w-7xl flex items-center justify-between py-4 px-4 lg:px-0 md:px-6 mx-auto top-0 z-50 relative'>
      {/* Logo */}
      <div>
        <Link to={'/'} className='cursor-pointer'>
          <img src={logo} alt='logo' className='w-20 md:w-28 lg:w-32 xl:w-36' />
        </Link>
      </div>

      <button
        className='block lg:hidden p-2 text-white hover:text-primary'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Navlinks */}
      <div
        className={cn(
          'lg:flex items-center absolute lg:static top-20 right-10 text-sm lg:text-base lg:right-0 bg-gray-500/20 lg:bg-transparent p-4 lg:p-0 rounded-md lg:rounded-none shadow-lg lg:shadow-none',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <ul className='flex items-center justify-between text-center text-white gap-1 '>
          {navLinks.map((link) => (
            <li
              key={link.path}
              className='lg:w-[80px] w-14 transition-all duration-200 ease-in-out transform hover:scale-105'
            >
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'border lg:px-4 lg:py-2 px-2 py-1 rounded-full'
                    : 'hover:lg:bg-primary hover:lg:px-3 hover:lg:py-2 rounded-full'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login Register and Profile */}
      <div className='hidden md:flex items-center gap-3'>
        {user ? (
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3'>
              <Link to={'/cart'}>
                <Heart size={20} />
              </Link>
              <Link to={'/wish-list'}>
                <ShoppingCart size={20} />
              </Link>
            </div>
            <Profile />
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            <Register />
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
