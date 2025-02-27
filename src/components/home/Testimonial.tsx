import Container from '../shared/Container';
import { Separator } from '../ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const testimonials = [
  {
    name: 'Andrew Rathore',
    role: 'Executive',
    content:
      'We are idea generators, goal seekers, creators of unique internet projects. We deliver web technologies.',
    image: '/customer-17.jpg',
    rating: 5,
  },
  {
    name: 'Sophia Johnson',
    role: 'Manager',
    content:
      'Our goal is to create innovative web solutions that help businesses thrive in the digital age.',
    image: '/customer-7.jpg',
    rating: 4,
  },
  {
    name: 'Michael Smith',
    role: 'Designer',
    content:
      'We believe in delivering the best customer experience through creative solutions and modern technologies.',
    image: '/customer-9.jpg',
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <Container>
      <div className='mx-12'>
        <div className='text-center space-y-2'>
          <h3 className='text-primary text-xl font-semibold'>Testimonial</h3>
          <h1 className='text-3xl font-semibold'>
            What The People Thinks{' '}
            <span className='text-primary'>Cycle Planet</span>
          </h1>
        </div>

        <div className='m-10'>
          <Carousel className='w-full'>
            <CarouselContent className='flex mx-12'>
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='sm:basis-full md:basis-1/2 flex-shrink-0 px-2 snap-center'
                >
                  <div key={index} className='relative flex w-[500px]'>
                    <div className='bg-gray-50/20 pl-6 pr-10 rounded-[10px] py-10 space-y-2'>
                      <h3 className='font-semibold w-14'>{item.name}</h3>
                      <small>{item.role}</small>
                      <Separator className='w-[60px]' />
                      <p className='text-primary text-3xl'>
                        {'*'.repeat(item.rating)}
                      </p>
                    </div>
                    <div className='absolute top-0 bottom-0 ml-[100px] flex items-center gap-3'>
                      <img
                        src={item.image}
                        alt=''
                        className='w-[120px] h-[120px] rounded-lg'
                      />
                      <small>{item.content}</small>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='md:flex -left-8 group-hover:opacity-100 transition-opacity' />
            <CarouselNext className='md:flex -right-8 group-hover:opacity-100 transition-opacity' />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;

