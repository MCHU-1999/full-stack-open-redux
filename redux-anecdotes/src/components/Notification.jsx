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
    minHeight: '22.5px'
  }

  useEffect(() => {
    if (notification.length !== 0) {
      setTimeout(() => {
        dispatch(shiftMessage())
      }, 2500)
    }
  }, [notification])

  return (
    <div style={style}>
      {notification.map(message => <>{message}   </>)}
    </div>
  )
}

export default Notification