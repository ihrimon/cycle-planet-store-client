import Container from '../shared/Container';
import { motion } from 'framer-motion';
import {
  Settings,
  Bike,
  Truck,
  CreditCard,
  Wrench,
  Users,
} from 'lucide-react';
const WhyChooseUs = () => {

  const items = [
    {
      icon: <Bike size={18} />,
      title: 'High-Quality Products',
      description:
        'Premium bicycles and accessories from trusted global and local brands.',
    },
    {
      icon: <Wrench size={18} />,
      title: 'Custom Bike Builder',
      description:
        'Customize your bike by selecting frame, gears, tires, and more.',
    },
    {
      icon: <Truck size={18} />,
      title: 'Fast & Secure Delivery',
      description:
        'Get your bike delivered quickly and track your order in real-time.',
    },
    {
      icon: <CreditCard size={18} />,
      title: 'Flexible Payment Options',
      description:
        'Pay with Stripe, bKash, Nagad, Rocket, or Credit/Debit Cards.',
    },
    {
      icon: <Users size={18} />,
      title: 'Exclusive Membership',
      description:
        'Join our loyalty program and get special offers & cycling tips.',
    },
    {
      icon: <Settings size={18} />,
      title: 'Bike Servicing & Repair',
      description:
        'Book online for maintenance & repair services at your convenience.',
    },
  ];

  return (
    <Container>
      <div className='mx-auto'>
        <div>
          <h1 className='text-center font-bold text-4xl text-primary mb-8'>
            Why Choose Us
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <img
              src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740587415/i4y4xo7g5dqobgnqzve8.png'
              alt=''
              className='object-cover w-[70%] pl-16 pt-12'
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className='p-4 space-y-3 rounded-md overflow-hidden bg-gray-50 dark:bg-gray-700/20'
                whileHover={{
                  background:
                    'linear-gradient(100deg, #84cc16 0%, #1a2430 100%)',
                  zIndex: 10,
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center gap-2'>
                  <span>{item.icon}</span>
                  <h3 className='font-semibold text-lg'>{item.title}</h3>
                </div>
                <p className='text-sm text-muted-foreground hover:text-white'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
