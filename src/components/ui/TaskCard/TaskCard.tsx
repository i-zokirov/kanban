import React from 'react'
import Card from '../Card/Card'
import { Task } from '../../../interfaces'
import Typography from '../Typography/Typography'

interface TaskCardProps {
  innerRef: React.Ref<HTMLDivElement>

  task: Task
  [x: string]: any
}

const TaskCard: React.FC<TaskCardProps> = ({
  children,
  innerRef,
  task,
  ...rest
}) => {
  return (
    <div className="task-card-wrapper m-1" ref={innerRef} {...rest}>
      <Card className="h-12">
        <Typography variant="body1"> {task.title} </Typography>
      </Card>
    </div>
  )
}

export default TaskCard
