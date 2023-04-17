import React from 'react'
import Card from '../Card'
import { ITask } from '../../../interfaces'
import Typography from '../Typography'
import IconButton from '../IconButton'
import { RxPencil1 } from 'react-icons/rx'
import { useAppDispatch } from '../../../redux/hooks'
import { openModal } from '../../../redux/features/modal/modal-slice'
import TaskCardModal from '../EditTaskModal'

interface TaskCardProps {
  innerRef: React.Ref<HTMLDivElement>
  task: ITask
  [x: string]: any
}

const TaskCard: React.FC<TaskCardProps> = ({ children, task, ...rest }) => {
  const [hover, setHover] = React.useState(false)

  const dispatch = useAppDispatch()
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    dispatch(openModal({ type: 'TaskCardModal', content: task }))
  }

  return (
    <React.Fragment>
      <Card
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="min-h-12 task-card-wrapper m-1"
        {...rest}
      >
        <div className="flex justify-between items-center">
          <Typography variant="body1"> {task.title}</Typography>
          <IconButton
            onClick={handleEdit}
            style={{ opacity: hover ? 100 : 0 }}
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <RxPencil1 />
          </IconButton>
        </div>
        <Typography variant="subtitle1"> {task.description}</Typography>
      </Card>
    </React.Fragment>
  )
}

export default TaskCard
