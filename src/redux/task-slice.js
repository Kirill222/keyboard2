import { createSlice } from '@reduxjs/toolkit'

// let task = 'I am a React Developer'
let task = 'aaaaaaaaaa'

let mapTask = task.split('').map((l) => {
  return { status: '', symbol: l }
})
mapTask[0].status = 'current'

const initialState = {
  task: mapTask,
  currentIndex: 0,
  currentCharCode: mapTask[0].symbol.charCodeAt(0),
  isCapital: undefined,
  isTimerStarted: false,
  progress: 0,
  accuracy: 0,
  correct: 0,
  incorrect: 0,
}

const taskSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    keyPress(state, action) {
      if (state.currentCharCode === action.payload) {
        state.task[state.currentIndex].status = 'hit'
        state.correct++
      } else {
        state.task[state.currentIndex].status = 'miss'
        state.incorrect++
      }

      if (state.correct === 0 && state.incorrect === 0) {
        state.accuracy = 0
      } else {
        let total = state.correct + state.incorrect
        state.accuracy = (state.correct * 100) / total
      }

      if (!state.isTimerStarted) {
        state.isTimerStarted = true
      }

      state.currentIndex++

      if (state.currentIndex === state.task.length) state.isTimerStarted = false

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
      state.correct = 0
      state.incorrect = 0
      state.accuracy = 0
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
