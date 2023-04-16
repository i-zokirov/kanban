import React from 'react'
import Card from '../Card/Card'
import { Task } from '../../../interfaces'
import Typography from '../Typography/Typography'
import IconButton from '../IconButton/IconButton'
import { RxPencil1 } from 'react-icons/rx'

interface TaskCardProps {
  innerRef: React.Ref<HTMLDivElement>
  task: Task
  [x: string]: any
}

const TaskCard: React.FC<TaskCardProps> = ({ children, task, ...rest }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="min-h-12 task-card-wrapper m-1"
      {...rest}
    >
      <div className="flex justify-between items-center">
        <Typography variant="body1"> {task.title}</Typography>
        <IconButton
          style={{ opacity: hover ? 100 : 0 }}
          className="transition-opacity duration-200 hover:opacity-100"
        >
          <RxPencil1 />
        </IconButton>
      </div>
      <Typography variant="subtitle1"> {task.description}</Typography>
    </Card>
  )
}

export default TaskCard
