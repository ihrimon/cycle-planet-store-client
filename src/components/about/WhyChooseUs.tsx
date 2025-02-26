import { Settings } from 'lucide-react';
import Container from '../shared/Container';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const items = [
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
    {
      icon: <Settings />,
      title: 'Strong Service',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero eaque eum iste consequuntur',
    },
  ];

  return (
    <Container>
      <div className='mx-auto'>
        <div>
          <h1 className='text-center font-bold text-3xl text-green-500 mb-6'>
            Why Choose Us
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <img src='../../../public/5.png' alt='' className='object-cover' />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className='relative p-4 space-y-3 rounded-lg bg-gray-50 overflow-hidden'
                whileHover={{
                  background: 'linear-gradient(to right, #bbf7d0, #f0fdf4)',
                  zIndex: 10,
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center gap-2'>
                  <span>{item.icon}</span>
                  <h3 className='font-semibold text-lg'>{item.title}</h3>
                </div>
                <p className='text-sm'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
