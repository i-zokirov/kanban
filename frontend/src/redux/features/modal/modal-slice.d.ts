import type { PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../../interfaces';
interface ModalState {
    open: boolean;
    type: string | null;
    content: ITask | null;
}
export declare const modalSlice: import("@reduxjs/toolkit").Slice<ModalState, {
    openModal: (state: import("immer/dist/internal").WritableDraft<ModalState>, action: PayloadAction<{
        content: ITask | any;
        type: string;
    }>) => void;
    closeModal: (state: import("immer/dist/internal").WritableDraft<ModalState>) => void;
}, "modal">;
export declare const openModal: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    content: ITask | any;
    type: string;
}, "modal/openModal">, closeModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"modal/closeModal">;
declare const _default: import("redux").Reducer<ModalState, import("redux").AnyAction>;
export default _default;
