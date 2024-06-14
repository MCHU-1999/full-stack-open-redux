import { createAnecdote } from '../requests'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { NotificationContext } from './NotificationContext'


const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const newAnecMutation =  useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newOne) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], [...anecdotes, newOne])
      newNotification(`new anecdote created: '${newOne.content}'`)
    },
    onError: (error) => {
      newNotification(error.message, '  too short anecdote, must have length 5 or more')
    }
  })

  const context = useContext(NotificationContext)
  
  const newNotification = (noti) => {
    const dispatch = context[1]
    dispatch({ type: 'PUSH', payload: noti })
    setTimeout(() => {
      dispatch({ type: 'SHIFT', payload: undefined })
    }, 5000)
  }

  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
