import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/add',
        method: 'POST',
        body: data,
      }),
    }),
    fetchAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    fetchSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useAddProductMutation,
  useFetchAllProductsQuery,
  useFetchSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
