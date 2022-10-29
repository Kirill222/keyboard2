import { configureStore } from '@reduxjs/toolkit'
import keysReducer from './keys-slice'
import taskReducer from './task-slice'

const store = configureStore({
  reducer: {
    task: taskReducer,
    keys: keysReducer,
  },
})

export default store
