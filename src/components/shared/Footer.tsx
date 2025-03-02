import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { companyLinks, contactInfo, helpCenterLinks, openingHours, quickLinks } from '@/constants';

const Footer = () => {
  const socialLinks = [
    { id: 1, href: '#', icon: <Facebook className='w-5 h-5 text-white' /> },
    { id: 2, href: '#', icon: <Youtube className='w-5 h-5 text-white' /> },
    { id: 3, href: '#', icon: <Linkedin className='w-5 h-5 text-white' /> },
    { id: 4, href: '#', icon: <Twitter className='w-5 h-5 text-white' /> },
  ];

  return (
    <footer className='bg-[#1a1f2c] dark:text-white/70'>
      <div className='max-w-7xl mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
          {/* company info */}
          <div className=''>
            <img
              src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740732680/logo_ca9vrq.png'
              alt='Cycle Planet Logo'
              className='mb-4'
            />
            <div className='space-y-2'>
              {contactInfo.map((info) => (
                <p key={info.id} className='text-sm hover:text-white transition-colors'>
                  <span className='font-semibold'>{info.label}:</span>{' '}
                  {info.value}
                </p>
              ))}
            </div>
            <div className='flex space-x-4 pt-4'>
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className='hover:text-white transition-colors'
                >
                  <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary'>
                    {link.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className='space-y-4 lg:pl-20'>
            <h3 className='text-xl font-semibold mb-6 transition-colors hover:text-white'>
              Company
            </h3>
            <ul className='space-y-3'>
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className='hover:text-white transition-colors hover:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 lg:pl-12'>
            <h3 className='text-xl font-semibold hover:text-white mb-6 transition-colors'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className='hover:text-white transition-colors hover:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div className='space-y-4 lg:pl-8'>
            <h3 className='text-xl font-semibold hover:text-white mb-6 transition-colors'>
              Help Center
            </h3>
            <ul className='space-y-3'>
              {helpCenterLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className='hover:text-white transition-colors hover:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold hover:text-white mb-6 transition-colors'>
              Opening Hours
            </h3>
            <ul className='space-y-3'>
              {openingHours.map((item) => (
                <li
                  key={item.id}
                  className='flex justify-between transition-colors hover:text-white'
                >
                  <span>{item.day}</span>
                  <span>{':'}</span>
                  <span>{item.time}</span>
                </li>
              ))}
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
