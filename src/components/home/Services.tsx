import {
  Bike,
  Mountain,
  Leaf,
  BellElectric,
  Rotate3D,
  BinaryIcon,
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Mountain />,
      category: 'Mountain',
    },
    {
      icon: <Rotate3D />,
      category: 'Road',
    },
    {
      icon: <Bike />,
      category: 'Hybrid',
    },
    {
      icon: <BinaryIcon />,
      category: 'BMX',
    },
    {
      icon: <BellElectric />,
      category: 'Electric',
    },
    {
      icon: <Leaf />,
      category: 'Gravel',
    },
  ];

  return (
    <div className='dark:bg-gray-900/70'>
      <div className='max-w-7xl py-6 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
          {services.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-1 lg:grid-cols-2 rounded-lg p-6'
            >
              <div className='flex items-center gap-3'>
                <span>{item.icon}</span>
                <h3 className='text-lg'>{item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
