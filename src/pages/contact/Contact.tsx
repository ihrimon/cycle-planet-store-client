import CallToAction from '@/components/contact/CallToAction';
import { FAQ } from '@/components/contact/FAQ';
import FindWithMap from '@/components/contact/FindWithMap';
import Banner from '@/components/shared/Banner';

const Contact = () => {
  return (
    <div>
      <Banner
        title='Contact'
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />
      <CallToAction />
      <FAQ />
      <FindWithMap />
    </div>
  );
};

export default Contact;
