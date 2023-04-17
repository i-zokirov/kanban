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
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineArchive } from 'react-icons/hi'
import './Column.css'
import { useAddTaskMutation } from '../../../redux/features/tasks/tasks-slice'
import { useAppDispatch } from '../../../redux/hooks'
import {
  addTaskToCollumn,
  removeColumnOnBoard,
  updateColumnOnBoard
} from '../../../redux/features/kanban/kanban-slice'
import {
  useDeleteSectionMutation,
  useUpdateSectionMutation
} from '../../../redux/features/sections/sections-slice'

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
  const [openMenu, setOpenMenu] = useState(false)
  const [showCreateTaskCard, setShowCreateTaskCard] = useState<string | null>(
    null
  )
  const [showSectionTitleInput, setShowSectionTitleInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [sectionInputValue, setsectionInputValue] = useState(title)
  const [addTask, { data: createdTask }] = useAddTaskMutation()
  const [updateSection, { data: updatedSection }] = useUpdateSectionMutation()
  const [deleteSection, { data: deletedSection }] = useDeleteSectionMutation()
  const dispatch = useAppDispatch()

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }
  const handleSectionInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setsectionInputValue(e.target.value)
  }
  const handleSectionInputBlur: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (sectionInputValue && sectionInputValue !== title) {
      updateSection({ id: columnId, title: sectionInputValue })
    }
    setShowSectionTitleInput(false)
  }
  const handleInputBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputValue) {
      handleCreateTask()
    }
    setShowCreateTaskCard(null)
  }
  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleCreateTask = async () => {
    const task = { title: inputValue, section: columnId }
    await addTask(task)
    setInputValue('')
    setShowCreateTaskCard(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      handleCreateTask()
    }
  }
  const handleSectionInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && sectionInputValue && sectionInputValue !== title) {
      updateSection({ id: columnId, title: sectionInputValue })
      setShowSectionTitleInput(false)
    }
  }

  const handleDelete = () => {
    setOpenMenu(false)
    deleteSection(columnId)
  }

  const handleEdit = () => {
    setShowSectionTitleInput(true)
    setOpenMenu(false)
  }
  useEffect(() => {
    if (createdTask) {
      dispatch(addTaskToCollumn(createdTask))
    }
    if (deletedSection) {
      dispatch(removeColumnOnBoard(deletedSection))
    }
    if (updatedSection) {
      dispatch(updateColumnOnBoard(updatedSection))
    }
  }, [createdTask, deletedSection, updatedSection])

  return (
    <Card
      className={`mx-2 column ${className}`}
      style={{ backgroundColor: '#f7f8f9', width: '300px' }}
      {...rest}
    >
      <div className="flex items-center justify-between p-3 ">
        {showSectionTitleInput ? (
          <div>
            <input
              type="text"
              placeholder="Start typing"
              autoFocus={true}
              value={sectionInputValue}
              onChange={handleSectionInputChange}
              onBlur={handleSectionInputBlur}
              onKeyDown={handleSectionInputKeyDown}
              className="border-none w-full h-full focus:outline-none p-2 rounded-md bg-gray-300 w-full text-gray-700"
            />
          </div>
        ) : (
          <Typography variant="h5" className="font-normal">
            {title}
          </Typography>
        )}

        <Menu
          anchorElement={
            <IconButton onClick={handleMenuClick}>
              <RxDotsHorizontal />
            </IconButton>
          }
          isOpen={openMenu}
          setIsOpen={setOpenMenu}
        >
          <MenuItem onClick={handleEdit}>
            <AiOutlineEdit style={{ marginRight: '10px' }} /> Edit section
          </MenuItem>
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
            onKeyDown={handleKeyDown}
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
