import { HomeGallery } from '@/components/home/HomeGallery';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ModeToggle from '@/components/ui/mode-toggle';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  const notHomePage = location.pathname !== '/';
  const notAboutPage = location.pathname !== '/about';

  return (
    <div className='mx-auto'>
      {notHomePage && <Navbar />}
      <ModeToggle />
      <Outlet />
      {notAboutPage && <HomeGallery />}
      <Footer />
    </div>
  );
};

export default MainLayout;
