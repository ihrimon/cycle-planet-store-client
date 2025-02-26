import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { topCustomers } from '@/types/customer';

export const TopCustomers = () => {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
        <CardTitle className='text-xl font-bold'>Top Customers</CardTitle>
        <Button variant='ghost' size='icon'>
          <MoreVertical className='h-4 w-4' />
        </Button>
      </CardHeader>
      <CardContent className='space-y-4'>
        {topCustomers.map((customer) => (
          <div
            key={customer.id}
            className='flex items-center justify-between space-x-4'
          >
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src={customer.avatar} alt={customer.name} />
                <AvatarFallback>{customer.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  {customer.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {customer.purchases.count} Purchases
                </p>
              </div>
            </div>
            <div className='font-medium'>
              ${customer.purchases.total.toLocaleString()}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
