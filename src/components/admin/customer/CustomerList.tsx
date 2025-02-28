import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useFetchAllCustomersQuery } from '@/redux/features/customer/customerApi';
import { TCustomer } from '@/types/customer';
import { Skeleton } from '@/components/ui/skeleton';


function CustomerList() {
  const { data: customers, isLoading } = useFetchAllCustomersQuery(undefined);

  if (isLoading) {
    return <Skeleton />;
  }

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

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.I</TableHead>
              <TableHead className='text-start'>Customer Name</TableHead>
              <TableHead className='text-start'>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers?.data?.map((customer: TCustomer, index: number) => (
              <TableRow key={customer._id}>
                <TableCell className='text-center'>{index + 1}</TableCell>
                <TableCell>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={customer.profileImage}
                      alt={customer.fullName}
                      className='h-8 w-8 rounded-full object-cover'
                    />
                    <span className='font-medium'>{customer.fullName}</span>
                  </div>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell className='text-center'>{customer.status}</TableCell>
                <TableCell>
                  <div className='flex items-center justify-center space-x-2'>
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
