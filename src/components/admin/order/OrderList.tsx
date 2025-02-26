import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, FileDown, Eye, Pencil, Trash2 } from 'lucide-react';

interface Order {
  id: string;
  productImage: string;
  customerName: string;
  orderId: string;
  price: number;
  quantity: number;
  payment: number;
  status: 'Success' | 'Pending' | 'Cancel';
  tracking: string;
}

const mockOrders: Order[] = [
  {
    id: '1',
    productImage:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80',
    customerName: 'Kristin Watson',
    orderId: '#7712309',
    price: 1452.5,
    quantity: 1638,
    payment: 20,
    status: 'Success',
    tracking: 'Tracking',
  },
  // Add more mock data as needed
];

function OrderList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = mockOrders.filter(
      (order) =>
        order.customerName.toLowerCase().includes(value.toLowerCase()) ||
        order.orderId.toLowerCase().includes(value.toLowerCase())
    );
    setOrders(filtered);
  };

  const handleExport = () => {
    // console.log('Exporting orders...');
    // Implement export functionality
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'Cancel':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Order List</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <Input
              placeholder='Search here...'
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className='pl-10 w-[300px]'
            />
          </div>
          <Button
            onClick={handleExport}
            variant='outline'
            className='flex items-center space-x-2'
          >
            <FileDown className='h-4 w-4' />
            <span>Export all order</span>
          </Button>
        </div>
      </div>

      <div className='border rounded-lg'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tracking</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={order.productImage}
                      alt={order.customerName}
                      className='h-12 w-12 rounded-lg object-cover'
                    />
                    <span className='font-medium'>{order.customerName}</span>
                  </div>
                </TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>${order.price.toLocaleString()}</TableCell>
                <TableCell>{order.quantity.toLocaleString()}</TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant='link' className='text-blue-500 p-0'>
                    {order.tracking}
                  </Button>
                </TableCell>
                <TableCell>
                  <div className='flex items-center space-x-2'>
                    <Button variant='ghost' size='icon'>
                      <Eye className='h-4 w-4 text-gray-500' />
                    </Button>
                    <Button variant='ghost' size='icon'>
                      <Pencil className='h-4 w-4 text-gray-500' />
                    </Button>
                    <Button variant='ghost' size='icon'>
                      <Trash2 className='h-4 w-4 text-red-500' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default OrderList;
