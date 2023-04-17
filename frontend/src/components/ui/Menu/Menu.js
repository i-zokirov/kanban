"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Menu = ({ anchorElement, className = '', children, isOpen, setIsOpen }) => {
    const menuRef = (0, react_1.useRef)(null);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (<div className={`relative inline-block ${className}`} ref={menuRef}>
      {anchorElement}
      {isOpen && (<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
          <div className="py-1">{children}</div>
        </div>)}
    </div>);
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map