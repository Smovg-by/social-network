import React from 'react'
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { addPost, AddPostType, updatePostTextType } from '../../redux/state'

type MyPostsPropsType = {
  postsData: Array<PostElementType>
  addPost: AddPostType
  newPostText: string
  updatePostText: updatePostTextType
}

type PostElementType = {
  id: number
  message: string
}

export function Profile (props: MyPostsPropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.postsData}
        addPost={addPost}
        newPostText={props.newPostText}
        updatePostText={props.updatePostText}
      />
    </div>
  )
}
