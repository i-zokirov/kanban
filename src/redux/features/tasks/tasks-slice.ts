import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../app.config'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/tasks'
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: '/tasks',
        method: 'POST',
        body: data
      })
    }),
    updateTask: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = tasksApi
