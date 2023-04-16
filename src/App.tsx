import { useEffect, useState } from 'react'
import './App.css'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { Column, Droppable } from './components/kanban'
import { TaskCard, TaskCreateCard } from './components/ui'
import { tasks } from './dummydata'
import { useGetSectionsQuery } from './redux/features/sections/sections-slice'
import { useGetTasksQuery } from './redux/features/tasks/tasks-slice'

interface Item {
  id: string
  content: string
}

function App() {
  const [openCreateTask, setOpenCreateTask] = useState<null | string>(null)
  const handleDragEnd = (result: DropResult) => {
    console.log(result)
  }

  const { data: sections, isLoading: sectionsLoading } = useGetSectionsQuery('')
  const { data: tasks, isLoading: tasksLoading } = useGetTasksQuery('')

  return (
    <div className="app p-8">
      <div className=" flex items-start">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="column-1">
            {(provided) => (
              <Column
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                title="Backlog"
              >
                {tasks.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
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
                <TaskCreateCard />
              </Column>
            )}
          </Droppable>
          <Droppable droppableId="column-2">
            {(provided) => (
              <Column
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                title="Backlog"
              >
                {provided.placeholder}
              </Column>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default App
