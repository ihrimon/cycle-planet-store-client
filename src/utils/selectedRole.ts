import { currentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hook';

export const selectedRole = () => {
  const user = useAppSelector(currentUser);
  return user?.role;
};
