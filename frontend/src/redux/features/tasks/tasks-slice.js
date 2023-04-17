"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteTaskMutation = exports.useUpdateTaskMutation = exports.useAddTaskMutation = exports.useGetTasksQuery = exports.tasksApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const app_config_1 = require("../../../app.config");
exports.tasksApi = (0, react_1.createApi)({
    reducerPath: 'tasksApi',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: app_config_1.API_URL }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: `/tasks`,
                method: 'GET'
            })
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            })
        }),
        updateTask: builder.mutation({
            query: (_a) => {
                var { id } = _a, data = __rest(_a, ["id"]);
                return ({
                    url: `/tasks/${id}`,
                    method: 'PATCH',
                    body: data
                });
            }
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            })
        })
    })
});
exports.useGetTasksQuery = exports.tasksApi.useGetTasksQuery, exports.useAddTaskMutation = exports.tasksApi.useAddTaskMutation, exports.useUpdateTaskMutation = exports.tasksApi.useUpdateTaskMutation, exports.useDeleteTaskMutation = exports.tasksApi.useDeleteTaskMutation;
//# sourceMappingURL=tasks-slice.js.map