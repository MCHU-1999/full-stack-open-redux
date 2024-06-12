import { createSlice, current } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(filter) {
      return {
        type: 'SET_FILTER',
        payload: filter,
      }
    }
  }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer