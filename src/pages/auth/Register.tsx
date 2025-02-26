import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Login from './Login';
import { useAppDispatch } from '@/redux/hook';
import { setLoading } from '@/redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import { useState } from 'react';
import { base_uri, registerDefaultValues } from '@/constants';
import { UserPen } from 'lucide-react';

const Register = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading('Signing up');
    dispatch(setLoading(true));
    setOpen(false);

    try {
      const { data } = await axios.post(`${base_uri}/auth/register`, formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (data.success) {
        toast.success(data?.message, { id: toastId, duration: 3000 });
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Signup failed', {
        id: toastId,
        duration: 2000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='w-[110px] bg-transparent hover:border hover:bg-transparent'>
          <UserPen /> Register
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl mb-5'>
            Register
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <CustomForm
          onSubmit={onSubmit}
          submitLabel='Register'
          defaultValues={registerDefaultValues}
        >
          {/* Name Input */}
          <CustomInput
            type='text'
            name='name'
            label='Name'
            placeholder='Enter your name here'
          />
          {/* Email Input */}
          <CustomInput
            type='email'
            name='email'
            label='Email'
            placeholder='Enter your email here'
          />
          {/* Password Input */}
          <CustomInput
            type='password'
            name='password'
            label='Password'
            placeholder='****************'
          />
        </CustomForm>
        <div className='text-sm'>
          Already have an account? <Login />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
