import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterReducer'
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notifications: notificationReducer
  }
})

export default store