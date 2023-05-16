import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://646338367a9eead6fae04915.mockapi.io/api/v1',
  }),
    tagTypes: ['contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['contacts'],
        }),

        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),

        addContact: builder.mutation({
            query: values => ({
                url: `/contacts`,
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
} = contactsApi;