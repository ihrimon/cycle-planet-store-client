import { motion } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';

const Phone = () => {
  return (
    <motion.div
      className='relative w-20 h-20 flex items-center justify-center border border-transparent rounded-md'
      whileHover='hover'
    >
      <motion.div
        className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-400 '
        variants={{
          hover: { width: '100%', height: '100%' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-400 '
        variants={{
          hover: { width: '100%', height: '100%' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-400'
        variants={{
          hover: { width: '100%', height: '100%' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-400'
        variants={{
          hover: { width: '100%', height: '100%' },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Phone Icon */}
      <PhoneIcon className='w-24' size={20} />
    </motion.div>
  );
};

export default Phone;
