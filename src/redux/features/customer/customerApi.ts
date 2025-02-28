import { TResponse } from '@/types';
import { baseApi } from '../../api/baseApi';
import { TCustomer } from '@/types/customer';

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: (data) => ({
        url: '/customers/create',
        method: 'POST',
        body: data,
      }),
    }),
    fetchAllCustomers: builder.query({
      query: () => ({
        url: '/customers',
        method: 'GET',
      }),
      providesTags: ['customers'],
      transformResponse: (response: TResponse<TCustomer[]>) => {
        return { data: response.data };
      },
    }),
    fetchSingleCustomer: builder.query({
      query: (id) => ({
        url: `/customers/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useFetchAllCustomersQuery,
  useFetchSingleCustomerQuery,
} = customerApi;
