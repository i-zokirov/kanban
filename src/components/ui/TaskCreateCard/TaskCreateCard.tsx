import React from 'react'
import Card from '../Card'

interface TaskCreateCardProps {
  className?: string
  style?: React.CSSProperties
}
const TaskCreateCard: React.FC<TaskCreateCardProps> = ({ style }) => {
  return (
    <Card className={`min-h-12 task-card-wrapper m-1 ${style}`} style={style}>
      <div>
        <input
          type="text"
          placeholder="Start typing"
          autoFocus={true}
          className="border-none w-full h-full focus:outline-none"
        />
      </div>
    </Card>
  )
}

export default TaskCreateCard
