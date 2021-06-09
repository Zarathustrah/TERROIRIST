import axios from 'axios'

const baseUrl = '/api'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWine = id => {
  return axios.get(`${baseUrl}/wines/${id}`)
}