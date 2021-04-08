import axios from 'axios'

const baseUrl = "https://api.imgflip.com/"

export const getAllMemes = () => {
  return axios.get(`${baseUrl}/get_memes`)
}

export const getSingleMeme = id => {
  return axios.get(`${baseUrl}/get_memes/${id}`)
}