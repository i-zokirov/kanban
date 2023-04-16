import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../app.config'

export const sectionsApi = createApi({
  reducerPath: 'sectionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSections: builder.query({
      query: () => ({
        url: `/sections`,
        method: 'GET'
      })
    }),
    addSection: builder.mutation({
      query: (data) => ({
        url: '/sections',
        method: 'POST',
        body: data
      })
    }),
    updateSection: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/sections/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteSection: builder.mutation({
      query: (id) => ({
        url: `/sections/${id}`,
        method: 'DELETE'
      })
    })
  })
})
export const {
  useGetSectionsQuery,
  useAddSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation
} = sectionsApi
