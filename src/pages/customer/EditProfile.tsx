import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import CustomSelect from '@/components/form/CustomSelect';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { countryOptions, genderOptions } from '@/constants/customerOption';

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Profile Data:', data);
  };

  return (
    <Card className='w-full max-w-4xl mx-auto'>
      <CardHeader className='text-center py-6'>
        <CardTitle className='text-2xl'>Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
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

        <CustomForm onSubmit={onSubmit} submitLabel='Save Changes'>
          <CustomInput type='text' name='name' label='Full name' />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <CustomInput type='email' name='email' label='Email' />
            <CustomInput type='text' name='phone' label='Phone' />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <CustomInput type='text' name='address' label='Address' />
            <CustomInput type='text' name='postalCode' label='Postal Code' />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <CustomInput type='text' name='city' label='City' />
            <CustomSelect
              name='country'
              label='Country'
              options={countryOptions}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <CustomInput type='date' name='birthDate' label='Birth Date' />
            <CustomSelect
              name='gender'
              label='Gender'
              options={genderOptions}
            />
          </div>
        </CustomForm>
      </CardContent>
    </Card>
  );
};

export default EditProfile;
