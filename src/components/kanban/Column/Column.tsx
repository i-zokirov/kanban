import React, { useState } from 'react'
import { Card, Menu, MenuItem, Typography } from '../../ui'
import { IconButton } from '../../ui'
import { RxDotsHorizontal, RxPlus } from 'react-icons/rx'
import './Column.css'

interface ColumnProps {
  title: string
  children: React.ReactNode
  innerRef: React.Ref<HTMLDivElement>
  [x: string]: any
}

const Column: React.FC<ColumnProps> = ({ title, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }
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
      </div>

      <div>
        <button className="block py-2 px-4 text-md text-gray-800 hover:bg-gray-200 w-4/5 text-left flex items-center rounded-md m-2 justify-start ">
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
