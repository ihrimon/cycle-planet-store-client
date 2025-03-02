import AboutUs from '@/components/about/AboutUs';
import CoreValues from '@/components/about/CoreValues';
// import Gallery from '@/components/about/Gallery';
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
      <CoreValues />
      {/* <Gallery /> */}
    </div>
  );
};

export default About;
