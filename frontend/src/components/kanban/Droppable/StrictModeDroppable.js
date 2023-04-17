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
const react_1 = require("react");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const StrictModeDroppable = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [enabled, setEnabled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);
    if (!enabled) {
        return null;
    }
    return <react_beautiful_dnd_1.Droppable {...props}>{children}</react_beautiful_dnd_1.Droppable>;
};
exports.default = StrictModeDroppable;
//# sourceMappingURL=StrictModeDroppable.js.map