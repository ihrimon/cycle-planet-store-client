import { logout, setUser } from '@/redux/features/auth/authSlice'
import { useAppDispatch } from '@/redux/hook'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

      const logoutHandler = () => {
        const response = dispatch(logout());
        if (response) {
          dispatch(setUser(null));
          navigate('/');
        }
      };
  return (
    <button
      onClick={logoutHandler}
      className='w-full text-start'
    >
      Logout
    </button>
  );
}

export default Logout