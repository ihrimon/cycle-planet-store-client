// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Minus, Plus, X } from 'lucide-react';
// import Container from '@/components/shared/Container';
// import { Link } from 'react-router-dom';
// import {
//   useFetchAllCartsQuery,
//   useUpdateCartMutation,
//   useRemoveCartMutation,
// } from '@/redux/features/shoppingCart/shoppingCartApi';
// import { useState, useEffect } from 'react';

// const ShoppingCart = () => {
//   const { data: cartData, isLoading } = useFetchAllCartsQuery(undefined);
//   const [cartItems, setCartItems] = useState([]);
//   const [updateCart] = useUpdateCartMutation();
//   const [removeCart] = useRemoveCartMutation();

//   useEffect(() => {
//     if (cartData?.data) {
//       setCartItems(cartData.data);
//     }
//   }, [cartData]);

//   if (isLoading) return <div>Loading...</div>;

//   const updateQuantity = async (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     const previousState = [...cartItems];

//     setCartItems((items: any) =>
//       items.map((item: any) =>
//         item._id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );

//     try {
//       await updateCart({ id, data: { quantity: newQuantity } }).unwrap();
//     } catch (error) {
//       console.error('Failed to update quantity', error);
//       setCartItems(previousState); // Rollback on failure
//     }
//   };

//   const removeItem = async (id: string) => {
//     setCartItems((items) => items.filter((item) => item._id !== id));
//     await removeCart(id);
//   };

//   const totalAmount = cartItems.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );

//   return (
//     <Container>
//       <div className='container mx-auto px-4 py-8 max-w-7xl'>
//         <div className='flex items-center gap-2 mb-4'>
//           <button
//             onClick={() => window.history.back()}
//             className='text-gray-600 hover:text-gray-900'
//           >
//             ← Go Back
//           </button>
//         </div>

//         <h1 className='text-2xl font-semibold text-center mb-2'>
//           My Shopping Cart
//         </h1>
//         <div className='text-center text-gray-500 mb-8'>Home / Cart</div>

//         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
//           <div className='lg:col-span-2'>
//             <Table className='border'>
//               <TableHeader>
//                 <TableRow className='bg-foreground'>
//                   <TableHead className='w-[50%]'>Product Details</TableHead>
//                   <TableHead>Quantity</TableHead>
//                   <TableHead>Price</TableHead>
//                   <TableHead>Total</TableHead>
//                   <TableHead></TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {cartItems.map((item) => (
//                   <TableRow key={item._id}>
//                     <TableCell>
//                       <div className='flex items-center gap-4'>
//                         <img
//                           src={item.product.productImg[0]}
//                           alt={item.product.name}
//                           className='w-16 h-16 object-cover rounded'
//                         />
//                         <div>
//                           <div className='font-medium'>{item.product.name}</div>
//                           <div className='text-sm text-gray-500'>
//                             {item.customer.name}
//                           </div>
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <div className='flex items-center gap-2'>
//                         <Button
//                           variant='outline'
//                           size='icon'
//                           className='h-8 w-8 border-none'
//                           onClick={() =>
//                             updateQuantity(item._id, item.quantity - 1)
//                           }
//                         >
//                           <Minus className='h-4 w-4' />
//                         </Button>
//                         <Input
//                           type='text'
//                           value={item.quantity}
//                           onChange={(e) =>
//                             updateQuantity(item._id, parseInt(e.target.value))
//                           }
//                           className='w-10 h-8 text-center'
//                         />
//                         <Button
//                           variant='outline'
//                           size='icon'
//                           className='h-8 w-8 border-none'
//                           onClick={() =>
//                             updateQuantity(item._id, item.quantity + 1)
//                           }
//                         >
//                           <Plus className='h-4 w-4' />
//                         </Button>
//                       </div>
//                     </TableCell>
//                     <TableCell>${item.product.price.toFixed(2)}</TableCell>
//                     <TableCell>
//                       ${(item.product.price * item.quantity).toFixed(2)}
//                     </TableCell>
//                     <TableCell>
//                       <Button
//                         variant='ghost'
//                         size='icon'
//                         onClick={() => removeItem(item._id)}
//                         className='h-8 w-8 border rounded-full p-3'
//                       >
//                         <X className='h-4 w-4' />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           <div className='lg:col-span-1'>
//             <div className='p-6 rounded-lg shadow-sm border'>
//               <h2 className='text-xl font-semibold mb-4'>Total</h2>
//               <div className='space-y-4'>
//                 <div className='flex justify-between items-center'>
//                   <span>Sub-Total</span>
//                   <span>${totalAmount.toFixed(2)}</span>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                   <span>Delivery</span>
//                   <span className='text-gray-500'>
//                     Standard Delivery (Free)
//                   </span>
//                 </div>
//                 <Link to={'/check-out'}>
//                   <Button className='w-full bg-[#ea384c] hover:bg-[#d32d3f] text-white'>
//                     Check Out
//                   </Button>
//                 </Link>
//                 <div className='mt-6'>
//                   <h3 className='text-lg font-medium mb-4'>We Accept</h3>
//                   <div className='flex gap-4 justify-between'>
//                     <img src='/stripe.png' alt='Stripe' className='h-8 px-6' />
//                     <img
//                       src='/surjopay.png'
//                       alt='SurjoPay'
//                       className='h-10 px-6'
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ShoppingCart;
