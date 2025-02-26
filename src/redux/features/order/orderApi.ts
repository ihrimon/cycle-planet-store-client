import { baseApi } from '../../api/baseApi';

const shoppingCartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: '/order/create-payment-intent',
        method: 'POST',
        body: data,
      }),
    }),
    addOrderDetails: builder.mutation({
      query: (data) => ({
        url: '/order/payment-details',
        method: 'POST',
        body: data,
      }),
    }),
    getOrder: builder.query({
      query: () => ({
        url: '/order',
        method: 'GET',
        // body: data,
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useAddOrderDetailsMutation,
  useGetOrderQuery,
} = shoppingCartApi;
