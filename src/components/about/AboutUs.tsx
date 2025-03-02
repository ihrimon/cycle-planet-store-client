import {
  Bike,
  Wrench,
  RefreshCw,
  Headphones,
  CircleCheckBig,
} from 'lucide-react';
import CustomBadge from '../shared/CustomBadge';

const AboutUs = () => {
  const features = [
    {
      icon: <Bike size={36} />,
      title: 'Versatile Mountain & Road Bikes',
      description:
        'From smooth city commutes to rugged mountain trails, our bikes are built for every adventure. Ride with confidence, comfort, and speed.',
    },
    {
      icon: <Wrench size={36} />,
      title: 'Pro Assembly & Quality Check',
      description:
        'Every bike is professionally assembled and tested to ensure top performance and durability, so you get a hassle-free ride.',
    },
    {
      icon: <RefreshCw size={36} />,
      title: '30-Day Risk-Free Returns',
      description:
        'We guarantee satisfaction. Return your bike within 30 days—hassle-free, stress-free, no questions asked.',
    },
    {
      icon: <Headphones size={36} />,
      title: 'Dedicated Local Support & Service',
      description:
        'Need assistance? Our expert support team is always here to help with maintenance, upgrades, and all your biking needs online and in store.',
    },
  ];

  const services = [
    'Expert Bike Assembly & Tuning for Optimal Performance',
    'Comprehensive Repair & Maintenance Services',
    'Custom Bike Fitting for Maximum Comfort & Efficiency',
    'E-Bike Battery Health Check & Replacement',
    'Premium Accessories & Upgrades Installation',
    'Hassle-Free Trade-In & Buyback Program',
    'Fast & Secure Home Delivery Services',
    '24/7 Customer Support & Consultation',
  ];

  return (
    <div className='py-16 px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-12'>
          <div className='mb-16 max-w-3xl'>
            <CustomBadge text='About Us' />
            <h2 className='text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f9f9f9c9] to-gray-700'>
              Riding Forward with Innovation & Passion for Over 20 Years!
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl'>
              Cycle Planet redefines the ride—built for speed, comfort, and
              adventure. With advanced tech and expert craftsmanship, cycling
              has never been smoother or more exciting.
            </p>
            <ul className='space-y-2 mt-4'>
              {services.map((service, index) => (
                <li
                  key={index}
                  className='flex items-center gap-2 hover:underline text-gray-300'
                >
                  <CircleCheckBig size={16} className='text-primary' />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className='max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {features.map((feature) => (
              <div className='p-6 hover:bg-gray-700/20 hover:border hover:border-primary/10 rounded-lg'>
                <div className='flex flex-col space-y-4 hover:text-primary'>
                  <div className='p-2 text-primary'>{feature.icon}</div>
                  <h3 className='text-xl font-bold dark:text-gray-300'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
