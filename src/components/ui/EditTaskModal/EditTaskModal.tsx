import React, { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { ITask } from '../../../interfaces'
import {
  removeTaskOnBoard,
  updateTaskInCollumn
} from '../../../redux/features/kanban/kanban-slice'
import { closeModal } from '../../../redux/features/modal/modal-slice'
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation
} from '../../../redux/features/tasks/tasks-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Modal from '../Modal'
import MultipartForm from '../MultipartForm/MultipartForm'
import Typography from '../Typography'
import FetchTaskMedia from './FetchTaskMedia'

const TaskCardModal: React.FC = () => {
  const modal = useAppSelector((state) => state.modal)
  const [task, setTask] = React.useState<ITask | null>(null)
  const [title, setTitle] = React.useState(task ? task.title : '')
  const [description, setDescription] = React.useState(
    task ? task.description : ''
  )
  const [updateTask, { data: updatedTaskData }] = useUpdateTaskMutation()
  const [deletTask] = useDeleteTaskMutation()
  const dispatch = useAppDispatch()
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleBlur = async () => {
    if (task && title) {
      if (title !== task.title || task.description !== description) {
        const body = {
          id: task._id,
          title,
          description
        }
        await updateTask(body)
      }
    }
  }

  const handleDelete = () => {
    if (task) {
      deletTask(task._id)
      dispatch(removeTaskOnBoard(task))
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    if (modal.type === 'TaskCardModal') {
      setTask(modal.content as ITask)
    }
    if (updatedTaskData) {
      dispatch(updateTaskInCollumn(updatedTaskData))
      setTask(updatedTaskData)
    }
  }, [modal, updatedTaskData])
  useEffect(() => {
    if (task) {
      setTitle(task?.title)
      setDescription(task.description)
    }
  }, [task])

  if (!task) {
    return <></>
  }

  return (
    <Modal>
      <Typography variant="h5">Edit task</Typography>
      <div className="mt-3">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleDescChange}
          value={description}
          onBlur={handleBlur}
        ></textarea>
      </div>
      {task && task._id && <FetchTaskMedia taskId={task._id} />}
      <div className=" w-full h-30 mt-3">
        <MultipartForm />
      </div>
      <div className="mt-2">
        <button
          className="flex items-center border border-red-500 text-red-500 rounded px-3 py-1 hover:bg-red-500 hover:text-white focus:outline-none"
          onClick={handleDelete}
        >
          <AiOutlineDelete />
          Delete
        </button>
      </div>
    </Modal>
  )
}

export default TaskCardModal
