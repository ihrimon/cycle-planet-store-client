import React from 'react';
import {
  Brain,
  Palette,
  Code,
  
  Database,
  Megaphone,
  HandshakeIcon,
  Laptop,
  Video,
  Pill,
} from 'lucide-react';

interface Category {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const categories: Category[] = [
  {
    title: 'Business Management',
    icon: <Brain className='h-6 w-6' />,
    bgColor: 'bg-[#F2FCE2]',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Arts & Design',
    icon: <Palette className='h-6 w-6' />,
    bgColor: 'bg-[#FFDEE2]',
    iconColor: 'text-pink-500',
  },
  {
    title: 'Personal Development',
    icon: <Code className='h-6 w-6' />,
    bgColor: 'bg-[#E5F5E7]',
    iconColor: 'text-primary',
  },
  {
    title: 'Health & Fitness',
    icon: <Pill className='h-6 w-6' />,
    bgColor: 'bg-[#FEF7CD]',
    iconColor: 'text-yellow-500',
  },
  {
    title: 'Data Science',
    icon: <Database className='h-6 w-6' />,
    bgColor: 'bg-[#E5DEFF]',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Marketing',
    icon: <Megaphone className='h-6 w-6' />,
    bgColor: 'bg-[#FFE5E5]',
    iconColor: 'text-red-500',
  },
  {
    title: 'Business & Finance',
    icon: <HandshakeIcon className='h-6 w-6' />,
    bgColor: 'bg-[#E0E7FF]',
    iconColor: 'text-indigo-500',
  },
  {
    title: 'Computer Science',
    icon: <Laptop className='h-6 w-6' />,
    bgColor: 'bg-[#FDE1D3]',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Video & Photography',
    icon: <Video className='h-6 w-6' />,
    bgColor: 'bg-[#D3E4FD]',
    iconColor: 'text-blue-500',
  },
];

const Categories = () => {
  return (
    <div className='py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Top Categories</h2>
        <div className='relative'>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore
          </p>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
            <svg width='120' height='12' viewBox='0 0 120 12' fill='none'>
              <path
                d='M0 6C20 6 40 0 60 0C80 0 100 12 120 6'
                stroke='#10B981'
                strokeWidth='2'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
        {categories.map((category) => (
          <div
            key={category.title}
            className={`${category.bgColor} group p-6 rounded-xl flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
          >
            <div
              className={`${category.iconColor} transition-transform duration-300 group-hover:scale-110`}
            >
              {category.icon}
            </div>
            <h3 className='text-lg font-semibold'>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
