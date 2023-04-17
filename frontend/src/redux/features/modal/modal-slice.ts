import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../../interfaces'

interface ModalState {
  open: boolean
  type: string | null
  content: ITask | null
}

const initialModalState: ModalState = { open: false, type: null, content: null }

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ content: ITask | any; type: string }>
    ) => {
      state.open = true
      state.type = action.payload.type
      state.content = action.payload.content
    },
    closeModal: (state) => {
      state.open = false
      state.type = null
      state.content = null
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
