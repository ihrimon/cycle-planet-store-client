import {
  ChevronUp,
  LayoutDashboard,
  ShoppingCart,
  Users,
  User2,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import AdminDashboard from '@/lib/admin/AdminDashboard';
import AdminProducts from '@/lib/admin/AdminProducts';
// import AdminCategory from '@/pages/admin/AdminCategory';
import AdminOrders from '@/lib/admin/AdminOrders';
import AdminCustomers from '@/lib/admin/AdminCustomers';
// import AdminReviews from '@/pages/admin/AdminReviews';
import { useAppSelector } from '@/redux/hook';
import { currentUser } from '@/redux/features/auth/authSlice';
import CustomerDashboard from '@/pages/customer/CustomerDashboard';
import CustomerOrder from '@/pages/customer/CustomerOrder';
// import CustomerReviews from '@/pages/customer/CustomerReviews';
// import CustomerProfile from '@/pages/customer/EditProfile';
import { TUser } from '@/types';
import CustomerBilling from '@/pages/customer/CustomerBilling';
import AddProduct from '../admin/product/AddProduct';
import AllCustomers from '../admin/customer/CustomerList';
// import Reviews from '../admin/reviews/ClientReviews';
import Logout from '../profile/Logout';
import ProductList from '../admin/product/ProductList';
import EditProfile from '@/pages/customer/EditProfile';

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
    title: 'All Customers',
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
    isActive: location.pathname === item.url, // চেক করা হচ্ছে Active কিনা
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
                    <div key={item.title}>
                      <SidebarMenuItem>
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
                    </div>
                  ))}
                </div>
                <div className='mt-auto'>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      style={{ paddingTop: '20px', paddingBottom: '20px' }}
                    >
                      <a href={'/'}>
                        <Home />
                        <span>Home Page</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      asChild
                      style={{ paddingTop: '20px', paddingBottom: '20px' }}
                    >
                      <div className='flex items-center gap-2'>
                        <LogOut className='h-5 w-5' />
                        <Logout />
                      </div>
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
