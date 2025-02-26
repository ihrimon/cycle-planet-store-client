// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { MoreVertical, Star } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { recentReviews } from '@/types/review';

// const RecentReviews = () => {
//   return (
//     <Card className='w-full'>
//       <CardHeader className='flex flex-row items-center justify-between'>
//         <CardTitle>Recent reviews</CardTitle>
//         <Button variant='ghost' size='icon'>
//           <MoreVertical className='h-4 w-4' />
//         </Button>
//       </CardHeader>
//       <CardContent className='space-y-4'>
//         {recentReviews.map((review) => (
//           <div
//             key={review.id}
//             className='flex items-center justify-between gap-4 rounded-lg p-2 hover:bg-muted/50'
//           >
//             <div className='flex items-center gap-3'>
//               <div className='h-12 w-12 rounded-lg border p-1'>
//                 <img
//                   src={review.productImage}
//                   alt={review.productName}
//                   className='h-full w-full object-cover'
//                 />
//               </div>
//               <div className='space-y-1'>
//                 <h4 className='text-sm font-medium'>{review.productName}</h4>
//                 <p className='text-xs text-muted-foreground'>
//                   Reviewed by {review.reviewedBy}
//                 </p>
//               </div>
//             </div>
//             <div className='flex'>
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <Star
//                   key={index}
//                   className={`h-4 w-4 ${
//                     index < review.rating
//                       ? 'fill-yellow-400 text-yellow-400'
//                       : 'fill-gray-200 text-gray-200'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

// export default RecentReviews;
