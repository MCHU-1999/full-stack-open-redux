import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'
import { newMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    const newOne = await anecdoteService.createOne(anecdote)
    console.log(newOne)
    dispatch(appendAnecdote(newOne))
    event.target.anecdote.value = ''
    dispatch(newMessage('An anecdote is created.'))
  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm