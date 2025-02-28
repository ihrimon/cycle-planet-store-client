import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ShoppingBag,
  User,
  Logs,
  Heart,
  SquarePlus,
  Home,
  LogOut,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import AdminOrders from '@/lib/admin/AdminOrders';
import { useAppSelector } from '@/redux/hook';
import { currentUser } from '@/redux/features/auth/authSlice';
import CustomerDashboard from '@/pages/customer/CustomerDashboard';
import CustomerOrder from '@/pages/customer/CustomerOrder';
import { TUser } from '@/types';
import CustomerBilling from '@/pages/customer/CustomerBilling';
import AddProduct from '../admin/product/AddProduct';
import AllCustomers from '../admin/customer/CustomerList';
// import Reviews from '../admin/reviews/ClientReviews';
import Logout from '../profile/Logout';
import ProductList from '../admin/product/ProductList';
import EditProfile from '@/pages/customer/EditProfile';
import AdminDashboard from '@/lib/admin/AdminDashboard';

const adminItems = [
  {
    title: 'Dashboard',
    url: '/dashboard/admin',
    icon: LayoutDashboard,
    element: <AdminDashboard />,
  },
  {
    title: 'Product List',
    url: '/dashboard/admin/products',
    icon: ShoppingCart,
    element: <ProductList />,
  },
  {
    title: 'Add Product',
    url: '/dashboard/admin/products/add-product',
    icon: SquarePlus,
    element: <AddProduct />,
  },
  {
    title: 'Orders',
    url: '/dashboard/admin/orders',
    icon: ShoppingBag,
    element: <AdminOrders />,
  },
  {
    title: 'Customers',
    url: '/dashboard/admin/customers/all',
    icon: Users,
    element: <AllCustomers />,
  },
  // {
  //   title: 'Reviews',
  //   url: '/dashboard/admin/reviews/reviews',
  //   icon: Star,
  //   element: <AdminReviews />,
  // },
  // {
  //   title: 'Reviews',
  //   url: '/dashboard/admin/reviews/reviews',
  //   icon: Star,
  //   element: <Reviews />,
  // },
];

const customerItems = [
  {
    title: 'Dashboard',
    url: '/dashboard/customer',
    icon: LayoutDashboard,
    element: <CustomerDashboard />,
  },
  {
    title: 'My Orders',
    url: '/dashboard/customer/orders',
    icon: ShoppingBag,
    element: <CustomerOrder />,
  },
  {
    title: 'Wishlist',
    url: '/dashboard/customer/wishlist',
    icon: Heart,
    element: <CustomerOrder />,
  },
  {
    title: 'Billing',
    url: '/dashboard/customer/billing',
    icon: Logs,
    element: <CustomerBilling />,
  },
  // {
  //   title: 'Reviews',
  //   url: '/dashboard/customer/reviews',
  //   icon: Star,
  //   element: <CustomerReviews />,
  // },
  {
    title: 'My Account',
    url: '/dashboard/customer/profile',
    icon: User,
    element: <EditProfile />,
  },
];

export function AppSidebar() {
  const user = useAppSelector(currentUser) as TUser;

  const role = user?.role!.charAt(0).toUpperCase() + user?.role!.slice(1);

  const menuItems = user?.role === 'admin' ? adminItems : customerItems;

  const menuItemsWithActiveState = menuItems.map((item) => ({
    ...item,
    isActive: location.pathname === item.url, 
  }));

  return (
    <Sidebar>
      <SidebarContent style={{ padding: '16px' }}>
        <SidebarGroup>
          <SidebarGroupLabel style={{ fontSize: '18px', marginBottom: '24px' }}>
            {role} Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className='flex flex-col h-full'>
                <div className='flex-1'>
                  {menuItemsWithActiveState.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`${
                          item.isActive ? 'bg-primary text-white' : ''
                        } p-4 rounded-md transition duration-300`}
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>

                <div className='mt-auto space-y-2'>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className='p-4 rounded-md'>
                      <a href='/'>
                        <Home className='mr-2' />
                        <span>Home Page</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className='p-4 rounded-md'>
                      <button
                        className='flex items-center gap-2'
                        onClick={Logout}
                      >
                        <LogOut className='h-5 w-5' />
                        <span>Logout</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
