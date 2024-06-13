import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updated) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.map(value => 
        value.id === updated.id ? updated : value
      ))
    }
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    updateMutation.mutate({
      ...anecdote,
      votes: anecdote.votes +1
    })
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1,
  })

  if (result.isLoading) {
    return <p>data is loading</p>
  } else if (result.isError) {
    return <p>anecdote service not available due to problems in server</p>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
