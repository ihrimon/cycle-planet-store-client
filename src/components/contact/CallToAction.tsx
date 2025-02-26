import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Mail, MapPinned } from 'lucide-react';
import Phone from './Phone';
import Container from '../shared/Container';

// interface ContactDetailsProps {
//   address: {
//     street: string;
//     city: string;
//     country: string;
//   };
//   phones: string[];
//   hours: {
//     weekday: string;
//     weekend: string;
//   };
//   emails: string[];
// }

const contactData = {
  address: {
    street: '0 Washington Square South',
    city: 'New York, NY 10012',
    country: 'United States',
  },
  phones: ['(+877) 834-1434', '(+877) 834-1255'],
  hours: {
    weekday: 'Monday - Friday: 8am - 4pm',
    weekend: 'Saturday - Sunday: 9am - 5pm',
  },
  emails: ['fashionstyle@example.com', 'info@example.com'],
};

const CallToAction = () => {
  return (
    <Container>
      <div className='w-full mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10'>
          <div className='flex gap-6'>
            <div className='flex h-14 w-16 items-center justify-center'>
              <Phone />
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Call Us</h3>
              {contactData.phones.map((phone, index) => (
                <p key={index} className='text-sm text-muted-foreground'>
                  {phone}
                </p>
              ))}
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex h-16 w-16 items-center justify-center'>
              <Phone />
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Call Us</h3>
              {contactData.phones.map((phone, index) => (
                <p key={index} className='text-sm text-muted-foreground'>
                  {phone}
                </p>
              ))}
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex h-16 w-16 items-center justify-center'>
              <Phone />
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Call Us</h3>
              {contactData.phones.map((phone, index) => (
                <p key={index} className='text-sm text-muted-foreground'>
                  {phone}
                </p>
              ))}
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex h-16 w-16 items-center justify-center'>
              <Phone />
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Open</h3>
              <p className='text-sm text-muted-foreground'>
                {contactData.hours.weekday}
              </p>
              <p className='text-sm text-muted-foreground'>
                {contactData.hours.weekend}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallToAction;
