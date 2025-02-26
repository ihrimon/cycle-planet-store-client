import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { decodeToken } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { currentAccessToken, logout } from '@/redux/features/auth/authSlice';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(currentAccessToken);

  
  let user;

  if (token) {
    user = decodeToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to='/login' replace={true} />;
  }
  if (!token) {
    return <Navigate to='/login' replace={true} />;
  }

  if(token && role && user?.role === 'admin' ) {
    <Navigate to='/dashboard/admin' replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
