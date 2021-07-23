import axios from 'axios'
import { UserType } from '../redux/usersReducer'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '529ae99f-10c2-4c69-896d-880d16566f14' }
})

type userAPIType = {
  getUsers: (currentPage: number, pageSize: number) => Promise<getUsersResponseType>
  followUsers: (id: number) => Promise<followUsersResponseType>
  unFollowUsers: (id: number) => Promise<unFollowUsersResponseType>
  getProfileInfo: (userId: string) => Promise<getProfileInfoResponseType>

}

type authAPIType = {
  me: () => Promise<any>
}

type getUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
type followUsersResponseType = {
  resultCode: number
  messages: string
  data: any | null
}
type unFollowUsersResponseType = {
  resultCode: number
  messages: string
  data: any | null
}
type getProfileInfoResponseType = {
  data: {
    aboutMe: string
    contacts: {
      facebook: string | null
      github: string | null
      instagram: string | null
      mainLink: string | null
      twitter: string | null
      vk: string | null
      website: string | null
      youtube: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
      small: string
      large: string
    }
    userId: number
  }
}

export const userAPI: userAPIType = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  followUsers(id: number) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },

  unFollowUsers(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },

  getProfileInfo(userId: string) {
    return instance.get(`profile/` + userId)
  },

}

export const authAPI: authAPIType = {
  me() {
    return instance.get(`auth/me`)
  },
}
