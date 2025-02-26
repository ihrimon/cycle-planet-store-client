import { baseApi } from '../../api/baseApi';

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (data) => ({
        url: '/cart/add',
        method: 'POST',
        body: data,
      }),
    }),
    fetchAllCarts: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cart/update/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    removeCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useAddCartMutation,
  useFetchAllCartsQuery,
  useUpdateCartMutation,
  useRemoveCartMutation,
} = customerApi;
