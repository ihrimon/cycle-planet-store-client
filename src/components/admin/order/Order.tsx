import Container from '@/components/shared/Container';
import { useGetOrderQuery } from '@/redux/features/order/orderApi';
import BillingDetails from './BillingDetails';
import OrderSummary from './OrderSummary';

function Order() {
  const { data: orderData, isFetching, error } = useGetOrderQuery(undefined);

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  const OrderInfo = orderData?.data;

  const billingDetails = OrderInfo[0].billingInfo;
  const orderDetails = OrderInfo[0];
  console.log(billingDetails)
  
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
