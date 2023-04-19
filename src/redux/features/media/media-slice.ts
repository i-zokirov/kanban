import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Media } from '../../../interfaces'
interface IMediaState {
  [x: string]: Media[]
}

const initialState: IMediaState = {}

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    addMediaToTask: (
      state,
      action: PayloadAction<{ taskId: string; media: Media[] }>
    ) => {
      const { taskId, media } = action.payload
      if (!state[taskId]) state[taskId] = []
      state[taskId].push(...media)
    }
  }
})

export const { addMediaToTask } = mediaSlice.actions

export default mediaSlice.reducer
