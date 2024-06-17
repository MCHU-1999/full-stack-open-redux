import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

export const findByName = async (name) => {
  const response = await axios.get(`${baseUrl}/${name}`)

  return response.data
}