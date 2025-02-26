// import { Star } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// interface IClientReview {
//   id: string;
//   rating: number;
//   text: string;
//   author: {
//     name: string;
//     role: string;
//     avatar: string;
//   };
// }

// const reviews: IClientReview[] = [
//   {
//     id: '1',
//     rating: 5,
//     text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo.",
//     author: {
//       name: 'Socrates Itumay',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80',
//     },
//   },
//   {
//     id: '2',
//     rating: 5,
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id libero reprehenderit accusantium nisi. Dolorum hic voluptas quia id.',
//     author: {
//       name: 'Eos Tempor',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&q=80',
//     },
//   },
//   {
//     id: '3',
//     rating: 5,
//     text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.",
//     author: {
//       name: 'Airi Satou',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&q=80',
//     },
//   },
//   {
//     id: '4',
//     rating: 5,
//     text: 'All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     author: {
//       name: 'Mc Greggor',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80',
//     },
//   },
//   {
//     id: '5',
//     rating: 5,
//     text: 'If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem ipsum generators on the Internet tend to repeat Various versions have evolved over the years.',
//     author: {
//       name: 'Samantha Paul',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&q=80',
//     },
//   },
//   {
//     id: '6',
//     rating: 5,
//     text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestas, officia, inventore incidunt aliquid amet nihil exercitationem, modi possimus voluptate molestiae explicabo assumenda.',
//     author: {
//       name: 'Pope Johnson',
//       role: 'UI DEVELOPER',
//       avatar:
//         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&q=80',
//     },
//   },
// ];

// function ClientReviews() {
//   return (
//     <div className='py-12 px-4 md:px-6 lg:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <h2 className='text-3xl font-bold text-center                                                    mb-12'>
//           Our Clients Reviews
//         </h2>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {reviews.map((review) => (
//             <Card key={review.id} className='bg-white'>
//               <CardContent className='p-6'>
//                 <div className='flex gap-1 mb-4'>
//                   {Array.from({ length: review.rating }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className='w-5 h-5 fill-yellow-400 text-yellow-400'
//                     />
//                   ))}
//                 </div>
//                 <p className='text-gray-600 mb-6 line-clamp-4'>{review.text}</p>
//                 <div className='flex items-center gap-4'>
//                   <img
//                     src={review.author.avatar}
//                     alt={review.author.name}
//                     className='w-12 h-12 rounded-full object-cover'
//                   />
//                   <div>
//                     <h4 className='font-semibold text-gray-900'>
//                       {review.author.name}
//                     </h4>
//                     <p className='text-sm text-gray-500'>
//                       {review.author.role}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClientReviews;
