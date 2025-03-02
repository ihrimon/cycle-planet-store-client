import TopCategories from '@/components/home/TopCategories';
import { BikeFeature } from '@/components/home/BikeFeature';
import { Services } from '@/components/home/Services';
import { BlogPosts } from '@/components/home/BlogPosts';
import Testimonial from '@/components/home/Testimonial';
// import HomeFeaturedProducts from '../../components/home/HomeFeaturedProducts';
import { Sponsored } from '@/components/home/Sponsored';
import HomeBanner from '@/components/home/HomeBanner';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Services />
      <ScrollAnimatedSection>
        <BikeFeature />
      </ScrollAnimatedSection>
      {/* <ScrollAnimatedSection>
        <HomeFeaturedProducts />
      </ScrollAnimatedSection> */}
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
