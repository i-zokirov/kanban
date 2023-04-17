import React from 'react'
import Card from '../Card'

interface TaskCreateCardProps {
  className?: string
  style?: React.CSSProperties
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}
const TaskCreateCard: React.FC<TaskCreateCardProps> = ({
  style,
  value,
  onChange,
  onBlur,
  onKeyDown
}) => {
  return (
    <Card className={`min-h-12 task-card-wrapper m-1 ${style}`} style={style}>
      <div>
        <input
          type="text"
          placeholder="Start typing"
          autoFocus={true}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className="border-none w-full h-full focus:outline-none"
        />
      </div>
    </Card>
  )
}

export default TaskCreateCard
