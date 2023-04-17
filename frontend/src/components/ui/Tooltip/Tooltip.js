"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Tooltip = ({ content, position = 'top', children }) => {
    const [hovered, setHovered] = (0, react_1.useState)(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    let positionClasses = '';
    switch (position) {
        case 'top':
            positionClasses =
                'absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2';
            break;
        case 'bottom':
            positionClasses =
                'absolute top-full left-1/2 transform -translate-x-1/2 mt-2';
            break;
        case 'left':
            positionClasses =
                'absolute top-1/2 right-full transform translate-y-1/2 -ml-2';
            break;
        case 'right':
            positionClasses =
                'absolute top-1/2 left-full transform -translate-y-1/2 ml-2';
            break;
        default:
            break;
    }
    const arrowClasses = `absolute w-3 h-3 bg-gray-800 transform rotate-45 ${position === 'top'
        ? 'bottom-0 left-1/2 ml-px -mb-1'
        : position === 'bottom'
            ? 'top-0 left-1/2 ml-px'
            : position === 'left'
                ? 'top-1/2 right-0 mt-px ml-1'
                : position === 'right'
                    ? 'top-1/2 left-0 mt-px -ml-1'
                    : ''}`;
    return (<div className="relative inline-block w-full">
      <div className="inline-block w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {hovered && (<div className={`bg-gray-800 z-10 text-white text-sm px-2 py-1 rounded ${positionClasses} `}>
          {content}
          <span className={arrowClasses}/>
        </div>)}
    </div>);
};
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map