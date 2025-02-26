import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from '../ui/avatar';
import Logout from './Logout';
import { selectedRole } from '@/utils';
import { Link } from 'react-router-dom';
import { UserCog } from 'lucide-react';

export function Profile() {
  const role = selectedRole();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='cursor-pointer w-6 h-6'>
          <UserCog className='text-primary'/>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <Link to={`/dashboard/${role}`}>
          <DropdownMenuItem className='cursor-pointer'>
            Dashboard
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        {role === 'customer' && (
          <div>
            <Link to={'/dashboard/customer/profile'}>
              <DropdownMenuItem className='cursor-pointer'>
                My Account
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link to={'/dashboard/customer/billing'}>
              <DropdownMenuItem className='cursor-pointer w-full'>
                Billing
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
          </div>
        )}
        <DropdownMenuItem>
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
