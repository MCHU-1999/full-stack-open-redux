import { NotificationContext } from "./NotificationContext"
import { useContext } from "react"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    height: '50px',
    maxHeight: '50px',
    overflow: 'scroll',
  }

  const context = useContext(NotificationContext)
  const notification = context[0]

  return (
    <div style={style}>
      {notification.map((message, i) => <p key={i}>{message}</p>)}
    </div>
  )
}

export default Notification
