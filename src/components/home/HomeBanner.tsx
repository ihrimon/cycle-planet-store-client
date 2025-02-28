import { useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { Play } from 'lucide-react';
import CustomTooltip from '../shared/CustomTooltip';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import HomeHeadline from './HomeHeadline';

const HomeBanner = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Navbar />}
      <div className='max-w-[1280px] mx-auto items-center pt-[60px] pb-12'>
        <div className='flex justify-between items-center py-4'>
          <div className='space-y-10 text-white text-start'>
            <HomeHeadline />
            <div className='flex gap-6 items-center'>
              <Button className='hover:border hover:bg-transparent'>
                Explore Products
              </Button>

              {/* video content */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <div className='flex items-center justify-center cursor-pointer gap-5'>
                    <Button
                      variant={'outline'}
                      className='border-none relative w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-lime-600 transition-all duration-200 hover:shadow-xl'
                      aria-label='Play'
                    >
                      <div>
                        <Play size={28} className='ml-1' />
                        <span className='absolute -inset-3 rounded-full bg-primary/20 animate-pulse'></span>
                      </div>
                    </Button>
                    <p>Watch RC Prod</p>
                  </div>
                </DialogTrigger>
                <DialogContent className='max-w-2xl p-0'>
                  <div className='relative w-full h-0 pb-[56.25%]'>
                    <iframe
                      className='absolute top-0 left-0 w-full h-full rounded-lg'
                      src='https://www.youtube.com/embed/P7zou0fMUzQ?si=41Wni9sk83I3CvFK'
                      title='Find a Dealer'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <CustomTooltip />
            <img
              src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740769592/banner-cycle_nz5pqi.png'
              alt='Banner Cycle'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
