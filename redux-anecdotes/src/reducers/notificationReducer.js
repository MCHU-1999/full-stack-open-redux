import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    newMessage(state, action) {
      console.log('newMessage')
      state.push(action.payload)
    },
    shiftMessage(state, action) {
      console.log('shiftMessage')
      state.shift()
    }
  }
})

export const newNoti = (message, seconds) => {
  return async (dispatch) => {
    dispatch(newMessage(message))
    setTimeout(() => {
      dispatch(shiftMessage())
    }, seconds*1000)
  }
}

export const { newMessage, shiftMessage } = notificationSlice.actions
export default notificationSlice.reducer