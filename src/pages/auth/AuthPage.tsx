import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodeToken } from '@/utils';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/schemas/auth.schema';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import CustomError from '@/components/form/CustomError';
import customToaster from '@/utils/customToaster';
import {
  base_url,
  loginDefaultValues,
  registerDefaultValues,
} from '@/constants';
import { TUser } from '@/types';

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  const { defaultValues, formResolver } = useMemo(
    () => ({
      defaultValues:
        authType === 'signup' ? registerDefaultValues : loginDefaultValues,
      formResolver: zodResolver(
        authType === 'signup' ? signupSchema : loginSchema
      ),
    }),
    [authType]
  );

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
      if (authType === 'signup') {
        const { data } = await axios.post(
          `${base_url}/auth/register`,
          formData,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );

        if (data.success) {
          customToaster({
            description: data.message,
            action: 'Login Now',
            actionType: 'success',
          });
          setAuthType('login');
        }
      } else {
        const res = await login(formData).unwrap();
        if (!res?.success) {
          customToaster({
            description: 'Invalid email or password',
            action: 'Try Again',
            actionType: 'error',
          });
          return;
        }

        const user = decodeToken(res.data.accessToken) as TUser;
        dispatch(setUser({ user, token: res.data.accessToken }));

        customToaster({
          description: '✅ You are logged in successfully.',
          action: 'OK',
          actionType: 'success',
        });
        navigate(user.role === 'admin' ? '/dashboard/admin' : '/');
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        CustomError(err.response?.data?.message as string);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full border border-primary/20 max-w-4xl mx-auto flex items-center justify-between p-8 shadow-sm'>
        <Card className='w-full h-[580px] max-w-md mx-auto lg:mx-0 shadow-none border-0'>
          <CardContent className='pt-6'>
            <div className='mb-8'>
              <div className='bg-gray-600 mx-auto p-6 rounded-lg'>
                <img src='/logo.png' alt='Logo' className='h-12 mb-4' />
                <p className='text-white'>
                  Ride the Future, Explore with Confidence 😄!
                </p>
              </div>
              <Tabs
                value={authType}
                onValueChange={(val) => setAuthType(val as 'login' | 'signup')}
                className='w-full mt-6'
              >
                <TabsList className='grid w-full grid-cols-2 mb-6'>
                  <TabsTrigger value='login'>Login</TabsTrigger>
                  <TabsTrigger value='signup'>Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value='login'>
                  <CustomForm
                    onSubmit={onSubmit}
                    defaultValues={defaultValues}
                    resolver={formResolver}
                    isLoading={isLoading}
                    submitLabel='Login'
                  >
                    <CustomInput
                      type='email'
                      name='email'
                      label='Email'
                      placeholder='Enter your email here'
                    />
                    <CustomInput
                      type='password'
                      name='password'
                      label='Password'
                      placeholder='****************'
                    />
                  </CustomForm>
                </TabsContent>
                <TabsContent value='signup'>
                  <CustomForm
                    onSubmit={onSubmit}
                    defaultValues={defaultValues}
                    resolver={formResolver}
                    isLoading={isLoading}
                    submitLabel='Sign Up'
                  >
                    <CustomInput
                      type='text'
                      name='name'
                      label='Full Name'
                      placeholder='Enter your full name'
                    />
                    <CustomInput
                      type='email'
                      name='email'
                      label='Email'
                      placeholder='Enter your email here'
                    />
                    <CustomInput
                      type='password'
                      name='password'
                      label='Password'
                      placeholder='****************'
                    />
                  </CustomForm>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        <div className=''>
          <img
            src='../../../public/auth.gif'
            style={{ width: 300, height: 300 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
