import { Bike, Settings, RotateCw, Headset, CircleCheckBig } from 'lucide-react';
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className='p-6 hover:bg-green-100/50 hover:border-green-500'>
    <div className='flex flex-col space-y-4'>
      <div className='p-2'>{icon}</div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-muted-foreground leading-relaxed'>{description}</p>
    </div>
  </div>
);
const AboutUs = () => {
  const features = [
    {
      icon: <Bike className='w-12 h-12 text-green-500' />,
      title: 'Moutain & Road Bike',
      description:
        "Whether you want to commute through the city, enjoy your new favorite byways or tackle the great outdoors. It's so easy and powerful.",
    },
    {
      icon: <Settings className='w-12 h-12 text-green-500' />,
      title: 'Professional Assembly',
      description:
        "Just how far and how fast you can go depends on many factors, such as how much you're pedalling in the highest power mode.",
    },
    {
      icon: <RotateCw className='w-12 h-12 text-green-500' />,
      title: '30 Day No Hassle Return',
      description:
        "Jump on board, it's easy. Just press play, that's easy too. Select the power mode, pedal away, and our motors will help propel you along.",
    },
    {
      icon: <Headset className='w-12 h-12 text-green-500' />,
      title: 'Local Service & Support',
      description:
        "All the ride information you'll need is displayed right there on the control panel in front. You'll wonder why you haven't done this before.",
    },
  ];
  return (
    <div className='py-16 px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-12'>
          <div className='mb-16 max-w-3xl'>
            <p className='text-green-500 font-medium mb-4'>ABOUT US</p>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
              Trust Over 20 Years
              <br />
              Of Experience And
              <br />
              Passion!
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl'>
              This is just like riding a bicycle, only even better with an
              electric bike you have a battery-powered motor to assist you along
              the way.
            </p>
            <ul className='space-y-2 mt-4'>
              <li className='flex items-center gap-2'>
                <CircleCheckBig size={16} className='text-green-500' />{' '}
                Battery-powered motor to assist you along
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheckBig size={16} className='text-green-500' /> Awesome
                memory to assist you along
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheckBig size={16} className='text-green-500' />{' '}
                Battery-powered motor to assist you along
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheckBig size={16} className='text-green-500' />{' '}
                Battery-powered motor to assist you along
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheckBig size={16} className='text-green-500' />{' '}
                Battery-powered motor to assist you along
              </li>
            </ul>
            {/* <img
              src='../../../public/1.png'
              alt=''
              className='grayscale opacity-5 object-cover w-[400px]'
            /> */}
          </div>
          <div className='max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {features.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
