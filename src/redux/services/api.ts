import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
        endpoints: (builder) => ({
            getRestaurants: builder.query({
                query: () => ({
                    url: "restaurants"
                })
            }),
            getDishes: builder.query({
                query: (restaurantId) => ({
                    url: 'dishes',
                    params: {restaurantId}
                })
            }),
            getDish: builder.query({
                query: (dishId) => ({
                    url: `dish/${dishId}`
                })
            }),
            getUsers: builder.query({
                query: () => ({
                    url: 'users'
                })
            }),
            getReviews: builder.query({
                query: (restaurantId) => ({
                    url: 'reviews',
                    params: {restaurantId}
                })
            }),
            createReview: builder.mutation({
                query: ({restaurantId, newReview}) => ({
                    url: `review/${restaurantId}`,
                    method: 'POST',
                    body: newReview
                })
            })
        })
    }
);

export const {
    useGetRestaurantsQuery,
    useGetDishesQuery, useGetDishQuery,
    useGetUsersQuery,
    useGetReviewsQuery,
    useCreateReviewMutation
} = api;