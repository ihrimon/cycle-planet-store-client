import { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BrickWallIcon, CarTaxiFront, Contact, Home, Phone } from 'lucide-react';
import Container from '../shared/Container';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: ReactNode;
}

// const categories: FAQCategory[] = [
//   { id: 'general', label: 'General' },
//   { id: 'pricing', label: 'Pricing' },
//   { id: 'dashboard', label: 'Dashboard' },
//   { id: 'api', label: 'API' },
// ];

const faqs: FAQItem[] = [
  {
    id: 'trial',
    question: 'Is there a free trial available?',
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    category: 'general',
    icon: <Home size={40} className='border rounded-lg p-2' />,
  },
  {
    id: 'plan-change',
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    category: 'pricing',
    icon: <Phone size={40} className='border rounded-lg p-2' />,
  },
  {
    id: 'cancellation',
    question: 'What is your cancellation policy?',
    answer:
      "You can cancel your subscription at any time. You'll continue to have access to the service until the end of your current billing period.",
    category: 'pricing',
    icon: <Contact size={40} className='border rounded-lg p-2' />,
  },
  {
    id: 'invoice',
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can add additional information such as your VAT number, company details, or specific billing references to your invoices.',
    category: 'pricing',
    icon: <BrickWallIcon size={40} className='border rounded-lg p-2' />,
  },
  {
    id: 'billing',
    question: 'How does billing work?',
    answer:
      'We bill monthly or annually, depending on your preference. All plans are billed in advance.',
    category: 'pricing',
    icon: <CarTaxiFront size={40} className='border rounded-lg p-2' />,
  },
];

export function FAQ() {

  return (
    <Container>
      <Card className='w-full max-w-3xl mx-auto border-none shadow-none'>
        <CardHeader>
          <CardTitle className='text-3xl text-center'>
            Frequently asked questions
          </CardTitle>
        </CardHeader>

          <Accordion type='single' collapsible className='w-full p-10'>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className='text-left'>
                  <div className='flex items-center justify-center gap-3'>
                    <span>{faq.icon}</span>
                    <p className='font-normal'>{faq.question}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground my-4'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </Card>
    </Container>
  );
}
