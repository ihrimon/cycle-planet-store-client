import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: '/reviews/add',
        method: 'POST',
        body: data,
      }),
    }),
    fetchAllReviews: builder.query({
      query: () => ({
        url: '/reviews',
        method: 'GET',
        // body: data,
      }),
    }),
    fetchSingleReviews: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useAddReviewMutation,
  useFetchAllReviewsQuery,
  useFetchSingleReviewsQuery,
} = productApi;
