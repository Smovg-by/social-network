import React from 'react'
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'

export type ProfilePropsType = {
  postsData: Array<PostElementType>
  addPost: (postMessage: string) => void
  newPostText: string
  updatePostText: (newText: string) => void
}

type PostElementType = {
  id: number
  message: string
}

export function Profile (props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.postsData}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updatePostText={props.updatePostText}
      />
    </div>
  )
}
