import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = newBlog => {
  const config = {
    headers: { Authorization: token }
  }
  return axios.post(baseUrl, newBlog, config)
}

export default { 
  getAll,
  setToken,
  createBlog
}