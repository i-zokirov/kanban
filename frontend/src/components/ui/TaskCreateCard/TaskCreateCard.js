"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Card_1 = require("../Card");
const TaskCreateCard = ({ style, value, onChange, onBlur, onKeyDown }) => {
    return (<Card_1.default className={`min-h-12 task-card-wrapper m-1 ${style}`} style={style}>
      <div>
        <input type="text" placeholder="Start typing" autoFocus={true} value={value} onChange={onChange} onBlur={onBlur} onKeyDown={onKeyDown} className="border-none w-full h-full focus:outline-none"/>
      </div>
    </Card_1.default>);
};
exports.default = TaskCreateCard;
//# sourceMappingURL=TaskCreateCard.js.map