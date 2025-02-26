import { motion } from 'framer-motion';
import Container from '../shared/Container';

const Gallery = () => {

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800',
      span: 'row-span-2',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=800',
      span: '',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=800',
      span: 'row-span-2',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
      span: '',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
      span: 'row-span-2',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1494955464529-790512c65305?w=800',
      span: '',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
      span: '',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
      span: 'row-span-2',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800',
      span: 'row-span-3',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?w=800',
      span: 'row-span-2',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
      span: 'row-span-2',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1494955464529-790512c65305?w=800',
      span: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };


  return (
    <Container>
      <div className='mx-auto px-4 py-8'>
        <div className='mb-8 text-center'>
          <span className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800'>
            Photo Gallery
          </span>
          <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Cycling Adventures
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Explore the world of cycling through our curated collection
          </p>
        </div>

        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.20,
                zIndex: 10,
                transition: { duration: 0.5 },
              }}
              className={`relative group overflow-hidden rounded-xl transition-all duration-500 ${image.span}`}
            >
              <div className='h-full w-full'>
                <motion.img
                  src={image.src}
                  alt={`Cycling scene ${image.id}`}
                  className='object-cover w-full h-full'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1 }}
                  loading='lazy'
                />
              </div>
              <motion.div
                className='absolute inset-0 bg-black bg-opacity-0 '
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default Gallery;
