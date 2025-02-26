import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TAuthState } from '@/types';

const initialState: TAuthState = {
  user: null,
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;

export const currentAccessToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
export const isLoading = (state: RootState) => state.auth.loading;
