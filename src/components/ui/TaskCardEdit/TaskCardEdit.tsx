import React from 'react'
import Card from '../Card/Card'
import { Task } from '../../../interfaces'
import Typography from '../Typography/Typography'
import IconButton from '../IconButton/IconButton'
import { RxPencil1 } from 'react-icons/rx'

interface TaskCardEditProps {
  innerRef: React.Ref<HTMLDivElement>
  task: Task
  [x: string]: any
}

const TaskCardEdit: React.FC<TaskCardEditProps> = ({
  children,
  task,
  ...rest
}) => {
  return (
    <Card className="min-h-12 task-card-wrapper m-1" {...rest}>
      <div className="flex justify-between items-center">
        <Typography variant="body1"> {task.title}</Typography>
      </div>
      <Typography variant="subtitle1"> {task.description}</Typography>
    </Card>
  )
}

export default TaskCardEdit
