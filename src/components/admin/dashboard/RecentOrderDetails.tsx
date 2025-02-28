import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { recentOrders } from '@/types/order';
// import { StatusBadge } from '../order/OrderStatus';

const RecentOrderDetails = () => {
  const handleView = (id: string) => {
    toast({
      title: 'View Order',
      description: `Viewing order ${id}`,
    });
  };
  const handleEdit = (id: string) => {
    toast({
      title: 'Edit Order',
      description: `Editing order ${id}`,
    });
  };
  const handleDelete = (id: string) => {
    toast({
      title: 'Delete Order',
      description: `Deleting order ${id}`,
      variant: 'destructive',
    });
  };
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Recent Order Details</CardTitle>
        <button className='underline hover:bg-primary hover:px-3 hover:py-1 hover:rounded-md'>
          View All
        </button>
      </CardHeader>
      <CardContent>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[80px]'>S.NO</TableHead>
                <TableHead>ITEM DETAILS</TableHead>
                <TableHead>CUSTOMER ID</TableHead>
                <TableHead>CUSTOMER DETAILS</TableHead>
                <TableHead>ORDERED DATE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>PRICE</TableHead>
                <TableHead className='text-right'>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.item.id}>
                  <TableCell>{order.serialNo}</TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <div className='h-12 w-12 rounded-md border p-1'>
                        <img
                          src={order.item.image}
                          alt={order.item.name}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div>
                        <div className='font-medium'>{order.item.name}</div>
                        <div className='text-sm text-muted-foreground'>
                          {order.item.productId}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-green-600'>{order.customerId}</span>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <Avatar>
                        <AvatarImage src={order.customer.avatar} />
                        <AvatarFallback>
                          {order.customer.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className='font-medium'>{order.customer.name}</div>
                        <div className='text-sm text-muted-foreground'>
                          {order.customer.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{order.orderedDate}</TableCell>
                  <TableCell>
                    {/* <StatusBadge status={order.status} /> */}
                  </TableCell>
                  <TableCell>${order.price}</TableCell>
                  <TableCell className='text-right'>
                    <div className='flex justify-end gap-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleView(order.item.id)}
                      >
                        <Eye className='h-4 w-4' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleEdit(order.item.id)}
                      >
                        <Pencil className='h-4 w-4' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleDelete(order.item.id)}
                      >
                        <Trash2 className='h-4 w-4 text-red-500' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrderDetails;
