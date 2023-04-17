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
const ui_1 = require("../../ui");
const ui_2 = require("../../ui");
const rx_1 = require("react-icons/rx");
const ai_1 = require("react-icons/ai");
const hi_1 = require("react-icons/hi");
require("./Column.css");
const tasks_slice_1 = require("../../../redux/features/tasks/tasks-slice");
const hooks_1 = require("../../../redux/hooks");
const kanban_slice_1 = require("../../../redux/features/kanban/kanban-slice");
const sections_slice_1 = require("../../../redux/features/sections/sections-slice");
const Column = (_a) => {
    var { title, children, className } = _a, rest = __rest(_a, ["title", "children", "className"]);
    const dropableProps = Object.assign({}, rest);
    const columnId = dropableProps['data-rbd-droppable-id'];
    const [openMenu, setOpenMenu] = (0, react_1.useState)(false);
    const [showCreateTaskCard, setShowCreateTaskCard] = (0, react_1.useState)(null);
    const [showSectionTitleInput, setShowSectionTitleInput] = (0, react_1.useState)(false);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [sectionInputValue, setsectionInputValue] = (0, react_1.useState)(title);
    const [addTask, { data: createdTask }] = (0, tasks_slice_1.useAddTaskMutation)();
    const [updateSection, { data: updatedSection }] = (0, sections_slice_1.useUpdateSectionMutation)();
    const [deleteSection, { data: deletedSection }] = (0, sections_slice_1.useDeleteSectionMutation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSectionInputChange = (e) => {
        setsectionInputValue(e.target.value);
    };
    const handleSectionInputBlur = (e) => {
        if (sectionInputValue && sectionInputValue !== title) {
            updateSection({ id: columnId, title: sectionInputValue });
        }
        setShowSectionTitleInput(false);
    };
    const handleInputBlur = (e) => {
        if (inputValue) {
            handleCreateTask();
        }
        setShowCreateTaskCard(null);
    };
    const handleMenuClick = () => {
        setOpenMenu((prev) => !prev);
    };
    const handleCreateTask = async () => {
        const task = { title: inputValue, section: columnId };
        await addTask(task);
        setInputValue('');
        setShowCreateTaskCard(null);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            handleCreateTask();
        }
    };
    const handleSectionInputKeyDown = (e) => {
        if (e.key === 'Enter' && sectionInputValue && sectionInputValue !== title) {
            updateSection({ id: columnId, title: sectionInputValue });
            setShowSectionTitleInput(false);
        }
    };
    const handleDelete = () => {
        setOpenMenu(false);
        deleteSection(columnId);
    };
    const handleEdit = () => {
        setShowSectionTitleInput(true);
        setOpenMenu(false);
    };
    (0, react_1.useEffect)(() => {
        if (createdTask) {
            dispatch((0, kanban_slice_1.addTaskToCollumn)(createdTask));
        }
        if (deletedSection) {
            dispatch((0, kanban_slice_1.removeColumnOnBoard)(deletedSection));
        }
        if (updatedSection) {
            dispatch((0, kanban_slice_1.updateColumnOnBoard)(updatedSection));
        }
    }, [createdTask, deletedSection, updatedSection]);
    return (<ui_1.Card className={`mx-2 column ${className}`} style={{ backgroundColor: '#f7f8f9', width: '300px' }} {...rest}>
      <div className="flex items-center justify-between p-3 ">
        {showSectionTitleInput ? (<div>
            <input type="text" placeholder="Start typing" autoFocus={true} value={sectionInputValue} onChange={handleSectionInputChange} onBlur={handleSectionInputBlur} onKeyDown={handleSectionInputKeyDown} className="border-none w-full h-full focus:outline-none p-2 rounded-md bg-gray-300 w-full text-gray-700"/>
          </div>) : (<ui_1.Typography variant="h5" className="font-normal">
            {title}
          </ui_1.Typography>)}

        <ui_1.Menu anchorElement={<ui_2.IconButton onClick={handleMenuClick}>
              <rx_1.RxDotsHorizontal />
            </ui_2.IconButton>} isOpen={openMenu} setIsOpen={setOpenMenu}>
          <ui_1.MenuItem onClick={handleEdit}>
            <ai_1.AiOutlineEdit style={{ marginRight: '10px' }}/> Edit section
          </ui_1.MenuItem>
          <ui_1.MenuItem onClick={handleDelete}>
            <ai_1.AiOutlineDelete style={{ marginRight: '10px' }}/> Delete section
          </ui_1.MenuItem>

          <ui_1.Tooltip position="top" content="Not implemented!">
            <ui_1.MenuItem>
              <hi_1.HiOutlineArchive style={{ marginRight: '10px' }}/> Archive this
              list
            </ui_1.MenuItem>
          </ui_1.Tooltip>
        </ui_1.Menu>
      </div>
      <div className="scrollable max-h-80 overscroll-y-auto overflow-y-scroll">
        {children}
        {showCreateTaskCard === columnId && (<ui_1.TaskCreateCard value={inputValue} onBlur={handleInputBlur} onChange={handleInputChange} onKeyDown={handleKeyDown}/>)}
      </div>

      <div>
        <button onClick={() => setShowCreateTaskCard(columnId)} className="block py-2 px-4 text-md text-gray-800 hover:bg-gray-200 w-4/5 text-left flex items-center rounded-md m-2 justify-start ">
          <rx_1.RxPlus style={{ width: '20px', height: '20px', marginRight: '8px' }}/>{' '}
          Add a card
        </button>
      </div>
    </ui_1.Card>);
};
exports.default = Column;
//# sourceMappingURL=Column.js.map