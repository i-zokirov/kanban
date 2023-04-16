import React, { useEffect, useState } from 'react'
import { Card, Menu, MenuItem, TaskCreateCard, Typography } from '../../ui'
import { IconButton } from '../../ui'
import { RxDotsHorizontal, RxPlus } from 'react-icons/rx'
import './Column.css'
import { useAddTaskMutation } from '../../../redux/features/tasks/tasks-slice'
import { useAppDispatch } from '../../../redux/hooks'
import { addTaskToCollumn } from '../../../redux/features/kanban/kanban-slice'

interface ColumnProps {
  title: string
  children: React.ReactNode
  innerRef: React.Ref<HTMLDivElement>
  [x: string]: any
}

const Column: React.FC<ColumnProps> = ({ title, children, ...rest }) => {
  const dropableProps = { ...rest }
  const columnId = dropableProps['data-rbd-droppable-id']
  const [isOpen, setIsOpen] = useState(false)
  const [showCreateTaskCard, setShowCreateTaskCard] = useState<string | null>(
    null
  )
  const [inputValue, setInputValue] = useState('')
  const [addTask, { data: createdTask }] = useAddTaskMutation()
  const dispatch = useAppDispatch()
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputValue) {
      handleCreateTask()
    }
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

  useEffect(() => {
    if (createdTask) {
      dispatch(addTaskToCollumn(createdTask))
    }
  }, [createdTask])
  return (
    <Card
      className="min-h-400 max-h-90vh w-96 mx-2 column "
      style={{ backgroundColor: '#f7f8f9' }}
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
          <MenuItem> Menu item 1</MenuItem>
          <MenuItem> Menu item 1</MenuItem>
          <MenuItem> Menu item 1</MenuItem>
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
