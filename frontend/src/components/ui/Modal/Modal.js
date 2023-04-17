"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const IconButton_1 = require("../IconButton/IconButton");
const rx_1 = require("react-icons/rx");
const hooks_1 = require("../../../redux/hooks");
const modal_slice_1 = require("../../../redux/features/modal/modal-slice");
const Modal = ({ onClose, className = '', children }) => {
    const open = (0, hooks_1.useAppSelector)((state) => state.modal.open);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleClose = () => {
        dispatch((0, modal_slice_1.closeModal)());
        if (onClose)
            onClose();
    };
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    const handleOutsideClick = (event) => {
        if (!event.target) {
            return;
        }
        const target = event.target;
        if (target.closest('.modal-content')) {
            return;
        }
        handleClose();
    };
    (0, react_1.useEffect)(() => {
        if (open) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (<>
      {open && (<div className="fixed z-50 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0  bg-gray-700 bg-opacity-50"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className={`modal-content inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle  w-80 h-80 ${className} p-4`} role="dialog" aria-modal="true" aria-labelledby="modal-headline" style={{ minWidth: '460px', minHeight: '460px' }}>
              <IconButton_1.default onClick={handleClose} className="absolute top-0 right-0 m-2">
                <rx_1.RxCross2 />
              </IconButton_1.default>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>)}
    </>);
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map