import AboutUs from '@/components/about/AboutUs';
import Gallery from '@/components/about/Gallery';
import { UserTypeSelection } from '@/components/about/UserTypeSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Banner from '@/components/shared/Banner';

const About = () => {
  return (
    <div>
      <Banner
        title='About'
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />
      <AboutUs />
      <WhyChooseUs />
      <UserTypeSelection />
      <Gallery />
    </div>
  );
};

export default About;
