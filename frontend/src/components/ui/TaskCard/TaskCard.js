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
const Card_1 = require("../Card");
const Typography_1 = require("../Typography");
const IconButton_1 = require("../IconButton");
const rx_1 = require("react-icons/rx");
const hooks_1 = require("../../../redux/hooks");
const modal_slice_1 = require("../../../redux/features/modal/modal-slice");
const TaskCard = (_a) => {
    var { children, task } = _a, rest = __rest(_a, ["children", "task"]);
    const [hover, setHover] = react_1.default.useState(false);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleEdit = (e) => {
        e.stopPropagation();
        dispatch((0, modal_slice_1.openModal)({ type: 'TaskCardModal', content: task }));
    };
    return (<react_1.default.Fragment>
      <Card_1.default onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="min-h-12 task-card-wrapper m-1" {...rest}>
        <div className="flex justify-between items-center">
          <Typography_1.default variant="body1"> {task.title}</Typography_1.default>
          <IconButton_1.default onClick={handleEdit} style={{ opacity: hover ? 100 : 0 }} className="transition-opacity duration-200 hover:opacity-100">
            <rx_1.RxPencil1 />
          </IconButton_1.default>
        </div>
        <Typography_1.default variant="subtitle1"> {task.description}</Typography_1.default>
      </Card_1.default>
    </react_1.default.Fragment>);
};
exports.default = TaskCard;
//# sourceMappingURL=TaskCard.js.map