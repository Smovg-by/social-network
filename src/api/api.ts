import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '807bff66-91a3-4004-98d0-0f1b7c813e8f' }
})

export const getUsers = (currentPage: number, pageSize: number) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}

export const followUsers = (id: number) => {
  return instance.post(`follow/${id}`).then(response => response.data)
}

export const unFollowUsers = (id: number) => {
  return instance.delete(`follow/${id}`).then(response => response.data)
}

export const getProfileInfo = (userId: string) => {
  return instance.get(`profile/` + userId)
}
