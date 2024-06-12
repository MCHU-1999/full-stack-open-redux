import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { shiftMessage } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    height: '50px',
    maxHeight: '50px',
    overflow: 'scroll',
  }

  useEffect(() => {
    if (notification.length !== 0) {
      setTimeout(() => {
        dispatch(shiftMessage())
      }, 5000)
    }
  }, [notification])

  return (
    <div style={style}>
      {notification.map((message, i) => <p key={i}>{message}</p>)}
    </div>
  )
}

export default Notification