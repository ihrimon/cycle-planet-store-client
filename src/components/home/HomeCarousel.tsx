import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeBanner from './HomeBanner';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import banner from '../../../public/banner-bg.png';

export function HomeCarousel() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        <Carousel
          showArrows={false}
          // autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
          // interval={5000}
          
          renderIndicator={(clickHandler, isSelected) => (
            <button
              onClick={clickHandler}
              className={`w-10 h-1 mx-1 rounded-full my-12 ${
                isSelected ? 'bg-primary w-14' : 'bg-gray-500/20'
              }`}
            />
          )}
        >
          <div className=''>
            <HomeBanner />
          </div>
          <div className=''>
            <HomeBanner />
          </div>
          <div className=''>
            <HomeBanner />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
