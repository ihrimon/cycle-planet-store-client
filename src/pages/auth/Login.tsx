import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TUser } from '@/types';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Register from './Register';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hook';
import { useNavigate } from 'react-router-dom';
import { setLoading, setUser } from '@/redux/features/auth/authSlice';
import { toast } from 'sonner';
import { decodeToken } from '@/utils';
import { useState } from 'react';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/login.schema';
import { loginDefaultValues } from '@/constants';
import { WandSparkles } from 'lucide-react';

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading('Logging in');
    dispatch(setLoading(true));
    setOpen(false);

    try {
      const res = await login(formData).unwrap();

      const user = decodeToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success('You are logged in', { id: toastId, duration: 3000 });
      if (user.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Login Field', {
        id: toastId,
        duration: 3000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='w-[110px] text-secondary hover:text-white hover:bg-transparent bg-primary'>
          <WandSparkles /> Login Now
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl mb-5'>Login</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <CustomForm
          onSubmit={onSubmit}
          defaultValues={loginDefaultValues}
          resolver={zodResolver(loginSchema)}
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
        <div className='text-sm'>
          Don't have an account? <Register />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
