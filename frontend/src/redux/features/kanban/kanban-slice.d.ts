import type { PayloadAction } from '@reduxjs/toolkit';
import { IBoardColumn, ISection, ITask } from '../../../interfaces';
interface IBoardState {
    columns: {
        [x: string]: IBoardColumn;
    };
}
export declare const kanbanSlice: import("@reduxjs/toolkit").Slice<IBoardState, {
    buildKanbanBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ISection[]>) => void;
    addTasksToBoardCollumns: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ITask[]>) => void;
    addTaskToCollumn: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ITask>) => void;
    updateTaskInCollumn: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ITask>) => void;
    addColumnToBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ISection>) => void;
    removeTaskOnBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ITask>) => void;
    removeColumnOnBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ISection>) => void;
    updateColumnOnBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<ISection>) => void;
    moveTaskOnBoard: (state: import("immer/dist/internal").WritableDraft<IBoardState>, action: PayloadAction<{
        source: {
            droppableId: string;
            index: number;
        };
        destination: {
            droppableId: string;
            index: number;
        };
    }>) => void;
}, "kanban">;
export declare const buildKanbanBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ISection[], "kanban/buildKanbanBoard">, addColumnToBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ISection, "kanban/addColumnToBoard">, addTasksToBoardCollumns: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ITask[], "kanban/addTasksToBoardCollumns">, addTaskToCollumn: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ITask, "kanban/addTaskToCollumn">, updateTaskInCollumn: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ITask, "kanban/updateTaskInCollumn">, moveTaskOnBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    source: {
        droppableId: string;
        index: number;
    };
    destination: {
        droppableId: string;
        index: number;
    };
}, "kanban/moveTaskOnBoard">, removeTaskOnBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ITask, "kanban/removeTaskOnBoard">, removeColumnOnBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ISection, "kanban/removeColumnOnBoard">, updateColumnOnBoard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ISection, "kanban/updateColumnOnBoard">;
declare const _default: import("redux").Reducer<IBoardState, import("redux").AnyAction>;
export default _default;
