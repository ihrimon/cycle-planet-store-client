// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { X, ZoomIn } from 'lucide-react';
// import Container from '../shared/Container';
// import CustomBadge from '../shared/CustomBadge';

// const Modal = ({ onClose, children }) => {
//   return (
//     <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className='relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full'
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className='absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition'
//         >
//           <X className='w-5 h-5 text-gray-700' />
//         </button>
//         {/* Modal Content */}
//         <div className='flex items-center justify-center p-4'>{children}</div>
//       </motion.div>
//     </div>
//   );
// };

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     {
//       id: 1,
//       src: 'https://images.unsplash.com/photo-1534146789009-76ed5060ec70?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-2',
//     },
//     {
//       id: 2,
//       src: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=800',
//       span: '',
//     },
//     {
//       id: 3,
//       src: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=800',
//       span: 'row-span-2',
//     },
//     {
//       id: 4,
//       src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
//       span: '',
//     },
//     {
//       id: 5,
//       src: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-2',
//     },
//     {
//       id: 6,
//       src: 'https://images.unsplash.com/photo-1729873934168-5d69dd3f6619?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: '',
//     },
//     {
//       id: 7,
//       src: 'https://images.unsplash.com/photo-1605050825077-289f85b6cf43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: '',
//     },
//     {
//       id: 8,
//       src: 'https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-2',
//     },
//     {
//       id: 9,
//       src: 'https://plus.unsplash.com/premium_photo-1664304641192-279634bdb266?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-3',
//     },
//     {
//       id: 10,
//       src: 'https://plus.unsplash.com/premium_photo-1661630562023-cb2b32980dc7?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-2',
//     },
//     {
//       id: 11,
//       src: 'https://images.unsplash.com/photo-1737879814020-46bf12e7bc5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: 'row-span-2',
//     },
//     {
//       id: 12,
//       src: 'https://images.unsplash.com/photo-1720638239931-8dfab31eedf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       span: '',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.1, duration: 0.8 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//   };

//   return (
//     <Container>
//       <div className='mx-auto px-4 py-8'>
//         <div className='mb-8 text-center'>
//           <CustomBadge text='Gallery' />
//           <h1 className='mt-4 text-5xl font-bold text-primary'>
//             Cycling Adventures
//           </h1>
//           <p className='mt-4 text-lg text-muted-foreground'>
//             Explore the world of cycling through our curated collection
//           </p>
//         </div>

//         <motion.div
//           className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]'
//           variants={containerVariants}
//           initial='hidden'
//           animate='visible'
//         >
//           {images.map((image) => (
//             <motion.div
//               key={image.id}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               className={`relative group overflow-hidden rounded-xl transition-all duration-500 ${image.span}`}
//             >
//               <motion.img
//                 src={image.src}
//                 alt={`Cycling scene ${image.id}`}
//                 className='object-cover w-full h-full'
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 loading='lazy'
//               />

//               {/* Hover Effect */}
//               <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center'>
//                 <button
//                   className='opacity-0 group-hover:opacity-100 transition duration-300 bg-white p-2 rounded-full shadow-lg'
//                   onClick={() => setSelectedImage(image.src)}
//                 >
//                   <ZoomIn className='w-6 h-6 text-gray-800' />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <Modal onClose={() => setSelectedImage(null)}>
//           <img
//             src={selectedImage}
//             alt='Zoomed Cycling'
//             className='max-w-full max-h-screen'
//           />
//         </Modal>
//       )}
//     </Container>
//   );
// };

// export default Gallery;
