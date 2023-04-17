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
const Card = (_a) => {
    var { children, className, style, innerRef } = _a, rest = __rest(_a, ["children", "className", "style", "innerRef"]);
    return (<div ref={innerRef} className={`bg-white rounded-md shadow-sm p-2 ${className}`} style={Object.assign({}, style)} {...rest}>
      {children}
    </div>);
};
exports.default = Card;
//# sourceMappingURL=Card.js.map