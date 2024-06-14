import { useContext, useReducer, createContext } from "react"

const notificationReducer = (state=[], action) => {
  switch (action.type) {
    case 'PUSH':
      return state.concat(action.payload)
    case 'SHIFT':
      return [...state].slice(1, undefined)
    default:
      return state
  }
}

export const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, [])

  return (
    <NotificationContext.Provider value={ [notification, notificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}

// export const useNotificationValue = () => {
//   const context = useContext(NotificationContext)
//   return context[0]
// }

// export const useNotificationDispatch = () => {
//   const context = useContext(NotificationContext)
//   return context[1]
// }