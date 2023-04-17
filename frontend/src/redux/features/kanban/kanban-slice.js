"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateColumnOnBoard = exports.removeColumnOnBoard = exports.removeTaskOnBoard = exports.moveTaskOnBoard = exports.updateTaskInCollumn = exports.addTaskToCollumn = exports.addTasksToBoardCollumns = exports.addColumnToBoard = exports.buildKanbanBoard = exports.kanbanSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    columns: {}
};
exports.kanbanSlice = (0, toolkit_1.createSlice)({
    name: 'kanban',
    initialState,
    reducers: {
        buildKanbanBoard: (state, action) => {
            const columns = {};
            const sections = action.payload;
            for (let section of sections) {
                const column = Object.assign(Object.assign({}, section), { tasks: [] });
                columns[section._id] = column;
            }
            state.columns = columns;
        },
        addTasksToBoardCollumns: (state, action) => {
            const columns = {};
            Object.entries(state.columns).forEach(([columnId, column]) => {
                const tasks = action.payload;
                const columnTasks = tasks.filter((task) => task.section && task.section._id === columnId);
                columns[columnId] = Object.assign(Object.assign({}, column), { tasks: columnTasks });
            });
            state.columns = columns;
        },
        addTaskToCollumn: (state, action) => {
            const task = action.payload;
            if (!state.columns[task.section._id].tasks.some((x) => x._id === task._id))
                state.columns[task.section._id].tasks.push(task);
        },
        updateTaskInCollumn: (state, action) => {
            const task = action.payload;
            const index = state.columns[task.section._id].tasks.findIndex((el) => el._id === task._id);
            if (index >= 0) {
                state.columns[task.section._id].tasks[index] = task;
            }
        },
        addColumnToBoard: (state, action) => {
            const section = action.payload;
            state.columns[section._id] = Object.assign(Object.assign({}, section), { tasks: [] });
        },
        removeTaskOnBoard: (state, action) => {
            const task = action.payload;
            const sectionData = state.columns[task.section._id].tasks;
            state.columns[task.section._id].tasks = sectionData.filter((el) => el._id !== task._id);
        },
        removeColumnOnBoard: (state, action) => {
            const section = action.payload;
            delete state.columns[section._id];
        },
        updateColumnOnBoard: (state, action) => {
            const section = action.payload;
            state.columns[section._id] = Object.assign(Object.assign({}, section), { tasks: state.columns[section._id].tasks });
        },
        moveTaskOnBoard: (state, action) => {
            if (action.payload.source.droppableId !==
                action.payload.destination.droppableId) {
                const sourceColumn = state.columns[action.payload.source.droppableId];
                const destinationColumn = state.columns[action.payload.destination.droppableId];
                const sourceTasks = [...sourceColumn.tasks];
                const destinationTasks = [...destinationColumn.tasks];
                const [removed] = sourceTasks.splice(action.payload.source.index, 1);
                if (removed) {
                    removed.section._id = action.payload.destination.droppableId;
                    destinationTasks.splice(action.payload.destination.index, 0, removed);
                    state.columns[action.payload.source.droppableId] = Object.assign(Object.assign({}, sourceColumn), { tasks: sourceTasks });
                    state.columns[action.payload.destination.droppableId] = Object.assign(Object.assign({}, destinationColumn), { tasks: destinationTasks });
                }
                else {
                    const column = state.columns[action.payload.source.droppableId];
                    const copiedItems = [...column.tasks];
                    const [removed] = copiedItems.splice(action.payload.source.index, 1);
                    if (removed) {
                        copiedItems.splice(action.payload.destination.index, 0, removed);
                        state.columns[action.payload.source.droppableId] = Object.assign(Object.assign({}, column), { tasks: copiedItems });
                    }
                }
            }
        }
    }
});
_a = exports.kanbanSlice.actions, exports.buildKanbanBoard = _a.buildKanbanBoard, exports.addColumnToBoard = _a.addColumnToBoard, exports.addTasksToBoardCollumns = _a.addTasksToBoardCollumns, exports.addTaskToCollumn = _a.addTaskToCollumn, exports.updateTaskInCollumn = _a.updateTaskInCollumn, exports.moveTaskOnBoard = _a.moveTaskOnBoard, exports.removeTaskOnBoard = _a.removeTaskOnBoard, exports.removeColumnOnBoard = _a.removeColumnOnBoard, exports.updateColumnOnBoard = _a.updateColumnOnBoard;
exports.default = exports.kanbanSlice.reducer;
//# sourceMappingURL=kanban-slice.js.map