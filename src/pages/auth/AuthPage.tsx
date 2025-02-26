import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AuthForm } from './AuthForm';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full border max-w-4xl mx-auto grid lg:grid-cols-2 items-center'>
        <Card className='w-full h-[550px] max-w-md mx-auto lg:mx-0 shadow-sm border-0'>
          <CardContent className='pt-6'>
            <div className='mb-8'>
              <div className='bg-gray-600 mx-auto p-6 rounded-lg'>
                <img
                  src='../../../public/logo.png'
                  alt='Logo'
                  className='h-12 mb-4'
                />
                <p className='text-white'>
                  Ride the Future, Explore with Confidence 😄!
                </p>
              </div>
              <Tabs defaultValue='login' className='w-full'>
                <TabsList className='grid w-full grid-cols-2 mb-6'>
                  <TabsTrigger value='login'>Login</TabsTrigger>
                  <TabsTrigger value='signup'>Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value='login'>
                  <AuthForm type='login' />
                </TabsContent>
                <TabsContent value='signup'>
                  <AuthForm type='signup' />
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        <div className='hidden lg:block'>
          <img
            src='../../../public/login.jpg'
            alt='Auth illustration'
            className='w-full h-[550px] max-w-md mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
