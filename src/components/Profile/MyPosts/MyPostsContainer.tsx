import React from 'react'
import { addPostAC, updatePostTextAC } from '../../../redux/profileReducer'
import { ActionType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

export type MyPostsPropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  dispatch: (action: ActionType) => void
}

export type PostElementType = {
  id: number
  message: string
}

//
// -----MyPosts component start
//
export function MyPostsContainer (props: MyPostsPropsType) {
  //---BLL

  let onAddPost = (newText: string) => {
    props.dispatch(addPostAC(newText))
  }

  let onPostChange = (newText: string) => {
    let action = updatePostTextAC(newText)
    props.dispatch(action)
  }

  //---UI
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      newPostText={props.newPostText}
      postsData={props.postsData}
    />
  )
}
