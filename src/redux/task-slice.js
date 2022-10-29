import { createSlice } from '@reduxjs/toolkit'

let task = 'I am a React Developer'
let mapTask = task.split('').map((l) => {
  return { status: '', symbol: l }
})
mapTask[0].status = 'current'

const initialState = {
  task: mapTask,
  currentIndex: 0,
  currentCharCode: mapTask[0].symbol.charCodeAt(0),
  isCapital: undefined,
}

const taskSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    keyPress(state, action) {
      if (state.currentCharCode === action.payload) {
        state.task[state.currentIndex].status = 'hit'
      } else {
        state.task[state.currentIndex].status = 'miss'
      }

      state.currentIndex++

      if (state.currentIndex > state.task.length - 1) {
        return
      }

      state.task[state.currentIndex].status = 'current'
      state.currentCharCode =
        state.task[state.currentIndex].symbol.charCodeAt(0)

      if (state.currentCharCode >= 65 && state.currentCharCode <= 90) {
        state.isCapital = true
      } else {
        state.isCapital = false
      }
    },

    reset(state) {
      state.task = initialState.task
      state.currentIndex = 0
      state.currentCharCode = initialState.currentCharCode
      if (state.currentCharCode >= 65 && state.currentCharCode <= 90) {
        state.isCapital = true
      } else {
        state.isCapital = false
      }
    },
    isCapital(state, action) {
      state.isCapital = action.payload
    },
  },
})

export const taskActions = taskSlice.actions

export default taskSlice.reducer
