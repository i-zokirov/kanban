import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modal/modal-slice'

export const store = configureStore({
  reducer: {
    // Add reducers here

    modal: modalSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
