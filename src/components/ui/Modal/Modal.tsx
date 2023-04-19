import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { closeModal } from '../../../redux/features/modal/modal-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import IconButton from '../IconButton/IconButton'

type ModalProps = {
  onClose?: () => void
  className?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, className = '', children }) => {
  const open = useAppSelector((state) => state.modal.open)
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal())
    if (onClose) onClose()
  }
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }
  const handleOutsideClick = (event: MouseEvent) => {
    if (!event.target) {
      return
    }

    const target = event.target as HTMLElement
    if (target.closest('.modal-content')) {
      return
    }

    handleClose()
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <>
      {open && (
        <div className="fixed z-50 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0  bg-gray-700 bg-opacity-50"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className={`modal-content inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle  w-80 h-80 ${className} p-4`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{
                minWidth: '460px',
                minHeight: '580px'
              }}
            >
              <IconButton
                onClick={handleClose}
                className="absolute top-0 right-0 m-2"
              >
                <RxCross2 />
              </IconButton>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
