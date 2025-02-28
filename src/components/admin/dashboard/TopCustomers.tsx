import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TCustomer} from '@/types/customer';
import { useFetchAllCustomersQuery } from '@/redux/features/customer/customerApi';

export const TopCustomers = () => {
  const { data: customers } = useFetchAllCustomersQuery(undefined);
  return (
    <Card className='w-full'>
      <CardHeader className='pb-4'>
        <CardTitle className='text-xl font-bold'>Top Customers</CardTitle>
        
      </CardHeader>
      <CardContent className='space-y-4'>
        {customers?.data?.map((customer: TCustomer) => (
          <div
            key={customer._id}
            className='flex items-center justify-between space-x-4'
          >
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src={customer.profileImage} alt={customer.fullName} />
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  {customer.fullName}
                </p>
                <p className='text-sm text-muted-foreground'>
                  Purchases
                </p>
              </div>
            </div>
            <div className='font-medium'>
              $540
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
