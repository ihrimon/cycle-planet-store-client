import Container from '@/components/shared/Container';
// import BillingDetails from './BillingDetails';
// import OrderSummary from './OrderSummary';
import { useGetOrderQuery } from '@/redux/features/order/orderApi';
import BillingDetails from './BillingDetails';
import OrderSummary from './OrderSummary';

// const orderData = {
//   orderNumber: '024-125478956',
//   date: '02 May 2023',
//   paymentMethod: 'Mastercard',
//   items: [
//     {
//       id: '1',
//       name: 'All In One Chocolate Combo',
//       price: 50.0,
//       quantity: 1,
//       size: 'Medium',
//       imageUrl:
//         'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=200&h=200',
//     },
//     {
//       id: '2',
//       name: 'Desire Of Hearts',
//       price: 50.0,
//       quantity: 1,
//       size: 'Large',
//       imageUrl:
//         'https://images.unsplash.com/photo-1548741487-18d363dc4469?auto=format&fit=crop&q=80&w=200&h=200',
//     },
//   ],
//   subtotal: 100.0,
//   shipping: 2.0,
//   tax: 5.0,
// };

function Order() {
  const { data: orderData, isFetching, error } = useGetOrderQuery(undefined);

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  // যদি orderData.data না থাকে তাহলে সরাসরি orderData সেট করবো
  const OrderInfo = orderData?.data;

  const billingDetails = OrderInfo[0].billingInfo;
  const orderDetails = OrderInfo[0];
  console.log(billingDetails)
  
  // OrderInfo?.forEach((order) => {
    
  //   console.log('Order ID:', order._id);
  //   console.log('Billing Name:', order.billingInfo?.name);
  // });

  return (
    <Container>
      <div className='min-h-screen p-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <div className='grid gap-8 md:grid-cols-2'>
            <BillingDetails billingDetails={billingDetails} />
            <OrderSummary {...orderDetails} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Order;
