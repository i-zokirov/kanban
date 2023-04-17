import React, { useEffect, useState } from 'react'
import {
  Card,
  Menu,
  MenuItem,
  TaskCreateCard,
  Tooltip,
  Typography
} from '../../ui'
import { IconButton } from '../../ui'
import { RxDotsHorizontal, RxPlus } from 'react-icons/rx'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiOutlineArchive } from 'react-icons/hi'
import './Column.css'
import { useAddTaskMutation } from '../../../redux/features/tasks/tasks-slice'
import { useAppDispatch } from '../../../redux/hooks'
import {
  addTaskToCollumn,
  removeColumnOnBoard
} from '../../../redux/features/kanban/kanban-slice'
import { useDeleteSectionMutation } from '../../../redux/features/sections/sections-slice'

interface ColumnProps {
  title: string
  children: React.ReactNode
  innerRef: React.Ref<HTMLDivElement>
  [x: string]: any
}

const Column: React.FC<ColumnProps> = ({
  title,
  children,
  className,
  ...rest
}) => {
  const dropableProps = { ...rest }
  const columnId = dropableProps['data-rbd-droppable-id']
  const [isOpen, setIsOpen] = useState(false)
  const [showCreateTaskCard, setShowCreateTaskCard] = useState<string | null>(
    null
  )
  const [inputValue, setInputValue] = useState('')
  const [addTask, { data: createdTask }] = useAddTaskMutation()
  const [deleteSection, { data: deletedSection }] = useDeleteSectionMutation()
  const dispatch = useAppDispatch()
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputValue) {
      handleCreateTask()
    }
    setShowCreateTaskCard(null)
  }
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCreateTask = async () => {
    const task = { title: inputValue, section: columnId }
    await addTask(task)
    setInputValue('')
    setShowCreateTaskCard(null)
  }

  const handleDelete = () => {
    setIsOpen(false)
    deleteSection(columnId)
  }

  useEffect(() => {
    if (createdTask) {
      dispatch(addTaskToCollumn(createdTask))
    }
    if (deletedSection) {
      dispatch(removeColumnOnBoard(deletedSection))
    }
  }, [createdTask, deletedSection])
  return (
    <Card
      className={`mx-2 column ${className}`}
      style={{ backgroundColor: '#f7f8f9', width: '300px' }}
      {...rest}
    >
      <div className="flex items-center justify-between p-3 ">
        <Typography variant="h5" className="font-normal">
          {title}
        </Typography>
        <Menu
          anchorElement={
            <IconButton onClick={handleMenuClick}>
              <RxDotsHorizontal />
            </IconButton>
          }
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <MenuItem onClick={handleDelete}>
            <AiOutlineDelete style={{ marginRight: '10px' }} /> Delete section
          </MenuItem>
          <Tooltip position="top" content="Not implemented!">
            <MenuItem>
              <HiOutlineArchive style={{ marginRight: '10px' }} /> Archive this
              list
            </MenuItem>
          </Tooltip>
        </Menu>
      </div>
      <div className="scrollable max-h-80 overscroll-y-auto overflow-y-scroll">
        {children}
        {showCreateTaskCard === columnId && (
          <TaskCreateCard
            value={inputValue}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        )}
      </div>

      <div>
        <button
          onClick={() => setShowCreateTaskCard(columnId)}
          className="block py-2 px-4 text-md text-gray-800 hover:bg-gray-200 w-4/5 text-left flex items-center rounded-md m-2 justify-start "
        >
          <RxPlus
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />{' '}
          Add a card
        </button>
      </div>
    </Card>
  )
}

export default Column
