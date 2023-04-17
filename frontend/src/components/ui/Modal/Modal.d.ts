import React from 'react';
type ModalProps = {
    onClose?: () => void;
    className?: string;
    children: React.ReactNode;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
