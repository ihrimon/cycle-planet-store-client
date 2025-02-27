// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { Button } from '../ui/button';
// import { useEffect, useState } from 'react';
// import { useFetchAllCartsQuery } from '@/redux/features/shoppingCart/shoppingCartApi';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import {
//   useAddOrderDetailsMutation,
//   useCreatePaymentIntentMutation,
// } from '@/redux/features/order/orderApi';

// interface CheckoutProps {
//   billingInfo: {
//     name: string;
//     email: string;
//     phone: string;
//     country: string;
//     state: string;
//     streetAddress: string;
//     city: string;
//     postcode: string;
//   };
// }

// const CheckoutForm = ({ billingInfo }: CheckoutProps) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState();
//   const navigate = useNavigate();
//   const { data: cartsData } = useFetchAllCartsQuery(undefined);
//   const [createPaymentIntent] = useCreatePaymentIntentMutation(undefined);
//   const [addOrderDetails] = useAddOrderDetailsMutation(undefined)

//   const carts = cartsData?.data as any;

//   const totalPrice = Math.round(
//     carts?.reduce((t: number, item: any) => t + item.total, 0) * 100
//   );


//   useEffect(() => {
//     if (totalPrice && totalPrice > 0) {
//       const createIntent = async () => {
//         try {
//           const res = await createPaymentIntent({amount: totalPrice});
//           setClientSecret(res.data?.data?.clientSecret);
//         } catch (error) {
//           console.error('Payment Intent Error:', error);
//         }
//       }
//       createIntent();
//     }
//   }, [totalPrice]);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     const card = elements.getElement(CardElement);

//     if (card === null) return;

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       toast(error.message, { duration: 3000 });
//     } else {
//       console.log('payment method: ', paymentMethod);
//     }

//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret!, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             // name: billingInfo.name,
//             email: billingInfo.email,
//           },
//         },
//       });

//     if (paymentIntent?.status === 'succeeded') {
//       console.log('✅ Payment succeeded:', paymentIntent);

//       const paymentDetails = {
//         cart:  carts.map(item: any => item._id),
//         billingInfo,
//         transactionId: paymentIntent.id,
//         status: 'pending',
//       };

//       const res = await addOrderDetails(paymentDetails);
//       console.log(res);

//       toast('✅ Payment details saved successfully.', {duration: 3000});
//       console.log('Payment details:', res.data);
//       // if(res.data.success) {

//       // }
//       navigate('/order');
//     } else if (confirmError) {
//       toast(confirmError.message, { duration: 3000 });
//     } else {
//       // refetch();
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <Button
//         type='submit'
//         disabled={!stripe}
//         className=' bg-purple-500 mt-5 w-full'
//       >
//         Pay $738.00
//       </Button>
//     </form>
//   );
// };

// export default CheckoutForm;
