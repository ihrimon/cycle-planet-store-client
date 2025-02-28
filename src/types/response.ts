import { BaseQueryApi } from '@reduxjs/toolkit/query';

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
    error: string;
  };
};

export type Response<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: TError;
};

export type TResponse<T> = Response<T> & BaseQueryApi;