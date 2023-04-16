import { useEffect, useState } from 'react'
import './App.css'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { Column, Droppable } from './components/kanban'
import {
  EditTaskModal,
  PageLoading,
  TaskCard,
  TaskCreateCard
} from './components/ui'
import { useGetSectionsQuery } from './redux/features/sections/sections-slice'
import {
  useGetTasksQuery,
  useUpdateTaskMutation
} from './redux/features/tasks/tasks-slice'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import {
  addTasksToBoardCollumns,
  buildKanbanBoard,
  moveTaskOnBoard
} from './redux/features/kanban/kanban-slice'

function App() {
  const [openCreateTask, setOpenCreateTask] = useState<null | string>(null)
  const dispatch = useAppDispatch()
  const [updateTask, { isLoading: taskUpdateIsLoading }] =
    useUpdateTaskMutation()

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return
    const { source, destination } = result
    dispatch(moveTaskOnBoard({ source, destination }))
    await updateTask({
      id: result.draggableId,
      section: destination.droppableId
    })
  }

  const { data: sections, isLoading: sectionsLoading } = useGetSectionsQuery('')
  const { data: tasks, isLoading: tasksLoading } = useGetTasksQuery('')
  const { columns } = useAppSelector((state) => state.kanban)

  useEffect(() => {
    if (sections) dispatch(buildKanbanBoard(sections))
    if (sections && tasks) dispatch(addTasksToBoardCollumns(tasks))
  }, [sections, tasks])

  if (sectionsLoading) {
    return <PageLoading />
  }

  return (
    <div className="app p-8">
      <div className="flex items-start">
        <DragDropContext onDragEnd={handleDragEnd}>
          {Object.entries(columns).map(([columnId, column], index) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <Column
                  {...provided.droppableProps}
                  innerRef={provided.innerRef}
                  title={column.title}
                >
                  {column.tasks &&
                    column.tasks.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id}
                        index={index}
                      >
                        {(provided) => (
                          <TaskCard
                            innerRef={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            task={item}
                          />
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </Column>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      <EditTaskModal />
    </div>
  )
}

export default App
