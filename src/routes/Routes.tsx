import App from '@/App';
import About from '@/pages/about/About';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import Contact from '@/pages/contact/Contact';
import Home from '@/pages/home/Home';
import News from '@/pages/news/News';
import Shop from '@/pages/shop/Shop';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '@/pages/dashboard/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from '@/lib/admin/AdminDashboard';
import AdminOrders from '@/lib/admin/AdminOrders';
// import AdminReviews from '@/pages/admin/AdminReviews';
import CustomerDashboard from '@/pages/customer/CustomerDashboard';
import CustomerOrder from '@/pages/customer/CustomerOrder';
import CustomerProfile from '@/pages/customer/EditProfile';
// import CustomerReviews from '@/pages/customer/CustomerReviews';
import CustomerBilling from '@/pages/customer/CustomerBilling';
import CustomerWishlist from '@/pages/customer/CustomerWishlist';
import AddProduct from '@/components/admin/product/AddProduct';
import CategoryList from '@/components/admin/category/CategoriesList';
import AllCustomers from '@/components/admin/customer/CustomerList';
import ProductList from '@/components/admin/product/ProductList';
import AddCategory from '@/components/admin/category/AddCategory';
import ProductDetails from '@/components/admin/product/ProductDetails';
import ShoppingCart from '@/components/admin/order/ShoppingCart';
import CheckoutDetails from '@/components/admin/order/CheckoutDetails';
import Order from '@/components/admin/order/Order';
import NotFound from '@/pages/notFound/NotFound';
import WishList from '@/components/shop/WishList';
import AuthPage from '@/pages/auth/AuthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
      {
        path: '/wish-list',
        element: <WishList />,
      },
      {
        path: '/check-out',
        element: <CheckoutDetails />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
  {
    path: '/dashboard/admin',
    element: (
      <ProtectedRoute role='admin'>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      // { path: 'products', element: <AdminProducts /> },
      { path: 'products', element: <ProductList /> },
      { path: 'products/add-product', element: <AddProduct /> },
      // { path: 'category', element: <AdminCategory /> },
      { path: 'category/list', element: <CategoryList /> },
      { path: 'category/add', element: <AddCategory /> },
      // { path: 'customers', element: <AdminCustomers /> },
      { path: 'customers/all', element: <AllCustomers /> },
      { path: 'orders', element: <AdminOrders /> },
      // { path: 'reviews', element: <AdminReviews /> },
      // { path: 'reviews/reviews', element: <AdminReviews /> },
    ],
  },
  {
    path: '/dashboard/customer',
    element: (
      <ProtectedRoute role='customer'>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <CustomerDashboard /> },
      { path: 'orders', element: <CustomerOrder /> },
      { path: 'wishlist', element: <CustomerWishlist /> },
      { path: 'billing', element: <CustomerBilling /> },
      { path: 'profile', element: <CustomerProfile /> },
      // { path: 'reviews', element: <CustomerReviews /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
