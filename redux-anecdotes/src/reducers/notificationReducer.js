import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    newMessage(state, action) {
      console.log('newMessage')
      state.push(action.payload)
      // return action.payload
    },
    shiftMessage(state, action) {
      console.log('shiftMessage')
      state.shift()
    }
  }
})

export const { newMessage, shiftMessage } = notificationSlice.actions
export default notificationSlice.reducer