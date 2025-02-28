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
import { Eye, Pencil, Trash2, UserRoundPen } from 'lucide-react';
import { useFetchAllCustomersQuery } from '@/redux/features/customer/customerApi';
import { TCustomer } from '@/types/customer';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import DashboardHeader from '../dashboard/DashboardHeader';

function CustomerList() {
  const { data: customers, isLoading } = useFetchAllCustomersQuery(undefined);
  const [selectedFilter, setSelectedFilter] = useState<string>('this-week');

  if (isLoading) {
    return <Skeleton />;
  }

  const filterCustomers = (customersList: TCustomer[], filter: string) => {
    if (!customersList) return [];

    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return customersList.filter((customer) => {
      const joinDate = new Date(customer.joinDate);

      switch (filter) {
        case 'this-week':
          return joinDate >= startOfWeek && joinDate <= endOfWeek;
        case 'this-month':
          return (
            joinDate.getMonth() === now.getMonth() &&
            joinDate.getFullYear() === now.getFullYear()
          );
        case 'this-year':
          return joinDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
  };

  const filteredCustomers = filterCustomers(
    customers?.data || [],
    selectedFilter
  );

  return (
    <div className='p-6 space-y-6'>
      <DashboardHeader
        heading='Customer List'
        breadcrumb='Dashboard / Customers / Customer List'
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-start md:items-center gap-2 flex-col md:flex-row'>
          <UserRoundPen className='h-5 w-5 text-primary' />
          <p className='text-sm text-muted-foreground'>
            The Customer List page allows the admin to view, edit, and delete
            customer records efficiently.
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select period' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='this-week'>This Week</SelectItem>
              <SelectItem value='this-month'>This Month</SelectItem>
              <SelectItem value='this-year'>This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.I</TableHead>
              <TableHead className='text-start'>Customer Name</TableHead>
              <TableHead className='text-start'>Email</TableHead>
              <TableHead className='text-start'>Address</TableHead>
              <TableHead className='text-center'>Country</TableHead>
              <TableHead className='text-center'>Method</TableHead>
              <TableHead className='text-center'>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer: TCustomer, index: number) => (
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
                  <TableCell className='text-start'>
                    {customer.billingAddress.street},{' '}
                    {customer.billingAddress.city}
                  </TableCell>
                  <TableCell className='text-center'>
                    {customer.billingAddress.country}
                  </TableCell>
                  <TableCell className='text-center'>
                    {customer.paymentMethods}
                  </TableCell>
                  <TableCell className='text-center'>
                    {new Date(customer.joinDate).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </TableCell>
                  <TableCell className='text-center'>
                    {customer.status}
                  </TableCell>
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
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className='text-center text-xl pt-20 text-gray-500'
                >
                  No customers found for {selectedFilter}.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CustomerList;
