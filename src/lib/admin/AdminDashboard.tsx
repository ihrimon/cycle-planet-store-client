import Overview from '@/components/admin/dashboard/DashboardStats'
import RecentOrderDetails from '@/components/admin/dashboard/RecentOrderDetails'
// import RecentReviews from '@/components/admin/dashboard/RecentReviews'
import SalesOverview from '@/components/admin/dashboard/SalesOverview'
import { TopCustomers } from '@/components/admin/dashboard/TopCustomers'

const AdminDashboard = () => {
  return (
    <div>
      Admin Dashboard
      <Overview />
      <div className='flex'>
        <div className='w-2/3'>
          <SalesOverview />
        </div>
        <div className='w-1/3'>
          <TopCustomers />
        </div>
      </div>
      <div className='flex'>
        {/* <TopSellingProducts /> */}
        {/* <RecentReviews /> */}
      </div>
      <RecentOrderDetails />
    </div>
  );
}

export default AdminDashboard