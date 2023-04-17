"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const rx_1 = require("react-icons/rx");
const ui_1 = require("../../ui");
const sections_slice_1 = require("../../../redux/features/sections/sections-slice");
const hooks_1 = require("../../../redux/hooks");
const kanban_slice_1 = require("../../../redux/features/kanban/kanban-slice");
const ColumnPlaceHolder = () => {
    const [showInput, setShowInput] = react_1.default.useState(false);
    const [inputValue, setInputValue] = react_1.default.useState('');
    const [addSection, { data: createdSection }] = (0, sections_slice_1.useAddSectionMutation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputBlur = (e) => {
        if (inputValue) {
            addSection({ title: inputValue });
            setInputValue('');
            setShowInput(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            addSection({ title: inputValue });
            setInputValue('');
            setShowInput(false);
        }
    };
    (0, react_1.useEffect)(() => {
        if (createdSection) {
            setShowInput(false);
            dispatch((0, kanban_slice_1.addColumnToBoard)(createdSection));
        }
    }, [createdSection]);
    const handleAddSection = () => {
        setShowInput(true);
    };
    if (showInput) {
        return (<ui_1.Card style={{ width: '300px' }} className="ml-1 flex-shrink-0">
        <div>
          <input type="text" placeholder="Start typing..." autoFocus={true} value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} className="border-none w-full h-full focus:outline-none" onKeyDown={handleKeyDown}/>
        </div>
      </ui_1.Card>);
    }
    return (<button onClick={handleAddSection} className="w-60 flex items-center  border-2 border-gray-400 rounded-md py-4 px-5 mb-2 bg-gray-300 opacity-80 hover:bg-white transition-all">
      <rx_1.RxPlus style={{ width: '20px', height: '20px', marginRight: '8px' }}/>{' '}
      Add another section
    </button>);
};
exports.default = ColumnPlaceHolder;
//# sourceMappingURL=ColumnPlaceHolder.js.map