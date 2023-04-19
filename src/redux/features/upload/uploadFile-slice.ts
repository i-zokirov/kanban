import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../app.config'

interface UploadFileRequest {
  formData: FormData
}
interface UploadResponse {
  metadata: {
    [x: string]: string
  }
  publicUrl: string
}

export const uploadApi = createApi({
  reducerPath: 'upload',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    uploadFile: builder.mutation<UploadResponse, UploadFileRequest>({
      query: ({ formData }) => ({
        url: '/media',
        method: 'POST',
        body: formData
      })
    }),
    getMediaById: builder.query({
      query: (mediaId: string) => {
        return {
          url: `/media/${mediaId}`,
          method: 'GET'
        }
      }
    })
  })
})

export const uploadSlice = createSlice({
  name: 'upload',
  initialState: uploadApi,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      uploadApi.endpoints.uploadFile.matchPending,
      (state, action) => {
        // handle pending state
      }
    )
    builder.addMatcher(
      uploadApi.endpoints.uploadFile.matchFulfilled,
      (state, action) => {
        // handle fulfilled state
      }
    )
    builder.addMatcher(
      uploadApi.endpoints.uploadFile.matchRejected,
      (state, action) => {
        // handle rejected state
      }
    )
  }
})

export const { useUploadFileMutation, useGetMediaByIdQuery } = uploadApi
