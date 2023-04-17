"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const IconButton = ({ onClick, className = '', children, style }) => {
    const classes = `bg-transparent text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900  flex items-center justify-center transition-colors duration-200 ease-in-out h-8 w-8 rounded-full hover:bg-gray-200 ${className}`;
    return (<button type="button" style={style} onClick={onClick} className={classes}>
      {children}
    </button>);
};
exports.default = IconButton;
//# sourceMappingURL=IconButton.js.map