import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

// interface BillingDetailsProps {
//   name: string;
//   email: string;
//   phone: string;
//   country: string;
//   state: string;
//   streetAddress: string;
//   city: string;
//   postcode: string;
// }

const BillingDetails = ({ billingDetails }: any) => {
  const { name, email, streetAddress, phone, city, state, postcode, country } =
    billingDetails;
  return (
    <Card className='w-full max-w-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Receipt className='h-5 w-5' />
          Billing Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold'>
              Thank you for your purchase!
            </h3>
            <p className='text-sm text-muted-foreground'>
              Your order will be processed within 24 hours during working days.
              We will notify you by email once your order has been shipped.
            </p>
          </div>

          <div className='grid gap-4 text-sm'>
            <div>
              <p className='font-medium'>Name</p>
              <p className='text-muted-foreground'>{name}</p>
            </div>
            <div>
              <p className='font-medium'>Address</p>
              <p className='text-muted-foreground'>{streetAddress}</p>
              <p className='text-muted-foreground'>
                {city}, {state} {postcode}
              </p>
              <p className='text-muted-foreground'>{country}</p>
            </div>
            <div>
              <p className='font-medium'>Phone</p>
              <p className='text-muted-foreground'>{phone}</p>
            </div>
            <div>
              <p className='font-medium'>Email</p>
              <p className='text-muted-foreground'>{email}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingDetails