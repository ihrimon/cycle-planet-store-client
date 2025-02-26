import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className='m-12 mx-auto w-[1180px]'>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
