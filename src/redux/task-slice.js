import { createSlice } from '@reduxjs/toolkit'

let task = 'i am a React Developer'
let mapTask = task.split('').map((l) => {
  return { status: '', symbol: l }
})
mapTask[0].status = 'current'

const initialState = {
  task: mapTask,
  currentIndex: 0,
  currentCharCode: mapTask[0].symbol.charCodeAt(0),
}

const taskSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    increaseCurrentIndex(state, action) {
      if (state.currentCharCode === action.payload) {
        state.task[state.currentIndex].status = 'hit'
      } else {
        state.task[state.currentIndex].status = 'miss'
      }

      state.currentIndex++
      state.task[state.currentIndex].status = 'current'
      state.currentCharCode =
        state.task[state.currentIndex].symbol.charCodeAt(0)
    },
  },
})

export const taskActions = taskSlice.actions

export default taskSlice.reducer
