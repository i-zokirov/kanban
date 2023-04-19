import { configureStore } from '@reduxjs/toolkit'
import kanbanSlice from './features/kanban/kanban-slice'
import mediaSlice from './features/media/media-slice'
import modalSlice from './features/modal/modal-slice'
import { sectionsApi } from './features/sections/sections-slice'
import { tasksApi } from './features/tasks/tasks-slice'
import { uploadApi } from './features/upload/uploadFile-slice'

export const store = configureStore({
  reducer: {
    // Add reducers here
    modal: modalSlice,
    kanban: kanbanSlice,
    media: mediaSlice,
    [sectionsApi.reducerPath]: sectionsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      sectionsApi.middleware,
      tasksApi.middleware,
      uploadApi.middleware
    ])
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
