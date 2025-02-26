// import { ArrowRight } from 'lucide-react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

// const features = [
//   {
//     title: 'Double Wall Rims',
//     description:
//       'Maecenas volutpat blandit aliquam etiam erat velit scelerisque feugiat vivamus at augerat',
//   },
//   {
//     title: 'Carbon Steel Frame',
//     description:
//       'Augue neque gravida in fermentum et sollicitudin. Sed id semper risus in hendrerit gravida rutru',
//   },
//   {
//     title: 'Suspension Fork',
//     description:
//       'Blandit aliquam etiam erat velit scelerisque in dictum non conse volutpat sed ctetur',
//   },
// ];



// const Inspiration = () => {
//   return (
//     <div className='min-h-screen'>
//       <img src={'../../../public/inspiration.png'} alt="" />
//       <main className='container mx-auto px-4 py-8'>
//         <div className='relative h-[80vh] flex items-center'>
//           <div className='absolute top-8 right-8 z-10'>
//             <h1 className='text-4xl md:text-6xl font-bold tracking-wider'>
//               SMART E-BIKE
//             </h1>
//           </div>

//           <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1/2'>
//             <img
//               src='/lovable-uploads/75e1919a-38c3-425c-82df-1da174ca4ff5.png'
//               alt='Smart E-Bike'
//               className='w-full h-auto object-contain'
//             />
//           </div>

//           {/* Features Carousel */}
//           <div className='absolute right-0 top-1/2 w-1/2 -translate-y-1/2'>
//             <Carousel className='w-full max-w-xl'>
//               <CarouselContent>
//                 {features.map((feature, index) => (
//                   <CarouselItem key={index}>
//                     <div className='p-6 bg-white/80 backdrop-blur-sm'>
//                       <h3 className='text-xl font-semibold mb-3'>
//                         {feature.title}
//                       </h3>
//                       <p className='text-gray-600 mb-4'>
//                         {feature.description}
//                       </p>
//                       <button className='flex items-center gap-2 text-black hover:gap-3 transition-all'>
//                         Explore
//                         <ArrowRight className='h-4 w-4' />
//                       </button>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <div className='flex justify-center mt-4'>
//                 <CarouselPrevious />
//                 <CarouselNext />
//               </div>
//             </Carousel>
//           </div>
//         </div>
        
//       </main>
//     </div>
//   );
// };

// export default Inspiration;

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const bikeFeature = [
  {
    title: 'Double Wall Rins',
    description:
      'printing and typesetting industry. Lorem has been the ever it',
    explore: 'Explore',
  },
  {
    title: 'Double Wall Rins',
    description:
      'printing and typesetting industry. Lorem has been the ever it',
    explore: 'Explore',
  },
  {
    title: 'Double Wall Rins',
    description:
      'printing and typesetting industry. Lorem has been the ever it',
    explore: 'Explore',
  },
  {
    title: 'Double Wall Rins',
    description:
      'printing and typesetting industry. Lorem has been the ever it',
    explore: 'Explore',
  },
  {
    title: 'Double Wall Rins',
    description:
      'printing and typesetting industry. Lorem has been the ever it',
    explore: 'Explore',
  },
];

const inspirations = [
  {
    number: '01',
    text: 'Neque ornare aenean euismod elementum',
  },
  {
    number: '02',
    text: 'Mi tempus imperdiet nulla malesuada',
  },
  {
    number: '03',
    text: 'Luctus accumsan tortor posuere ac sequat semper',
  },
];

const Inspiration = () => {
  return (
    <div>
      <img src={'../../../public/inspiration.png'} alt='' />
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-1/2 mx-auto ml-auto container'
      >
        <CarouselContent>
          {bikeFeature.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className=''>
                <Card className='flex items-center rounded-none h-[200px] bg-gray-100'>
                  <CardContent className='p-6  space-y-3'>
                    <h3 className='font-semibold'>{item.title}</h3>
                    <p className='pb-3'>{item.description}</p>
                    <Link
                      to={'/shop'}
                      className='border-b-2 font-semibold pb-1'
                    >
                      Explore
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='mx-auto container border'>
        <h2 className='text-4xl font-bold text-center'>INSPIRATION</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 border container'>
          {inspirations.map((item, index) => (
            <div key={index} className='flex items-center border'>
              <span className='text-3xl font-bold'>{item.number}</span>
              <div className='w-1 h-8 bg-pink-500 mx-4'></div>
              <p className='text-gray-600'>{item.text}</p>
            </div>
          ))}
        </div>
        {' '}
      </div>
    </div>
  );
};

export default Inspiration;
