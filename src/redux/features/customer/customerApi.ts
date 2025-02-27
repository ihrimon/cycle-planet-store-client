import { baseApi } from '../../api/baseApi';

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
