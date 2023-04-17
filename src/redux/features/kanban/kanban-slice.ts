import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBoardColumn, ISection, ITask } from '../../../interfaces'

interface IBoardState {
  columns: {
    [x: string]: IBoardColumn
  }
}

const initialState: IBoardState = {
  columns: {}
}

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    buildKanbanBoard: (state, action: PayloadAction<ISection[]>) => {
      const columns: {
        [x: string]: IBoardColumn
      } = {}
      const sections = action.payload
      for (let section of sections) {
        const column: IBoardColumn = { ...section, tasks: [] }
        columns[section._id] = column
      }
      state.columns = columns
    },
    addTasksToBoardCollumns: (state, action: PayloadAction<ITask[]>) => {
      const columns: {
        [x: string]: IBoardColumn
      } = {}
      Object.entries(state.columns).forEach(([columnId, column]) => {
        const tasks = action.payload
        const columnTasks = tasks.filter(
          (task) => task.section && task.section._id === columnId
        )
        columns[columnId] = {
          ...column,
          tasks: columnTasks
        }
      })
      state.columns = columns
    },
    addTaskToCollumn: (state, action: PayloadAction<ITask>) => {
      const task = action.payload
      if (
        !state.columns[task.section._id].tasks.some((x) => x._id === task._id)
      )
        state.columns[task.section._id].tasks.push(task)
    },
    updateTaskInCollumn: (state, action: PayloadAction<ITask>) => {
      const task = action.payload
      const index = state.columns[task.section._id].tasks.findIndex(
        (el) => el._id === task._id
      )
      if (index >= 0) {
        state.columns[task.section._id].tasks[index] = task
      }
    },
    addColumnToBoard: (state, action: PayloadAction<ISection>) => {
      const section = action.payload
      state.columns[section._id] = {
        ...section,
        tasks: []
      }
    },
    removeTaskOnBoard: (state, action: PayloadAction<ITask>) => {
      const task = action.payload
      const sectionData = state.columns[task.section._id].tasks
      state.columns[task.section._id].tasks = sectionData.filter(
        (el) => el._id !== task._id
      )
    },
    removeColumnOnBoard: (state, action: PayloadAction<ISection>) => {
      const section = action.payload
      delete state.columns[section._id]
    },
    moveTaskOnBoard: (
      state,
      action: PayloadAction<{
        source: { droppableId: string; index: number }
        destination: { droppableId: string; index: number }
      }>
    ) => {
      if (
        action.payload.source.droppableId !==
        action.payload.destination.droppableId
      ) {
        const sourceColumn = state.columns[action.payload.source.droppableId]
        const destinationColumn =
          state.columns[action.payload.destination.droppableId]

        const sourceTasks = [...sourceColumn.tasks]
        const destinationTasks = [...destinationColumn.tasks]

        const [removed] = sourceTasks.splice(action.payload.source.index, 1)

        if (removed) {
          removed.section._id = action.payload.destination.droppableId
          destinationTasks.splice(action.payload.destination.index, 0, removed)
          state.columns[action.payload.source.droppableId] = {
            ...sourceColumn,
            tasks: sourceTasks
          }

          state.columns[action.payload.destination.droppableId] = {
            ...destinationColumn,
            tasks: destinationTasks
          }
        } else {
          const column = state.columns[action.payload.source.droppableId]
          const copiedItems = [...column.tasks]
          const [removed] = copiedItems.splice(action.payload.source.index, 1)
          if (removed) {
            copiedItems.splice(action.payload.destination.index, 0, removed)
            state.columns[action.payload.source.droppableId] = {
              ...column,
              tasks: copiedItems
            }
          }
        }
      }
    }
  }
})

export const {
  buildKanbanBoard,
  addColumnToBoard,
  addTasksToBoardCollumns,
  addTaskToCollumn,
  updateTaskInCollumn,
  moveTaskOnBoard,
  removeTaskOnBoard,
  removeColumnOnBoard
} = kanbanSlice.actions
export default kanbanSlice.reducer
