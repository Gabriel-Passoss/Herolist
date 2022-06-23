import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://gateway.marvel.com'
})