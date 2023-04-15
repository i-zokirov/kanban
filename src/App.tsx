import { useState } from 'react'
import './App.css'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { Column, Droppable } from './components/kanban'
import { TaskCard } from './components/ui'

interface Item {
  id: string
  content: string
}

const columns = ['Backlog', 'In Progress', 'Done']
function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 'item-1', content: 'Task 1' },
    { id: 'item-2', content: 'Task 2' },
    { id: 'item-3', content: 'Task 3' },
    { id: 'item-4', content: 'Task 4' }
  ])

  const handleDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <div className="container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="column-1">
          {(provided) => (
            <Column
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              title="Backlog"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <TaskCard
                      innerRef={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </TaskCard>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
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
  )
}

export default App
