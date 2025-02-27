import { useState } from 'react';
import CustomForm from '@/components/form/CustomForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/schemas/auth.schema';
import CustomInput from '@/components/form/CustomInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customToaster from '@/utils/customToaster';
import { TError, TUser } from '@/types';
import CustomError from '@/components/form/CustomError';
import axios from 'axios';
import {
  base_uri,
  loginDefaultValues,
  registerDefaultValues,
} from '@/constants';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { decodeToken } from '@/utils';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const isSignup = type === 'signup';
  const defaultValues = isSignup ? registerDefaultValues : loginDefaultValues;

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    // when user registered
    if (isSignup) {
      try {
        const { data } = await axios.post(
          `${base_uri}/auth/register`,
          formData,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );

        if (data.success) {
          customToaster({
            description: data.message,
            action: 'OK',
            actionType: 'success',
          });
          navigate('/');
        }
      } catch (err) {
        CustomError(err as TError);
      } finally {
        setIsLoading(false);
      }
    } else {
      // when user login
      try {
        const res = await login(formData).unwrap();

        const authenticateduser = decodeToken(res.data.accessToken) as TUser;
        dispatch(setUser({ authenticateduser, token: res.data.accessToken }));

        if (res.data.success) {
          customToaster({
            description: res.data.message,
            action: 'OK',
            actionType: 'success',
          });
        }

        if (authenticateduser.role === 'admin') {
          navigate('/dashboard/admin');
        } else {
          navigate('/');
        }
      } catch (err) {
        CustomError(err as TError);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <CustomForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={zodResolver(isSignup ? signupSchema : loginSchema)}
      isLoading={isLoading}
      submitLabel={isSignup ? 'Sign Up' : 'Login'}
    >
      {isSignup && (
        <CustomInput
          type='text'
          name='name'
          label='Full name'
          placeholder='Enter your username'
        />
      )}
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
  );
};
