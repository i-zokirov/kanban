import { useState } from 'react'
import './App.css'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { Column, Droppable } from './components/kanban'
import { Modal, TaskCard } from './components/ui'
import { tasks } from './dummydata'

interface Item {
  id: string
  content: string
}

const columns = ['Backlog', 'In Progress', 'Done']
function App() {
  const handleDragEnd = (result: DropResult) => {
    console.log(result)
  }

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
