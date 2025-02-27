import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
// import Checkout from './Checkout';
import Container from '@/components/shared/Container';

const cartItems = [
  { id: 1, name: 'Mountain Bike', price: 1200, quantity: 1 },
  { id: 2, name: 'Cycling Helmet', price: 150, quantity: 2 },
  { id: 3, name: 'Bike Lock', price: 45, quantity: 1 },
];

const CheckoutDetails = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    streetAddress: '',
    city: '',
    postcode: '',
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Billing Info:', billingInfo);
  };

  return (
    <Container>
      <div className='container mx-auto px-4 py-8'>
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 lg:grid-cols-2 gap-12'
        >
          <div className='space-y-4'>
            <h1>Billing Information</h1>
            <div className='space-y-2'>
              <Label htmlFor='name'>Full name *</Label>
              <Input
                id='name'
                type='text'
                required
                value={billingInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email address *</Label>
                <Input
                  id='email'
                  type='email'
                  required
                  value={billingInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone number *</Label>
                <Input
                  id='phone'
                  type='tel'
                  required
                  value={billingInfo.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='country'>Country / Region *</Label>
                <Input
                  id='country'
                  type='text'
                  required
                  value={billingInfo.country}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='state'>State / County *</Label>
                <Input
                  id='state'
                  type='text'
                  required
                  value={billingInfo.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='streetAddress'>Street address *</Label>
              <Input
                id='streetAddress'
                type='text'
                required
                value={billingInfo.streetAddress}
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='city'>Town / City *</Label>
                <Input
                  id='city'
                  type='text'
                  required
                  value={billingInfo.city}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='postcode'>Postcode / ZIP *</Label>
                <Input
                  id='postcode'
                  type='text'
                  required
                  value={billingInfo.postcode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className='p-6 rounded-lg space-y-6 border'>
            <h2 className='text-xl font-semibold'>Your order</h2>
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div key={item.id} className='flex justify-between'>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className='border-t pt-4'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between mt-2'>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className='flex justify-between mt-2'>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className='flex justify-between mt-4 font-semibold'>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <div className='flex justify-between items-center gap-6'>
                  <div className='w-1/3'>
                    <RadioGroup defaultValue='card'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='card' id='card' />
                        <Label htmlFor='card'>Stripe</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Checkout Component */}
        {/* <Checkout billingInfo={billingInfo} /> */}
      </div>
    </Container>
  );
};

export default CheckoutDetails;
