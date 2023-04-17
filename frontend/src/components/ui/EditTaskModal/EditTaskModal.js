"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ai_1 = require("react-icons/ai");
const Typography_1 = require("../Typography");
const Modal_1 = require("../Modal");
const hooks_1 = require("../../../redux/hooks");
const tasks_slice_1 = require("../../../redux/features/tasks/tasks-slice");
const kanban_slice_1 = require("../../../redux/features/kanban/kanban-slice");
const modal_slice_1 = require("../../../redux/features/modal/modal-slice");
const TaskCardModal = () => {
    const modal = (0, hooks_1.useAppSelector)((state) => state.modal);
    const [task, setTask] = react_1.default.useState(null);
    const [title, setTitle] = react_1.default.useState(task ? task.title : '');
    const [description, setDescription] = react_1.default.useState(task ? task.description : '');
    const [updateTask, { data: updatedTaskData }] = (0, tasks_slice_1.useUpdateTaskMutation)();
    const [deletTask] = (0, tasks_slice_1.useDeleteTaskMutation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescChange = (e) => {
        setDescription(e.target.value);
    };
    const handleBlur = async () => {
        if (task && title) {
            if (title !== task.title || task.description !== description) {
                const body = {
                    id: task._id,
                    title,
                    description
                };
                await updateTask(body);
            }
        }
    };
    const handleDelete = () => {
        if (task) {
            deletTask(task._id);
            dispatch((0, kanban_slice_1.removeTaskOnBoard)(task));
            dispatch((0, modal_slice_1.closeModal)());
        }
    };
    (0, react_1.useEffect)(() => {
        if (updatedTaskData) {
            dispatch((0, kanban_slice_1.updateTaskInCollumn)(updatedTaskData));
            setTask(updatedTaskData);
        }
    }, [updatedTaskData]);
    (0, react_1.useEffect)(() => {
        if (modal.type === 'TaskCardModal') {
            setTask(modal.content);
        }
    }, [modal]);
    (0, react_1.useEffect)(() => {
        if (task) {
            setTitle(task === null || task === void 0 ? void 0 : task.title);
            setDescription(task.description);
        }
    }, [task]);
    if (!task) {
        return <></>;
    }
    return (<Modal_1.default>
      <Typography_1.default variant="h5">Edit task</Typography_1.default>
      <div className="mt-3">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input id="title" type="text" value={title} onChange={handleTitleChange} onBlur={handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <textarea id="description" rows={3} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleDescChange} value={description} onBlur={handleBlur}></textarea>
      </div>
      <div className="flex items-center justify-center w-full h-30 mt-3">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden"/>
        </label>
      </div>
      <div className="mt-2">
        <button className="flex items-center border border-red-500 text-red-500 rounded px-3 py-2 hover:bg-red-500 hover:text-white focus:outline-none" onClick={handleDelete}>
          <ai_1.AiOutlineDelete />
          Delete
        </button>
      </div>
    </Modal_1.default>);
};
exports.default = TaskCardModal;
//# sourceMappingURL=EditTaskModal.js.map