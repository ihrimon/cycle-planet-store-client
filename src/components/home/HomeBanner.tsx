import { useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import bannerCycle from '../../../public/banner-cycle.png';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import CustomTooltip from '../shared/CustomTooltip';

const HomeBanner = () => {
  const location = useLocation();

  return (
    <div>
      {/* <img src="../../../public/b.jpg" alt="" /> */}
      {location.pathname === '/' && <Navbar />}
      <div className='max-w-[1280px] mx-auto pt-[100px] pb-10'>
        <div className='flex items-center justify-between py-4'>
          <div className='space-y-10 text-white'>
            <h1 className='text-[72px] font-bold leading-[72px] uppercase'>
              Scott Addict
              <br /> <span className='font-normal'>RC Pro</span>
            </h1>
            <p className='lg:w-[350px] font-light'>
              When there is a long day full of climbs ahead of you, the Addict
              RC consetur ipsum dolor Pro shold be your first choice.
            </p>
            <div className='flex gap-4 items-center'>
              <Button className='hover:border hover:bg-transparent'>
                Explore Products
              </Button>
              <Button
                variant={'outline'}
                className='bg-transparent border-none'
              >
                <Search /> Find a Dealer
              </Button>
            </div>
          </div>

          <div>
            <CustomTooltip />
            <img src={bannerCycle} alt='Cycle' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
