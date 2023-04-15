import React from 'react'
import { Card, Typography } from '../../ui'
import { IconButton } from '../../ui'
import { RxDotsHorizontal } from 'react-icons/rx'
import './Column.css'
interface ColumnProps {
  title: string
  children: React.ReactNode
  innerRef: React.Ref<HTMLDivElement>
  [x: string]: any
}

const Column: React.FC<ColumnProps> = ({
  title,
  children,
  innerRef,
  ...rest
}) => {
  const handleMenuClick = () => {}
  return (
    <div ref={innerRef} {...rest} className="column-wrapper min-h-400 w-96">
      <Card className="min-h-380 column">
        <div className="flex items-center justify-between p-3">
          <Typography variant="h5" className="font-normal">
            {title}
          </Typography>
          <IconButton onClick={handleMenuClick}>
            <RxDotsHorizontal />
          </IconButton>
        </div>

        {children}
      </Card>
    </div>
  )
}

export default Column
