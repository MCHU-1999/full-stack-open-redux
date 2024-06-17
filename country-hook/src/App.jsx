import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { findByName } from './io'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      findByName(name)
      .then((result) => {
        // console.log(data)
        result.error ? setCountry({ found: false })
        : setCountry({
          name: result.name.common,
          capital: result.capital,
          population: result.population,
          flag: result.flags.png,
          found: true
        })
      })
    }
  }, [name])

  return country
}

const Country = ({ country }) => {
  console.log('country now: ', country)
  // console.log('country.found: ', country.found)
  if (!country) {
    return null
  }

  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.name} </h3>
      <div>capital {country.capital} </div>
      <div>population {country.population}</div> 
      <img src={country.flag} height='100' alt={`flag of ${country.name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App