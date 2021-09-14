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
}
type profileAPIType = {
  getProfileInfo: (userId: string) => Promise<getProfileInfoResponseType>
  getStatus: (userId: string) => Promise<string | null>
  updateStatus: (status: string) => Promise<updateStatusResponseType>
}

type updateStatusResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

type authAPIType = {
  me: () => Promise<any>
  logIn: (email: string, password: string, rememberMe: boolean) => Promise<any>
  logOut: () => Promise<any>
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
//
// userAPI
//
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
}
//
// profileAPI
//
export const profileAPI: profileAPIType = {
  getProfileInfo(userId: string) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/` + userId).then(response => response.data)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status })
  }
}
//
// authAPI
//
export const authAPI: authAPIType = {
  me() {
    return instance.get(`auth/me`)
  },

  logIn(email: string, password: string, rememberMe: boolean) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },

  logOut() {
    return instance.delete(`auth/login`)
  },
}
