import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'd52e5e5f-6327-49fb-8ea2-f645f4b200f7' }
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
