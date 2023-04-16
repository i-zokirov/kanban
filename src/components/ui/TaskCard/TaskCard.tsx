import React from 'react'
import Card from '../Card'
import { Task } from '../../../interfaces'
import Typography from '../Typography'
import IconButton from '../IconButton'
import { RxPencil1 } from 'react-icons/rx'
import Modal from '../Modal'
import { useAppDispatch } from '../../../redux/hooks'
import { openModal } from '../../../redux/features/modal/modal-slice'

interface TaskCardProps {
  innerRef: React.Ref<HTMLDivElement>
  task: Task
  [x: string]: any
}

const TaskCard: React.FC<TaskCardProps> = ({ children, task, ...rest }) => {
  const [hover, setHover] = React.useState(false)
  const [title, setTitle] = React.useState(task.title)
  const [description, setDescription] = React.useState(task.description)
  const dispatch = useAppDispatch()
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    console.log('edit')
    dispatch(openModal())
  }
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }
  return (
    <React.Fragment>
      <Card
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="min-h-12 task-card-wrapper m-1"
        {...rest}
      >
        <div className="flex justify-between items-center">
          <Typography variant="body1"> {task.title}</Typography>
          <IconButton
            onClick={handleEdit}
            style={{ opacity: hover ? 100 : 0 }}
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <RxPencil1 />
          </IconButton>
        </div>
        <Typography variant="subtitle1"> {task.description}</Typography>
      </Card>
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
          >
            {description}
          </textarea>
        </div>
        <div className="flex items-center justify-center w-full h-30 mt-3">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default TaskCard
