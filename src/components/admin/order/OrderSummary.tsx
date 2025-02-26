import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Package } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  imageUrl: string;
}

interface OrderSummaryProps {
  orderNumber: string;
  date: string;
  paymentMethod: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
}

const OrderSummary = ({
  orderNumber,
  date,
  paymentMethod,
  items,
  subtotal,
  shipping,
  tax,
}: OrderSummaryProps) => {
  const total = subtotal + shipping + tax;

  return (
    <Card className='w-full max-w-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Package className='h-5 w-5' />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-3 gap-4 text-sm'>
          <div>
            <p className='text-muted-foreground'>Date</p>
            <p className='font-medium'>{date}</p>
          </div>
          <div>
            <p className='text-muted-foreground'>Order Number</p>
            <p className='font-medium'>{orderNumber}</p>
          </div>
          <div>
            <p className='text-muted-foreground'>Payment Method</p>
            <p className='font-medium'>{paymentMethod}</p>
          </div>
        </div>

        <Separator className='my-6' />

        <div className='space-y-4'>
          {items.map((item) => (
            <div key={item.id} className='flex items-center gap-4'>
              <img
                src={item.imageUrl}
                alt={item.name}
                className='h-16 w-16 rounded-lg object-cover'
              />
              <div className='flex-1'>
                <h4 className='font-medium'>{item.name}</h4>
                <p className='text-sm text-muted-foreground'>
                  Size: {item.size}
                </p>
                <p className='text-sm text-muted-foreground'>
                  Qty: {item.quantity}
                </p>
              </div>
              <p className='font-medium'>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <Separator className='my-6' />

        <div className='space-y-2'>
          <div className='flex justify-between text-sm'>
            <p className='text-muted-foreground'>Subtotal</p>
            <p className='font-medium'>${subtotal.toFixed(2)}</p>
          </div>
          <div className='flex justify-between text-sm'>
            <p className='text-muted-foreground'>Shipping</p>
            <p className='font-medium'>${shipping.toFixed(2)}</p>
          </div>
          <div className='flex justify-between text-sm'>
            <p className='text-muted-foreground'>Tax</p>
            <p className='font-medium'>${tax.toFixed(2)}</p>
          </div>
          <Separator className='my-2' />
          <div className='flex justify-between text-lg font-medium'>
            <p>Order Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;