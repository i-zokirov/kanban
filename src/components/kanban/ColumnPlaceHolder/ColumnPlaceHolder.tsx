import React, { useEffect } from 'react'
import { RxPlus } from 'react-icons/rx'
import { Card } from '../../ui'
import { useAddSectionMutation } from '../../../redux/features/sections/sections-slice'
import { useAppDispatch } from '../../../redux/hooks'
import { addColumnToBoard } from '../../../redux/features/kanban/kanban-slice'

const ColumnPlaceHolder = () => {
  const [showInput, setShowInput] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [addSection, { data: createdSection }] = useAddSectionMutation()
  const dispatch = useAppDispatch()
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputValue) {
      addSection({ title: inputValue })
      setInputValue('')
      setShowInput(false)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      addSection({ title: inputValue })
      setInputValue('')
      setShowInput(false)
    }
  }
  useEffect(() => {
    if (createdSection) {
      setShowInput(false)
      dispatch(addColumnToBoard(createdSection))
    }
  }, [createdSection])
  const handleAddSection = () => {
    setShowInput(true)
  }

  if (showInput) {
    return (
      <Card style={{ width: '300px' }} className="ml-1 flex-shrink-0">
        <div>
          <input
            type="text"
            placeholder="Start typing..."
            autoFocus={true}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="border-none w-full h-full focus:outline-none"
            onKeyDown={handleKeyDown}
          />
        </div>
      </Card>
    )
  }
  return (
    <button
      onClick={handleAddSection}
      className="w-60 flex items-center  border-2 border-gray-400 rounded-md py-4 px-5 mb-2 bg-gray-300 opacity-80 hover:bg-white transition-all"
    >
      <RxPlus style={{ width: '20px', height: '20px', marginRight: '8px' }} />{' '}
      Add another section
    </button>
  )
}

export default ColumnPlaceHolder
