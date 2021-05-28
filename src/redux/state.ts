let rerenderEntireTree = (state: RootStateType) => {
  console.log('state has been changed')
}

export type Dialog = {
  id: number
  name: string
}

export type Messages = {
  id: number
  message: string
}

export type Posts = {
  id: number
  message: string
}

export type Friends = {
  id: number
  name: string
  avatar: string
}

export type RootStateType = {
  dialogsData: Array<Dialog>
  messagesData: Array<Messages>
  postsData: Array<Posts>
  sideBarData: Array<Friends>
  newPostText: string
}

export let state: RootStateType = {
  dialogsData: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' }
  ],

  messagesData: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'How is yor IT kamasutra?' },
    { id: 3, message: 'Yo!' }
  ],

  postsData: [
    { id: 1, message: 'Hi! How are you?' },
    { id: 2, message: 'It is my first post' },
    { id: 3, message: 'BlaBla' },
    { id: 4, message: 'Dada' }
  ],

  newPostText: 'it-kamasutra',

  sideBarData: [
    {
      id: 1,
      name: 'John',
      avatar:
        'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
    },
    {
      id: 2,
      name: 'Nick',
      avatar:
        'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
    },
    {
      id: 3,
      name: 'Ivan',
      avatar:
        'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
    }
  ]
}

export type AddPostType = (postMessage: string) => void

export let addPost: AddPostType = postMessage => {
  // alert(postMessage)
  let newPost = {
    id: 5,
    message: postMessage
    // likesCount: 0
  }
  state.postsData.unshift(newPost)
  state.newPostText = ''
  rerenderEntireTree(state)
}

export type updatePostTextType = (newText: string) => void

export let updatePostText: updatePostTextType = newText => {
  state.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer
}
