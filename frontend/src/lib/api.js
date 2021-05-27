import axios from 'axios'

const baseUrl = '/api'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}