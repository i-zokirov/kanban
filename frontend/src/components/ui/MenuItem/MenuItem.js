"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MenuItem = ({ children, className, style, onClick }) => {
    return (<button onClick={onClick} className={`block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center ${className}`} style={Object.assign({}, style)}>
      {children}
    </button>);
};
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map