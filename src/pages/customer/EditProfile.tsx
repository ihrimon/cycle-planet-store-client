import { useState } from 'react';
import { Camera } from 'lucide-react';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import CustomSelect from '@/components/form/CustomSelect';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { countryOptions } from '@/constants/customer';
import CustomTextarea from '@/components/form/CustomTextarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerDefaultValues } from '@/constants';
import { customerSchema } from '@/schemas';
import { useCreateCustomerMutation } from '@/redux/features/customer/customerApi';

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [createCustomer, { isLoading }] = useCreateCustomerMutation();

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Profile Data:', data);
    createCustomer(data);
  };

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <div className='text-center py-6'>
        <h1 className='text-3xl text-primary'>Edit Profile</h1>
      </div>
      <div>
        <div className='mb-8 flex flex-col items-center'>
          <div className='relative'>
            <Avatar className='h-32 w-32'>
              <AvatarImage src={avatarUrl ?? ''} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <label
              htmlFor='avatar-upload'
              className='absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90'
            >
              <Camera className='h-5 w-5' />
              <input
                id='avatar-upload'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <p className='mt-2 text-sm text-muted-foreground'>
            Change Profile Picture
          </p>
        </div>

        <CustomForm
          onSubmit={onSubmit}
          defaultValues={customerDefaultValues}
          resolver={zodResolver(customerSchema)}
          submitLabel='Save Product'
          className='rounded-none'
          isLoading={isLoading}
        >
          <div className='border-b pb-8 border-primary'>
            <h3 className='font-medium text-md text-primary mb-4'>
              Personal Information
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
              <CustomInput type='text' name='fullName' label='Full name' />
              <CustomInput type='text' name='username' label='User name' />
              <CustomInput type='email' name='email' label='Email' />
              <CustomInput type='text' name='phone' label='Phone' />
              <CustomInput type='date' name='birthDate' label='Birth Date' />
              {/* <CustomSelect
                name='gender'
                label='Gender'
                options={genderOptions}
              /> */}
            </div>
            <CustomTextarea
              name='bio'
              label='Biography'
              placeholder='No bio provided'
            />
          </div>
          <div className='border-b pb-8 border-primary'>
            <h3 className='font-medium text-md text-primary mb-4'>
              Billing Address
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <CustomInput
                type='text'
                name='billingAddress.street'
                label='Street Address'
              />
              <CustomInput
                type='text'
                name='billingAddress.city'
                label='City'
              />
              <CustomInput
                type='text'
                name='billingAddress.state'
                label='State'
              />
              <CustomInput
                type='text'
                name='billingAddress.zipCode'
                label='Zip Code'
              />
              <CustomSelect
                name='country'
                label='Country'
                options={countryOptions}
              />
            </div>
          </div>
          <div>
            <h3 className='font-medium text-md text-primary mb-4'>
              Shipping Address
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <CustomInput
                type='text'
                name='shippingAddress.street'
                label='Street Address'
              />
              <CustomInput
                type='text'
                name='shippingAddress.city'
                label='City'
              />
              <CustomInput
                type='text'
                name='shippingAddress.state'
                label='State'
              />
              <CustomInput
                type='text'
                name='shippingAddress.zipCode'
                label='Zip Code'
              />
              <CustomSelect
                name='shippingAddress.country'
                label='Country'
                options={countryOptions}
              />
            </div>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default EditProfile;
