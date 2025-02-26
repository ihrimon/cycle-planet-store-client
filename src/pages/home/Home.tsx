import TopCategories from '@/components/home/TopCategories';
import { BikeFeature } from '@/components/home/BikeFeature';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Services } from '@/components/home/Services';
import { BlogPosts } from '@/components/home/BlogPosts';
import Testimonial from '@/components/home/Testimonial';
import HomeFeaturedProducts from '../../components/home/HomeFeaturedProducts';
import { Sponsored } from '@/components/home/Sponsored';
import { HomeCarousel } from '@/components/home/HomeCarousel';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      {/* <CustomSlider /> */}
      <Services />
      <ScrollAnimatedSection>
        <BikeFeature />
      </ScrollAnimatedSection>
      {/* <ScrollAnimatedSection>
        <Categories />
      </ScrollAnimatedSection> */}
      <ScrollAnimatedSection>
        <HomeFeaturedProducts />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <TopCategories />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <Testimonial />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <BlogPosts />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <Sponsored />
      </ScrollAnimatedSection>
    </div>
  );
};

export default Home;
