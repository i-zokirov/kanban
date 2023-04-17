"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const kanban_1 = require("./components/kanban");
const ui_1 = require("./components/ui");
const sections_slice_1 = require("./redux/features/sections/sections-slice");
const tasks_slice_1 = require("./redux/features/tasks/tasks-slice");
const hooks_1 = require("./redux/hooks");
const kanban_slice_1 = require("./redux/features/kanban/kanban-slice");
function App() {
    const [openCreateTask, setOpenCreateTask] = (0, react_1.useState)(null);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [updateTask, { isLoading: taskUpdateIsLoading }] = (0, tasks_slice_1.useUpdateTaskMutation)();
    const handleDragEnd = async (result) => {
        if (!result.destination)
            return;
        const { source, destination } = result;
        dispatch((0, kanban_slice_1.moveTaskOnBoard)({ source, destination }));
        await updateTask({
            id: result.draggableId,
            section: destination.droppableId
        });
    };
    const { data: sections, isLoading: sectionsLoading } = (0, sections_slice_1.useGetSectionsQuery)('');
    const { data: tasks, isLoading: tasksLoading } = (0, tasks_slice_1.useGetTasksQuery)('');
    const { columns } = (0, hooks_1.useAppSelector)((state) => state.kanban);
    (0, react_1.useEffect)(() => {
        if (sections)
            dispatch((0, kanban_slice_1.buildKanbanBoard)(sections));
        if (sections && tasks)
            dispatch((0, kanban_slice_1.addTasksToBoardCollumns)(tasks));
    }, [sections, tasks]);
    if (sectionsLoading) {
        return <ui_1.PageLoading />;
    }
    return (<div className="app p-8 flex items-start ">
      <react_beautiful_dnd_1.DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(columns).map(([columnId, column], index) => (<kanban_1.Droppable droppableId={columnId} key={columnId}>
            {(provided) => (<kanban_1.Column {...provided.droppableProps} innerRef={provided.innerRef} title={column.title} className="flex-shrink-0">
                {column.tasks &&
                    column.tasks.map((item, index) => (<react_beautiful_dnd_1.Draggable key={item._id} draggableId={item._id} index={index}>
                      {(provided) => (<ui_1.TaskCard innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} task={item}/>)}
                    </react_beautiful_dnd_1.Draggable>))}
                {provided.placeholder}
              </kanban_1.Column>)}
          </kanban_1.Droppable>))}
      </react_beautiful_dnd_1.DragDropContext>
      <kanban_1.ColumnPlaceHolder />

      <ui_1.EditTaskModal />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map