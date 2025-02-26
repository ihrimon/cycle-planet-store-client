// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { topSellingProducts } from '@/types/product';

// export const TopSellingProducts = () => {
//   return (
//     <Card className='w-full'>
//       <CardHeader className='flex flex-row items-center justify-between'>
//         <CardTitle>Top selling product</CardTitle>
//         <Button variant='ghost' size='sm' className='text-purple-600'>
//           View all
//         </Button>
//       </CardHeader>
//       <CardContent>
//         <div className='rounded-md border'>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Product</TableHead>
//                 <TableHead>Category</TableHead>
//                 <TableHead>Total sale</TableHead>
//                 <TableHead>Stock</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {topSellingProducts.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>
//                     <div className='flex items-center gap-3'>
//                       <div className='h-12 w-12 rounded-md border p-1'>
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className='h-full w-full object-cover'
//                         />
//                       </div>
//                       <div className='font-medium'>{product.name}</div>
//                     </div>
//                   </TableCell>
//                   <TableCell>{product.category}</TableCell>
//                   <TableCell>${product.totalSale.toFixed(2)}</TableCell>
//                   <TableCell>
//                     <Badge
//                       variant={product.inStock ? 'default' : 'destructive'}
//                       className={`${
//                         product.inStock
//                           ? 'bg-green-100 text-green-800 hover:bg-green-100'
//                           : 'bg-red-100 text-red-800 hover:bg-red-100'
//                       }`}
//                     >
//                       {product.inStock ? 'In stock' : 'Out of stock'}
//                     </Badge>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };
