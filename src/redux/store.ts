import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modal/modal-slice'
import { sectionsApi } from './features/sections/sections-slice'
import { tasksApi } from './features/tasks/tasks-slice'

export const store = configureStore({
  reducer: {
    // Add reducers here
    modal: modalSlice,
    [sectionsApi.reducerPath]: sectionsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sectionsApi.middleware, tasksApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
