import { configureStore } from 'redux'
import filterReducer from './filterReducer'
import anecdoteReducer from './anecdoteReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

export default store