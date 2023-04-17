"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const modal_slice_1 = require("./features/modal/modal-slice");
const sections_slice_1 = require("./features/sections/sections-slice");
const tasks_slice_1 = require("./features/tasks/tasks-slice");
const kanban_slice_1 = require("./features/kanban/kanban-slice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        modal: modal_slice_1.default,
        kanban: kanban_slice_1.default,
        [sections_slice_1.sectionsApi.reducerPath]: sections_slice_1.sectionsApi.reducer,
        [tasks_slice_1.tasksApi.reducerPath]: tasks_slice_1.tasksApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sections_slice_1.sectionsApi.middleware, tasks_slice_1.tasksApi.middleware])
});
//# sourceMappingURL=store.js.map