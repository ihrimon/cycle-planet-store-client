import { Settings2 } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
    {
      icon: <Settings2 />,
      category: 'Mountain',
    },
  ];

  return (
    <div className='dark:bg-gray-900/70'>
      <div className='max-w-7xl py-6 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
          {services.map((item, index) => (
            <div
              key={index}
              className='flex items-center mx-6 gap-6 border rounded-lg p-6'
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
