import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';

interface Customer {
  id: string;
  avatar: string;
  name: string;
  invoiceId: string;
  status: 'Completed' | 'Pending' | 'Cancel';
  totalAmount: number;
  amountDue: number;
  dueDate: string;
  paymentMethod: 'Mastercard' | 'Visa' | 'Paypal';
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80',
    name: 'Michael A. Miner',
    invoiceId: '#INV2540',
    status: 'Completed',
    totalAmount: 4521,
    amountDue: 8901,
    dueDate: '07 Jan, 2023',
    paymentMethod: 'Mastercard',
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=80',
    name: 'Theresa T. Brose',
    invoiceId: '#INV3924',
    status: 'Cancel',
    totalAmount: 7836,
    amountDue: 9902,
    dueDate: '03 Dec, 2023',
    paymentMethod: 'Visa',
  },
];

function CustomerList() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const getStatusColor = (status: Customer['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'Cancel':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const toggleCustomer = (customerId: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(customerId)
        ? prev.filter((id) => id !== customerId)
        : [...prev, customerId]
    );
  };

  const toggleAll = () => {
    setSelectedCustomers((prev) =>
      prev.length === customers.length ? [] : customers.map((c) => c.id)
    );
  };

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>All Customers List</h1>
        <Select defaultValue='this-month'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select period' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='this-month'>This Month</SelectItem>
            <SelectItem value='last-month'>Last Month</SelectItem>
            <SelectItem value='this-year'>This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className=''>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>
                <Checkbox
                  checked={selectedCustomers.length === customers.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Amount Due</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCustomers.includes(customer.id)}
                    onCheckedChange={() => toggleCustomer(customer.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className='h-8 w-8 rounded-full object-cover'
                    />
                    <span className='font-medium'>{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>{customer.invoiceId}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(customer.status)}>
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>${customer.totalAmount.toLocaleString()}</TableCell>
                <TableCell>${customer.amountDue.toLocaleString()}</TableCell>
                <TableCell>{customer.dueDate}</TableCell>
                <TableCell>{customer.paymentMethod}</TableCell>
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

export default CustomerList;
