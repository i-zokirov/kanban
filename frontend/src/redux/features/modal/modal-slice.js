"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeModal = exports.openModal = exports.modalSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialModalState = { open: false, type: null, content: null };
exports.modalSlice = (0, toolkit_1.createSlice)({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        openModal: (state, action) => {
            state.open = true;
            state.type = action.payload.type;
            state.content = action.payload.content;
        },
        closeModal: (state) => {
            state.open = false;
            state.type = null;
            state.content = null;
        }
    }
});
_a = exports.modalSlice.actions, exports.openModal = _a.openModal, exports.closeModal = _a.closeModal;
exports.default = exports.modalSlice.reducer;
//# sourceMappingURL=modal-slice.js.map