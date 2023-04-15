import React from 'react'
import Card from '../Card/Card'
interface TaskCardProps {
  innerRef: React.Ref<HTMLDivElement>
  children: React.ReactNode
  [x: string]: any
}
const TaskCard: React.FC<TaskCardProps> = ({ children, innerRef, ...rest }) => {
  return (
    <div className="task-card-wrapper m-1" ref={innerRef} {...rest}>
      <Card className="h-12">{children}</Card>
    </div>
  )
}

export default TaskCard
