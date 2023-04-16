import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  open: boolean
}

const initialModalState: ModalState = { open: false }

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (state) => {
      state.open = true
    },
    closeModal: (state) => {
      state.open = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
