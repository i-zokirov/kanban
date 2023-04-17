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
exports.useDeleteSectionMutation = exports.useUpdateSectionMutation = exports.useAddSectionMutation = exports.useGetSectionsQuery = exports.sectionsApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const app_config_1 = require("../../../app.config");
exports.sectionsApi = (0, react_1.createApi)({
    reducerPath: 'sectionsApi',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: app_config_1.API_URL }),
    endpoints: (builder) => ({
        getSections: builder.query({
            query: () => ({
                url: `/sections`,
                method: 'GET'
            })
        }),
        addSection: builder.mutation({
            query: (data) => ({
                url: '/sections',
                method: 'POST',
                body: data
            })
        }),
        updateSection: builder.mutation({
            query: (_a) => {
                var { id } = _a, data = __rest(_a, ["id"]);
                return ({
                    url: `/sections/${id}`,
                    method: 'PATCH',
                    body: data
                });
            }
        }),
        deleteSection: builder.mutation({
            query: (id) => ({
                url: `/sections/${id}`,
                method: 'DELETE'
            })
        })
    })
});
exports.useGetSectionsQuery = exports.sectionsApi.useGetSectionsQuery, exports.useAddSectionMutation = exports.sectionsApi.useAddSectionMutation, exports.useUpdateSectionMutation = exports.sectionsApi.useUpdateSectionMutation, exports.useDeleteSectionMutation = exports.sectionsApi.useDeleteSectionMutation;
//# sourceMappingURL=sections-slice.js.map